import styled from "@emotion/styled"
import { colors } from "./Style/colors"

// Holds the overall skills grid
const SkillsContainer = styled('div')`
    width: 100%;
    height: 10vw;
    background-color: ${colors.onyx};
    margin-bottom: 3%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 3%;
    justify-items: center;
    align-items: center;
    overflow-x: hidden;
`

// Sets size for each skill image
const SkillsImage = styled('img')`
    width: 5vw;
    height: 5vw;

    min-width: 20px;
    min-height: 20px;
`

export default function Skills() {

    return (
        <SkillsContainer>
            <SkillsImage style={{width:"9vw", height:"9vw"}} src={require('./images/csharp.png')} alt="csharp"/>
            <SkillsImage src={require('./images/c++.png')} alt="c++"/>
            <SkillsImage src={require('./images/python.png')} />
            <SkillsImage style={{width:"5vw", height:"4.5vw"}} src={require('./images/react.png')} alt="react"/>
            <SkillsImage src={require('./images/type.png')} alt="typescript"/>
            <SkillsImage src={require('./images/unity.png')} alt="unity"/>
            <SkillsImage style={{width:"10vw", height:"8vw"}} src={require('./images/unreal.png')} alt="unreal"/>
        </SkillsContainer>
    )
}