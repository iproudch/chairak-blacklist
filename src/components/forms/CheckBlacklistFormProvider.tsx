import * as yup from "yup";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import React, { useCallback, useEffect, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

type AddTaskFormProviderProps = {
  children: React.ReactNode | React.ReactNode[];
  formRef: React.RefObject<HTMLFormElement>;
};

export default function CheckBlacklistFormProvider(
  props: AddTaskFormProviderProps
): JSX.Element | null {
  const { children, formRef } = props;

  const defaultValues: ICheckBlacklistForm = useMemo(
    () => ({
      name: "",
      address: "",
    }),
    []
  );

  const resolver = useMemo(
    () => yupResolver(AddReleaseTagSchema, { abortEarly: false }),
    []
  );

  const formMethods = useForm<ICheckBlacklistForm>({
    criteriaMode: "all",
    defaultValues,
    mode: "onSubmit",
    // resolver,
  });

  const { reset, handleSubmit } = formMethods;

  const onReset = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const onSubmit: SubmitHandler<ICheckBlacklistForm> = async (data) => {
    // const { email, password } = data;
    // try {
    //   clearContextError();
    // } catch (e) {
    //   handleError(e);
    // }
  };

  const onError: SubmitErrorHandler<ICheckBlacklistForm> = (errors) => {
    console.error("IAttachmentsCreditNoteForm:onError", errors);
  };

  useEffect(() => {
    reset(defaultValues, { keepDirty: true });
  }, [defaultValues, reset]);

  return (
    <FormProvider {...formMethods}>
      <form
        ref={formRef}
        id={"bl-form"}
        onReset={onReset}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export interface ICheckBlacklistForm {
  name: string;
  address: string;
}

export const AddReleaseTagSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string(),
});
