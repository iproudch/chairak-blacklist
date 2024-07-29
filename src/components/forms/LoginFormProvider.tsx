import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useEffect, useMemo } from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import * as yup from "yup";
import { ObjectSchema, string } from "yup";
import { useAuth } from "../../context/UserProvider";
import { useNavigate } from "react-router";

type LoginFormProviderProps = {
  children: React.ReactNode | React.ReactNode[];
  formRef: React.RefObject<HTMLFormElement>;
};

export default function LoginFormProvider(
  props: LoginFormProviderProps
): JSX.Element | null {
  const { children, formRef } = props;
  const { login } = useAuth();
  const navigate = useNavigate();

  const defaultValues: ILoginForm = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );
  const resolver = useMemo(
    () => yupResolver(LoginFormSchema, { abortEarly: false }),
    []
  );

  const formMethods = useForm<ILoginForm>({
    criteriaMode: "all",
    defaultValues,
    mode: "onSubmit",
    resolver,
  });

  const { reset, handleSubmit } = formMethods;

  const onReset = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    const { email, password } = data;
    try {
      await login(email, password);
      navigate("/search");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const onError: SubmitErrorHandler<ILoginForm> = (errors) => {
    console.error("LoginFormProvider:onError", errors);
  };

  useEffect(() => {
    reset(defaultValues, { keepDirty: true });
  }, [defaultValues, reset]);

  return (
    <FormProvider {...formMethods}>
      <form
        ref={formRef}
        id={"login-form"}
        onReset={onReset}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export interface ILoginForm {
  email?: string;
  password?: string;
}

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const LoginFormSchema: ObjectSchema<ILoginForm> = yup.object().shape({
  email: string()
    .required()
    .test("email-regex", "Emails is not valid", (email) => {
      if (!email) return true;
      return emailRegex.test(email);
    }),
  password: string().required(),
});
