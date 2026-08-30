// Authentication helper for cron requests using Web Crypto API

export async function authenticateCronRequest(
  request: Request,
): Promise<Response | null> {
  const getEnv = (key: string): string | undefined => {
    const globalObj = globalThis as Record<string, any>;
    if (globalObj.process?.env) {
      return globalObj.process.env[key];
    }
    if (globalObj.Deno?.env) {
      return globalObj.Deno.env.get(key);
    }
    return undefined;
  };

  const currentSecret = getEnv("CRON_SECRET");
  const previousSecret = getEnv("CRON_SECRET_PREVIOUS");

  if (!currentSecret) {
    return new Response("Server configuration error", { status: 500 });
  }

  const match = /^Bearer ([^\s,]+)$/.exec(
    request.headers.get("authorization") ?? "",
  );
  const token = match?.[1];
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const digest = async (value: string): Promise<ArrayBuffer> => {
    const encoder = new TextEncoder();
    return await crypto.subtle.digest("SHA-256", encoder.encode(value));
  };

  const timingSafeEqual = (a: ArrayBuffer, b: ArrayBuffer): boolean => {
    if (a.byteLength !== b.byteLength) return false;
    const viewA = new Uint8Array(a);
    const viewB = new Uint8Array(b);
    let result = 0;
    for (let i = 0; i < viewA.length; i++) {
      result |= viewA[i] ^ viewB[i];
    }
    return result === 0;
  };

  const providedDigest = await digest(token);
  const currentDigest = await digest(currentSecret);
  const previousDigest = await digest(previousSecret ?? currentSecret);

  const currentMatches = timingSafeEqual(providedDigest, currentDigest);
  const previousMatches = timingSafeEqual(providedDigest, previousDigest);

  if (!currentMatches && !previousMatches) {
    return new Response("Unauthorized", { status: 401 });
  }

  return null;
}
