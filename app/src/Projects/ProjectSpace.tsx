import styled from "@emotion/styled";
import { colors } from "../Style/colors";
import { ProjectDescriptor } from "../Types/types";
import { Typography } from "@mui/material";
import { useState } from "react";

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
    objecvt-fit: cover;
    &:hover {
        filter: brightness(50%);
        transition: 0.3s;
    }
`

const DescriptionContainer = styled('div')`
    align-text: center;
    position: absolute;
`

const ImageHeader = styled(Typography)`
    color: ${colors.white};
    margin-top: 5vh;
    
`

type ProjectSpaceProps = {
    descriptor : ProjectDescriptor;
}

const ProjectSpace = ({descriptor} : ProjectSpaceProps) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    return (
        <Space
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <SpaceImage src={require(`../../images/${descriptor.thumbnail}`)} alt="project thumbnail"/>
            {hover ? 
                <DescriptionContainer>
                    <ImageHeader variant="h5">{descriptor.title}</ImageHeader>
                </DescriptionContainer>
            : ""}
        </Space>
    )
}

export default ProjectSpace;