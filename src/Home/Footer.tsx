import LogoComponent from "../Component/Logo";

const Footer = () => {
  return (
    <footer
      className="order-last flex flex-col gap-5 items-center mb-[120px] md:items-start
        md:mx-[153px]"
    >
      <div className="flex flex-col gap-5 items-center md:flex-row">
        <LogoComponent />
        <button className="text-Bubblegum">หน้าแรก</button>
        <button>จุดเด่น</button>
        <button>ราคา</button>
        <button>บทความ</button>
        <button>ติดต่อเรา</button>
      </div>

      <div className="w-[100%] h-[1px] bg-gray-500"></div>

      <div className="flex flex-col gap-5 items-center md:flex-row w-full">
        <div className="flex flex-col items-center md:flex-row gap-5 w-full">
          <button>ตั้งค่าคุกกี้</button>
          <button>ข้อตกลงและเงื่อนไข</button>
          <button>นโยบายการใช้คุกกี้</button>
          <button>นโยบายการคุ้มครองข้อมูลส่วนบุคคล</button>

          <div className="md:flex-grow"></div>

          <div className="flex flex-row gap-5 items-center">
            <img src="/src/Component/icon/LineIcon.svg" />
            <img src="/src/Component/icon/FacebookIcon.svg" />
            <img src="/src/Component/icon/TiktokIcon.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
