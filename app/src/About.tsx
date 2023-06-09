import styled from "@emotion/styled"
import { colors } from "./Style/colors"
import { Typography } from "@mui/material"

const AboutContainer = styled('div')`
    width: 100%;
    height: fit-content;
    min-height: 10vh;
    background-color: ${colors.metal};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const DescriptionContainer = styled('div')`
    width: 50%;
    height: fit-content;
    min-height: 50%;
`

const ImageContainer = styled('div')`
    width: 25%;
    height: 100%;
    overflow: hidden;
    border-radius: 50% 50%;
    margin: 2%;
`

const MainImage = styled('img')`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    object-fit: cover;
    transform: translate3d(0, 0, 1px);
`

const MainHeader = styled(Typography)`
    color: ${colors.white};
    font-weight: bold;
    margin-bottom: 3%;

    a {
        color: ${colors.red};
    }
`

export default function About() {

    return (
        <AboutContainer>
            <ImageContainer>
                <MainImage src={require(`./images/me.jpg`)} />
            </ImageContainer>
            <DescriptionContainer>
                <MainHeader variant="h4">Hello! I'm Drew White.</MainHeader>
                <MainHeader>I'm a recent Michigan State University graduate with a degree in Computer Science and a minor in Game Development. The merge of technology and creativity is my passion, ranging from web development to systems programming in games.</MainHeader>
                <br></br>
                <MainHeader>During my time at MSU, I was involved in several organizations based around development and was even able to serve as programming director on a student-run group I helped create, <a href="https://spartasoftstudio.itch.io/">Spartasoft Studio</a>. My internship experience at <a href="https://www.westmonroe.com/">West Monroe Partners</a> gave me further experience with full-stack development including React/Node/PostGreSQL. I am always eager to learn and willing to dive into new opportunities!</MainHeader>
            </DescriptionContainer>
        </AboutContainer>
    )
}