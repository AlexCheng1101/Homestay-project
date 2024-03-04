import styled from "styled-components";
import Rooms from "../features/roomtype/Rooms";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import PageLayout from "../ui/PageLayout";
import Row from "../ui/Row";
import TableOperations from "../ui/TableOperations";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 200rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function RoomType() {
  return (
    <PageLayout>
      <Main>
        <Container>
          <Row type="horizontal">
            <Heading as="h1">房型</Heading>
            <TableOperations>
              <Filter
                filterField="discount"
                options={[
                  { value: "all", label: "全部" },
                  { value: "no-discount", label: "無折扣" },
                  { value: "with-discount", label: "優惠中" },
                ]}
              />
            </TableOperations>
          </Row>
          <Rooms />
        </Container>
      </Main>
    </PageLayout>
  );
}

export default RoomType;
