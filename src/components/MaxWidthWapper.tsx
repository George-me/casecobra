import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("h-full w-full max-w-screen-xl mx-auto px-2.5", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWapper;
