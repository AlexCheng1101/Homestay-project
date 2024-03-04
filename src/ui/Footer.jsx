import { IconContext } from "react-icons";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import styled from "styled-components";
import Logo from "./Logo";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
  background-color: var(--color-grey-100);
  padding-top: 50px;

  & ul {
    display: flex;
    text-align: center;
    list-style: none;
    gap: 50px;
    font-size: 20px;
  }

  & ul li {
    cursor: pointer;
  }

  .footer-social-icon {
    display: flex;
    gap: 20px;
  }

  .footer-icons-container {
    padding: 10px;
    padding-bottom: 6px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
  }

  .footer-copy-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    margin-bottom: 30px;
    color: #1a1a1a;
    font-size: 20px;
  }

  .footer-copy-right hr {
    width: 80%;
    border: none;
    border-radius: 10px;
    height: 3px;
    background: #c7c7c7;
  }
`;

function Footer() {
  return (
    <IconContext.Provider value={{ size: 40 }}>
      <StyledFooter>
        <Logo />
        <ul className="footer-links">
          <li>民宿地址</li>
          <li>關於我們</li>
          <li>聯繫我們</li>
        </ul>
        <div className="footer-social-icon">
          <FaFacebook />
          <FaInstagramSquare />
        </div>

        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2023 - 版權所有.</p>
        </div>
      </StyledFooter>{" "}
    </IconContext.Provider>
  );
}

export default Footer;
