import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { useScrollPosition, useWindowSize } from './Hooks';

const Container = styled.article.attrs({
  style: (props) => ({
    transitionDelay: 200 * props.order + 'ms',
  }),
})`
  width: 100%;
  position: relative;
  background: var(--secondary-bg-color);
  padding: 6rem 1.5rem 1.5rem;
  margin-top: 25px;
  margin-bottom: 1rem;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 500ms ease-in-out, margin-top 500ms ease-in-out;

  &:nth-child(2) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1224px) {
    width: 49%;
    margin-bottom: 8rem;

    &:nth-child(2) {
      margin-right: 0;
      margin-left: 2%;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 8rem;

    &:nth-child(2) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  ${(props) =>
    props.render &&
    css`
      opacity: 1;
      margin-top: 0;
    `}
`;

const Image = styled.img`
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 160px;
  margin: 0 auto;
  display: block;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 0;
`;

const Subtitle = styled.h4`
  color: var(--secondary-bg-color);
  text-align: center;
  font-size: 0.9rem;
  margin-top: 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px dotted var(--secondary-bg-color);
`;

const Text = styled.p`
  line-height: 1.5;
`;

const Box = (props) => {
  const [render, setRender] = useState(false);
  const { h: height } = useWindowSize();
  const scroll = useScrollPosition();
  const { name, description, img, mail, role, order } = props;

  useEffect(() => {
    if (scroll > height / 1.5) {
      setRender(true);
    }

    if (scroll < height / 1.5) {
      setRender(false);
    }
  }, [scroll]);

  return (
    <Container render={render} order={order}>
      <Image data-src={img} className='lazyload' alt={name} />
      <Title>{name}</Title>
      <Subtitle>{role}</Subtitle>
      <Text>{description}</Text>
      <a href={`mailto:${mail}`}>{mail}</a>
    </Container>
  );
};

export default Box;
