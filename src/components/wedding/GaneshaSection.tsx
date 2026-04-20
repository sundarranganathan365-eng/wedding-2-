import ganeshaImg from "@/assets/ganesha.png";

const GaneshaSection = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 section-gradient overflow-hidden">
      {/* Glow background — scales with viewport */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(40,66%,48%) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 reveal-on-scroll">
        <img
          src={ganeshaImg}
          alt="Lord Ganesha"
          loading="lazy"
          width={800}
          height={800}
          className="w-32 sm:w-40 md:w-48 lg:w-64 h-auto mb-5 sm:mb-6 md:mb-8 drop-shadow-[0_0_30px_hsl(40,66%,48%,0.3)]"
        />
        <p className="font-tamil text-wedding-gold/80 text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-relaxed max-w-sm sm:max-w-md">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ…
        </p>
        <p className="font-subtext text-wedding-ivory/60 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md italic leading-relaxed">
          "O Lord Ganesha, of curved trunk and massive body, whose brilliance is equal to a million suns,
          please bless us that all obstacles be removed."
        </p>
      </div>
    </section>
  );
};

export default GaneshaSection;
