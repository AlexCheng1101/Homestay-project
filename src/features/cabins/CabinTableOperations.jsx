import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperatiuons() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "全部" },
          { value: "no-discount", label: "無折扣" },
          { value: "with-discount", label: "優惠中" },
        ]}
      />

      <SortBy
        options={[
          {
            value: "name-asc",
            label: "名字排序 (A-Z)",
          },
          {
            value: "name-desc",
            label: "名字排序 (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "價格排序 (低到高)",
          },
          {
            value: "regularPrice-desc",
            label: "價格排序 (高到低)",
          },
          {
            value: "maxCapacity-asc",
            label: "人數上限排序 (低到高)",
          },
          {
            value: "maxCapacity-desc",
            label: "人數上限排序 (高到低)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperatiuons;
