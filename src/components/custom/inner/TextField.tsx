import React, { useState } from "react";
// import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMenuContext } from "@/lib/context/MenuContext";
import { Button } from "@/components/ui/button";

const TextField: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { dispatch } = useMenuContext(); // Get the dispatch function from context

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === "") return; // Prevent empty submissions

    // Dispatch an action to add the new menu item
    dispatch({ type: "ADD_ITEM", payload: { name: inputValue } });

    // Clear the input field after submission
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <Label htmlFor="message">Add a menu item</Label> */}
        <Textarea
          placeholder="Add a menu item"
          id="message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <Button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Add Item
      </Button>
    </form>
  );
};

export default TextField;
