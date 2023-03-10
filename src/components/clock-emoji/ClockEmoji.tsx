import React, { FC } from "react"

type AcceptableTimeTypes = string | number | Date
type Option<T> = T | undefined | null

export interface ClockEmojiProps {
    time: Option<AcceptableTimeTypes>,
    defaultTime: AcceptableTimeTypes,
}



const CLOCKS = ['🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕡', '🕖', '🕢', '🕗', '🕣', '🕘', '🕤', '🕙', '🕥', '🕚', '🕦']


const hourAndMinToIndex = (hour: number, minute: number) => {
    hour = hour % 12
    minute = minute % 60
    let halfHour = 0
    if (minute >= 45) {
        hour = (hour + 1) % 12
    } else {
        halfHour = minute >= 15 ? 1 : 0
    }
    return (hour * 2) + halfHour
}

const ClockEmoji: FC<ClockEmojiProps> = ({ time, defaultTime }) => {
    const timeToUse = time || defaultTime
    let hour: number = 0
    let minute: number = 0
    if (typeof timeToUse === "string") {
        const date = new Date(timeToUse)
        if (date instanceof Date && !isNaN(date.getTime())) {
            hour = date.getHours()
            minute = date.getMinutes()
        } else {
            console.error("Invalid time string")
            const [hours, minutes] = timeToUse.split(":")
            hour = parseInt(hours, 10)
            minute = parseInt(minutes, 10)
        }
    } else if (typeof timeToUse === "number") {
        hour = Math.floor(timeToUse / 60)
        minute = timeToUse % 60
    } else if (timeToUse instanceof Date) {
        hour = timeToUse.getHours()
        minute = timeToUse.getMinutes()
    } else {
        console.error("Invalid time type")
        hour = 0
        minute = 0
    }
    const index = hourAndMinToIndex(hour, minute)
    return (<span><>{hour}:{minute} - {CLOCKS[index]}</></span>)
}

export default ClockEmoji