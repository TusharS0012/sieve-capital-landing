import { motion } from "framer-motion";
import SieveNav from "@/components/SieveNav";
import SieveFooter from "@/components/SieveFooter";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const endpoints = [
  {
    method: "GET",
    path: "/v2/signals/stream",
    desc: "Real-time signal stream over WebSocket. Filter by segment (cash, F&O, currency, commodity), signal type and confidence threshold.",
    params: ["segment", "signal_type", "threshold", "format"],
  },
  {
    method: "GET",
    path: "/v2/signals/historical",
    desc: "Query historical signals for NSE and BSE symbols with time-range filtering, pagination and enriched metadata.",
    params: ["start", "end", "symbol", "exchange", "limit", "cursor"],
  },
  {
    method: "POST",
    path: "/v2/analyze/filings",
    desc: "Submit exchange filings, results transcripts or SEBI and RBI disclosures for entity-level sentiment and event classification. Supports English and Hindi.",
    params: ["corpus", "model", "language", "granularity"],
  },
  {
    method: "GET",
    path: "/v2/derivatives/positioning",
    desc: "Nifty, Bank Nifty and stock F&O positioning: open interest build-up, roll cost, PCR, IV skew and FII-DII derivatives activity.",
    params: ["underlying", "expiry", "strike_range", "metric"],
  },
  {
    method: "GET",
    path: "/v2/primary/ipo",
    desc: "Mainboard and SME IPO pipeline with DRHP tracking, subscription momentum by category, GMP proxy and listing-day risk estimates.",
    params: ["status", "board", "sector", "issue_size"],
  },
  {
    method: "GET",
    path: "/v2/geospatial/assets",
    desc: "Processed satellite intelligence over Indian ports, refineries, cement plants, mines and cropland for a given coordinate and asset type.",
    params: ["lat", "lng", "radius_km", "asset_type"],
  },
  {
    method: "POST",
    path: "/v2/backtest/run",
    desc: "Run a backtest against historical Indian signal data with custom strategy parameters, lot sizes and risk constraints.",
    params: ["strategy_id", "start", "end", "capital", "risk_params"],
  },
  {
    method: "GET",
    path: "/v2/risk/exposure",
    desc: "Portfolio risk metrics including VaR, CVaR, India VIX beta, sector exposure and margin utilisation under SEBI peak-margin rules.",
    params: ["portfolio_id", "horizon", "confidence"],
  },
];

const quickInfo = [
  {
    title: "WebSocket-first",
    desc: "Streaming with automatic reconnection, backpressure handling and delta compression, aligned to NSE and BSE session hours.",
  },
  {
    title: "Institutional authentication",
    desc: "API key with HMAC signature, IP whitelisting, scoped permissions and per-desk rate limits.",
  },
  {
    title: "SDKs available",
    desc: "Official SDKs for Python, TypeScript, Go and Rust, with adapters for common Indian OMS and RMS platforms.",
  },
];

const codeExamples = {
  websocket: `import { SieveClient } from "@sieve/sdk";

const client = new SieveClient({
  apiKey: process.env.SIEVE_API_KEY,
  region: "mum-nse"
});

// Subscribe to high-conviction Indian market signals
const stream = client.signals.stream({
  types: ["FILINGS", "GEOSPATIAL", "DERIVATIVES"],
  segments: ["NSE_CASH", "NSE_FO"],
  threshold: 0.85,
  format: "DELTA"
});

stream.on("signal", (signal) => {
  console.log(\`[\${signal.timestamp}] \${signal.symbol}\`);
  console.log(\`  Direction: \${signal.direction}\`);
  console.log(\`  Confidence: \${signal.confidence}\`);

  if (signal.confidence > 0.92) {
    execute(signal);
  }
});

stream.on("regime_change", (regime) => {
  adjustRiskParams(regime); // India VIX regime shift
});`,
  rest: `curl -X GET "https://api.sieve.capital/v2/signals/historical" \\
  -H "Authorization: Bearer $SIEVE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "start": "2026-03-01T09:15:00+05:30",
    "end": "2026-03-15T15:30:00+05:30",
    "symbol": "RELIANCE",
    "exchange": "NSE",
    "signal_type": "GEOSPATIAL",
    "limit": 100
  }'

# Response
{
  "signals": [
    {
      "id": "sig_8f2a4b",
      "timestamp": "2026-03-14T14:23:01.442+05:30",
      "symbol": "RELIANCE",
      "exchange": "NSE",
      "segment": "CASH",
      "type": "GEOSPATIAL",
      "source": "SAR_PORT_JAMNAGAR",
      "direction": "LONG",
      "confidence": 0.94,
      "metadata": {
        "tanker_count_delta": "+12%",
        "throughput_index": 0.78
      }
    }
  ],
  "cursor": "cur_next_abc123"
}`,
};

const limits = [
  { tier: "Research", rate: "60 req / min", streams: "2 concurrent", history: "3 years" },
  { tier: "Desk", rate: "600 req / min", streams: "10 concurrent", history: "10 years" },
  { tier: "Enterprise", rate: "Unmetered", streams: "Unlimited", history: "Full archive" },
];

const Api = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <PageHero
        kicker="API reference"
        title="Programmatic access to Indian market intelligence"
        intro="REST endpoints and WebSocket streams for NSE and BSE cash, F&O, currency, commodity and primary markets, with global macro context built in."
      />

      <section className="py-10 border-b border-border">
        <div className="container flex flex-wrap gap-3">
          <Button variant="cyber" size="sm" className="h-10 px-5 text-xs">
            Request API key
          </Button>
          <Button variant="cyber-outline" size="sm" className="h-10 px-5 text-xs">
            SDK reference
          </Button>
          <span className="font-mono-data text-[11px] text-soft self-center ml-auto">
            Base URL — https://api.sieve.capital · Region mum-nse
          </span>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {quickInfo.map((item) => (
              <div key={item.title} className="bg-paper-raised p-7">
                <h3 className="font-display text-xl text-ink mb-3">{item.title}</h3>
                <p className="text-soft text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-secondary/40">
        <div className="container">
          <p className="kicker mb-8">Endpoints</p>
          <div className="border-t border-border">
            {endpoints.map((ep, i) => (
              <motion.div
                key={ep.path}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-6 border-b border-border"
              >
                <div className="md:col-span-4 flex items-center gap-3">
                  <span className="font-mono-data text-[10px] tracking-[0.12em] text-bronze border border-border px-2 py-0.5">
                    {ep.method}
                  </span>
                  <code className="font-mono-data text-[13px] text-ink">{ep.path}</code>
                </div>
                <p className="md:col-span-5 text-soft text-sm leading-relaxed">{ep.desc}</p>
                <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                  {ep.params.map((p) => (
                    <span
                      key={p}
                      className="font-mono-data text-[10px] text-soft border border-border px-2 py-0.5"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container">
          <p className="kicker mb-8">Code examples</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            <div className="bg-paper-raised">
              <div className="px-5 py-3 border-b border-border">
                <span className="font-mono-data text-[11px] text-soft">
                  WebSocket stream — TypeScript
                </span>
              </div>
              <pre className="p-5 overflow-x-auto">
                <code className="font-mono-data text-[11px] text-soft leading-relaxed whitespace-pre">
                  {codeExamples.websocket}
                </code>
              </pre>
            </div>
            <div className="bg-paper-raised">
              <div className="px-5 py-3 border-b border-border">
                <span className="font-mono-data text-[11px] text-soft">REST query — cURL</span>
              </div>
              <pre className="p-5 overflow-x-auto">
                <code className="font-mono-data text-[11px] text-soft leading-relaxed whitespace-pre">
                  {codeExamples.rest}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-secondary/40">
        <div className="container">
          <p className="kicker mb-8">Rate limits</p>
          <div className="border-t border-border">
            <div className="grid grid-cols-4 gap-4 py-3 border-b border-border">
              {["Tier", "Request rate", "Streams", "History"].map((h) => (
                <span key={h} className="text-[10px] uppercase tracking-[0.14em] text-soft">
                  {h}
                </span>
              ))}
            </div>
            {limits.map((row) => (
              <div key={row.tier} className="grid grid-cols-4 gap-4 py-4 border-b border-border">
                <span className="text-ink text-sm font-medium">{row.tier}</span>
                <span className="font-mono-data text-sm text-soft">{row.rate}</span>
                <span className="font-mono-data text-sm text-soft">{row.streams}</span>
                <span className="font-mono-data text-sm text-soft">{row.history}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-soft mt-5">
            Streaming entitlements follow exchange data policy. NSE and BSE real-time redistribution
            requires an executed data agreement.
          </p>
        </div>
      </section>

      <SieveFooter />
    </div>
  );
};

export default Api;
