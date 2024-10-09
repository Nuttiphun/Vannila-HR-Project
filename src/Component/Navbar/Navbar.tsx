import { useState } from "react";
import LogoComponent from "../Logo";
import CloseIcon from "../icon/CloseIcon";

const NavbarComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative grid sm:grid-cols-2 md:grid-cols-3 sm:mx-5 sm:mt-5 md:mt-0
        md:mx-[155px]"
    >
      <div className="md:col-span-2 md:flex md:flex-row">
        <LogoComponent className="w-[164px] h-[83px] opacity-100 md:mt-[40px]" />

        <ul className="hidden md:flex md:mt-[78px]">
          <li className="px-4 md:left-[347px] text-Display-3 font-bold text-Bubblegum">
            <a href="#">หน้าแรก</a>
          </li>
          <li className="px-4 md:left-[449px] text-Display-3 font-bold text-Black-Panther">
            <a href="#" className="hover:text-Bubblegum">
              จุดเด่น
            </a>
          </li>
          <li className="px-4 md:left-[535px] text-Display-3 font-bold text-Black-Panther">
            <a href="#" className="hover:text-Bubblegum">
              ราคา
            </a>
          </li>
          <li className="px-4 md:left-[609px] text-Display-3 font-bold text-Black-Panther">
            <a href="#" className="hover:text-Bubblegum">
              บทความ
            </a>
          </li>
          <li className="px-4 md:left-[711px] text-Display-3 font-bold text-Black-Panther">
            <a href="#" className="hover:text-Bubblegum">
              ติดต่อเรา
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex md:mt-[66px] space-x-8 md:justify-end">
        <a href="#">
          <button
            className="flex justify-center py-[10px] px-[16px] bg-Cotton-Candy hover:bg-Blueberry
              rounded-md w-[164px] h-[50px] text-Display-3 font-bold text-Bubblegum"
          >
            เข้าสู่ระบบ
          </button>
        </a>
        <a href="#">
          <button
            className="flex justify-center py-[10px] px-[16px] bg-Bubblegum hover:bg-[#4466D9]
              rounded-md w-[194px] h-[50px] text-Display-3 font-bold text-Cotton-Candy"
          >
            เริ่มต้นใช้งาน
          </button>
        </a>
      </div>

      <div className="md:hidden flex flex-row-reverse items-center">
        {!isMenuOpen && (
          <button
            className="flex justify-center py-[10px] px-[16px] bg-Cotton-Candy hover:bg-Blueberry
              rounded-md w-[121px] h-[50px] text-Display-3 font-bold text-Bubblegum"
            onClick={() => setMenuOpen(true)}
          >
            เมนู
          </button>
        )}
        {isMenuOpen && (
          <button
            className="flex justify-center py-[10px] px-[16px]"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon className="w-6 h-6 fill-Bubblegum" />
          </button>
        )}

        {isMenuOpen && (
          <div
            className="absolute h-screen -bottom-[100vh] 2 z-10 mt-2 w-full rounded-md ring-black
              ring-opacity-5 bg-Vannila"
          >
            <ul className="sm:text-center">
              <li className="mb-4 text-Display-3 font-bold text-Bubblegum">
                <a href="#">หน้าแรก</a>
              </li>
              <li className="mb-4 text-Display-3 font-bold text-Black-Panther">
                <a href="#" className="hover:text-Bubblegum">
                  จุดเด่น
                </a>
              </li>
              <li className="mb-4 text-Display-3 font-bold text-Black-Panther">
                <a href="#" className="hover:text-Bubblegum">
                  ราคา
                </a>
              </li>
              <li className="mb-4 text-Display-3 font-bold text-Black-Panther">
                <a href="#" className="hover:text-Bubblegum">
                  บทความ
                </a>
              </li>
              <li className="mb-4">
                <a href="#">
                  <button
                    className="py-[10px] bg-Cotton-Candy hover:bg-Blueberry rounded-md w-[335px] h-[50px]
                      text-Display-3 font-bold text-Bubblegum"
                  >
                    เข้าสู่ระบบ
                  </button>
                </a>
              </li>
              <li className="mb-4">
                <a href="#">
                  <button
                    className="py-[10px] bg-Bubblegum hover:bg-[#4466D9] rounded-md w-[335px] h-[50px]
                      text-Display-3 font-bold text-Cotton-Candy"
                  >
                    เริ่มต้นใช้งาน
                  </button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarComponent;
