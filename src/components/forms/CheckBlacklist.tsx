import { InputDefault } from "../Input";
import { ButtonDefault } from "../Button";
import { PrimaryOrangeButton } from "../../assets/style";
import { useState } from "react";
import { Modal } from "../Modal";
import { getBlacklistData } from "../../service/service";
import { IBlacklist } from "../../interface/blacklist";
import { ECreditLevel } from "../../constants/blacklist";
import { useTranslation } from "react-i18next";

export default function CheckBlacklist() {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<IBlacklist>(undefined);
  const { t } = useTranslation("components");

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
          label={t("form.name.label")}
          placeholder={t("form.name.placeholder")}
          helperText={t("form.name.helperText")}
          onChange={(e) => setName(e.target.value)}
        />
        <InputDefault
          label={t("form.address.label")}
          placeholder={t("form.address.placeholder")}
          helperText={t("form.address.helperText")}
          onChange={(e) => setAddress(e.target.value)}
        />
        <ButtonDefault
          label={t("form.button.check")}
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
