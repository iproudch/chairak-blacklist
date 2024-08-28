import { Card, Input, Button, Typography } from "@material-tailwind/react";
import LoginFormProvider, { ILoginForm } from "../forms/LoginFormProvider";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";

export default function LoginOverviews() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <LoginFormProvider formRef={formRef}>
      <LoginFormContent />
    </LoginFormProvider>
  );
}

function LoginFormContent() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ILoginForm>();

  return (
    <div className="flex flex-col justify-center items-center p-16">
      <Card color="transparent" shadow={false}>
        <Typography
          variant="h4"
          color="blue-gray"
          className="flex justify-center"
        >
          Login
        </Typography>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <div>
              <Input
                crossOrigin={undefined}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-400 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <div>
              <Input
                type="password"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={undefined}
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-400 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          <Button type="submit" className="mt-6" fullWidth color="orange">
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a href="#" className="font-semibold text-gray-900">
              Contract Us
            </a>
          </Typography>
        </div>
      </Card>
    </div>
  );
}
