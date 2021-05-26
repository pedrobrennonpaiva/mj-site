import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <div>
            <div className={`${styles.footer}`}>
                <h6 className={`${styles.h_footer}`}>Copyright © 2021 - MJ Despachante - Todos os direitos reservados.</h6>
                <span className={`${styles.span_footer}`}>Desenvolvido por BDG Digital</span>
            </div>
        </div>
    )
}

export default Footer;
