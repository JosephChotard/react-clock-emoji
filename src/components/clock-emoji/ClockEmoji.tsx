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

function parseNumber(num: number): [number, number] {
    let hour = Math.floor(num / 60)
    let minute = num % 60
    return [hour, minute]
}

function parseString(str: string): [number, number] {
    const date = new Date(str)
    if (date instanceof Date && !isNaN(date.getTime())) {
        return parseDate(date)
    }
    const [hours, minutes] = str.split(":")
    return [parseInt(hours, 10), parseInt(minutes, 10)]
}

function parseDate(date: Date): [number, number] {
    return [date.getHours(), date.getMinutes()]
}

const ClockEmoji: FC<ClockEmojiProps> = ({ time, defaultTime }) => {
    const timeToUse = time || defaultTime
    let hour: number = 0
    let minute: number = 0
    if (typeof timeToUse === "string") {
        [hour, minute] = parseString(timeToUse)
    } else if (typeof timeToUse === "number") {
        [hour, minute] = parseNumber(timeToUse)
    } else if (timeToUse instanceof Date) {
        [hour, minute] = parseDate(timeToUse)
    } else {
        console.error("Invalid time type")
    }
    const index = hourAndMinToIndex(hour, minute)
    return (<span><>{hour}:{minute} - {CLOCKS[index]}</></span>)
}

export default ClockEmoji
