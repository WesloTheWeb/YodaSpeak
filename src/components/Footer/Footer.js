import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            {
                (new Date().getFullYear() == '2021') ?
                    <span>Copyright &copy; 2021</span>
                    : <span>Copyright &copy; 2021 - {new Date().getFullYear()} </span>
            }
        </footer>
    );
};

export default Footer;