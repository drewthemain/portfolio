import styled from "@emotion/styled"
import { colors } from "../Style/colors"
import ProjectSpace from "./ProjectSpace"
import { ProjectDescriptor } from "../Types/types.d"
import { useState, useEffect } from "react"
import projects from "./ProjectData"

const ProjectsHolder = styled('div')`
    display: grid;
    width: 100%;
    grid-template-columns: 20vw 20vw 20vw;
    grid-gap: 5%;
    grid-template-rows: 50vh;
    grid-auto-rows: 50vh;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 10%;
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
        <ProjectsHolder>
            {setupProjects()}
        </ProjectsHolder>
    )
}