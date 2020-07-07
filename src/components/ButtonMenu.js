import React from 'react'
import styled from '@emotion/styled'
import media from '../style/mq'
import LanguageSelect from './LanguageSelect'

export const ButtonMenu = ({ handleClick, isOpen }) => {
  return (
    <>
      <ButtonHamburger
        onClick={() => handleClick()}
        className={isOpen ? 'active' : ''}
        aria-label='Menu Button'
      >
        <span />
      </ButtonHamburger>
      <LanguageSelect />
    </>
  )
}

export default ButtonMenu

const ButtonHamburger = styled.button`
  background: transparent;
  display: fixed !important;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  border-radius: 3px;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 59999;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  ${media.tabletSmall_up`
    display: none;
  `}
  &.active {
    position: absolute;
    span {
      background: transparent;
      &:before,
      &:after {
        top: 0;
        left: 0;
        background-color: #fff;
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }
  span {
    background: #dedede;
    border-radius: 10px;
    display: inline-block;
    height: 3px;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:before,
    &:after {
      content: '';
      background: #dedede;
      border-radius: 10px;
      display: inline-block;
      height: 3px;
      width: 100%;
      position: absolute;
      left: 0;
      transition: 0.3s;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
`
