import Link from "next/link";

type Variant = "red" | "navy" | "outline-white" | "outline-red";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
}

export default function CTAButton({
  href,
  label,
  variant = "red",
  external = false,
  className = "",
}: CTAButtonProps) {
  const styles: Record<Variant, React.CSSProperties> = {
    red: { background: "#C8102E", color: "#ffffff" },
    navy: { background: "#0A1F44", color: "#ffffff" },
    "outline-white": {
      background: "transparent",
      color: "#ffffff",
      border: "2px solid rgba(255,255,255,0.6)",
    },
    "outline-red": {
      background: "transparent",
      color: "#C8102E",
      border: "2px solid #C8102E",
    },
  };

  const baseClass = `btn-lift inline-block rounded px-7 py-3 font-body text-sm font-semibold uppercase tracking-widest transition-colors duration-150 ${className}`;

  const props = {
    className: baseClass,
    style: { ...styles[variant], letterSpacing: "0.1em" },
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {label}
    </Link>
  );
}
