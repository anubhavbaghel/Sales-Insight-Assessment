import { cn } from "@/lib/utils";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("bg-white rounded-xl shadow-md border border-gray-100 p-6", className)}>
      {children}
    </div>
  );
};