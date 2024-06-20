import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'

const monthNames = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

export const MonthHeader = ({ month, year }) => {
    return (
        <ThemedView>
            <ThemedText style={{ fontWeight: 700, paddingLeft: 15, paddingVertical: 20 }}>{monthNames[month]} {year}</ThemedText>
        </ThemedView>
    )
}
