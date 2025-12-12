import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <>
      <Card className="max-w-[400px] mx-auto mt-30">
        <CardHeader>
          <CardTitle className="text-3xl">Register</CardTitle>
          <CardDescription className="text-sm">
            Create new account.
          </CardDescription>
        </CardHeader>
        <CardContent>Register Form</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
