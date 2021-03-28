/* Footer for The Website */

import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer id="footer">
            <div>Copyright &copy; 2021, Xin Sheng</div>
            <Link style={{color: 'black'}} to="/about">About</Link>
        </footer>
    )
}

export default Footer
