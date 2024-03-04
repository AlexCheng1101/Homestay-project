import { Link } from "react-router-dom";
import styled from "styled-components";
import PageLayout from "../ui/PageLayout";

const StyledSection = styled.section`
  background-image: url("../cabin-001.jpg");
  background-size: cover;
  background-position: center;
`;
export default function Homepage() {
  return (
    <PageLayout>
      <StyledSection>
        <h1>
          隱藏在自然的懷抱中
          <br />
          給自己一次遠離都市喧囂的機會
        </h1>
        <h2>
          讓人們能夠重新連接自然，享受清新的空氣和壯觀的山景。每一個細節都精心設計，旨在為客人提供舒適和放鬆的體驗。無論是尋求冒險的旅人還是希望在寧靜中休憩的人，這間民宿都是您的理想之選。
        </h2>
        <Link to="/roomtype" className="login">
          立刻開始
        </Link>
      </StyledSection>
    </PageLayout>
  );
}
