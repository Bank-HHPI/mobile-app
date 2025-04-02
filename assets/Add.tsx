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
        viewBox="0 0 17 17"
        fill="none"
      >
        <Path
          d="M7.762 15.803c0 .522.453 1 1 .988.547.013 1.007-.472 1.007-.994V9.769h6.028c.535 0 1-.454.988-1.001.013-.547-.46-1.007-.994-1.007H9.763l.006-6.022c-.006-.54-.46-1.007-1.007-.994-.547-.013-1 .453-1 .988V7.76H1.733c-.522 0-1.007.46-.994 1.007-.013.547.466 1 .988 1h6.028l.007 6.035z"
          fill={color}
        />
      </Svg>
    )
}

export default Add
