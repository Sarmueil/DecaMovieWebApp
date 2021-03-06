import React from 'react'
import PropTypes from 'prop-types';
import { Wrapper, Content, Text } from './HeroImage.styles'
import Header from '../Header/index'
const HeroImage = (prop) => (
    <Wrapper image={prop.image}>
       <Header />
        <Content>
            <Text>
                <h1>{prop.title}</h1>
                <p>{prop.text}</p>
            </Text>
        </Content>
    </Wrapper>
)
HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};

export default HeroImage;