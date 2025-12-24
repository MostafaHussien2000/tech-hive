"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  AlertCircle,
  CheckCircle2,
  Info as InfoIcon,
  AlertTriangle,
  XCircle,
  LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const infoVariants = cva(
  "relative w-full rounded-xl border p-4 flex gap-3 transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        info: "bg-blue-100 border-blue-200 text-blue-900 dark:bg-blue-950/20 dark:border-blue-900/50 dark:text-blue-300",
        success:
          "bg-emerald-100 border-emerald-200 text-emerald-900 dark:bg-emerald-950/20 dark:border-emerald-900/50 dark:text-emerald-300",
        warning:
          "bg-amber-100 border-amber-200 text-amber-900 dark:bg-amber-950/20 dark:border-amber-900/50 dark:text-amber-300",
        error:
          "bg-red-100 border-red-200 text-red-900 dark:bg-red-950/20 dark:border-red-900/50 dark:text-red-300",
        destructive:
          "bg-destructive/10 border-destructive/20 text-destructive dark:bg-destructive/20 dark:border-destructive/30",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const iconMap: Record<string, LucideIcon> = {
  info: InfoIcon,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  destructive: AlertCircle,
};

export interface InfoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof infoVariants> {
  title?: string;
  message?: string;
  icon?: LucideIcon;
}

const Info = React.forwardRef<HTMLDivElement, InfoProps>(
  (
    {
      className,
      variant = "info",
      title,
      message,
      icon: Icon,
      children,
      ...props
    },
    ref
  ) => {
    const DefaultIcon = iconMap[variant || "info"];
    const FinalIcon = Icon || DefaultIcon;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(infoVariants({ variant, className }))}
        {...props}
      >
        {FinalIcon && (
          <div className="mt-0.5 shrink-0">
            <FinalIcon className="h-5 w-5" />
          </div>
        )}
        <div className="flex flex-col gap-1 w-full">
          {title && (
            <h5 className="font-semibold leading-none tracking-tight">
              {title}
            </h5>
          )}
          <div className="text-sm leading-relaxed opacity-90">
            {message || children}
          </div>
        </div>
      </div>
    );
  }
);
Info.displayName = "Info";

export { Info, infoVariants };
