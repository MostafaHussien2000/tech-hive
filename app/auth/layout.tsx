import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/shared/button/button";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SectionContainer className="mt-20">
      <Button variant={"ghost"}>
        <ArrowLeft />
        Back to home page
      </Button>
      {children}
    </SectionContainer>
  );
}
