import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'
import './Resume.css'

const Resume = () => {
    return (
        <>
            {/* About me */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">About me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" className="about_text">{resumeData.about}</Typography>
                </Grid>
            </Grid>
            {/* Education and Experiance */}
            <Grid container></Grid>
            {/* Service */}
            <Grid container></Grid>
        </>
    )
}

export default Resume
