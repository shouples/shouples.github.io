interface TagProps {
  label: string;
  onClick: (tag: string) => void;
  isActive?: boolean;
  variant?: "default" | "small";
}

export function Tag({ label, onClick, isActive = false, variant = "default" }: TagProps) {
  return (
    <button
      type="button"
      className={`tag ${variant} ${isActive ? "active" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}
