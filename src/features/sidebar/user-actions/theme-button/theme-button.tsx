import { useContext, useState } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { IconButton } from "src/components/icon-button";

const ThemeButton = () => {
  // Get theme and setTheme variables from theme context
  const { theme, setTheme } = useContext(ThemeContext);

  // Create reactive themeIcon variable
  const [themeIcon, setThemeIcon] = useState(
    localStorage.getItem("themeKey") === "dark"
      ? "lucide:moon-star"
      : "lucide:cloud-sun"
  );

  // Function to switch between themes
  const switchTheme = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        setThemeIcon("lucide:cloud-sun");
        break;

      case "light":
        setTheme("dark");
        setThemeIcon("lucide:moon-star");
        break;
    }
  };

  return <IconButton icon={themeIcon} onClick={switchTheme} />;
};

export default ThemeButton;
