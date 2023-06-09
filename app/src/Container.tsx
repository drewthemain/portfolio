import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Switcher from './Switcher';
import Footer from './Footer';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react'

const PATH = process.env.REACT_APP_PATH;

const MainContainer = styled('div')`
    width: 100%;
    height: 100%;
    display: block;
`

/**
 * Serves as the overall website container holding the header and switcher
 * @returns The header and switcher respectively
 */
export default function Container() {
    const [scroll, setScroll] = useState(0);

    // Scrolling parameters saved for header
    const handleScroll = () => {
        const position = window.scrollY;
        setScroll(position);
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <MainContainer>
            <Router basename={PATH}>          
                <Header scroll={scroll}/>
                <Switcher />
                <Footer />
            </Router>
        </MainContainer>
    )
}