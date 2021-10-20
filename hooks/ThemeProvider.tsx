import * as React from "react";

type Theme = "dark" | "light";
type Action = { type: "EDIT"; payload: Theme };
type Dispatch = (action: Action) => void;
type State = { theme: Theme };

type ThemeProviderProps = { children: React.ReactNode; theme: Theme };
const ThemeStateContext = React.createContext<
  { themeState: State; dispatch: Dispatch } | undefined
>(undefined);

function themeReducer(themeState: State, action: Action) {
  switch (action.type) {
    case "EDIT": {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
      }
      return { ...themeState, theme: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const [themeState, dispatch] = React.useReducer(themeReducer, {
    theme: theme,
  });

  const value = { themeState, dispatch };
  return (
    <ThemeStateContext.Provider value={value}>
      {children}
    </ThemeStateContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
