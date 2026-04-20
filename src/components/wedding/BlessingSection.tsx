const BlessingSection = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
        <div className="reveal-on-scroll">
          {/* Tamil verse */}
          <p className="font-tamil text-wedding-gold/70 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
            दोन जिवांची रेशीमगाठ
          </p>

          {/* Kolam-style divider */}
          <KolamDivider />

          <p className="font-subtext text-wedding-ivory/80 text-base sm:text-lg md:text-xl mt-6 sm:mt-8 mb-8 sm:mb-10 md:mb-12 italic leading-relaxed max-w-xs sm:max-w-sm md:max-w-2xl mx-auto">
            With the blessings of the Almighty and the love of our families, we joyfully invite you
            to celebrate the union of our beloved children.
          </p>

          {/* Parents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mt-8 sm:mt-10 md:mt-12">
            <div className="reveal-on-scroll">
              <p className="font-heading text-wedding-gold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3">Bride's Family</p>
              <p className="font-body text-wedding-ivory/90 text-base sm:text-lg">Mr. Bride Father & Mrs. Bride Mother </p>
              <p className="font-body text-wedding-ivory/50 text-xs sm:text-sm mt-1">Son of  Mr. GrandFather & Mrs. GrandMother </p>
            </div>
            <div className="reveal-on-scroll">
              <p className="font-heading text-wedding-gold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3">Groom's Family</p>
              <p className="font-body text-wedding-ivory/90 text-base sm:text-lg">Mr. Groom Father & Mrs. Groom Mother</p>
              <p className="font-body text-wedding-ivory/50 text-xs sm:text-sm mt-1">Son of Mr. GrandFather & Mrs. GrandMother </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const KolamDivider = () => (
  <div className="flex items-center justify-center gap-2 sm:gap-3 my-4 sm:my-6">
    <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent to-wedding-gold/40" />
    <svg width="32" height="32" viewBox="0 0 40 40" className="text-wedding-gold/60 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <circle cx="20" cy="8" r="2" fill="currentColor" />
      <circle cx="20" cy="32" r="2" fill="currentColor" />
      <circle cx="8" cy="20" r="2" fill="currentColor" />
      <circle cx="32" cy="20" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="28" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="28" r="1.5" fill="currentColor" />
      <circle cx="28" cy="28" r="1.5" fill="currentColor" />
      <path d="M8 20 Q14 14 20 8 Q26 14 32 20 Q26 26 20 32 Q14 26 8 20Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
    <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-l from-transparent to-wedding-gold/40" />
  </div>
);

export default BlessingSection;
