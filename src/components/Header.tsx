import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkB } from 'react-scroll';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import styles from '../styles/header.module.css';
import logo from '../images/logo-header.png';

const Header = () => {

    return (
        <div>
            <div className={`${styles.div_top_header}`}>
                <span>Fale conosco: </span>
                <a href='https://api.whatsapp.com/send?phone=5521973014646' target='_blank'> (21) 97301-4646 </a> / 
                <a href='https://api.whatsapp.com/send?phone=5521976355821' target='_blank'> (21) 97635-5821 </a> / 
                <a href='https://api.whatsapp.com/send?phone=5521994386872' target='_blank'> (21) 99438-6872 </a> (Whatsapp) / 
                <a href='mailto:mjdespachante35@gmail.com' target='_blank'> mjdespachante35@gmail.com </a>
            </div>
            <Navbar className={`${styles.navbar}`} expand='md' collapseOnSelect>
                <Navbar.Brand as={Link} to='/'>
                    <img 
                        className={`${styles.img_logo} img-fluid`} 
                        src={logo}
                        alt='Logo'
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" className={`${styles.nav_toggle}`} />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={LinkB} className={`${styles.nav_link}`} activeClass="active" to="home" spy={true} smooth={true} duration={1000}>Início</Nav.Link>
                        <Nav.Link as={LinkB} className={`${styles.nav_link}`} activeClass="active" to="mission" spy={true} smooth={true} duration={1000}>Nossa missão</Nav.Link>
                        <Nav.Link as={LinkB} className={`${styles.nav_link}`} activeClass="active" to="services" spy={true} smooth={true} duration={1000}>Serviços</Nav.Link>
                        <Nav.Link as={LinkB} className={`${styles.nav_link}`} activeClass="active" to="others" spy={true} smooth={true} duration={1000}>Outros serviços</Nav.Link>
                        <Nav.Link as={LinkB} className={`${styles.nav_link}`} activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contato</Nav.Link>
                        <Nav.Link as={LinkB} className={`${styles.nav_link}`} activeClass="active" to="depoiment" spy={true} smooth={true} duration={1000}>Depoimentos</Nav.Link>
                        <Nav.Link as={LinkB} className={`${styles.nav_link}`} activeClass="active" to="partner" spy={true} smooth={true} duration={1000}>Parcerias</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
