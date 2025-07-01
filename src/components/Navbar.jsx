import { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-gray-100">
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex dark:shadow-gray-800 shadow-sm justify-between p-2 shadow-gray-200 relative">
      <NavButton title="منو" customFunc={() => setActiveMenu((prev) => !prev)} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex flex-row-reverse">
        <NavButton title="سبد خرید" customFunc={() => handleClick("cart")} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="چت" customFunc={() => handleClick("chat")} color={currentColor} dotColor="#03c9d7" icon={<BsChatLeft />} />
        <NavButton
          title="اطلاع رسانی"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          dotColor="#03c9d7"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent enableRtl={true} content="پروفایل" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100 rounded-lg" onClick={() => handleClick("userProfile")}>
            <img src={avatar} alt="user-avatar" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">سلام،</span>
              <span className="text-gray-400 text-14 font-bold ml-1">هوتن</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
