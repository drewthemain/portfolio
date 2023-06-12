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
    padding-bottom: 2%;

    @media (max-width: 900px) {
        padding-bottom: 5%;
    }
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
    height: 50vh;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 80% 20%;
    grid-gap: 3%;
    justify-content: center;
    margin-top: 3%;
`

const DescriptionContainer = styled('div')`
    width: 80%;
    height: fit-content;
    text-align: left;
    margin-top: 3%;
`

const Image = styled('img')`
    position: relative;
    flex-shrink: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const ImageDescription = styled('div')`
    width: 100%;
    text-align: center;
    height: 100%;
    overflow-y: hidden;
`

const ParagraphText = styled(Typography)`
    color: ${colors.white};
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

    a {
        color: ${colors.red};
    }
`

const Project = () => {
    // Uses custom hook for grabbing the correct project from the id
    const {loading, project, overview} = useProject();

    return (
        <TopContainer>
            {/* Don't display until loading is complete */}
            {loading && <EmptyContainer />}

            {!loading && 
                <ProjectContainer>

                    <BackgroundTop>
                        <ProjectHeader variant="h2">{overview?.title}</ProjectHeader>
                    </BackgroundTop>

                    <BackgroundMiddle>
                        <Detail variant="body1">Project Length: {project?.length}</Detail>
                        <Detail variant="body1">Tools: {overview?.skills}</Detail>
                        <Detail variant="body1">Team Size: {project?.size}</Detail>
                        <Detail variant="body1">Link: <a href={project?.link} target="_blank" rel="noreferrer">{overview?.title}</a></Detail>
                    </BackgroundMiddle>

                    <DescriptionContainer>
                        <ParagraphText variant="body1">{project?.paragraphOne}</ParagraphText>
                        <br /><br />
                        <ParagraphText>{project?.paragraphTwo}</ParagraphText>
                    </DescriptionContainer>

                    <ImageGrid>
                        {project?.imageOne.path !== "" ? <Image src={require(`../../images/${project?.imageOne.path}`)} alt={project?.imageOne.alt}></Image> : <div />}
                        {project?.imageTwo.path !== "" ? <Image src={require(`../../images/${project?.imageTwo.path}`)} alt={project?.imageTwo.alt}></Image> : <div />}
                        {project?.imageThree.path !== "" ? <Image src={require(`../../images/${project?.imageThree.path}`)} alt={project?.imageThree.alt}></Image> : <div />}
                        <ImageDescription>
                            <Detail variant="body2">{project?.imageOne.description}</Detail>
                        </ImageDescription>
                        <ImageDescription>
                            <Detail variant="body2">{project?.imageTwo.description}</Detail>
                        </ImageDescription>
                        <ImageDescription>
                            <Detail variant="body2">{project?.imageThree.description}</Detail>
                        </ImageDescription>
                    </ImageGrid>
                    
                </ProjectContainer>}
        </TopContainer>
    )
}

export default Project;