import styled from "@emotion/styled"
import { colors } from "./Style/colors"
import { Typography } from "@mui/material"

const FooterWrapper = styled('div')`
    background-color: ${colors.metal};
    height: fit-content;
    width: 100%;
    text-align: center;
    padding-top: 1%;
    padding-bottom: 1%;
`

const FooterText = styled(Typography)`
    margin: auto;
`

const ContactHolder = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: ${colors.red};
    }
`

export default function Footer() {
    return (
        <FooterWrapper>
            <ContactHolder>
                <FooterText style={{ color: colors.white}} variant="body1">
                    Phone: <b>(517) 812-1456</b>, Email: <b><a href="mailto:drewwhitemail@gmail.com">drewwhitemail@gmail.com</a></b>
                </FooterText>
            </ContactHolder>
            <FooterText style={{ color: colors.red, fontWeight: "bold"}} variant="body1">
                Website Created By Drew White - 2023
            </FooterText>
        </FooterWrapper>
    )
}