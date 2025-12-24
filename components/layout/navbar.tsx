"use client";

import Link from "next/link";
import { SectionContainer } from "./section-container";
import { NavLink } from "../shared/navlink/navlink";
import { Button, buttonVariants } from "../shared/button/button";
import { ToggleTheme } from "./toggle-theme";
import { useConvexAuth } from "convex/react";
import { ChevronsUpDown, Loader2, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const { isAuthenticated, isLoading: isAuthLoading } = useConvexAuth();
  const { data: session, isPending: isSessionLoading } =
    authClient.useSession();

  const isLoading = isAuthLoading || isSessionLoading;

  const handleLogout = async () => {
    try {
      await authClient.signOut(
        {},
        {
          onSuccess: () => {
            toast("Logged out successfully.");
            router.push("/");
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
        }
      );
    } catch {}
  };
  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <SectionContainer className="flex justify-between items-center border border-muted p-4 rounded-3xl backdrop-blur-lg">
        <Link href="/">
          <h3 className="text-2xl font-bold">Tech Hive</h3>
        </Link>
        <nav className="flex items-center justify-between">
          <ul className="flex gap-4">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          {isLoading ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : isAuthenticated && session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="hover:bg-accent transition-colors duration-200 cursor-pointer p-2 px-4 rounded-xl flex items-center gap-3">
                  <User size={16} />
                  <div className="text-sm">
                    <h5 className="font-medium">{session.user.name}</h5>
                    <p className="text-xs text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                  <ChevronsUpDown className="ml-4" size={16} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuLabel>My Account </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  className="cursor-pointer"
                  onClick={handleLogout}
                >
                  <div className="flex items-center gap-2">
                    <LogOut className="text-destructive" />
                    <span>Logout</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link
                href="/auth/login"
                className={buttonVariants({ variant: "outline" })}
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className={buttonVariants({ variant: "default" })}
              >
                Sign Up
              </Link>
            </>
          )}
          <ToggleTheme
            type="button"
            animationType="swipe-down"
            className="cursor-pointer"
          />
        </div>
      </SectionContainer>
    </header>
  );
}
