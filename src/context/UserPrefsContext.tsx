"use client";

import { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";

type LayoutStyleType = "grid" | "list";
type ThemeModeType = "dark" | "light";

type UserPrefsContextType = {
  layoutStyle: LayoutStyleType;
  themeMode: ThemeModeType;
  handleLayoutChange: () => void;
  handleThemeChange: () => void;
};

const defaultUserPrefsContextType: UserPrefsContextType = {
  layoutStyle: "grid",
  themeMode: "light",
  handleLayoutChange: () => {},
  handleThemeChange: () => {},
};

type UserPrefsContextProps = {
  storedLayoutStyle: LayoutStyleType;
  storedThemeMode: ThemeModeType;
  children: React.ReactNode;
};
const UserContext = createContext<UserPrefsContextType>(
  defaultUserPrefsContextType
);

export default function UserPrefsContext({
  storedLayoutStyle,
  storedThemeMode,
  children,
}: UserPrefsContextProps) {
  const [layoutStyle, setLayoutStyle] =
    useState<LayoutStyleType>(storedLayoutStyle);
  const [themeMode, setThemeMode] = useState<ThemeModeType>(storedThemeMode);

  function handleLayoutChange() {
    if (layoutStyle === "grid") {
      setLayoutStyle("list");
      Cookies.set("layoutStyle", "list", { expires: 1 });
    } else if (layoutStyle === "list") {
      setLayoutStyle("grid");
      Cookies.set("layoutStyle", "grid", { expires: 1 });
    }
    console.log(layoutStyle);
  }

  function handleThemeChange() {
    if (themeMode === "light") {
      setThemeMode("dark");
      Cookies.set("themeMode", "dark", { expires: 1 });
    } else if (themeMode === "dark") {
      setThemeMode("light");
      Cookies.set("themeMode", "light", { expires: 1 });
    }
  }

  return (
    <UserContext.Provider
      value={{ layoutStyle, themeMode, handleLayoutChange, handleThemeChange }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a UserContextProvider."
    );
  }
  return context;
};
