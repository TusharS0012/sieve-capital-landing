import { useEffect, useRef, useState } from "react";

interface Signal {
  id: number;
  timestamp: string;
  asset: string;
  source: string;
  message: string;
  direction: "Long" | "Short" | "Neutral";
  confidence: string;
}

const SIGNALS: Omit<Signal, "id" | "timestamp">[] = [
  { asset: "BRENT", source: "Geospatial", message: "Port of Rotterdam tanker count +12%", direction: "Long", confidence: "0.94" },
  { asset: "XAU", source: "Sentiment", message: "Bullish divergence across newswire corpus", direction: "Long", confidence: "0.88" },
  { asset: "US 2Y", source: "Macro", message: "Fed funds futures imply 78.4% cut probability", direction: "Long", confidence: "0.81" },
  { asset: "TSLA", source: "Language", message: "Earnings call signals margin expansion", direction: "Long", confidence: "0.92" },
  { asset: "SPY", source: "Volatility", message: "Zero-day skew indicates elevated tail risk", direction: "Short", confidence: "0.76" },
  { asset: "CNY", source: "Macro", message: "China PMI proxy indicates contraction at 48.2", direction: "Short", confidence: "0.73" },
  { asset: "ETH", source: "Sentiment", message: "Accumulation cluster detected in social corpus", direction: "Long", confidence: "0.76" },
  { asset: "NVDA", source: "Microstructure", message: "Dark pool block of 2.4M shares at $142.80", direction: "Neutral", confidence: "0.68" },
  { asset: "WTI", source: "Geospatial", message: "Cushing thermal imagery implies -3.2M bbl", direction: "Long", confidence: "0.89" },
  { asset: "EUR/USD", source: "Language", message: "ECB commentary reads hawkish versus consensus", direction: "Short", confidence: "0.84" },
];

function getTimestamp(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

const LiveSignalFeed = () => {
  const [signals, setSignals] = useState<Signal[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    setSignals(
      Array.from({ length: 6 }, (_, i) => ({
        ...SIGNALS[i % SIGNALS.length],
        id: idRef.current++,
        timestamp: getTimestamp(),
      })),
    );

    const interval = setInterval(() => {
      const raw = SIGNALS[Math.floor(Math.random() * SIGNALS.length)];
      setSignals((prev) => [{ ...raw, id: idRef.current++, timestamp: getTimestamp() }, ...prev].slice(0, 6));
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="kicker mb-4">Signal feed</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
              A representative view of the intelligence stream
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-soft">Live · delayed sample</span>
          </div>
        </div>

        <div className="panel overflow-x-auto">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="border-b border-border text-left">
                {["Time", "Asset", "Source", "Observation", "View", "Confidence"].map((h) => (
                  <th key={h} className="px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-soft font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {signals.map((s) => (
                <tr key={s.id} className="border-b border-border last:border-0">
                  <td className="px-5 py-4 font-mono-data text-xs text-soft whitespace-nowrap">{s.timestamp}</td>
                  <td className="px-5 py-4 font-medium text-ink whitespace-nowrap">{s.asset}</td>
                  <td className="px-5 py-4 text-soft text-xs whitespace-nowrap">{s.source}</td>
                  <td className="px-5 py-4 text-soft">{s.message}</td>
                  <td className={`px-5 py-4 text-xs font-medium ${s.direction === "Short" ? "text-destructive" : s.direction === "Long" ? "text-bronze" : "text-soft"}`}>
                    {s.direction}
                  </td>
                  <td className="px-5 py-4 font-mono-data text-ink text-xs">{s.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-soft mt-4 max-w-2xl">
          Illustrative sample of engine output. Not investment advice and not a recommendation to
          transact in any security.
        </p>
      </div>
    </section>
  );
};

export default LiveSignalFeed;
