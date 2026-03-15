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
  { label: "Annualized Return", value: "34.2%", sub: "Net of fees" },
  { label: "Sharpe Ratio", value: "2.84", sub: "Since inception" },
  { label: "Max Drawdown", value: "-3.8%", sub: "Rolling 36 months" },
  { label: "Win Rate", value: "67.4%", sub: "Signal accuracy" },
  { label: "Sortino Ratio", value: "4.12", sub: "Downside risk adjusted" },
  { label: "Calmar Ratio", value: "9.0", sub: "Return / max drawdown" },
];

const PerformanceSection = () => {
  const maxVal = Math.max(...monthlyReturns.map((r) => Math.abs(r.value)));

  return (
    <section className="py-24 border-t border-border">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono-data text-cyber text-xs tracking-widest uppercase mb-3">
            Track Record
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-signal">
            Signal Performance Metrics
          </h2>
          <p className="text-dim text-sm mt-2 max-w-lg">
            Simulated performance based on live signal data. Past performance does not guarantee future results. 
            All figures are gross of transaction costs unless stated otherwise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Chart */}
          <div className="lg:col-span-7 surface-glass rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono-data text-xs text-dim">MONTHLY SIGNAL RETURNS — 2025</span>
              <span className="font-mono-data text-xs text-cyber">NET: +21.9%</span>
            </div>
            <div className="flex items-end gap-2 h-48">
              {monthlyReturns.map((r, i) => {
                const height = (Math.abs(r.value) / maxVal) * 100;
                const isPositive = r.value >= 0;
                return (
                  <motion.div
                    key={i}
                    className="flex-1 flex flex-col items-center gap-1"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    style={{ transformOrigin: "bottom" }}
                  >
                    <span className="font-mono-data text-[9px] text-dim">
                      {isPositive ? "+" : ""}{r.value}%
                    </span>
                    <div
                      className={`w-full rounded-sm ${isPositive ? "bg-cyber/60" : "bg-destructive/40"}`}
                      style={{ height: `${height}%`, minHeight: "4px" }}
                    />
                    <span className="font-mono-data text-[9px] text-dim">{r.month}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 surface-glass rounded-lg p-6">
            <span className="font-mono-data text-xs text-dim mb-6 block">KEY METRICS</span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {performanceStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono-data text-cyber text-xl">{stat.value}</p>
                  <p className="text-signal text-xs font-medium mt-0.5">{stat.label}</p>
                  <p className="text-dim text-[10px]">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="font-mono-data text-[9px] text-dim mt-6 max-w-2xl">
          DISCLAIMER: Simulated performance results have inherent limitations. No representation is being made 
          that any account will achieve similar profits or losses. Hypothetical trading does not involve financial 
          risk and cannot account for all factors affecting actual trading.
        </p>
      </div>
    </section>
  );
};

export default PerformanceSection;
