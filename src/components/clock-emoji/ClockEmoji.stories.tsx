import { Story } from "@storybook/react"
import React from "react"
import ClockEmoji, { ClockEmojiProps } from "./ClockEmoji"


export default {
    title: "Clock Emoji",
    component: ClockEmoji,
    argTypes: {
        time: {
            control: {
                type: "select",
                options: [undefined, "12:00", "13:00", 23, new Date(2021, 0, 1, 14, 15), '2023-03-10T19:41:20.828Z'],
                default: "12:00",
            },
        },
        defaultTime: {
            control: {
                type: "range",
                min: -(60 * 48),
                max: (60 * 48),
                step: 15
            },
        }
    },
}

const Template: Story<ClockEmojiProps> = args => <ClockEmoji {...args} />

export const Time = Template.bind({})
