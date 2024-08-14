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
// import TextField from "./TextField";

const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger>Open Modal</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>My Modal</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col">
              <APICall />
              {/* <hr/> */}
              <div className="mt-8">
                <DropDown />
              </div>
              {/* <TextField /> */}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
