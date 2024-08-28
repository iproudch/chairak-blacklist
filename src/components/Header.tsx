type HeaderProps = {
  label: string;
};
export default function Header(props: HeaderProps) {
  const { label } = props;
  return (
    <>
      <h1 className="flex font-sans text-4xl antialiased font-semibold leading-tight tracking-normal text-inherit">
        {label}
      </h1>
      <hr />
    </>
  );
}
