import React from "react";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import LanguageSwitcher from "../LanguageSwitcher";
import { Link } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";

const navListData = [
  {
    label: "List",
    path: "/list",
  },
  {
    label: "Search",
    path: "/search",
  },
  // {
  //   label: "Management",
  //   path: "/#",
  // },
];

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <LanguageSwitcher />

      {navListData.map((data) => (
        <Typography
          key={data.label}
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          <Link
            to={data.path}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {data.label}
          </Link>
        </Typography>
      ))}
      <ProfileMenu />
    </ul>
  );
}

export function NavigationBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 640 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="mx-auto max-w-screen-xxl px-6 py-3 bg-[#404040]">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
          color="white"
        >
          Chairak Blacklist
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <p>x</p> : <p>x</p>}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
}
