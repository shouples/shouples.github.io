import type { ComponentType, SVGProps } from "react";
import type { PostData } from "../components/Post";

// Icon imports - map icon names from frontmatter to components
import GitHubIcon from "../assets/icons/github.svg?react";
import BlueskyIcon from "../assets/icons/bluesky.svg?react";
import YouTubeIcon from "../assets/icons/youtube.svg?react";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  bluesky: BlueskyIcon,
  youtube: YouTubeIcon,
};

// Glob import all MDX files from posts directory
const postModules = import.meta.glob<{
  default: ComponentType;
  frontmatter: {
    id: string;
    title: string;
    date?: string;
    tags?: string[];
    links?: Array<{ label: string; url: string; icon?: string }>;
    image?: { src: string; alt: string; position?: "top" | "left" | "right" };
  };
}>("./posts/*.mdx", { eager: true });

// Transform modules into PostData array
export const posts: PostData[] = Object.entries(postModules)
  .filter(([path, mod]) => {
    if (!mod.frontmatter) {
      console.warn(`MDX file missing frontmatter: ${path}`);
      return false;
    }
    return true;
  })
  .map(([, mod]) => {
    const { frontmatter, default: Content } = mod;
    return {
      id: frontmatter.id,
      title: frontmatter.title,
      content: <Content />,
      date: frontmatter.date,
      tags: frontmatter.tags,
      links: frontmatter.links?.map((link) => ({
        ...link,
        icon: link.icon ? iconMap[link.icon] : undefined,
      })),
      image: frontmatter.image,
    };
  })
  // Sort by date descending (newest first)
  .sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
