const FirstComponent = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div
        className="grid sm:flex sm:flex-col sm:w-[335px] bg-White-Rabbit rounded-[10px]
          shadow-Box-Shadow md:flex-row-reverse md:w-[1134px] md:h-[492px]"
      >
        {/* Image Section */}
        <div
          className="flex sm:justify-center h-fit mt-4 md:mt-0 md:w-3/5 md:justify-end md:px-10
            md:py-10"
        >
          <img
            className="w-full h-full sm:max-h-[225px] md:max-h-[372px]"
            src="/public/assets/image/FirstImage.svg"
            alt="First Image"
          />
        </div>

        {/* Text Section */}
        <div
          className="bg-White-Rabbit rounded-b-[10px] sm:text-center p-4 md:text-left md:p-6 md:w-2/5
            md:mt-20 md:mb-20 md:pl-20 md:pr-0"
        >
          <div className="text-Display-1 font-bold text-Sherbet whitespace-pre-wrap">
            {`แอปลางานออนไลน์\nผ่าน LINE OA`}
          </div>

          {/* Small Screen Content */}
          <div
            className="text-Display-3 font-bold text-Black-Panther mt-3 sm:block md:hidden
              whitespace-pre-wrap"
          >
            {`แจ้งและอนุมัติวันลาออนไลน์\nใช้ง่าย ใช้งานผ่าน LINE OA\nไม่ต้องติดตั้งแอปเพิ่ม`}
          </div>

          {/* Medium Screen Content */}
          <div
            className="hidden md:flex md:space-x-2 text-Display-3 font-bold text-Black-Panther mt-3
              whitespace-pre-wrap"
          >
            {`แจ้งและอนุมัติวันลาออนไลน์ ใช้งานง่าย\nผ่าน LINE OA ไม่ต้องติดตั้งแอปเพิ่ม`}
          </div>

          {/* Buttons */}
          <a href="#">
            <button
              className="py-[10px] bg-Cotton-Candy hover:bg-Blueberry rounded-md sm:w-full md:w-[261px]
                h-[50px] text-Display-3 font-bold text-Bubblegum mt-5"
            >
              เข้าสู่ระบบ
            </button>
          </a>
          <a href="#">
            <button
              className="py-[10px] bg-Bubblegum hover:bg-[#4466D9] rounded-md sm:w-full md:w-[261px]
                h-[50px] text-Display-3 font-bold text-Cotton-Candy mt-3"
            >
              เริ่มต้นใช้งาน
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
