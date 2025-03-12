import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import { IconProps } from "~/types"

const Add = ({
    color = "#1C1C1E",
    size = 28
}: IconProps) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
        >
            <Circle cx={14} cy={14} r={8} fill="#000" />
            <Path
                d="M13.991 22.742c4.984 0 9.097-4.113 9.097-9.088 0-4.974-4.122-9.088-9.106-9.088-4.974 0-9.079 4.114-9.079 9.088 0 4.975 4.114 9.088 9.088 9.088zm-4.254-9.079c0-.518.37-.879.88-.879h2.504V10.28c0-.51.352-.87.853-.87.518 0 .878.36.878.87v2.505h2.514c.501 0 .87.36.87.88 0 .5-.369.86-.87.86h-2.514v2.505c0 .501-.36.87-.878.87-.501 0-.853-.369-.853-.87v-2.505h-2.505c-.51 0-.879-.36-.879-.86z"
                fill={color}
            />
        </Svg>
    )
}

export default Add
