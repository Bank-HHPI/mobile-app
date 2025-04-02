import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "~/types"

function BottomArrow({
    color = "#1C1C1E",
    size = 28,
}: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
    >
      <Path
        d="M14 18.488c.308-.008.589-.123.817-.369l6.68-6.838c.193-.193.299-.44.299-.73 0-.58-.457-1.045-1.037-1.045-.282 0-.554.114-.756.316l-5.994 6.161-6.012-6.16a1.094 1.094 0 00-.756-.317c-.58 0-1.037.466-1.037 1.046a1 1 0 00.299.73l6.688 6.837c.238.246.501.37.809.37z"
        fill={color}
      />
    </Svg>
  )
}

export default BottomArrow
