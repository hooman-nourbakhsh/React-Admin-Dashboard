import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { stackedCustomSeries, stackedPrimaryXAxis } from "../../data/dummy";

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={{ ...stackedPrimaryXAxis, labelStyle: { color: currentMode === "Dark" ? "white" : "" } }}
      primaryYAxis={{ labelStyle: { color: currentMode === "Dark" ? "white" : "" } }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{
        background: currentMode === "Dark" ? "#33373E" : "white",
        textStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      enableRtl={true}
      palettes={["#00bdae", currentMode === "Dark" ? "#f6e58d" : "#4b4b4b"]}>
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
