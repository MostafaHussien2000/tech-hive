export function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full container mx-auto max-w-7xl px-4 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
