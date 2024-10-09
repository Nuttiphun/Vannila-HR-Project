import BlueCircleMedium from "../../../Component/BlueCircle/BlueCircleMedium";
import CircleUserIcon from "../../../Component/icon/CircleUserIcon";
import ClockIcon from "../../../Component/icon/ClockIcon";
import FilePenIcon from "../../../Component/icon/FilePenIcon";
import IdCardIcon from "../../../Component/icon/IdCardIcon";
import TableListIcon from "../../../Component/icon/TableListIcon";

const AboutEmployee = () => {
  return (
    <div
      className="sm:w-[335px] sm:h-[647px] md:w-[455px] md:h-[664px] mx-5 md:mx-0 rounded-[10px]
        bg-White-Rabbit shadow-Box-Shadow sm:order-4 md:order-5"
    >
      <div className="grid grid-rows-2 gap-4">
        <div className="sm:mt-5 md:mt-10">
          <div className="text-Display-2 font-bold text-Sherbet text-start ml-6">
            Employee’s Profile
          </div>
          <div
            className="text-P font-semibold text-Black-Panther text-start whitespace-pre-wrap mt-2
              overflow-hidden ml-6"
          >
            <span className="sm:block md:hidden">
              {`หน้าโปรไฟล์ส่วนตัว\nเลือกดูจำนวนวันลาคงเหลือ\nแยกตามประเภทต่าง ๆ \nและดูประวัติการทำงานของบริษัท\nได้ตลอดเวลาผ่าน LINE OA`}
            </span>
            <span className="hidden md:block">
              {`หน้าโปรไฟล์ส่วนตัว เลือกดูจำนวนวันลาคงเหลือ\nแยกตามประเภทต่าง ๆ และดูประวัติการทำงานของบริษัท\nได้ตลอดเวลาผ่าน LINE OA`}
            </span>
          </div>
          <div className="grid grid-cols-3 sm:mt-5 md:mt-8">
            <div>
              <BlueCircleMedium
                icon={
                  <ClockIcon className="w-[30px] h-[30px] fill-White-Rabbit" />
                }
                text={`วันลา\nคงเหลือ`}
              />
            </div>
            <div>
              <BlueCircleMedium
                icon={
                  <CircleUserIcon className="w-[30px] h-[30px] fill-White-Rabbit" />
                }
                text={`โปรไฟล์\nส่วนตัว`}
              />
            </div>
            <div>
              <BlueCircleMedium
                icon={
                  <TableListIcon className="w-[30px] h-[30px] fill-White-Rabbit" />
                }
                text={`ประวัติ\nการทำงาน`}
              />
            </div>
          </div>
        </div>
        <div className="sm:mt-0 md:mt-8">
          <div className="text-Display-2 font-bold text-Sherbet text-start ml-6 whitespace-pre-wrap">
            <span className="sm:block md:hidden">{`Employee’s\nManagement`}</span>
            <span className="hidden md:block">{`Employee’s Management`}</span>
          </div>
          <div
            className="text-P font-semibold text-Black-Panther text-start whitespace-pre-wrap mt-2
              overflow-hidden ml-6"
          >
            {`จัดการ แก้ไขข้อมูลเพื่อนร่วมงาน \nกำหนดสิทธิ์ในการใช้งานของระบบ HR `}
          </div>
          <div className="grid grid-cols-3 sm:mt-5 md:mt-8">
            <div>
              <BlueCircleMedium
                icon={
                  <FilePenIcon className="w-[30px] h-[30px] fill-White-Rabbit" />
                }
                text={`แก้ไข\nข้อมูล`}
              />
            </div>
            <div>
              <BlueCircleMedium
                icon={
                  <IdCardIcon className="w-[30px] h-[30px] fill-White-Rabbit" />
                }
                text={`ระดับสิทธิ์\nการใช้งาน`}
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEmployee;
