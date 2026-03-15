import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import { Button } from "@/components/ui/button";
import { Terminal, Zap, Lock, Code2 } from "lucide-react";

const endpoints = [
  {
    method: "GET",
    path: "/v2/signals/stream",
    desc: "Real-time signal stream via WebSocket. Supports filtering by asset class, signal type, and confidence threshold.",
    params: ["asset_class", "signal_type", "threshold", "format"],
  },
  {
    method: "GET",
    path: "/v2/signals/historical",
    desc: "Query historical signals with time-range filtering and pagination. Returns enriched metadata.",
    params: ["start", "end", "ticker", "limit", "cursor"],
  },
  {
    method: "POST",
    path: "/v2/analyze/sentiment",
    desc: "Submit text corpus for real-time sentiment analysis. Returns entity-level scores and event classifications.",
    params: ["corpus", "model", "granularity"],
  },
  {
    method: "GET",
    path: "/v2/geospatial/assets",
    desc: "Retrieve processed satellite intelligence for specific geographic coordinates and asset types.",
    params: ["lat", "lng", "radius_km", "asset_type"],
  },
  {
    method: "POST",
    path: "/v2/backtest/run",
    desc: "Execute a backtest against historical signal data with custom strategy parameters and risk constraints.",
    params: ["strategy_id", "start", "end", "capital", "risk_params"],
  },
  {
    method: "GET",
    path: "/v2/risk/exposure",
    desc: "Current portfolio risk metrics including VaR, CVaR, factor exposures, and correlation matrices.",
    params: ["portfolio_id", "horizon", "confidence"],
  },
];

const codeExamples = {
  websocket: `import { SieveClient } from "@sieve/sdk";

const client = new SieveClient({
  apiKey: process.env.SIEVE_API_KEY,
  region: "ldn-grw"
});

// Subscribe to high-confidence signals
const stream = client.signals.stream({
  types: ["GEOSPATIAL", "NLP", "MACRO"],
  threshold: 0.85,
  assets: ["COMMODITIES", "FX"],
  format: "DELTA"
});

stream.on("signal", (signal) => {
  console.log(\`[\${signal.timestamp}] \${signal.ticker}\`);
  console.log(\`  Direction: \${signal.direction}\`);
  console.log(\`  Confidence: \${signal.confidence}\`);
  
  if (signal.confidence > 0.92) {
    execute(signal);
  }
});

stream.on("regime_change", (regime) => {
  adjustRiskParams(regime);
});`,
  rest: `curl -X GET "https://api.sieve.capital/v2/signals/historical" \\
  -H "Authorization: Bearer $SIEVE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "start": "2026-03-01T00:00:00Z",
    "end": "2026-03-15T00:00:00Z",
    "ticker": "$BRENT",
    "signal_type": "GEOSPATIAL",
    "limit": 100
  }'

# Response
{
  "signals": [
    {
      "id": "sig_8f2a4b",
      "timestamp": "2026-03-14T14:23:01.442Z",
      "ticker": "$BRENT",
      "type": "GEOSPATIAL",
      "source": "SAR_PORT_ROTTERDAM",
      "direction": "LONG",
      "confidence": 0.94,
      "metadata": {
        "tanker_count_delta": "+12%",
        "congestion_index": 0.78
      }
    }
  ],
  "cursor": "cur_next_abc123"
}`,
};

const Api = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-4">
                API Reference
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-signal mb-4 max-w-2xl">
                Programmatic Access to Signal Intelligence
              </h1>
              <p className="text-dim text-base md:text-lg max-w-xl leading-relaxed">
                RESTful endpoints and WebSocket streams. Sub-millisecond delivery. 
                Enterprise-grade authentication and rate limiting.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button variant="cyber" size="sm">
                <Terminal className="w-3.5 h-3.5 mr-1" />
                Get API Key
              </Button>
              <Button variant="cyber-outline" size="sm">
                SDK Reference
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Zap, title: "WebSocket-First", desc: "Real-time streaming with automatic reconnection, backpressure handling, and delta compression." },
              { icon: Lock, title: "Enterprise Auth", desc: "API key + HMAC signature authentication. IP whitelisting, rate limiting, and scoped permissions." },
              { icon: Code2, title: "SDKs Available", desc: "Official SDKs for Python, TypeScript, Go, and Rust. Community libraries for Java and C++." },
            ].map((item) => (
              <div key={item.title} className="surface-glass rounded-lg p-5 flex items-start gap-3">
                <item.icon className="w-4 h-4 text-cyber mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-signal text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-dim text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-6">
            Endpoints
          </p>
          <div className="space-y-3">
            {endpoints.map((ep, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="surface-glass rounded-lg p-5 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                  <span className={`font-mono-data text-xs px-2 py-0.5 rounded border shrink-0 w-fit ${
                    ep.method === "GET"
                      ? "text-cyber border-cyber/30 bg-cyber/5"
                      : "text-foreground border-border bg-secondary"
                  }`}>
                    {ep.method}
                  </span>
                  <code className="font-mono-data text-sm text-signal">{ep.path}</code>
                </div>
                <p className="text-dim text-sm mb-3">{ep.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ep.params.map((p) => (
                    <span key={p} className="font-mono-data text-[10px] text-dim border border-border rounded px-2 py-0.5">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-6">
            Code Examples
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="surface-glass rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                <span className="w-2 h-2 rounded-full bg-cyber/60" />
                <span className="font-mono-data text-xs text-dim">WebSocket Stream — TypeScript</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="font-mono-data text-[11px] text-dim leading-relaxed whitespace-pre">
                  {codeExamples.websocket}
                </code>
              </pre>
            </div>
            <div className="surface-glass rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/60" />
                <span className="font-mono-data text-xs text-dim">REST Query — cURL</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="font-mono-data text-[11px] text-dim leading-relaxed whitespace-pre">
                  {codeExamples.rest}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default Api;
