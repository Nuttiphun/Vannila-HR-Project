import { useState } from "react";
import LetterIcon from "../../../Component/icon/LetterIcon";
import StampIcon from "../../../Component/icon/StampIcon";
import UmbrellaBeachIcon from "../../../Component/icon/UmbrellaBeachIcon";

const LeaveProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) {
      // Swiped left
      handleNextStep();
    } else if (touchEnd - touchStart > 50) {
      // Swiped right
      handlePrevStep();
    }
    setTouchStart(null);
  };

  return (
    <div
      className="flex flex-col justify-center items-center mt-5"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-[208px]">
        <div
          className={`absolute top-10 h-[2px] bg-Bubblegum z-10
            ${currentStep === 1 ? "w-[0%]" : currentStep === 2 ? "w-[50%]" : currentStep === 3 ? "w-[100%]" : "w-0"}`}
        />
        <div className={"absolute top-10 h-[2px] bg-white z-0 w-full"} />
      </div>
      <div
        className="sm:w-[335px] sm:h-[483px] md:w-[552px] md:h-[423px] rounded-[10px]
          bg-Cotton-Candy shadow-Box-Shado p-3 pb-5 md:pb-0 flex flex-col justify-between
          items-center box-border overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="flex flex-row justify-center items-center mt-[18px] w-[281px] gap-[42px] z-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center relative z-10">
            <div
              className={`flex items-center justify-center w-[30px] h-[30px] ${
                currentStep >= 1 ? "bg-Bubblegum" : "bg-White-Rabbit" } rounded-full shrink-0`}
            >
              <LetterIcon
                className={`w-[15px] h-[15px] ${currentStep >= 1 ? "fill-White-Rabbit" : "fill-Bubblegum"}`}
              />
            </div>
            <div className="mt-1 text-center">แจ้งวันลา</div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center z-10">
            <div
              className={`flex items-center justify-center w-[30px] h-[30px] ${
                currentStep >= 2 ? "bg-Bubblegum" : "bg-White-Rabbit" } rounded-full shrink-0`}
            >
              <StampIcon
                className={`w-[15px] h-[15px] ${currentStep >= 2 ? "fill-White-Rabbit" : "fill-Bubblegum"}`}
              />
            </div>
            <div className="mt-1 text-center">อนุมัติวันลา</div>{" "}
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center relative">
            <div
              className={`flex items-center justify-center w-[30px] h-[30px] ${
                currentStep >= 3 ? "bg-Bubblegum" : "bg-White-Rabbit" } rounded-full shrink-0`}
            >
              <UmbrellaBeachIcon
                className={`w-[15px] h-[15px] ${currentStep >= 3 ? "fill-White-Rabbit" : "fill-Bubblegum"}`}
              />
            </div>
            <div className="mt-1 font-Anuphan text-center">พักร้อน!</div>{" "}
          </div>
        </div>

        {/* Step-dependent Image with Navigation Buttons */}
        <div className="flex items-center justify-between mt-4 px-10 gap-10">
          <img
            src="/src/Component/icon/BackIcon.svg" // แทนที่ด้วย URL ของรูปภาพ "Previous"
            alt="Previous"
            className="cursor-pointer w-[50px] h-[50px] hidden md:flex" // ซ่อนปุ่มใน sm, แสดงใน md ขึ้นไป
            onClick={handlePrevStep} // ทำให้คลิกที่รูปภาพทำงานเหมือนปุ่ม
          />
          <div className="flex flex-col items-center self-end">
            {/* จัดให้รูปภาพชิดขอบล่าง */}
            {currentStep === 1 && (
              <img
                src="/public/assets/image/StepLeave.svg"
                alt="Step 1 Image"
                className="w-[293px]"
              />
            )}
            {currentStep === 2 && (
              <img
                src="/public/assets/image/StepApproved.svg"
                alt="Step 2 Image"
                className="w-[293px]"
              />
            )}
            {currentStep === 3 && (
              <img
                src="/public/assets/image/StepApproveAlert.svg"
                alt="Step 3 Image"
                className="w-[293px]"
              />
            )}
          </div>
          <img
            src="/src/Component/icon/NextIcon.svg"
            alt="Next"
            className="cursor-pointer w-[50px] h-[50px] hidden md:flex"
            onClick={handleNextStep}
          />
        </div>

        {/* Dots for Progress - Hidden on md and larger */}
        <div className="flex justify-center mt-4 sm:flex md:hidden">
          <div className="flex space-x-2">
            {[1, 2, 3].map((step) => (
              <span
                key={step}
                className={`w-2 h-2 rounded-full ${currentStep === step ? "bg-Bubblegum" : "bg-gray-300"}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveProcess;
