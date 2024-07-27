import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function ApplicationLayout() {
  return (
    <div className="flex flex-col gap-2 p-4 sm:gap-4 sm:p-4 md:p-8 lg:pt-8 lg:pr-72 lg:pb-8 lg:pl-16">
      <Header />
      {/* <hr className="border-gray-300" /> */}
      <Outlet />
    </div>
  );
}
