import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <section className="bg-custom-blue text-white nav py-3">
      <div className=" mx-auto w-[90%] flex justify-between">
        <div id="nav" className="flex space-x-14 place-items-center">
          <h3>
            <img src="/bluetrax.png" className="w-24" alt="" />
          </h3>
          <p className="border-b-2 border-b-white">Dashboard</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="flex gap-2 place-content-center">
                Tracking
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Drop 1</DropdownMenuItem>
              <DropdownMenuItem>Drop 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <p >Analytics</p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 sm:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
