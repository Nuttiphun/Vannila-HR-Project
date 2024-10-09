import BlueCircleMedium from "../../../Component/BlueCircle/BlueCircleMedium";
import CalendarAltIcon from "../../../Component/icon/CalendarAltIcon";
import LetterIcon from "../../../Component/icon/LetterIcon";
import StampIcon from "../../../Component/icon/StampIcon";

const LeaveRequest = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div
        className="sm:w-[335px] sm:h-[393px] md:w-[358px] md:h-[423px] rounded-[10px]
          bg-White-Rabbit shadow-Box-Shadow p-3 flex flex-col justify-between box-border
          overflow-hidden"
      >
        <div
          className="text-Display-2 font-bold text-Sherbet text-start whitespace-pre-wrap overflow-
            ml-6"
        >
          {`Leave Request &\nManagement`}
        </div>
        <div
          className="text-P font-semibold text-Black-Panther text-start whitespace-pre-wrap mt-2
            overflow-hidden ml-6"
        >
          {`จัดการวันลา และแจ้งวันลาออนไลน์ผ่าน\nLINE OA`}
        </div>
        <div
          className="text-P font-semibold text-Persian-Cat text-start whitespace-pre-wrap mt-2
            overflow-hidden ml-6"
        >
          {`ระบบวันลาออนไลน์ ส่งคำขอวันลาทาง\nLINE OA และอนุมัติวันลาจากที่ใดก็ได้\nยังสามารถจัดการวันลา และประเภทต่าง ๆ \nได้อย่างอิสระ `}
        </div>
        <div className="grid grid-cols-3 mt-1">
          <div>
            <BlueCircleMedium
              icon={
                <LetterIcon className="w-[30px] h-[30px] fill-White-Rabbit" />
              }
              text={"แจ้งวันลา"}
            />
          </div>
          <div>
            <BlueCircleMedium
              icon={
                <StampIcon className="w-[30px] h-[30px] fill-White-Rabbit" />
              }
              text={"อนุมัติวันลา"}
            />
          </div>
          <div>
            <BlueCircleMedium
              icon={
                <CalendarAltIcon className="w-[30px] h-[30px] fill-White-Rabbit" />
              }
              text={"กำหนดวันลา"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
