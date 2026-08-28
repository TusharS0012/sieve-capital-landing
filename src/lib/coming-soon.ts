import { toast } from "sonner";

export function notifyComingSoon(feature?: string) {
  toast(feature ? `${feature} — coming soon` : "Coming soon", {
    description:
      "Sieve Capital is currently in the building stage. Once complete, this will be fully operational for business. Leave your email below and we'll notify you at launch.",
    duration: 5000,
  });
}
