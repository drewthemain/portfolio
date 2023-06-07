import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Switcher from './Switcher';

const PATH = process.env.REACT_APP_PATH;

/**
 * Serves as the overall website container holding the header and switcher
 * @returns The header and switcher respectively
 */
export default function Container() {

    return (
        <Router basename={PATH}>          
            <Header />
            <Switcher />
        </Router>
    )
}