import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";
import ChartsHeader from "../../components/ChartHeader";
import { PyramidData } from "../../data/dummy";

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="هرمی" title="مقایسه کالری غذاها" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-cahrt"
          legendSettings={{
            background: currentMode === "Dark" ? "#33373E" : "white",
            textStyle: {
              color: currentMode === "Dark" ? "White" : "",
            },
          }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          tooltip={{ enable: true }}
          enableRtl>
          <Inject services={[AccumulationLegend, PyramidSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="غذا"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="60%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
              }}
              palettes={["#00BDAE", "#f53b57", "#0be881", "#7d5fff", "#ff793f", "#34ace0"]}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
