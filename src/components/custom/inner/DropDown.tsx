import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-2xl font-bold">
        My menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item 2</DropdownMenuItem>
        <DropdownMenuItem>Menu item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropDown;
