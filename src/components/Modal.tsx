import { Dialog, DialogBody, Typography } from "@material-tailwind/react";
import React, { useMemo } from "react";
import { ECreditLevel } from "../constants/blacklist";
import { IBlacklist } from "../interface/blacklist";
import { TfiAlert, TfiFaceSad, TfiFaceSmile } from "react-icons/tfi";

export interface IModal {
  desc?: string[];
  creditLevel?: ECreditLevel;
}

type DialogProps = {
  handleOpen: () => void;
  content?: IBlacklist;
};

export function Modal(props: DialogProps) {
  const { handleOpen, content } = props;

  const icon = useMemo(() => {
    switch (content?.creditLevel) {
      case ECreditLevel.PASS:
        return <TfiFaceSmile size={100} color={"#4caf50"} />;
      case ECreditLevel.FAIL:
        return <TfiFaceSad size={100} color="red" />;
      default:
        return <TfiAlert size={100} color={"#fdd835"} />;
    }
  }, [content?.creditLevel]);

  const creditLevelLabel = useMemo(() => {
    switch (content?.creditLevel) {
      case ECreditLevel.PASS:
        return "เครดิตคุณผ่าน";
      case ECreditLevel.FAIL:
        return "เครดิตคุณไม่ผ่าน";
      case ECreditLevel.INVALID:
        return "กรุณากรอกข้อมูลให้ครบถ้วน";
      default:
        return "ไม่พบข้อมูล";
    }
  }, [content?.creditLevel]);

  return (
    <>
      <Dialog open={true} handler={handleOpen}>
        <DialogBody divider className="grid place-items-center gap-4">
          {icon}
          <Typography color="black" variant="h4">
            {creditLevelLabel}
          </Typography>
          <Typography className="text-center font-normal">
            {content?.data.map((item) => (
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
