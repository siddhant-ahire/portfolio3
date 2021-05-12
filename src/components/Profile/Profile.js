import React from 'react'
import { Typography } from '@material-ui/core'
import profileImg from '../../assets/images/profile.jpg'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import './profile.css'
import { GetApp, PersonOutlineOutlined } from '@material-ui/icons'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import Button from '../Button/Button'

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timelineItem_text">
                    <span>{title}:</span>{" "}
                    <a href={link} target="_blank">
                        {text}
                    </a>
                </Typography>
            ):(<Typography className="timelineItem_text">
                <span>{title}:</span> {text}
            </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)


const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            <figure className="profile_image">
                <img src={profileImg} alt="siddhant ahire image" />
            </figure>
            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineOutlined />} >
                <CustomTimelineItem title="Name" text={resumeData.name}/>
                <CustomTimelineItem title="Email" text={resumeData.email}/>
                <CustomTimelineItem title="Dob" style={{fontSize:5}} text={resumeData.birthday}/>
                {Object.keys(resumeData.socials).map((key)=>(
                    <CustomTimelineItem title={key} key={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                ))}
                </CustomTimeline>
                <br />
                <Button text={'Download Cv'} icon={<GetApp/>}/>
            </div>

        </div>
    )
}

export default Profile
