import React from 'react';
import Button from 'components/atoms/Button/Button';
import { StyledNavLink } from 'components/atoms/NavLinkComponent/NavLinkComponent.style';
import { StyledNav } from './Nav.style';
import { useLocation } from 'react-router-dom';
const Nav = ({ onClickFunction }) => {
    const location = useLocation();
    return (
        <StyledNav>
            {location.pathname === '/' ? (
                <Button primary onClickFunction={onClickFunction}>
                    Refresh Data
                </Button>
            ) : (
                ''
            )}

            <StyledNavLink to="/">Home</StyledNavLink>

            <StyledNavLink to="/search">Search</StyledNavLink>
        </StyledNav>
    );
};

export default Nav;
