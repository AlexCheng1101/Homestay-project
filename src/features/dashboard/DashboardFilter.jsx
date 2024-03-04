import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "近7日" },
        { value: "30", label: "近30日" },
        { value: "90", label: "近90日" },
      ]}
    />
  );
}

export default DashboardFilter;
