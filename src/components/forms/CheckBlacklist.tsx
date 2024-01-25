import { InputDefault } from "../Input";
import { ButtonDefault } from "../Button";
import { PrimaryOrangeButton } from "../../assets/style";
import { useState } from "react";
import { Modal } from "../BlacklistModal";
import { DocumentData } from "firebase/firestore";
import { getBlacklistData } from "../../service/service";
import { TfiAlert, TfiFaceSad, TfiFaceSmile } from "react-icons/tfi";

export default function CheckBlacklist() {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<boolean>(false);
  const [data, setData] = useState<DocumentData[] | undefined>([]);

  const checkBlacklist = async () => {
    setShowModal(true);

    if (!name && !address) {
      setInvalid(true);
      setData([{ id: 0, name: "กรุณากรอกข้อมูลให้ครบถ้วน" }]);
      return;
    }

    const res = await getBlacklistData(name, address);
    setData(res);
  };

  const closeBlacklist = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-3" id="bl" aria-hidden={true}>
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
        <Modal
          handleOpen={() => closeBlacklist()}
          content={data}
          title={
            data && data.length > 0 && !invalid
              ? "เครดิตคุณไม่ผ่าน"
              : !data
              ? "เครดิตคุณผ่าน"
              : invalid
              ? "เกิดข้อผิดพลาด"
              : ""
          }
          icon={
            data && data.length > 0 && !invalid ? (
              <TfiFaceSad color="red" size={"100"} />
            ) : !data ? (
              <TfiFaceSmile color="#4caf50" size={"100"} />
            ) : invalid ? (
              <TfiAlert color={"#fdd835"} size={"100"} />
            ) : (
              ""
            )
          }
        />
      ) : null}
    </>
  );
}
