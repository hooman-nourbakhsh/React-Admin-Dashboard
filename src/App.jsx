import { BrowserRouter } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "./contexts/ContextProvider";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
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
            <div className={`w-72 fixed shrink-0 z-[${isClicked.cart ? 10 : "10001"}] dark:bg-secondary-dark-bg bg-white`}>
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
