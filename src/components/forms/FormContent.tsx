import { InputDefault } from "../Input";
import { ButtonDefault } from "../Button";
import { PrimaryOrangeButton } from "../../assets/style";
import { useState } from "react";
export function FormContent() {
  // const { control } = useFormContext<ICheckBlacklistForm>();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string | undefined>(undefined);

  const checkBlacklist = () => {
    if (!name && !address) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    console.log(name, address);
  };

  return (
    <div className="flex flex-col gap-3">
      <InputDefault
        className="w-[25rem]"
        label={"ชื่อ-นามสกุล"}
        helperText={
          " กรอกชื่อ เว้นวรรค นามสกุล ตัวอย่าง สมหวัง รวยพันล้าน หรือกรอกเฉพาะชื่อ/นามสกุล"
        }
        onChange={(e) => setName(e.target.value)}
      />
      <InputDefault
        label={"ที่อยู่"}
        placeholder="บ้านเลขที่ หมู่ ตำบล อำเภอ"
        helperText={
          " กรอกที่อยู่แบบสมบูรณ์ เช่น 999 ม.1 ต.รวยจัง อ.มากมาย หรือกรอกเฉพาะบ้านเลขที่ เช่น 999"
        }
        onChange={(e) => setAddress(e.target.value)}
      />
      <ButtonDefault
        label={"ตรวจสอบ"}
        buttonStyle={PrimaryOrangeButton}
        onClick={() => checkBlacklist()}
      />
    </div>
  );
}
