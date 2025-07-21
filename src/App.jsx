import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "./contexts/ContextProvider";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Ecommerce from "./pages/Ecommerce";
import Orders from "./pages/Orders";
import Employess from "./pages/Employess";
import Customers from "./pages/Customers";
import Calendar from "./pages/Calendar";
import "./App.css";

import { loadCldr } from "@syncfusion/ej2-base";
import * as gregorian from "cldr-data/main/fa/ca-gregorian.json";
import * as numbers from "cldr-data/main/fa/numbers.json";
import * as timeZoneNames from "cldr-data/main/fa/timeZoneNames.json";
import * as numberingSystems from "cldr-data/supplemental/numberingSystems.json";
import * as weekData from "cldr-data/supplemental/weekData.json";

function App() {
  loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, isClicked } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed left-4 bottom-4 z-[1000]">
            <TooltipComponent content={"تنظیمات"} position="TopRight">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className={`w-72 fixed shrink-0 dark:bg-secondary-dark-bg bg-white`} style={{ zIndex: isClicked.cart ? 10 : "10001" }}>
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div className={`dark:bg-main-dark-bg bg-gray-100 min-h-screen max-w-full grow ${activeMenu && "lg:pr-72"}`}>
            <div className="sticky top-0 left-0 bg-main-bg dark:bg-main-dark-bg navbar">
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employess />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
