import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const itemStyles = css`
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.5s;

  &:hover {
    color: var(--secondary-bg-color);
    text-decoration: none;
  }

  @media only screen and (max-width: 649px) {
    display: block;
    width: 80%;
    margin: 0;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
    border-bottom: 1px solid #3f424e;

    &:last-child {
      border: none;
    }
  }
`;

const ItemStyles = styled(NavLink)`
  ${itemStyles}
`;

const NavigationItem = (props) => (
  <ItemStyles
    onClick={props.handleClick}
    key={props.label}
    exact
    to={props.url}
    activeStyle={{ color: 'var(--secondary-bg-color)' }}>
    {props.label}
  </ItemStyles>
);

NavigationItem.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavigationItem;
