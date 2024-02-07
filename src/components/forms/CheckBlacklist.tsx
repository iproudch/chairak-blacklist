import { InputDefault } from "../Input";
import { ButtonDefault } from "../Button";
import { PrimaryOrangeButton } from "../../assets/style";
import { useState } from "react";
import { Modal } from "../Modal";
import { getBlacklistData } from "../../service/service";
import { IBlacklist } from "../../interface/blacklist";
import { ECreditLevel } from "../../constants/blacklist";

export default function CheckBlacklist() {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<IBlacklist>(undefined);

  const checkBlacklist = async () => {
    if (!name && !address) {
      setData({
        data: [],
        creditLevel: ECreditLevel.INVALID,
      });
      setShowModal(true);
      return;
    }
    setData(await getBlacklistData(name, address));
    setShowModal(true);
  };

  const closeBlacklist = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-3" aria-hidden={true}>
        <InputDefault
          className="w-[25rem]"
          label={"ชื่อ-นามสกุล"}
          placeholder="ชื่อ นามสกุล"
          helperText={" กรอกชื่อ เว้นวรรค นามสกุล ตัวอย่าง สมหวัง รวยพันล้าน"}
          onChange={(e) => setName(e.target.value)}
        />
        <InputDefault
          label={"ที่อยู่"}
          placeholder="บ้านเลขที่ หมู่ ตำบล อำเภอ"
          helperText={" กรอกที่อยู่แบบสมบูรณ์ เช่น 999 ม.1 ต.รวยจัง อ.มากมาย"}
          onChange={(e) => setAddress(e.target.value)}
        />
        <ButtonDefault
          label={"ตรวจสอบ"}
          buttonStyle={PrimaryOrangeButton}
          onClick={() => checkBlacklist()}
        />
      </div>
      {showModal ? (
        <Modal handleOpen={() => closeBlacklist()} content={data} />
      ) : null}
    </>
  );
}
