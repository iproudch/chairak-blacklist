import { Outlet } from "react-router-dom";
import { NavigationBar } from "./components/navigation/NavigationBar";

export default function ApplicationLayout() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col gap-2 p-4 sm:gap-4 sm:p-4 md:p-8 lg:pt-4  lg:pb-8 lg:pl-16">
        <Outlet />
      </div>
    </>
  );
}
