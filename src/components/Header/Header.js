import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { HomeRounded, Telegram } from '@material-ui/icons';
import { NavLink, withRouter } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import Button from '../Button/Button';
import './Header.css'

const Header = (props) => {
    const pathname = props?.location?.pathname;
    return (
        <Navbar expand="lg" sticky="top" className="header">
            {/* Home Link */}
            <Nav.Link as={NavLink} to="/" className="header_navLink">
                <Navbar.Brand className="header_home">
                    <HomeRounded/>
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className="header_left">
                    {/* Resume Link */}
                    <Nav.Link as={NavLink} to="/" className={pathname== "/" ? "header_link_active" : "header_link"}>
                        Resume
                    </Nav.Link>
                    {/* Portfolio Link */}
                    <Nav.Link as={NavLink} to="/portfolio" className={pathname == "/portfolio" ? "header_link_active" : "header_link"}>
                        Portfolio
                    </Nav.Link>
                </Nav>
                <div className="header_right">
                    {Object.keys(resumeData.socials).map((key) => (
                        <a href={resumeData.socials[key].link} target="_blank" key={key}>
                            {resumeData.socials[key].icon}
                        </a>
                    ))}
                    <Button text={'Hire me'} icon={<Telegram/>}/>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)
