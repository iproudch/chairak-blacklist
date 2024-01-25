import { useRef } from "react";
import CheckBlacklistFormProvider from "./CheckBlacklistFormProvider";
import { FormContent } from "./FormContent";

export default function CheckBlacklistForm() {
  //   const formRef = useRef<HTMLFormElement>(null);
  return (
    // <CheckBlacklistFormProvider formRef={formRef}>
    <FormContent />
    // </CheckBlacklistFormProvider>
  );
}
