import type { ComponentType, SVGProps } from "react";

interface SocialLinkProps {
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

export function SocialLink(props: SocialLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      title={props.href}
      rel="noopener noreferrer"
      aria-label={props.label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
        opacity: 0.7,
      }}
    >
      <props.Icon width={20} height={20} />
    </a>
  );
}
