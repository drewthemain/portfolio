import styled from "@emotion/styled"
import { colors } from "./Style/colors"

const SkillsContainer = styled('div')`
    width: 100%;
    height: 20vh;
    background-color: ${colors.onyx};
    margin-bottom: 3%;
    display: grid;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10%;
    grid-template-rows: 100%;
    grid-gap: 5%;
    justify-items: center;
    align-items: center;
`

const SkillsImage = styled('img')`
    width: 55%;
    height: 55%;

    min-width: 20px;
    min-height: 20px;
`

export default function Skills() {

    return (
        <SkillsContainer>
            <SkillsImage style={{width:"100%", height:"100%"}} src={require('./images/csharp.png')} alt="csharp"/>
            <SkillsImage src={require('./images/c++.png')} alt="c++"/>
            <SkillsImage src={require('./images/python.png')} />
            <SkillsImage style={{width:"60%", height:"55%"}} src={require('./images/react.png')} alt="react"/>
            <SkillsImage src={require('./images/type.png')} alt="typescript"/>
            <SkillsImage src={require('./images/unity.png')} alt="unity"/>
            <SkillsImage style={{width:"130%", height:"90%"}} src={require('./images/unreal.png')} alt="unreal"/>
        </SkillsContainer>
    )
}