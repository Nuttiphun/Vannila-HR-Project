import BlueCircleNormal from "../../Component/BlueCircle/BlueCircleNormal";
import CalendarIcon from "../../Component/icon/CalendarIcon";
import CompanionIcon from "../../Component/icon/CompanionIcon";
import DepartmentIcon from "../../Component/icon/DepartmentIcon";
import LetterIcon from "../../Component/icon/LetterIcon";
import StampIcon from "../../Component/icon/StampIcon";

const Overview = () => {
  return (
    <div>
      <div className="text-P font-semibold text-Black-Panther text-center mt-10">
        ภาพรวมของ Vannila
      </div>
      <div
        className="sm:text-Display-2 md:text-Display-1 font-bold text-Sherbet text-center mt-3
          whitespace-pre-wrap"
      >
        {`โปรแกรม HR บริหารงานบุคคล\nใช้ง่าย ใช้งานผ่าน LINE OA`}
      </div>

      <div
        className="grid sm:grid-cols-2 md:grid-cols-5 sm:ml-[30px] sm:mr-[30px] md:ml-[240px]
          md:mr-[240px]"
      >
        <div>
          <BlueCircleNormal
            icon={
              <LetterIcon className="w-[40px] h-[40px] fill-White-Rabbit" />
            }
            text={`แจ้งวันลาออนไลน์\nผ่าน LINE OA`}
          />
        </div>
        <div>
          <BlueCircleNormal
            icon={<StampIcon className="w-[40px] h-[40px] fill-White-Rabbit" />}
            text={`อนุมัติวันลา\nออนไลน์`}
          />
        </div>
        <div>
          <BlueCircleNormal
            icon={
              <DepartmentIcon className="w-[40px] h-[40px] fill-White-Rabbit" />
            }
            text={`จัดการแผนก\nต่าง ๆ`}
          />
        </div>
        <div>
          <BlueCircleNormal
            icon={
              <CompanionIcon className="w-[40px] h-[40px] fill-White-Rabbit" />
            }
            text={`จัดการข้อมูล\nเพื่อนร่วมงาน`}
          />
        </div>
        <div className="sm:col-span-2 md:col-span-1 flex justify-center items-center">
          <BlueCircleNormal
            icon={
              <CalendarIcon className="w-[40px] h-[40px] fill-White-Rabbit" />
            }
            text={`จัดการวันหยุด\nและปฏิทินวันหยุด`}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
