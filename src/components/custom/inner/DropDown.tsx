import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMenuContext } from "@/lib/context/MenuContext";

const DropDown = () => {
  const { state } = useMenuContext();

  console.log(state);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-2xl font-bold">
        Check my Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {state.items.map(({ name }) => {
          return <DropdownMenuItem key={name}>{name}</DropdownMenuItem>;
        })}

        {/* <DropdownMenuItem>Menu item 2</DropdownMenuItem>
        <DropdownMenuItem>Menu item 3</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropDown;
