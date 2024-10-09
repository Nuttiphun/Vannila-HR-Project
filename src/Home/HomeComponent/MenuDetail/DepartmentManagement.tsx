import { useState } from "react";
import BlueCircleMedium from "../../../Component/BlueCircle/BlueCircleMedium";
import FilePenIcon from "../../../Component/icon/FilePenIcon";
import FolderTreeIcon from "../../../Component/icon/FolderTreeIcon";
import PeopleGroupIcon from "../../../Component/icon/PeopleGroupIcon";

// Define type for the tab
type TabType = "manage" | "edit" | "move";

const DepartmentManagement = () => {
  // State to track which tab is selected, initial is "manage"
  const [selectedTab, setSelectedTab] = useState<TabType>("manage");

  // Function to update the selected tab with type annotation
  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  // Function to return the image based on the selected tab
  const renderImage = () => {
    switch (selectedTab) {
      case "manage":
        return (
          <div className="flex justify-center items-center">
            <img
              src="/public/assets/image/ManageDepartment.svg"
              alt="Manage Department"
              className="sm:w-[260px] md:w-[475px] h-auto mt-5"
            />
          </div>
        );
      case "edit":
        return (
          <div className="flex justify-center items-center">
            <img
              src="/public/assets/image/EditDepartment.svg"
              alt="Edit Department"
              className="sm:w-[260px] md:w-[475px] h-auto mt-5"
            />
          </div>
        );
      case "move":
        return (
          <div className="flex justify-center items-center">
            <img
              src="/public/assets/image/MoveDepartment.svg"
              alt="Move Department"
              className="sm:w-[260px] md:w-[482px] h-auto mt-5"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="sm:w-[335px] sm:h-[611px] md:w-[940px] md:h-[378px] rounded-[10px]
        bg-White-Rabbit shadow-Box-Shadow mx-5 md:mx-0 md:order-6"
    >
      <div className="grid sm:grid-rows-2 md:grid-cols-[auto,1fr] h-full">
        <div className="flex flex-col justify-start p-5">
          <div className="text-Display-2 font-bold text-Sherbet whitespace-pre-wrap mb-2 ml-6">
            {`Department\nManagement`}
          </div>
          <div className="text-P font-semibold text-Black-Panther ml-6">
            จัดการแผนก บริหารงานบุคคล
          </div>
          <div className="text-P font-semibold text-Persian-Cat whitespace-pre-wrap ml-6">
            <span className="sm:block md:hidden">
              {`ลาแล้วลาอีก อีกนิดจะลาออก\nมาจ้ามาลางานผ่านไลน์กัน\nเห็นชอบลากันทางไลน์ดีนักนะ`}
            </span>
            <span className="hidden md:block">
              {`เลือกจัดการเพื่อนร่วมงานเรียงตามแผนก\nย้ายเพื่อนร่วมงาน\nหรือแก้ไขข้อมูลเพื่อนร่วมงานโดยละเอียด`}
            </span>
          </div>
          <div className="grid grid-cols-3 md:max-w-fit md:ml-6 justify-start mt-6">
            <div>
              <BlueCircleMedium
                icon={
                  <PeopleGroupIcon
                    className={"w-[30px] h-[30px] fill-White-Rabbit "}
                  />
                }
                text={`จัดการ\nแผนก`}
              />
            </div>
            <div className="md:px-5">
              <div></div>
              <BlueCircleMedium
                icon={
                  <FilePenIcon
                    className={"w-[30px] h-[30px] fill-White-Rabbit "}
                  />
                }
                text={`แก้ไข\nแผนก`}
              />
            </div>
            <div>
              <BlueCircleMedium
                icon={
                  <FolderTreeIcon
                    className={"w-[30px] h-[30px] fill-White-Rabbit"}
                  />
                }
                text={`ย้าย\nแผนก`}
              />
            </div>
          </div>
        </div>

        {/* Lower Grid Section */}
        <div className="flex justify-center sm:mt-12 md:mt-6 ml-7">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500
                dark:text-gray-400"
            >
              <li className="me-2">
                <a
                  onClick={() => handleTabClick("manage")}
                  className={`inline-flex items-center justify-center mt-4 px-3 gap-1 transition-colors
                    duration-200 ease-in-out ${
                    selectedTab === "manage"
                        ? "text-Bubblegum border-b-2 border-Bubblegum"
                        : "text-Black-Panther border-transparent"
                    } rounded-t-lg`}
                >
                  <PeopleGroupIcon
                    className={`w-[20px] h-[20px] transition-colors duration-200 ease-in-out ${
                      selectedTab === "manage"
                        ? "fill-Bubblegum"
                        : "fill-gray-400"
                      }`}
                  />
                  <div className="text-Display-3 font-bold">จัดการ</div>
                </a>
              </li>
              <li className="me-2">
                <a
                  onClick={() => handleTabClick("edit")}
                  className={`inline-flex items-center justify-center mt-4 px-3 gap-1 transition-colors
                    duration-200 ease-in-out ${
                    selectedTab === "edit"
                        ? "text-Bubblegum border-b-2 border-Bubblegum"
                        : "text-Black-Panther border-transparent"
                    } rounded-t-lg`}
                >
                  <FilePenIcon
                    className={`w-[20px] h-[20px] transition-colors duration-200 ease-in-out ${
                      selectedTab === "edit"
                        ? "fill-Bubblegum"
                        : "fill-gray-400"
                      }`}
                  />
                  <div className="text-Display-3 font-bold">แก้ไข</div>
                </a>
              </li>
              <li className="me-2">
                <a
                  onClick={() => handleTabClick("move")}
                  className={`inline-flex items-center justify-center mt-4 px-3 gap-1 transition-colors
                    duration-200 ease-in-out ${
                    selectedTab === "move"
                        ? "text-Bubblegum border-b-2 border-Bubblegum"
                        : "text-Black-Panther border-transparent"
                    } rounded-t-lg`}
                >
                  <FolderTreeIcon
                    className={`w-[20px] h-[20px] transition-colors duration-200 ease-in-out ${
                      selectedTab === "move"
                        ? "fill-Bubblegum"
                        : "fill-gray-400"
                      }`}
                  />
                  <div className="text-Display-3 font-bold">ย้าย</div>
                </a>
              </li>
            </ul>
            {/* Render Image based on selectedTab */}
            {renderImage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentManagement;
