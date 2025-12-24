import { SectionContainer } from "@/components/layout/section-container";
import { Button, buttonVariants } from "@/components/shared/button/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SectionContainer className="mt-20">
      <Link href="/" className={buttonVariants({ variant: "ghost" })}>
        <ArrowLeft />
        Back to home page
      </Link>
      {children}
    </SectionContainer>
  );
}
