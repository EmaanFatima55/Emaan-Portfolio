export default function Background() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.025] blur-[180px]" />

      {/* Top Left */}
      <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-cyan-400/[0.015] blur-[150px]" />

      {/* Top Right */}
      <div className="absolute -top-32 -right-32 h-[450px] w-[450px] rounded-full bg-sky-400/[0.015] blur-[150px]" />

      {/* Bottom Left */}
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.012] blur-[180px]" />

      {/* Bottom Right */}
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-sky-400/[0.012] blur-[180px]" />

      {/* Very Soft Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}