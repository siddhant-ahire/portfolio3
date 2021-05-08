import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import { Work } from '@material-ui/icons';
import './Timeline.css'

const CustomTimeline = () => {
    return (
        <div>
            <Timeline className={"timeline"}>
                {/* Item Header */}
                <TimelineItem className={'timeline_firstItem'}>
                    <TimelineSeparator>
                        <TimelineDot className={"timeline_dot_header"} ><Work/></TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" className={'timeline_header'}>
                            {"sid"}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                {/* Remaining Items */}
                <TimelineItem>
                    <CustomTimelineSeparator/>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={'separator_padding'}>
        <TimelineDot className={"timeline_dot"} />
        <TimelineConnector />
    </TimelineSeparator>
)


export default CustomTimeline
