import styled from "@emotion/styled";
import { colors } from "../Style/colors";
import { ProjectDescriptor } from "../Types/types";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Space = styled('div')`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${colors.onyx};
    border-radius: 5% 5% 0% 0%;
    overflow: hidden;
    overflow-wrap: break-word;
    min-width: 200px;
`

const SpaceImage = styled('img')`
    position: relative;
    flex-shrink: 0;
    object-fit: cover;
    &:hover {
        filter: brightness(20%);
        transition: 0.3s;
    }
`

const DescriptionContainer = styled('div')`
    align-text: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 25vw;
    pointer-events: none;
    display: flex;
    flex-direction: column;
`

const ImageHeader = styled(Typography)`
    color: ${colors.red};
    margin-top: 5vh;
    font-weight: bold;
    font-size: 2vw;
`

const ImageDescription = styled(Typography)`
    color: ${colors.white};
    margin-top: 5%;
    font-weight: bold;
    font-size: 1vw;
`

const ImageDate = styled(Typography)`
    color: ${colors.white};
    margin-top: 5%;
    font-style: italic;
    font-size: 1vw;
`

type ProjectSpaceProps = {
    descriptor : ProjectDescriptor;
}

const ProjectSpace = ({descriptor} : ProjectSpaceProps) => {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    const onClick = () => {
        navigate(`/project/${descriptor.id}`);
    };

    return (
        <Space
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
        >
            <SpaceImage src={require(`../../images/${descriptor.thumbnail}`)} alt="project thumbnail"/>
            {hover ? 
                <DescriptionContainer>
                    <ImageHeader variant="h4">{descriptor.title}</ImageHeader>
                    <ImageDate variant="h6">{descriptor.date}</ImageDate>
                    <ImageDescription variant="body1">{descriptor.description}</ImageDescription>
                    <ImageDescription variant="body2">Skills: {descriptor.skills}</ImageDescription>
                    <br></br>
                    <ImageDate variant="h6">Click to learn more!</ImageDate>
                </DescriptionContainer>
            : ""}
        </Space>
    )
}

export default ProjectSpace;