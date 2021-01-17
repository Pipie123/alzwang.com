import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBuilding,
        faUsers,
        faTerminal,
        faUniversity,
        faPencilAlt,
        faRobot
} from "@fortawesome/free-solid-svg-icons"
const Addition = () => (
    <Component>
        <Text>Used by</Text>
        <Wrapper>
            <Item>
                <FontAwesomeIcon icon={faBuilding}/>
                <Type>Business</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faUsers}/>
                <Type>Users</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faTerminal}/>
                <Type>Developers</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faUniversity}/>
                <Type>Students</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faPencilAlt}/>
                <Type>Writers</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faRobot}/>
                <Type>Robots</Type>
            </Item>
        </Wrapper>
    </Component>

);




const Component = styled.div`
  border: 1px solid orange;
`;
const Text = styled.p`
  margin: 0 0 1rem 0;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  padding: 0.5rem;
  border: 1px #ddd solid;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;
const Type = styled.p`
  margin: 0 0.5rem
`;

export default Addition
