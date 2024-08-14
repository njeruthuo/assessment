import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import APICall from "./APICall";
import DropDown from "./DropDown";
import TextField from "./TextField";

const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger>Open Modal</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>My Modal</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col">
              <p>Free advice generator API feed. Click the dice</p>
              <APICall />
              {/* <hr/> */}
              <div className="mt-10 ">
                <p className="mb-3">My dropdown menu and a textbox to populate new entries</p>
                <div className="flex place-items-start justify-around">
                  <DropDown />
                  <TextField />
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
