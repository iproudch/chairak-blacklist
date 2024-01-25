import { Input, Typography } from "@material-tailwind/react";

type InputFromProps = {
  label: string;
  placeholder?: string;
  type?: string;
  helperText?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // value: string;
};
export function InputDefault(props: InputFromProps) {
  const {
    label,
    placeholder,
    helperText,
    className,
    type = "text",
    onChange,
  } = props;
  return (
    <div>
      <div className={className ? className : "w-[34rem]"}>
        <Input
          label={label}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-mt-px h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        {helperText}
      </Typography>
    </div>
  );
}
