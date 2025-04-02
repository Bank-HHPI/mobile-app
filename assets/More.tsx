import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "~/types"

function More({
    color = "#1C1C1E",
    size = 28,
}: IconProps) {
    return (
        <Svg
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={color}
        >
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
        </Svg>
    )
}

export default More
