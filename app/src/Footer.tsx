import styled from "@emotion/styled"
import { colors } from "./Style/colors"

const FooterWrapper = styled('div')`
    background-color: ${colors.metal};
    height: 100px;
`

export default function Footer() {
    return (
        <FooterWrapper></FooterWrapper>
    )
}