import styled from "styled-components";
import PageNav from "./PageNav";

const StyledPageLayout = styled.div`
  height: calc(100vh);
  width: 100%;
  background-color: var(--color-grey-50);
  & section {
    display: flex;
    flex-direction: column;
    height: 81.9%;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    text-align: center;
  }

  & h1 {
    font-size: 4.5rem;
    line-height: 1.3;
  }

  & h2 {
    width: 90%;
    font-size: 1.9rem;
    margin-bottom: 2.5rem;
  }

  & a.login:link,
  & a.login:visited {
    background-color: var(--color-green-0);
    padding: 0.8rem 2rem;
    border-radius: 7px;
  }
`;

function PageLayout({ children }) {
  return (
    <StyledPageLayout>
      <PageNav />
      {children}
    </StyledPageLayout>
  );
}

export default PageLayout;
