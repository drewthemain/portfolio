import styled from "@emotion/styled"
import { colors } from "../Style/colors"
import ProjectSpace from "./ProjectSpace"
import { ProjectDescriptor } from "../Types/types.d"
import { useState, useEffect } from "react"
import { overviews } from "./ProjectData"
import { Typography } from "@mui/material"
import About from "../About"
import Skills from "../Skills"

const WelcomeMessage = styled(Typography)`
    color: ${colors.white};
    margin-bottom: 3%;
    font-weight: bold;
`

const MainContainer = styled('div')`
    text-align: center;
    width: 100%;
    height: fit-content;
    margin-bottom: 3%;
    min-height: 80vh;
`

const Divider = styled('hr')`
    border: 1px solid ${colors.black};
`

const ProjectsHolder = styled('div')`
    display: grid;
    grid-template-columns: 30vw 30vw;
    grid-gap: 15%;
    grid-template-rows: 30vw;
    grid-auto-rows: 30vw;
    justify-content: center;
    margin-top: 5%;
    width: 100%;
    height: 100%;

    @media (max-width: 900px) {
        grid-gap: 5%;
        grid-template-columns: 30vw;
        margin-top: 5%;
        margin-bottom: 5%;
        height: fit-content;
    }
`

export default function Projects() {
    const [ Projects, setProjects ] = useState<ProjectDescriptor[]>([]);

    useEffect(() => {
        setProjects(overviews);
    }, [])

    // Maps each overview to a project space for grid display
    const setupProjects = () => {
        return Projects.map(( data : ProjectDescriptor) => {
            return (
                <ProjectSpace descriptor={data}></ProjectSpace>
            )
        })
    };

    return (
        <MainContainer>
            <About />
            <Skills />
            <WelcomeMessage variant="h5">Below are a few projects I've worked on from React development <i>(including this portfolio)</i> to AI in game development. Thanks for visiting!</WelcomeMessage>
            <Divider />
            <ProjectsHolder>
                {setupProjects()}
            </ProjectsHolder>
        </MainContainer>
    )
}