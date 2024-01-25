import { Dialog, DialogBody, Typography } from "@material-tailwind/react";
import { DocumentData } from "firebase/firestore";
import React from "react";
type DialogProps = {
  handleOpen: () => void;
  content?: DocumentData[];
  title: string;
  icon?: React.ReactNode;
};

export function Modal(props: DialogProps) {
  const { handleOpen, content, title, icon } = props;

  return (
    <>
      <Dialog open={true} handler={handleOpen}>
        <DialogBody divider className="grid place-items-center gap-4">
          {icon}
          <Typography color="black" variant="h4">
            {title}
          </Typography>
          <Typography className="text-center font-normal">
            {content?.map((item) => (
              <div key={item.id}>
                {item.name} {item.address && `ที่อยู่ ${item.address}`}
              </div>
            ))}
          </Typography>
        </DialogBody>
      </Dialog>
    </>
  );
}
