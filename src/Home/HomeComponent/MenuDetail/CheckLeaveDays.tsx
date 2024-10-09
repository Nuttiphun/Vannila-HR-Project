const CheckLeaveDays = () => {
  return (
    <div
      className="sm:w-[335px] sm:h-[378px] md:w-[455px] md:h-[378px] rounded-[10px] mx-5 md:mx-0
        bg-White-Rabbit shadow-Box-Shadow flex flex-col justify-between items-center
        sm:self-center box-border overflow-hidden"
    >
      <div className="text-Display-3 font-bold text-Bubblegum text-center sm:mt-8 md:mt-6">
        ตรวจสอบวันลาผ่านหน้าโปรไฟล์
      </div>
      <img
        src="/public/assets/image/LeaveProfile.svg"
        className="sm:w-[275px] sm:h-[282.51px] md:w-[293px] md:h-[301px]"
      />
    </div>
  );
};

export default CheckLeaveDays;
