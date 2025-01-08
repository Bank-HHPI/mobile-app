import React from 'react'
import { View } from 'react-native'

interface FilterHomeProps {
    activeFilter: "account" | "cards"
    setActiveFilter: (filter: "account" | "cards") => void
}

const FilterHome = ({
    activeFilter,
    setActiveFilter
}: FilterHomeProps) => {
    return (
        <View>

        </View>
    )
}

export default FilterHome