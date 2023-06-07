import styled from "@emotion/styled";
import { colors } from "../Style/colors";
import { ProjectDescriptor } from "../Types/types";

const Space = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${colors.onyx};
    border-radius: 5% 5% 0% 0%;
`

type ProjectSpaceProps = {
    descriptor : ProjectDescriptor;
}

const ProjectSpace = ({descriptor} : ProjectSpaceProps) => {

    return (
        <Space>
            <p>{descriptor.title}</p>
        </Space>
    )
}

export default ProjectSpace;