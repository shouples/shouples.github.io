import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="layout-header">
      <div className="header-top">
        <div className="header-title">
          <h1>shouples</h1>
          <span className="header-subtitle">D. SHOUP</span>
        </div>
        <Navigation />
      </div>
      <p className="header-bio">
        Software engineer, powerlifter, enjoyer of graphic design and too-often-spicy foods.
      </p>
    </header>
  );
}
