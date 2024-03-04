import styled from "styled-components";
import Room from "./Room";
import { useCabins } from "../cabins/useCabins";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

const StyledRooms = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 28rem;
  gap: 2.4rem;
`;
function Rooms() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  // 篩選
  if (!cabins.length) return <Empty resourceName="cabins" />;
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 排序
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  return (
    <StyledRooms>
      {sortedCabins.map((cabin) => (
        <Room key={cabin.id} cabin={cabin} />
      ))}
    </StyledRooms>
  );
}

export default Rooms;
