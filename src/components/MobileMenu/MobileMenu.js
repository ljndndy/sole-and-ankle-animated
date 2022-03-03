/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href="/sale" style={{ '--stagger-timing': '1'}}>Sale</NavLink>
            <NavLink href="/new" style={{ '--stagger-timing': '1.5'}}>New&nbsp;Releases</NavLink>
            <NavLink href="/men" style={{ '--stagger-timing': '2'}}>Men</NavLink>
            <NavLink href="/women" style={{ '--stagger-timing': '2.5'}}>Women</NavLink>
            <NavLink href="/kids" style={{ '--stagger-timing': '3'}}>Kids</NavLink>
            <NavLink href="/collections" style={{ '--stagger-timing': '3.5'}}>Collections</NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms" style={{ '--stagger-timing': '6'}}>Terms and Conditions</SubLink>
            <SubLink href="/privacy" style={{ '--stagger-timing': '7'}}>Privacy Policy</SubLink>
            <SubLink href="/contact" style={{ '--stagger-timing': '8'}}>Contact Us</SubLink>
          </Footer>
      </Content>
    </Overlay>
  );
};

const overlayBackgroundFade = keyframes`
 from {
  background: transparent;
 }
 to {
  background: var(--color-backdrop);
 }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayBackgroundFade} 1000ms;
  }
`;

const drawer = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  
  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation: ${drawer} 400ms cubic-bezier(.11,.12,0,.83);
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(25%);
  }
  to {
    opacity: 1;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  
  &:first-of-type {
    color: var(--color-secondary);
  }
  
  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation: ${fadeIn} 300ms both;
    animation-delay: calc(var(--stagger-timing) * 100ms);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
  
  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation: ${fadeIn} 400ms both;
    animation-delay: calc(var(--stagger-timing) * 100ms);
  }
`;

export default MobileMenu;
