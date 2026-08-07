export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 py-5 px-6 text-center">
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} Emaan Fatima. All Rights Reserved.
      </p>

      <p className="mt-1 text-xs tracking-wide text-slate-500 uppercase">
        Full Stack MERN Developer
      </p>
    </footer>
  );
}