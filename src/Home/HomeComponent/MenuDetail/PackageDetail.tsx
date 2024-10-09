import { useState } from "react";
import PackageLabelComponent from "../../../Component/PackageDetail/PackageLabelComponent";
import PackagePrice from "../../../Component/PackageDetail/PackagePriceComponent";

const packagePlans = {
  cone: { perUnit: 29, discount: 60 },
  sundae: { perUnit: 59, discount: 100 },
  quart: { perUnit: 89, discount: 200 },
};

const PackageDetail = () => {
  const [empAmount, setEmpAmount] = useState(30);

  const handleEmpAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEmpAmount(Number(event.target.value));
  };

  const calcPackage = (
    amount: number,
    plan: { perUnit: number; discount: number },
  ) => {
    return plan.perUnit * amount - plan.discount;
  };

  const calcFullPrice = (
    amount: number,
    plan: { perUnit: number; discount: number },
  ) => {
    return amount * plan.perUnit;
  };

  return (
    <div className="flex flex-col justify-start p-5 items-center md:order-7">
      <div className="text-Display-2 text-center font-bold text-Sherbet whitespace-pre-wrap mb-2 ml-6">
        <span className="sm:block md:hidden">{`โปรโมชั่นราคาสุดพิเศษ\nเฉพาะเดือนนี้!`}</span>

        <span className="hidden md:block">{`โปรโมชั่นราคาสุดพิเศษเฉพาะเดือนนี้!`}</span>
      </div>
      <div className="text-P font-semibold text-Black-Panther ml-6 text-center">
        {`เลือกแพ็คเกจราคาตามความเหมาะสม\nของจำนวนพนักงานได้เลย`}
      </div>

      <PackageLabelComponent label="ระบุจำนวนพนักงานในบริษัท" bullet="1" />

      <div
        className="flex flex-col items-center w-[335px] h-[137px] pt-[20px] px-[48px]
          rounded-[10px] bg-white"
      >
        <div className="text-Display-3 font-bold text-Sherbet">{`พนักงาน ${empAmount} คน`}</div>

        <div className="w-[295px] gap-0">
          <input
            id="disabled-range"
            type="range"
            min={10}
            value={empAmount}
            onChange={handleEmpAmountChange}
            max={100}
            className="w-full h-2 bg-Bubblegum rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:bg-Bubblegum [&::-webkit-slider-thumb]:border-4
              [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150
              [&::-webkit-slider-thumb]:ease-in-out
              [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(255,255,255,1)]
              [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4
              [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-Bubblegum
              [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white
              [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:transition-all
              [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out
              [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-2
              [&::-webkit-slider-runnable-track]:rounded-full [&::-moz-range-track]:w-full
              [&::-moz-range-track]:h-2 [&::-moz-range-progress]:bg-Bubblegum
              [&::-moz-range-progress]:h-2 [&::-moz-range-progress]:rounded-full
              [&::-moz-range-track]:rounded-full"
          />
          <div className="grid w-full h-[16px] text-[12px] grid-cols-2">
            <div>10</div>
            <div className="flex flex-col items-end"> 100</div>
          </div>
        </div>
      </div>

      <PackageLabelComponent bullet="2" label="เลือกแผนบริการตามความต้องการ" />

      <div className="flex flex-col gap-5 md:flex-row md:gap-[33px] md:mt-[42px]">
        <PackagePrice
          className="order-1 md:order-2"
          isRecommend={true}
          packageIcon={<img src="/src/Component/icon/PricingConeIcon.svg" />}
          packageName="Sundae"
          discountPrice={calcPackage(empAmount, packagePlans.sundae)}
          price={calcFullPrice(empAmount, packagePlans.sundae)}
        />

        <PackagePrice
          className="order-2 md:order-1"
          packageIcon={<img src="/src/Component/icon/PricingConeIcon.svg" />}
          packageName="Cone"
          discountPrice={calcPackage(empAmount, packagePlans.cone)}
          price={calcFullPrice(empAmount, packagePlans.cone)}
        />

        <PackagePrice
          className="order-3"
          packageIcon={<img src="/src/Component/icon/PricingConeIcon.svg" />}
          packageName="Quart"
          discountPrice={calcPackage(empAmount, packagePlans.quart)}
          price={calcFullPrice(empAmount, packagePlans.quart)}
        />
      </div>
    </div>
  );
};

export default PackageDetail;
