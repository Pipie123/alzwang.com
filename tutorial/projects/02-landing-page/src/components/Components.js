import styled from "styled-components/macro"

export const Component = styled.div`
   border: 1px solid lightblue;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 2rem;
   min-height: 15vh;
   background-color: ${(props) => (props.bg ? "#fff" : "#fffeee")};
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: ${(props) => props.row ? "row" : "column"};
  align-items: center;
`;
export const SubHeader = styled.h4`
  text-align: center;
  padding: 0 1rem;
  margin: 0 0 1rem 0;
  border: black 1px solid;
  width: 100%
`;
export const Header = styled.h3`
  text-align: center;
  padding: 0 1rem;
  margin: 0 0 2rem 0;
  border: black 1px solid;
  width: 100%
`;
export const PlaceHolderImage = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #eee;
  border-radius: 1rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.20);
  background-color: white;
`;
export const Text = styled.p`
  border: black 1px solid;
  margin: 2rem 0 0;
  text-align: center;
`;


const getAlign = (props) => {
    return props.center ? "center" : props.right ? "flex-end" : "flex-start"
};

export const Item = styled.div `
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: ${(props => getAlign(props))};
  margin-right: ${(props => props.mr ? "2rem" : 0)};
  margin-left: ${(props => props.ml ? "2rem" : 0)};
`;
