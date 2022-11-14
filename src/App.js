import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiFoodTruck } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <LogoWrapper>
            <GiFoodTruck />
            <Logo to={"/"}>yummy</Logo>
          </LogoWrapper>
          <List>
            <Li to={"/"}>Home</Li>
            <Li to={"/"}>About</Li>
            <Li to={"/"}>Contact test</Li>
          </List>
        </Nav>

        <Search />
        <Category />

        <Pages />
      </BrowserRouter>
    </div>
  );
}

const LogoWrapper = styled.div`
  display: flex;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  color: black;
  align-self: center;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    ul {
      margin-top: 20px;
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
`;

const Li = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  color: black;
  align-self: center;
  margin-left: 20px;

  :hover {
    border-bottom: 1px solid black;
  }
`;

export default App;
