import { cn } from "@/lib/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-20 bg-coral-100 dark:bg-gray-700 flex justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
