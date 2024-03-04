import { TbAirConditioning, TbParking, TbWifi } from "react-icons/tb";
import { MdSmokeFree } from "react-icons/md";
import styled from "styled-components";

import NewBookingForm from "../features/bookings/NewBookingForm";
import { IconContext } from "react-icons";
import PageLayout from "../ui/PageLayout";
import { useCabin } from "../features/cabins/useCabin";
import Spinner from "../ui/Spinner";
import Empty from "../ui/Empty";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Footer from "../ui/Footer";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 0 4.8rem;
  overflow: hidden;

`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & p {
    font-size: 2rem;
  }
  
`;

const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Facilities = styled.div`
  display: flex;
  align-items: center;
  & p {
    font-size: 2.8rem;
  }
`;

function RoomDetail() {
  const { isLoading, cabin } = useCabin();
  if (isLoading) return <Spinner />;
  if (!cabin) return <Empty resourceName="booking" />;
  const {
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  return (
    <PageLayout>
      <IconContext.Provider value={{ size: 40 }}>
        <Main>
          <Container>
            <Img src={image} />
            <Heading as={"h1"}>{`${name} - ${maxCapacity}人房`}</Heading>
            <Row type="horizontal">
              <p>
                {`價格:$${regularPrice} `}
                {discount > 0 && `折扣:$${discount}`}
              </p>
              <Modal>
                <Modal.Open opens="edit">
                  <Button>預定</Button>
                </Modal.Open>
                <Modal.Window name="edit">
                  <NewBookingForm />
                </Modal.Window>
              </Modal>
            </Row>

            <hr />
            <Heading as="h1">房內設施</Heading>
            <Row type="horizontal">
              <Facilities>
                <TbAirConditioning />
                <p>冷氣</p>
              </Facilities>
              <Facilities>
                <TbParking />
                <p>免費停車</p>
              </Facilities>
              <Facilities>
                <TbWifi />
                <p>無線網路</p>
              </Facilities>
              <Facilities>
                <MdSmokeFree />
                <p>無菸空間</p>
              </Facilities>
            </Row>
            <hr />
            <Heading as="h1">介紹</Heading>
            <p>{description}</p>
            <br />
          </Container>
        </Main>
        <Footer />
      </IconContext.Provider>
    </PageLayout>
  );
}

export default RoomDetail;
