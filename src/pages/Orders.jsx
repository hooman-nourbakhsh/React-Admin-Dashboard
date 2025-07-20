import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from "@syncfusion/ej2-react-grids";
import Header from "../components/Header";
import { contextMenuItems, ordersData, ordersGrid } from "../data/dummy";
import Template from "../utils/customPager";

const Orders = () => {
  let grid;
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category={"صفحه"} title={"سفارشات"} />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowFiltering
        allowPdfExport
        enableRtl
        width="auto"
        pageSettings={{
          template: (pagerData) => Template(pagerData, grid),
          pageSize: 8,
        }}
        ref={(g) => (grid = g)}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        contextMenuItems={contextMenuItems}>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
