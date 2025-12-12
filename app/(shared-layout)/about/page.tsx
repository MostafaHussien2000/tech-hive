import { Button } from "@/components/shared/button/button";
import { Edit, Plus, Power, SwitchCamera } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-4 mt-40">
      <h1 className="text-4xl font-bold text-center">About Us Page</h1>
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-4">
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <Edit className="h-4 w-4" />
        </Button>
        <Button size="icon">
          <Power className="h-4 w-4" />
        </Button>
        <Button size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
