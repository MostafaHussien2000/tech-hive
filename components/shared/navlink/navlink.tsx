"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const isActive = usePathname() === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-center transition-all duration-300 px-4 py-2 rounded-lg cursor-pointer flex flex-col items-center gap-2 relative",
        isActive && "font-semibold",
        !isActive && "font-medium"
      )}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-3 left-[50%] translate-x-[-50%] h-1">
          •
        </span>
      )}
    </Link>
  );
}
