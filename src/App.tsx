import BlueSkyIcon from "./assets/icons/bluesky.svg?react";
import GitHubIcon from "./assets/icons/github.svg?react";
import { SocialLink } from "./components/SocialLink";

export default function App() {
  return (
    <div style={{ maxWidth: 860, margin: "64px auto", padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ marginBottom: 8 }}>shouples</h1>
      <h4 style={{ marginTop: 0, opacity: 0.8 }}>D. SHOUP</h4>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Software engineer, powerlifter, enjoyer of graphic design and too-often-spicy foods. Hello.
        👋
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <SocialLink href="https://github.com/shouples" Icon={GitHubIcon} label="GitHub" />
        <SocialLink
          href="https://bsky.app/profile/shouples.bsky.social"
          Icon={BlueSkyIcon}
          label="BlueSky"
        />
      </div>

      {/* projects here eventually */}
    </div>
  );
}
