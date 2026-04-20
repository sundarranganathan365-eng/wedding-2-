import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-10 sm:py-12 md:py-16 section-gradient overflow-hidden">
      <div className="max-w-xl mx-auto text-center px-4 sm:px-6">
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-gold-gradient mb-2 sm:mb-3">
          The Bride & Groom
        </h3>
        <p className="font-subtext text-wedding-ivory/50 text-xs sm:text-sm mb-4 sm:mb-6">
          May 29, 2026 • Tiruchendur, India
        </p>

        <div className="flex justify-center gap-4 mb-6 sm:mb-8">
          <a
            href="#"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full gold-border flex items-center justify-center text-wedding-gold/60 transition-colors hover:text-wedding-gold hover:bg-wedding-gold/10"
          >
            <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-wedding-ivory/30 text-[10px] sm:text-xs font-body">
          <span>Made with</span>
          <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-wedding-vermillion fill-current" />
          <span>for our special day</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
