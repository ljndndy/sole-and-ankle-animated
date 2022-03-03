import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <LinkText>Sale</LinkText>
            <HoverLinkText aria-hidden="true">Sale</HoverLinkText>
          </NavLink>
          <NavLink href="/new">
            <LinkText>New&nbsp;Releases</LinkText>
            <HoverLinkText aria-hidden="true">New&nbsp;Releases</HoverLinkText>
          </NavLink>
          <NavLink href="/men">
            <LinkText>Men</LinkText>
            <HoverLinkText aria-hidden="true">Men</HoverLinkText>
          </NavLink>
          <NavLink href="/women">
            <LinkText>Women</LinkText>
            <HoverLinkText aria-hidden="true">Women</HoverLinkText>
          </NavLink>
          <NavLink href="/kids">
            <LinkText>Kids</LinkText>
            <HoverLinkText aria-hidden="true">Kids</HoverLinkText>
          </NavLink>
          <NavLink href="/collections">
            <LinkText>Collections</LinkText>
            <HoverLinkText aria-hidden="true">Collections</HoverLinkText>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const LinkText = styled.span`
  display: block;
  transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
`;

const HoverLinkText = styled(LinkText)`
  position: absolute;
  font-weight: ${WEIGHTS.bold};

  /* Overlay with opacity-based transition for users who prefer reduced motion */
  top: 0;
  opacity: 0;

  @media (prefers-reduced-motion: no-preference) {
    top: auto;
    opacity: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }

  /* Overlay with opacity-based transition for users who prefer reduced motion */
  &:hover > ${LinkText} {
    opacity: 1;
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover > ${LinkText} {
      transform: translateY(-100%);
      transition: transform 200ms ease-in-out;
    }
  }
`;

export default Header;
