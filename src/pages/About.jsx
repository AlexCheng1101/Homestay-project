import styled from "styled-components";

import Heading from "../ui/Heading";
import PageLayout from "../ui/PageLayout";

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

  & p {
    font-size: 2rem;
    font-weight: 400;
  }
`;

function About() {
  return (
    <PageLayout>
      <Main>
        <Container>
          <Heading as="h1">關於我們</Heading>
          <p>
            建立於2020年，這間位於山林間的民宿以其優美的景色和寧靜的環境吸引著來自遠方的旅客。隱藏在自然的懷抱中，它提供了一個遠離都市喧囂的完美環境，讓人們能夠重新連接自然，享受清新的空氣和壯觀的山景。每一個細節都精心設計，旨在為客人提供舒適和放鬆的體驗。無論是尋求冒險的旅人還是希望在寧靜中休憩的人，這間民宿都是您的理想之選。
          </p>
        </Container>
      </Main>
    </PageLayout>
  );
}

export default About;
