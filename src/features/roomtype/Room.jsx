import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { useNavigate } from "react-router-dom";

const StyledRoom = styled.div``;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: center;
`;

function Room({ cabin }) {
  const navigate = useNavigate();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  return (
    <StyledRoom onClick={() => navigate(`/cabin/${cabinId}`)}>
      <Img src={image} />
      <Row type="horizontal">
        <Heading as="h3">{name}</Heading>
        <p>人數上限: {maxCapacity}</p>
      </Row>
      <Row type="horizontal">
        <p>價格:{regularPrice - discount}</p>
        <p>{discount > 0 ? "活動優惠中" : ""}</p>
      </Row>
    </StyledRoom>
  );
}

export default Room;
