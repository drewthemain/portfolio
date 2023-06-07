import { Route, Routes} from 'react-router-dom';
import styled from "@emotion/styled";
import Projects from './Projects/Projects';
import { colors } from "./Style/colors"

// Helps orient the switcher so all windows are properly spaced
const SwitcherContainer = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.raisin};
    margin: 0;
    padding: 0;
    margin-top: 7%;
`;

/**
 * Serves as a router for the website
 * @returns the correct route that should be displayed
 */
export default function Switcher() {

    return (
        <SwitcherContainer>
            <Routes>
                {/* Projects is currently homepage */}
                <Route path="" element={<Projects />} />

                {/* Route for linking to linkedin profile */}
                <Route path="linkedin" Component={() => {
                    window.location.replace("https://www.linkedin.com/in/drew-white-833797193/");
                    return null;
                }}/>

                {/* Route for linking to projects page */}
                <Route path="projects" element={<Projects />} />
            </Routes>
        </SwitcherContainer>
    );

}