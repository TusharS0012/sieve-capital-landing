import { motion } from "framer-motion";

const monthlyReturns = [
  { month: "Jan", value: 2.4 },
  { month: "Feb", value: -0.8 },
  { month: "Mar", value: 3.1 },
  { month: "Apr", value: 1.7 },
  { month: "May", value: -1.2 },
  { month: "Jun", value: 4.6 },
  { month: "Jul", value: 2.1 },
  { month: "Aug", value: 0.9 },
  { month: "Sep", value: 3.8 },
  { month: "Oct", value: -0.3 },
  { month: "Nov", value: 2.7 },
  { month: "Dec", value: 1.9 },
];

const performanceStats = [
  { label: "Annualised return", value: "34.2%", sub: "Net of fees, STT & charges" },
  { label: "Sharpe ratio", value: "2.84", sub: "Since inception" },
  { label: "Maximum drawdown", value: "-3.8%", sub: "Rolling 36 months" },
  { label: "Win rate", value: "67.4%", sub: "Signal accuracy" },

  { label: "Sortino ratio", value: "4.12", sub: "Downside adjusted" },
  { label: "Calmar ratio", value: "9.0", sub: "Return / drawdown" },
];

const PerformanceSection = () => {
  const maxVal = Math.max(...monthlyReturns.map((r) => Math.abs(r.value)));

  return (
    <section className="py-20 md:py-28 border-t border-border bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="kicker mb-4">Track record</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-4">
            Signal performance metrics
          </h2>
          <p className="text-soft text-sm leading-relaxed">
            Simulated performance based on live signal data across NSE cash and F&O segments. Past
            performance does not guarantee future results. Figures are gross of transaction costs,
            STT and statutory levies unless stated otherwise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 panel p-6 md:p-8">
            <div className="flex items-baseline justify-between mb-8">
              <span className="text-[10px] uppercase tracking-[0.14em] text-soft font-semibold">
                Monthly signal returns — FY 2025-26
              </span>
              <span className="font-mono-data text-sm text-ink">Net +21.9%</span>
            </div>
            <div className="flex items-end gap-2 h-52 border-b border-border">
              {monthlyReturns.map((r, i) => {
                const height = (Math.abs(r.value) / maxVal) * 100;
                const isPositive = r.value >= 0;
                return (
                  <motion.div
                    key={i}
                    className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    <span className="font-mono-data text-[9px] text-soft">
                      {isPositive ? "+" : ""}{r.value}%
                    </span>
                    <div
                      className={isPositive ? "w-full bg-primary/85" : "w-full bg-destructive/60"}
                      style={{ height: `${height}%`, minHeight: "3px" }}
                    />
                  </motion.div>
                );
              })}
            </div>
            <div className="flex gap-2 mt-2">
              {monthlyReturns.map((r) => (
                <span key={r.month} className="flex-1 text-center font-mono-data text-[9px] text-soft">
                  {r.month}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 panel p-6 md:p-8">
            <span className="text-[10px] uppercase tracking-[0.14em] text-soft font-semibold block mb-6">
              Key metrics
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {performanceStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-ink font-mono-data">{stat.value}</p>
                  <p className="text-ink text-xs font-medium mt-1">{stat.label}</p>
                  <p className="text-soft text-[11px]">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-[11px] text-soft mt-6 max-w-3xl leading-relaxed">
          Disclaimer: simulated performance results have inherent limitations. No representation is
          being made that any account will achieve similar profits or losses. Hypothetical trading
          does not involve financial risk and cannot account for all factors affecting actual
          trading, including impact cost, circuit limits and expiry-day liquidity on Indian venues.
        </p>
      </div>
    </section>
  );
};

export default PerformanceSection;
