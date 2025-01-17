import styled from "styled-components";

const StyleLayout = styled.div`
  display: flex;
  flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children, direction }) => {
  return <StyleLayout direction={direction}>{children}</StyleLayout>;
};

export default Layout;
