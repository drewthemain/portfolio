import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";
import { colors } from "./Style/colors";

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
      label: "Linkedin",
      location: "",
    }
  ];

/**
 * Acts as the static header at the top of the site
 * @returns the header bar properly displayed
 */
export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    // Maps buttons to the proper values in headerOptions
    const getMenuButtons = () => {
        return headerOptions.map(({ label, location }) => {
          return (
            <HeaderButton
              {...{
                key: label,
                onClick: () => navigate(`/${location}`)
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