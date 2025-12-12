import { SectionContainer } from "@/components/layout/section-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

export default function LoginPage() {
  return (
    <>
      <Card className="max-w-[400px] mx-auto mt-30">
        <CardHeader>
          <CardTitle className="text-3xl">Login</CardTitle>
          <CardDescription className="text-sm">
            Login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>Login Form</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
