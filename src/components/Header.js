import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const HeaderContainer = styled.div`
  display: flex;
  background-color: var(--slack-color);
  padding: 10px 0;
  width: 100%;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 280px) {
    > .MuiSvgIcon-root {
      display: none;
    }
  }

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  background-color: #421f44;
  border-radius: 6px;
  opacity: 1;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  @media (max-width: 280px) {
    flex: 0.4;
    padding: 0;
    margin-right: 20px;
  }

  > input {
    background-color: transparent;
    outline: none;
    border: none;
    color: #fff;
    text-align: center;
    min-width: 30vw;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  @media (max-width: 280px) {
    display: none;
  }

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="search" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
