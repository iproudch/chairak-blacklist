import { Button } from "@material-tailwind/react";

type ButtonProps = {
  label: string;
  type?: string;
  className?: string;
  buttonStyle?: object;
  onClick?: () => void;
};

export function ButtonDefault(props: ButtonProps) {
  const { label, className, type = "button", buttonStyle, onClick } = props;
  return (
    <Button
      className="flex w-max gap-4"
      style={buttonStyle}
      onClick={onClick}
      placeholder={undefined}
    >
      {label}
    </Button>
  );
}
