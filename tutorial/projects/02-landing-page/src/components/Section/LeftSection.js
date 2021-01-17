import React from "react"
import {Component, Wrapper, Text, PlaceHolderImage, SubHeader, Header, Item} from "../Components";

const LeftSection = () => (
    <Component>
        <Wrapper row>
            <Item right>
                <SubHeader>Moment of</SubHeader>
                <Header>The Yeet</Header>
            </Item>
            <Item left ml>
                <PlaceHolderImage />
                <Text>Ya Yeet Ya Yeet Ya Yeet Ya Yeet Ya Yeet Ya Yeet Ya Yeet Ya Yeet Ya Yeet Ya Yeet Ya Yeet Ya Yeet
                    Ya Yeet Ya Yeet Ya Yeet Ya Yeet Ya Yeet</Text>
            </Item>
        </Wrapper>
    </Component>
);

export default LeftSection
