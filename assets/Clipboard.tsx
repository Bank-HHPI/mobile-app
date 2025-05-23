import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "~/types"

function Clipboard({
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
                d="M4.842 21.942c0 1.908.984 2.892 2.865 2.892h8.227c1.88 0 2.865-.993 2.865-2.892v-1.626h1.494c1.88 0 2.865-.993 2.865-2.891v-6.952c0-1.16-.246-1.899-.94-2.61L17.84 3.396c-.668-.676-1.46-.94-2.47-.94h-3.305c-1.88 0-2.865.993-2.865 2.9v1.618H7.707c-1.88 0-2.865 1.002-2.865 2.9v12.067zm13.07-9.246l-4.764-4.834c-.668-.676-1.24-.861-2.198-.879v-1.52c0-.8.422-1.248 1.266-1.248h3.665V8.39c0 1.09.58 1.66 1.661 1.66H21.4v7.26c0 .81-.421 1.257-1.265 1.257h-1.336v-3.375c0-1.186-.15-1.74-.888-2.496zm-.58-4.526V4.927L20.942 8.6h-3.181c-.308 0-.43-.123-.43-.431zM6.59 21.828V9.99c0-.808.422-1.257 1.274-1.257h2.68v4.782c0 1.274.625 1.89 1.89 1.89h4.615v6.424c0 .809-.422 1.257-1.275 1.257H7.856c-.843 0-1.265-.448-1.265-1.257zm6.011-7.963c-.36 0-.518-.15-.518-.518v-4.28l4.729 4.798h-4.21z"
                fill={color}
            />
        </Svg>
    )
}

export default Clipboard
