import { Dialog, DialogBody, Typography } from "@material-tailwind/react";
import React, { useMemo } from "react";
import { ECreditLevel } from "../constants/blacklist";
import { IBlacklist } from "../interface/blacklist";
import { TfiAlert, TfiFaceSad, TfiFaceSmile } from "react-icons/tfi";
import { useTranslation } from "react-i18next";

export interface IModal {
  desc?: string[];
  creditLevel?: ECreditLevel;
}

type DialogProps = {
  handleOpen: () => void;
  content?: IBlacklist;
};

export function Modal(props: DialogProps) {
  const { t } = useTranslation("components");
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

  return (
    <>
      <Dialog open={true} handler={handleOpen}>
        <DialogBody divider className="grid place-items-center gap-4">
          {icon}
          <Typography color="black" variant="h4">
            {t(`modal.creditLevel.${content?.creditLevel}`)}
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
