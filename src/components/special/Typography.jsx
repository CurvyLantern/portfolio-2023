import { cn } from "@/lib/utils";
export const Heading1 = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "text-right text-4xl xsm:text-6xl md:text-7xl lg:text-8xl uppercase font-semibold",
        className
      )}>
      {children}
    </h1>
  );
};

export const Heading2 = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-3xl xsm:text-5xl md:text-6xl uppercase font-semibold py-5",
        className
      )}>
      {children}
    </h2>
  );
};
