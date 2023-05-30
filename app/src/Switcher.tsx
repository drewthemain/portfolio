import { Route, Routes} from 'react-router-dom';
import styled from "@emotion/styled";

// Helps orient the switcher so all windows are properly spaced
const SwitcherContainer = styled("div")`
    display: flex;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #0A0908;
`;

/**
 * Serves as a router for the website
 * @returns the correct route that should be displayed
 */
export default function Switcher() {

    return (
        <SwitcherContainer>
            <Routes>
            </Routes>
        </SwitcherContainer>
    );

}