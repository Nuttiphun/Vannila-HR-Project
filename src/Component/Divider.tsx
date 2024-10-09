const Divider = () => {
  const calcBox = (): number => {
    const screenWidth = window.innerWidth;
    const previousSize = Math.ceil(screenWidth - 138 / 164);

    return previousSize;
  };

  return (
    <div className="relative flex flex-row gap-[30px] h-[62px] overflow-hidden mt-10">
      <div className="w-[26px] h-[62px] rounded-tr-[10px] rounded-br-[10px] bg-[#D9D9D9] flex-shrink-0"></div>
      <div
        className="hidden md:block md:w-[164px] md:h-[62px] md:rounded-[10px] md:bg-[#D9D9D9]
          md:flex-shrink-0"
      ></div>

      <div className="w-[164px] h-[52px] rounded-[10px] text-center flex-shrink-0">
        <div className="text-Display-3 font-bold text-Black-Panther">
          บริษัทที่ใช้งาน
        </div>
        <div className="text-Display-3 font-bold text-Black-Panther">
          ผ่านวันนี้ลา
        </div>
      </div>

      {Array.from({ length: calcBox() }).map((_, index) => (
        <div
          key={index}
          className="w-[164px] h-[62px] rounded-[10px] bg-[#D9D9D9] flex-shrink-0"
        ></div>
      ))}
    </div>
  );
};

export default Divider;
