import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { colors } from "./Style/colors";
import { css, keyframes } from "@emotion/react";

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
`;

// Container for the full header bar
const HeaderContainer = styled(Toolbar)`
    text-align: left;
    display: flex;
    justify-content: space-between;
    margin: 2% 5%;
`;

// Describes each individual header button
const HeaderButton = styled(Button)`
    font-weight: bold;
    font-size: 100%;
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
  font-size: 200%;
  font-weight: bold;
`;

// The various header button options with it's corresponding path
const headerOptions = [
    {
      label: "Projects",
      location: "projects",

    },
    {
      label: "About Me",
      location: "aboutme",
    },
    {
      label: "Resume",
      location: "resume",
    },
    {
      label: "Linkedin",
      location: "linkedin",
    }
  ];

/**
 * Acts as the static header at the top of the site
 * @returns the header bar properly displayed
 */
export default function Header() {
    const navigate = useNavigate();

    // Maps buttons to the proper values in headerOptions
    const getMenuButtons = () => {
        return headerOptions.map(({ label, location }) => {
          return (
            <HeaderButton
              {...{
                key: label,
                onClick: () => {
                  navigate(`/${location}`);
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
          Drew White - Computer Science
        </HeaderText>
    );


    return (
        <header>
            <MainHeader>{displayWelcome()}</MainHeader>
        </header>
    );
}