declare module "*.mdx" {
  import type { ComponentType } from "react";
  const Component: ComponentType;
  export default Component;

  export interface PostFrontmatter {
    id: string;
    title: string;
    date?: string;
    tags?: string[];
    links?: Array<{
      label: string;
      url: string;
      icon?: string;
    }>;
    image?: {
      src: string;
      alt: string;
      position?: "top" | "left" | "right";
    };
  }

  export const frontmatter: PostFrontmatter;
}
