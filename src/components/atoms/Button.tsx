import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export const Button = ({ className, variant = "primary", ...props }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors text-sm";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props} />
  );
};