import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  speed: number;
  char: string;
  activated: boolean;
  opacity: number;
  ticker: string;
}

const TICKERS = ["$BRENT", "$TSLA", "$CNY", "$XAU", "$SPY", "$ETH", "$BTC", "$NVDA", "$EUR", "$JPY"];
const HEX_CHARS = "0123456789ABCDEF";

function randomHex(): string {
  let s = "0x";
  for (let i = 0; i < 4; i++) s += HEX_CHARS[Math.floor(Math.random() * 16)];
  return s;
}

const DataSieveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;
    const lensY = () => h() * 0.5;

    // Init particles
    for (let i = 0; i < 60; i++) {
      particlesRef.current.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        speed: 0.3 + Math.random() * 0.7,
        char: randomHex(),
        activated: false,
        opacity: 0.15 + Math.random() * 0.25,
        ticker: TICKERS[Math.floor(Math.random() * TICKERS.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      const ly = lensY();

      // Draw lens line
      ctx.strokeStyle = "rgba(0, 255, 65, 0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, ly);
      ctx.lineTo(w(), ly);
      ctx.stroke();

      // Lens glow
      const grad = ctx.createLinearGradient(0, ly - 30, 0, ly + 30);
      grad.addColorStop(0, "rgba(0,255,65,0)");
      grad.addColorStop(0.5, "rgba(0,255,65,0.03)");
      grad.addColorStop(1, "rgba(0,255,65,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, ly - 30, w(), 60);

      particlesRef.current.forEach((p) => {
        p.y += p.speed;

        // Check if passing through lens
        const distToLens = Math.abs(p.y - ly);
        if (distToLens < 20 && !p.activated) {
          p.activated = true;
          p.char = p.ticker;
          p.opacity = 1;
        }

        if (p.y > h() + 20) {
          p.y = -20;
          p.x = Math.random() * w();
          p.activated = false;
          p.char = randomHex();
          p.opacity = 0.15 + Math.random() * 0.25;
          p.ticker = TICKERS[Math.floor(Math.random() * TICKERS.length)];
        }

        // Draw
        if (p.activated) {
          ctx.font = "11px 'JetBrains Mono', monospace";
          ctx.fillStyle = `rgba(0, 255, 65, ${p.opacity})`;
          // Fade after activation
          p.opacity = Math.max(0.3, p.opacity - 0.003);
        } else {
          ctx.font = "10px 'JetBrains Mono', monospace";
          ctx.fillStyle = `rgba(248, 250, 252, ${p.opacity})`;
        }
        ctx.fillText(p.char, p.x, p.y);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
};

export default DataSieveCanvas;
