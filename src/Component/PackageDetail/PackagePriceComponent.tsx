import { HTMLAttributes, ReactNode } from "react";

const defaultBenefits = [
  `แจ้ง และอนุมัติวันลาที่ไหนก็ได้ผ่าน\nLINE OA`,
  `วันลาคงเหลือแต่ละประเภท\nประวัติการลา/อนุมัติ`,
  `กำหนดระดับสิทธิ์การใช้งาน`,
  `กำหนดรูปแบบ และจัดการ\nวันหยุด วันลาพักร้อน`,
  `จัดการข้อมูลแผนก และพนักงาน`,
];

type TPackagePriceProps = HTMLAttributes<HTMLDivElement> & {
  packageIcon: ReactNode;
  packageName: string;
  discountPrice: number;
  price: number;
  benefits?: string[];
  isRecommend?: boolean;
};

const PackagePrice = ({
  className,
  packageIcon: PackageIcon,
  packageName,
  price,
  discountPrice,
  benefits = defaultBenefits,
  isRecommend = false,
  ...props
}: TPackagePriceProps) => {
  return (
    <div
      {...props}
      className={`grid grid-flow-row auto-rows-auto w-[334px] h-auto rounded-[10px] border-2
        ${isRecommend ? "bg-Cotton-Candy border-Bubblegum divide-Bubblegum" : "bg-White-Rabbit border-Polar-Bear divide-Polar-Bear"}
        divide-y-2 ${className}`}
    >
      {isRecommend && (
        <div className="relative">
          <div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-Sherbet font-Anuphan
              font-[16px] leading-5 text-white text-center rounded-[4px] w-[118px] h-[21px]
              px-[5px] z-10"
          >
            แพ็คเกจแนะนำ!
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2 px-5 pt-5 pb-[40px] border-none">
        <div className="flex flex-row gap-[10px]">
          {PackageIcon}
          <div className="text-Display-2 font-bold text-Sherbet">
            {packageName}
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="text-Display-2 font-bold text-Avocado">
            {`${discountPrice.toLocaleString()} บาท/เดือน`}
          </div>

          <div
            className="text-[12px] font-medium text-Black-Panther line-through md:pt-2 md:ml-2 md:mt-0
              mt-1"
          >
            <span className="md:hidden">{`ราคาปกติ ${price.toLocaleString()} บาท/เดือน`}</span>
            <span className="hidden md:inline">{`${price.toLocaleString()} บาท`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-5 pt-5 pb-[22px] items-start">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-row gap-1">
            <img
              className="w-[25px] h-[25px]"
              src="/src/Component/icon/Correct.svg"
            />
            <div className="text-P font-semibold text-Black-Panther">
              {benefit}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center border-none pb-[20px]">
        <button className="w-[251px] h-[50px] rounded-[6px] self-center bg-Bubblegum">
          <div className="text-Display-3 font-bold text-White-Rabbit">
            ทดลองใช้ฟรี
          </div>
        </button>
      </div>
    </div>
  );
};

export default PackagePrice;
