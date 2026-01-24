import BlueSkyIcon from "../assets/icons/bluesky.svg?react";
import GitHubIcon from "../assets/icons/github.svg?react";
import { SocialLink } from "./SocialLink";

export function Footer() {
  return (
    <footer className="layout-footer">
      <div className="social-links">
        <SocialLink href="https://github.com/shouples" Icon={GitHubIcon} label="GitHub" />
        <SocialLink
          href="https://bsky.app/profile/shouples.bsky.social"
          Icon={BlueSkyIcon}
          label="BlueSky"
        />
      </div>
    </footer>
  );
}
