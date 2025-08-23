import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconGitBranch } from "@tabler/icons-react";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <h1>Home</h1>
      <Input className="w-max" placeholder="input test" />
      <Button className="w-max" variant={"default"}>
        Button test
      </Button>
      <Button className="w-max" variant={"outline"}>
        {" "}
        <IconGitBranch />
        Button test
      </Button>
    </div>
  );
}
