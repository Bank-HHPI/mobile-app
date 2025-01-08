import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "~/types"

function Card({
    color = "#1C1C1E",
    size = 28
}: IconProps) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
        >
            <Path
                d="M21.506 6.052H6.486c-1.9 0-2.892.984-2.892 2.865v.791h20.803v-.791c0-1.88-.984-2.865-2.891-2.865zM7.268 18.47c-.519 0-.87-.343-.87-.844v-1.626c0-.492.351-.844.87-.844H9.42c.51 0 .861.352.861.844v1.626c0 .5-.351.844-.861.844H7.268zm-.783 2.812h15.02c1.908 0 2.893-.993 2.893-2.874v-6.636H3.594v6.636c0 1.89.993 2.874 2.891 2.874z"
                fill={color}
            />
        </Svg>
    )
}

export default Card
