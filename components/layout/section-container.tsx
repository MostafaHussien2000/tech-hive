export function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full container mx-auto max-w-7xl ${className ?? ""}`}>
      {children}
    </div>
  );
}
