import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Signal {
  id: number;
  timestamp: string;
  message: string;
  type: "satellite" | "sentiment" | "macro" | "volatility";
}

const SIGNALS: Omit<Signal, "id" | "timestamp">[] = [
  { message: "SATELLITE_IMG_DECODED: PORT_ROTTERDAM -> TANKER_COUNT +12%", type: "satellite" },
  { message: "SENTIMENT_SWEEP: $XAU -> BULLISH_DIVERGENCE (0.88)", type: "sentiment" },
  { message: "MACRO_SHIFT: FED_FUND_FUTURES -> RATE_CUT_PROB 78.4%", type: "macro" },
  { message: "SATELLITE DETECTED: PORT CONGESTION -> +2.4% VOLATILITY SIGNAL", type: "satellite" },
  { message: "NLP_EXTRACT: $TSLA EARNINGS_CALL -> MARGIN_EXPANSION (0.92)", type: "sentiment" },
  { message: "GEOSPATIAL: SUEZ_CANAL -> VESSEL_QUEUE 14 -> BRENT_LONG", type: "satellite" },
  { message: "VOL_SURFACE: $SPY 0DTE SKEW -> TAIL_RISK_ELEVATED (z=2.4)", type: "volatility" },
  { message: "ALT_DATA: CHINA_PMI_PROXY -> CONTRACTION_SIGNAL (48.2)", type: "macro" },
  { message: "SENTIMENT_CLUSTER: CRYPTO_TWITTER -> $ETH ACCUMULATION (0.76)", type: "sentiment" },
  { message: "DARK_POOL: $NVDA BLOCK_TRADE 2.4M SHARES @ $142.80", type: "volatility" },
  { message: "SAT_THERMAL: CUSHING_OK -> CRUDE_INVENTORY -3.2M BBL", type: "satellite" },
  { message: "NEWS_WIRE: ECB_LAGARDE -> HAWKISH_PIVOT -> EUR/USD SHORT", type: "macro" },
];

function getTimestamp(): string {
  const now = new Date();
  const ms = String(now.getMilliseconds()).padStart(2, "0").slice(0, 2);
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${ms}`;
}

const LiveSignalFeed = () => {
  const [signals, setSignals] = useState<Signal[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    // Initial signals
    const initial: Signal[] = [];
    for (let i = 0; i < 5; i++) {
      const raw = SIGNALS[i % SIGNALS.length];
      initial.push({ ...raw, id: idRef.current++, timestamp: getTimestamp() });
    }
    setSignals(initial);

    const interval = setInterval(() => {
      const raw = SIGNALS[Math.floor(Math.random() * SIGNALS.length)];
      const newSignal: Signal = { ...raw, id: idRef.current++, timestamp: getTimestamp() };
      setSignals((prev) => [newSignal, ...prev].slice(0, 12));
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-8">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-3">
            Live Signal Feed
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-signal">
            Real-Time Intelligence Stream
          </h2>
        </div>

        <div className="surface-glass rounded-lg overflow-hidden">
          {/* Header bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
              <span className="font-mono-data text-xs text-dim">SIEVE_TERMINAL v4.2.1</span>
            </div>
            <span className="font-mono-data text-xs text-dim">SIGNALS: {signals.length} ACTIVE</span>
          </div>

          {/* Feed */}
          <div className="h-[320px] overflow-hidden px-4 py-3">
            <AnimatePresence initial={false}>
              {signals.map((signal) => (
                <motion.div
                  key={signal.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="py-1.5 font-mono-data text-xs md:text-sm flex gap-2 border-b border-border/30 last:border-0"
                >
                  <span className="text-dim shrink-0">[{signal.timestamp}]</span>
                  <span className={signal.type === "satellite" ? "text-cyber" : signal.type === "sentiment" ? "text-foreground" : signal.type === "macro" ? "text-muted-foreground" : "text-cyber/70"}>
                    {signal.message}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSignalFeed;
