import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "全部" },
          { value: "checked-out", label: "退房" },
          { value: "checked-in", label: "入住" },
          { value: "unconfirmed", label: "未確認" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "日期排序 (遠至近)" },
          { value: "startDate-asc", label: "日期排序 (近至遠)" },
          {
            value: "totalPrice-desc",
            label: "金額排序 (高至低)",
          },
          { value: "totalPrice-asc", label: "金額排序 (低至高)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
