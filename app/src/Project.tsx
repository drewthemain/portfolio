import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { overviews, projects } from "./Projects/ProjectData";

const ProjectContainer = styled('div')`
    width: 100%;
    height: 100vh;
`

const Project = () => {
    const {id} = useParams<string>();

    return (
        <ProjectContainer></ProjectContainer>
    )
}

export default Project;