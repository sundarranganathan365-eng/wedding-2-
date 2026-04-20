const FloatingLamps = () => {
  return (
    // Hidden on very small screens to reduce visual noise; visible from sm+ breakpoint
    <div className="fixed inset-0 pointer-events-none z-40 hidden sm:block">
      {/* Left lamp */}
      <div className="absolute left-3 sm:left-4 top-1/3 animate-lamp-sway" style={{ animationDelay: "0s" }}>
        <Deepam />
      </div>
      {/* Right lamp */}
      <div className="absolute right-3 sm:right-4 top-1/2 animate-lamp-sway" style={{ animationDelay: "1s" }}>
        <Deepam />
      </div>
    </div>
  );
};

const Deepam = () => (
  <div className="flex flex-col items-center opacity-40 sm:opacity-60">
    {/* Flame */}
    <div className="w-2.5 h-4 sm:w-3 sm:h-5 rounded-full animate-flame" 
      style={{ 
        background: "radial-gradient(ellipse at center, hsl(45,100%,70%), hsl(30,100%,50%), transparent)",
        boxShadow: "0 0 15px hsl(40,80%,50%,0.6), 0 0 30px hsl(40,80%,50%,0.3)"
      }} 
    />
    {/* Lamp body */}
    <svg width="20" height="14" viewBox="0 0 24 16" className="sm:w-6 sm:h-4">
      <path d="M4 0 C4 0 2 8 0 12 L24 12 C22 8 20 0 20 0 Z" fill="hsl(40,66%,48%)" opacity="0.8" />
      <ellipse cx="12" cy="12" rx="12" ry="4" fill="hsl(40,66%,38%)" opacity="0.9" />
    </svg>
  </div>
);

export default FloatingLamps;
