import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

export default function RootLayout() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

useEffect(() => {
  console.log("Theme:", theme);
  console.log("HTML class:", document.documentElement.className);
}, [theme]);

  console.log(theme);

  return (
    <div className="dark:bg-gray-900 bg-white dark:text-white">
      <Outlet />
    </div>
  );
}
