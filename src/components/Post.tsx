import type { ComponentType, SVGProps } from "react";
import { Link } from "react-router-dom";
import { Tag } from "./Tag";

export interface PostLink {
  label: string;
  url: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface PostImage {
  src: string;
  alt: string;
  position?: "top" | "left" | "right";
}

export interface PostData {
  id: string;
  title: string;
  content: React.ReactNode;
  image?: PostImage;
  tags?: string[];
  links?: PostLink[];
  date?: string;
}

interface PostProps extends PostData {
  onTagClick: (tag: string) => void;
  activeTag?: string;
}

function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(isoDate));
}

export function Post({
  id,
  title,
  content,
  image,
  tags,
  links,
  date,
  onTagClick,
  activeTag,
}: PostProps) {
  const hasInlineImage = image && (image.position === "left" || image.position === "right");

  return (
    <article className="post" id={id}>
      <header className="post-header">
        <h3 className="post-title">
          <Link to={`/posts/${id}`}>{title}</Link>
        </h3>
        {date && <time className="post-date" dateTime={date}>{formatDate(date)}</time>}
      </header>

      {image && image.position === "top" && (
        <img className="post-image top" src={image.src} alt={image.alt} />
      )}

      <div className={hasInlineImage ? `post-body-with-image image-${image.position}` : undefined}>
        {image && image.position === "left" && (
          <img className="post-image inline" src={image.src} alt={image.alt} />
        )}
        <div className="post-content">{content}</div>
        {image && image.position === "right" && (
          <img className="post-image inline" src={image.src} alt={image.alt} />
        )}
      </div>

      {tags && tags.length > 0 && (
        <div className="post-tags">
          {tags.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              onClick={onTagClick}
              isActive={activeTag === tag}
              variant="small"
            />
          ))}
        </div>
      )}

      <footer className="post-footer">
        {links && links.length > 0 && (
          <div className="post-links">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="post-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon && <link.icon className="post-link-icon" />}
                {link.label}
              </a>
            ))}
          </div>
        )}
        <Link to={`/posts/${id}`} className="post-permalink" title="View post">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </Link>
      </footer>
    </article>
  );
}
