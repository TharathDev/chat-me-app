import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const InputMessage = () => {
  return (
    <div className="flex w-[57%] my-1 px-1 fixed bottom-0 items-center space-x-2">
      <Input type="email" placeholder="Write something ..." />
      <Button type="submit">Send</Button>
    </div>
  );
};

export default InputMessage;
