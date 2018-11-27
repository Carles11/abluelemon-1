import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { useWindowSize, useScrollPosition } from './Hooks';
import { LocalesContext } from './Context';

const TitleWrapper = styled.section`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: ${props => props.size + 'px' || '100%'};
  padding: 15%;
  margin: auto 0;
  box-sizing: border-box;
  color: white;
  z-index: 1;

  @media only screen and (max-width: 649px) {
    width: 100%;
    padding: 10%;
  }
`;

const TitleItem = styled.h1`
  width: 100%;
  color: #ffffff;
  margin: 0;
  text-shadow: 1px 1px 1px #666;
  transform: translateY(10%);
  opacity: 0;
  transition: transform 600ms cubic-bezier(0.19, 1, 0.22, 1) 0.2s,
    opacity 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0.2s;

  ${props =>
    props.animate &&
    css`
      transform: translateY(-10%);
      opacity: 1;
    `}

  ${props =>
    props.initial &&
    css`
      transform: translateY(10%);
      opacity: 0;
    `}
`;

const TitleSpan = styled.mark`
  color: #15b6cd;
  background: transparent;
`;

const Subtitle = styled.h2`
  line-height: 1.25;
  margin: -5px;
`;

const Title = props => {
  const [animate, setAnimate] = useState(false);
  const [initial, setInitial] = useState(false);
  const LOCALES = useContext(LocalesContext);
  const { h } = useWindowSize();
  const scroll = useScrollPosition();
  const { text } = props;

  useEffect(
    () => {
      if (!animate && scroll < 400) {
        setAnimate(true);
        setInitial(false);
      }
      if (!initial && scroll > 400) {
        setInitial(true);
        setAnimate(false);
      }
    },
    [scroll],
  );

  return (
    <TitleWrapper size={h}>
      {!!text && (
        <TitleItem animate={animate} initial={initial}>
          {text}
        </TitleItem>
      )}
      {!text && (
        <TitleItem animate={animate} initial={initial}>
          At <TitleSpan>{LOCALES.APP_NAME} </TitleSpan>
          {LOCALES.MAIN_TITLE}
        </TitleItem>
      )}
    </TitleWrapper>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
