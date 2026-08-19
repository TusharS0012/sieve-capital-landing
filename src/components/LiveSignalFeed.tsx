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
  { asset: "NIFTY", source: "Derivatives", message: "Weekly OI shift: call writing unwound above 24,800", direction: "Long", confidence: "0.91" },
  { asset: "BANKNIFTY", source: "Flows", message: "FII index futures long ratio at 62.4%", direction: "Long", confidence: "0.87" },
  { asset: "RELIANCE", source: "Filings", message: "NSE announcement: retail arm capex revision", direction: "Long", confidence: "0.89" },
  { asset: "HDFCBANK", source: "Microstructure", message: "Block deal 42.6L shares on BSE at ₹1,684", direction: "Neutral", confidence: "0.71" },
  { asset: "TCS", source: "Language", message: "Earnings call reads cautious on BFSI discretionary", direction: "Short", confidence: "0.83" },
  { asset: "INDIA VIX", source: "Volatility", message: "Expiry-day skew implies elevated gamma risk", direction: "Short", confidence: "0.78" },
  { asset: "TATAMOTORS", source: "Macro", message: "Monthly wholesale dispatches beat consensus", direction: "Long", confidence: "0.86" },
  { asset: "IPO — SME", source: "Primary", message: "Grey market premium cooling on day-2 subscription", direction: "Short", confidence: "0.74" },
  { asset: "USD/INR", source: "Macro", message: "RBI intervention footprint detected near 87.20", direction: "Neutral", confidence: "0.80" },
  { asset: "SBIN", source: "Flows", message: "DII accumulation cluster across three sessions", direction: "Long", confidence: "0.85" },
  { asset: "GOLD (MCX)", source: "Global", message: "US CPI print lifts safe-haven bid into India open", direction: "Long", confidence: "0.82" },
  { asset: "INFY", source: "Global", message: "Nasdaq IT drawdown implies gap-down carry-over", direction: "Short", confidence: "0.79" },
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
              A representative view of the Indian market intelligence stream
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
          buy or sell any security. Securities investments are subject to market risks.
        </p>
      </div>
    </section>
  );
};

export default LiveSignalFeed;
