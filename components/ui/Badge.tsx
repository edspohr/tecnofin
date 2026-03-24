interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "cyan" | "default";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantClasses = {
    gold: "bg-gold/10 text-gold border-gold/30",
    cyan: "bg-cyan-brand/10 text-cyan-brand border-cyan-brand/30",
    default: "bg-white/10 text-gray-soft border-white/20",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
