import styled from "@emotion/styled"
import { colors } from "../Style/colors"
import ProjectSpace from "./ProjectSpace"
import { ProjectDescriptor } from "../Types/types.d"
import { useState, useEffect } from "react"
import projects from "./ProjectData"
import { Typography } from "@mui/material"

const WelcomeMessage = styled(Typography)`
    color: ${colors.white};
    margin-top: 8%;
    margin-bottom: 3%;
`

const MainContainer = styled('div')`
    text-align: center;
`

const Divider = styled('hr')`
    border: 1px solid ${colors.black};
`

const ProjectsHolder = styled('div')`
    display: grid;
    width: 100%;
    height: 60vh;
    grid-template-columns: 30vw 30vw;
    grid-gap: 15%;
    grid-template-rows: 50vh;
    grid-auto-rows: 50vh;
    justify-content: center;
    margin-top: 5%;

    @media (max-width: 900px) {
        grid-gap: 5%;
        grid-template-columns: 50vh;
        margin-top: 15%;
        height: 120vh;
    }
`

export default function Projects() {
    const [ Projects, setProjects ] = useState<ProjectDescriptor[]>([]);

    useEffect(() => {
        setProjects(projects);
    }, [])

    const setupProjects = () => {
        return Projects.map(( data : ProjectDescriptor) => {
            return (
                <ProjectSpace descriptor={data}></ProjectSpace>
            )
        })
    };

    return (
        <MainContainer>
            <WelcomeMessage variant="h5">Below are several projects I've worked on from React development <i>(including this portfolio)</i> to AI in game development. Thanks for visiting!</WelcomeMessage>
            <Divider />
            <ProjectsHolder>
                {setupProjects()}
            </ProjectsHolder>
        </MainContainer>
    )
}