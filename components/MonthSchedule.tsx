import React from 'react'
import { ThemedView } from './ThemedView'
import { MonthHeader } from './MonthHeader'
import { DayCard } from './DayCard'
import { Action } from '@/db/interfaceDb'
import { FlatList } from 'react-native'

type MonthScheduleProps = {
    month: Number,
    year: Number,
    actions: Array<Action> | [],
}

export const MonthSchedule = ({ month, year, actions }: MonthScheduleProps) => {

    return (
        <ThemedView>
            <MonthHeader month={month} year={year} />
            {actions.length < 1 && <DayCard item={{}} />}
            <FlatList
                data={actions}
                renderItem={({ item, index }) => (
                    <DayCard item={item} key={index} />
                )}
            />
        </ThemedView>
    )
}
