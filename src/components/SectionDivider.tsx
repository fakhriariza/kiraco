export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px bg-gradient-to-r from-transparent via-taupe/30 to-transparent my-4 ${className}`}
    />
  );
}
