import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { colors } from "./Style/colors";
import { css, keyframes } from "@emotion/react";
import { useEffect, useState } from 'react'

const SCROLL_LIMIT = 60;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -5px, 0);
  }

  70% {
    transform: translate3d(0, -3px, 0);
  }

  90% {
    transform: translate3d(0,-1px,0);
  }
`

// Describes the app header
const MainHeader = styled(AppBar)`
    background: ${colors.black};
    position: sticky;
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
`;

// Container for the full header bar
const HeaderContainer = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 100%;
`;

// Describes each individual header button
const HeaderButton = styled(Button)`
    font-weight: bold;
    font-size: 1vw;
    margin-left: 2vw;
    color: ${colors.red};
    &:hover {
      animation: ${bounce} 0.5s ease-out;
      color: ${colors.white};
    }
`;

// Describes the text for the header message
const HeaderText = styled(Typography)`
  color: ${colors.white};
  font-size: 2vw;
  font-weight: bold;

  &:hover {
    color: ${colors.red};
    transition: 0.2s;
  }
`;

// The various header button options with it's corresponding path
const headerOptions = [
    {
      label: "Home",
      location: "projects",

    },
    {
      label: "Resume",
      location: "resume",
    },
    {
      label: "Linkedin",
      location: "linkedin",
    },
    {
      label: "Github",
      location: "github",
    }
  ];

type HeaderProps = {
    scroll : number;
}

/**
 * Acts as the static header at the top of the site
 * @returns the header bar properly displayed
 */
const Header = ({scroll} : HeaderProps) => {
    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
      if (scroll >= SCROLL_LIMIT && !scrolled) {
        setScrolled(true);
      }
      else if (scroll < 1 && scrolled) {
        setScrolled(false);
      }
  }, [scroll])

    // Maps buttons to the proper values in headerOptions
    const getMenuButtons = () => {
        return headerOptions.map(({ label, location }) => {
          return (
            <HeaderButton
              {...{
                key: label,
                onClick: () => {
                  if (label === "Resume") {
                    window.open(`${window.location.origin.toString()}/ResumeDWCompSci.pdf`);
                  }
                  else if (label === "Linkedin") {
                    window.open("https://www.linkedin.com/in/drew-white-833797193/");
                  }
                  else if (label === "Github") {
                    window.open("https://github.com/drewthemain?tab=repositories");
                  }
                  else {
                    navigate(`/${location}`);
                  }
                }
              }
            }
            
            >
              {label}
            </HeaderButton>
          );
        });
      };
    
    // Returns the proper container for each header value
    const displayWelcome = () => {
        return <HeaderContainer>
            {welcomeMessage}
            <div>{getMenuButtons()}</div>
            </HeaderContainer>
    };

    const welcomeMessage = (
        <HeaderText variant="caption">
          Drew White - Developer
        </HeaderText>
    );


    return (
      <MainHeader style={{height: scrolled ? "5vh" : "13vh", transition: "0.5s", transitionProperty: "height"}}>
        {displayWelcome()}
      </MainHeader>
    );
}

export default Header;