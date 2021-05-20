import { Typography } from '@material-ui/core'
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography >siddhant ahire</Typography>
            </div>
            <div className="footer_right">
                <Typography className="copyright_text">
                    Designed and Developed by <a href="/" target="_blank">Siddhant Ahire</a>
                </Typography>
            </div>
        </div>
    )
}

export default Footer
