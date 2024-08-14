import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TextField = () => {
  return (
    <div>
      <Label htmlFor="message">Add a menu item</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
};
export default TextField;
