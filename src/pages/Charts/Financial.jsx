import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Tooltip,
  HiloSeries,
  DateTime,
  Logarithmic,
  Crosshair,
  Zoom,
} from "@syncfusion/ej2-react-charts";
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import ChartsHeader from "../../components/ChartHeader";

const date1 = new Date("2018,1,1");

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.height, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category={"مالی"} title={"شرکت اپل"} />
      <div className="w-full">
        <ChartComponent
          enableRtl
          id="charts"
          primaryXAxis={{ ...FinancialPrimaryXAxis, labelStyle: { color: currentMode === "Dark" ? "white" : "" } }}
          primaryYAxis={{ ...FinancialPrimaryYAxis, labelStyle: { color: currentMode === "Dark" ? "white" : "" } }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          style={{ color: "#fff" }}>
          <Inject services={[HiloSeries, Legend, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={returnValue} xName="x" yName="low" name="Apple Inc" type="Hilo" low="low" high="high" />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
