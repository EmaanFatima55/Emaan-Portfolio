export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 py-8 text-center">
      <p className="text-slate-300 text-sm">
        © {new Date().getFullYear()} Emaan Fatima. All Rights Reserved.
      </p>

      <p className="mt-2 text-xs tracking-wide text-slate-500 uppercase">
        Full Stack MERN Developer
      </p>
    </footer>
  );
}