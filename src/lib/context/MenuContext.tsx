import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from "react";

// Define the type for a menu item
interface MenuItem {
  name: string;
}

// Define the types for the actions
type MenuAction = { type: "ADD_ITEM"; payload: MenuItem };

// Define the type for the state
interface MenuState {
  items: MenuItem[];
}

// Define the initial state
const initialState: MenuState = {
  items: [
    { name: "Menu Item 1" },
    { name: "Menu Item 2" },
    { name: "Menu Item 3" },
  ],
};

// Create the reducer function
const menuReducer = (state: MenuState, action: MenuAction): MenuState => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

// Create the context
interface MenuContextProps {
  state: MenuState;
  dispatch: Dispatch<MenuAction>;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

// Create the provider component
const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, initialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook to use the MenuContext
const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

export { MenuProvider, useMenuContext };
