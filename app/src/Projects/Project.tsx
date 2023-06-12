import styled from "@emotion/styled";
import useProject from "../Hooks/useProject";
import { Typography } from "@mui/material";
import { colors } from "../Style/colors";

const TopContainer = styled('div')`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
`


const EmptyContainer = styled('div')`
    width: 100%;
    height: 100vh;
`

const ProjectContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 90%;
    min-height: 100vh;
    margin: 2%;
    background-color: ${colors.metal};
    border-radius: 20px;
`

const BackgroundTop = styled('div')`
    width: 100%;
    height: fit-content;
    background-color: ${colors.red};
    display: flex;
    justify-content: center;
    border-radius: 20px 20px 0 0;
`

const BackgroundMiddle = styled('div')`
width: 100%;
height: fit-content;
background-color: ${colors.black};
display: flex;
justify-content: center;
`

const ImageGrid = styled('div')`
    display: grid;
    width: 100%;
    height: fit-content;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 80%;
    grid-gap: 3%;
`

const Image = styled('img')`
    position: relative;
    flex-shrink: 0;
    object-fit: cover;
    &:hover {
        filter: brightness(20%);
        transition: 0.3s;
    }
`

const ProjectHeader = styled(Typography)`
    font-weight: bold;
    color: ${colors.white};
    margin: 2%;
`
const Detail = styled(Typography)`
    color: ${colors.white};
    margin: 2%;
    font-weight: bold;
`

const Project = () => {
    const {loading, project, overview} = useProject();

    return (
        <TopContainer>
            {loading && <EmptyContainer />}
            {!loading && 
                <ProjectContainer>
                    <BackgroundTop>
                        <ProjectHeader variant="h2">{overview?.title}</ProjectHeader>
                    </BackgroundTop>
                    <BackgroundMiddle>
                        <Detail variant="body1">Project Length:</Detail>
                        <Detail variant="body1">Tools:</Detail>
                        <Detail variant="body1">Team Size:</Detail>
                    </BackgroundMiddle>
                    <ImageGrid>
                        {project?.imageOne != "" && <Image src={require(`../../images/${project?.imageOne}`)} alt="image one"></Image>}
                        {project?.imageTwo != "" && <Image src={require(`../../images/${project?.imageTwo}`)} alt="image two"></Image>}
                        {project?.imageThree != "" && <Image src={require(`../../images/${project?.imageThree}`)} alt="image three"></Image>}
                    </ImageGrid>
                </ProjectContainer>}
        </TopContainer>
    )
}

export default Project;