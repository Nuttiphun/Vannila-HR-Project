import { HTMLAttributes } from "react";

type TPackageLabelProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  bullet: string;
};

const PackageLabelComponent = ({
  className,
  label,
  bullet,
  ...props
}: TPackageLabelProps) => {
  return (
    <div
      {...props}
      className={`inline-flex items-center justify-center mt-4 px-3 gap-1 text-Bubblegum
        ${className}`}
    >
      <div
        className={`w-[30px] h-[30px] rounded-full bg-Bubblegum text-center p-1 font-[16px]
          text-white `}
      >
        {bullet}
      </div>
      <div className="text-Display-3 font-bold text-Bubblegum">{label}</div>
    </div>
  );
};

export default PackageLabelComponent;
