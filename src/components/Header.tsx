import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COMPACT_THRESHOLD = 80;
const EXPAND_THRESHOLD = 20;

export function Header() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsCompact((wasCompact) => {
        if (wasCompact) {
          return scrollY > EXPAND_THRESHOLD;
        } else {
          return scrollY > COMPACT_THRESHOLD;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`layout-header${isCompact ? " compact" : ""}`}>
      <div className="header-top">
        <div className="header-title">
          <h1><Link to="/" className="header-title-link">shouples</Link></h1>
          <span className="header-subtitle">D. SHOUP</span>
        </div>
      </div>
      <p className="header-bio">
        Software engineer, powerlifter, enjoyer of graphic design and too-often-spicy foods.
      </p>
    </header>
  );
}
