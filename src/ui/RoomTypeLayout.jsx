import { styled } from "styled-components";
import PageNav from "./PageNav";
import Rooms from "../features/roomtype/Rooms";
import TableOperations from "./TableOperations";
import Filter from "./Filter";
import Row from "./Row";
import Heading from "./Heading";

const StyledRoomTypeLayout = styled.div`
  height: calc(100vh);
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.1),
      rgba(36, 42, 46, 0.1)
    ),
    url("../forest.jpg");
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-size: cover;
  background-position: center;
`;

function RoomTypeLayout() {
  return (
    <StyledRoomTypeLayout>
      <PageNav />
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <TableOperations>
          <Filter
            filterField="discount"
            options={[
              { value: "all", label: "all" },
              { value: "no-discount", label: "No discount" },
              { value: "with-discount", label: "With discount" },
            ]}
          />
        </TableOperations>
      </Row>

      <Rooms />
    </StyledRoomTypeLayout>
  );
}

export default RoomTypeLayout;
