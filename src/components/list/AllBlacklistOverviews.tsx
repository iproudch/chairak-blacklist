import {
  Card,
  Typography,
  Button,
  CardFooter,
  CardHeader,
  Tabs,
  TabsHeader,
  Tab,
  Input,
  Tooltip,
} from "@material-tailwind/react";
import { useMemo, useState } from "react";
import { getAllBlacklistUser } from "../../service/service";
import { DocumentData } from "firebase/firestore";
import { useQuery } from "react-query";
import { TfiPencil } from "react-icons/tfi";

const TABS = [
  {
    label: "ทั้งหมด",
    value: "all",
  },
  {
    label: "นานาภัณฑ์",
    value: "branch2",
  },
  {
    label: "เคหะภัณฑ์",
    value: "branch1",
  },
];

const TABLE_HEAD = ["ชื่อ", "ที่อยู่"];

export function AllBlacklistOverviews() {
  const {
    data: blacklists,
    error,
    isLoading,
  } = useQuery("blacklist", getAllBlacklistUser);
  const [searchData, setSearchData] = useState<DocumentData[]>([]);
  const edit = false; // TODO: implement edit
  const searchTable = (search: string) => {
    return setSearchData(
      blacklists?.filter(
        (blacklist) =>
          blacklist.name.includes(search) || blacklist.address?.includes(search)
      )
    );
  };

  const tableDisplay = useMemo(() => {
    return searchData.length > 0 ? searchData : blacklists;
  }, [searchData, blacklists]);
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          {/* <div className="flex shrink-0 flex-col gap-2 sm:flex-row"> */}
          {/* <Button variant="outlined" size="sm">
              view all
            </Button> */}
          {/* TODO: add member function */}
          {/* <Button className="flex items-center gap-3" size="sm">
              Add member
            </Button> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="flex flex-col items-center justify-between gap-4 md:flex-row"> */}
          {/* TODO: filters data */}
          <Tabs value="all" className="w-full md:w-[20rem]">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              onChange={(e) => searchTable(e.target.value)}
              crossOrigin={undefined}
            />
          </div>
        </div>
      </CardHeader>
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableDisplay?.map(({ name, address }, index) => {
            const isLast = index === tableDisplay?.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={index}>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                      {/* <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {email}
                      </Typography> */}
                    </div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {address}
                    </Typography>
                  </div>
                </td>
                {/* TODO: edit user function */}
                {edit ? (
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <TfiPencil />
                    </Tooltip>
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
      {blacklists?.length > 15 ? (
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      ) : null}
    </Card>
  );
}
