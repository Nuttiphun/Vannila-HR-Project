const SetRole = () => {
  return (
    <div
      className="sm:w-[335px] sm:h-[304px] md:w-[455px] md:h-[250px] rounded-[10px]
        bg-Cotton-Candy shadow-Box-Shadow mx-5 md:mx-0 md:flex-grow-0 sm:order-5
        md:order-4"
    >
      <div className="grid sm:grid-rows-[auto,1fr] md:grid-cols-[auto,1fr] h-full">
        <div
          className="text-Display-3 font-bold text-Bubblegum text-center sm:mt-8 md:mt-24 md:ml-8
            whitespace-pre-wrap"
        >
          <span className="sm:block md:hidden">กำหนดระดับสิทธิ์ใช้งาน</span>
          <span className="hidden md:block">{`กำหนดระดับ\nสิทธิ์ใช้งาน`}</span>
        </div>

        <div className="flex items-center justify-center md:mt-7">
          <img
            src="/public/assets/image/SetRole.svg"
            className="sm:w-[224px] sm:h-[197px] md:w-[224px] md:h-[197px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SetRole;
