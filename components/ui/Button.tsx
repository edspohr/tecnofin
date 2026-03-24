import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  external = false,
  size = "md",
  type = "button",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gold hover:bg-gold-dark text-navy font-semibold transition-all duration-200 hover:scale-105 active:scale-100 gold-glow",
    secondary:
      "bg-navy-lighter hover:bg-navy-light text-white font-semibold border border-white/20 hover:border-gold/50 transition-all duration-200",
    ghost:
      "bg-transparent hover:bg-white/5 text-white font-semibold border border-white/30 hover:border-gold/60 transition-all duration-200",
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-sora ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
