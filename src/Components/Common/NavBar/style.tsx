import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 50px;

  background-color: ${(props) => props.theme.navMenu.bar.bgColor};
`;

export const NavBarTitle = styled.div`
  flex: 1;
  overflow: hidden;

  text-align: center;
  text-overflow: ellipsis;
  font-size: 20px;
`;
