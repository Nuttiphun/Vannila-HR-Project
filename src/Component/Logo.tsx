type LogoProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const LogoComponent = ({ className }: LogoProps) => {
  return (
    <img className={className} src="/public/assets/logo/logo.svg" alt="logo" />
  );
};

export default LogoComponent;
