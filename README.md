# React Clock Emoji

Simple component that renders the closest clock emoji to the current time.

## Installation

```bash
npm install react-clock-emoji
```

## Usage

```jsx
import React from 'react'

import { ClockEmoji } from 'react-clock-emoji'

const App = () => (
  <ClockEmoji time={"15:45"} defaultTime={"12:00"}/>
)
```

## Props

| Name        | Type                                    | Default | Description                                         |
| ----------- | --------------------------------------- | ------- | --------------------------------------------------- |
| time        | `string \| number \| Date \| undefined` | null    | Time to render the clock emoji for.                 |
| defaultTime | `string \| number \| Date`              | null    | Time to render the clock emoji for if time is null. |

If time is a number, it is assumed to be the number of minutes since midnight.
If time is a string, it is assumed to start with "HH:mm".

Time will always be modulates to ensure it is within the allowed range.

## Screenshots

<img width="145" alt="image-removebg-preview (1)" src="https://user-images.githubusercontent.com/44261381/226641769-6e65493a-1701-46df-923e-a375b903f2cd.png">

