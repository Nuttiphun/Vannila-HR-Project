import AboutEmployee from "./AboutEmployee";
import CheckLeaveDays from "./CheckLeaveDays";
import DepartmentManagement from "./DepartmentManagement";
import FAQ from "./Faq";
import LeaveProcess from "./LeaveProcess";
import LeaveRequest from "./LeaveRequest";
import PackageDetail from "./PackageDetail";

import SetRole from "./SetRole";

const MenuDetail = () => {
  return (
    <div>
      <div
        className="text-Display-1 font-bold text-Sherbet text-center sm:block md:hidden
          whitespace-pre-wrap"
      >
        {`จุดเด่น\nและรายละเอียดแต่ละเมนู`}
      </div>
      <div
        className="w-full hidden md:flex text-Display-1 font-bold text-Sherbet justify-center
          items-center"
      >
        {`จุดเด่น และรายละเอียดแต่ละเมนู`}
      </div>
      <div
        className="flex flex-col gap-[30px] md:flex-row md:flex-wrap md:justify-center
          md:mx-[250px]"
      >
        <LeaveRequest />
        <LeaveProcess />
        <div className="flex sm:flex-col gap-[30px] md:grid md:grid-flow-row">
          <CheckLeaveDays />
          <SetRole />
        </div>
        <AboutEmployee />
        <DepartmentManagement />
        <PackageDetail />
        <FAQ />
      </div>
    </div>
  );
};
export default MenuDetail;
