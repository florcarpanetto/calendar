import { StyleSheet, View } from "react-native"
import { ThemedView } from "./ThemedView"
import { ThemedText } from "./ThemedText"
import { ClockIcon } from "react-native-heroicons/outline";
import { CheckCircleIcon, MapPinIcon } from "react-native-heroicons/solid";
import { Colors } from "@/constants/Colors";
import { extractDayAndDayName } from "@/constants/dateTransform";


export const DayCard = ({ item }) => {
    const { name, vendor, scheduledDate, status, arrivalStartWindow, arrivalEndWindow } = item;
    const { dayNumber, dayName } = extractDayAndDayName(scheduledDate);
    let backgroundColor = '';
    let statusText = ''
    let nameDay = dayName || 'TBD';

    switch (status) {
        case 'Scheduled': {
            backgroundColor = Colors.light.scheduled;
            statusText = `Scheduled ${arrivalStartWindow} ${arrivalEndWindow}`;
            break;
        }
        case 'Unscheduled': {
            backgroundColor = Colors.light.unscheduled;
            statusText = 'Schedule date & time TBD';
            break;
        }
        case 'Completed': {
            backgroundColor = Colors.light.completed;
            statusText = 'Completed';
            break;
        }
        default: {
            backgroundColor = Colors.light.noItem;
            nameDay = '';
            break;
        }
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.dateContainer}>
                <ThemedText
                    lightColor={Colors.light.dateText}
                    darkColor={Colors.dark.dateText}
                    style={styles.dayText}
                >
                    {nameDay}
                </ThemedText>
                <ThemedText
                    lightColor={Colors.light.dateText}
                    darkColor={Colors.dark.dateText}
                    style={{ ...styles.dateNumber, ...styles.shadow }}
                >
                    {dayNumber || ''}
                </ThemedText>
                {status === 'Completed' && <CheckCircleIcon color={Colors.light.completed} size={16} />}
                {status === 'Scheduled' && <ClockIcon color={Colors.light.completed} size={16} />}
            </ThemedView>

            <ThemedView style={{ ...styles.taskContainer, ...styles.shadow, backgroundColor: backgroundColor }}>
                <ThemedText style={styles.taskTitle}>{name || 'No Maintenance Scheduled'}</ThemedText>
                <ThemedText style={styles.taskDescription}>{vendor?.vendorName}</ThemedText>
                {vendor?.phoneNumber && <ThemedText style={styles.taskPhoneNumber}>{vendor?.phoneNumber}</ThemedText>}
                {vendor?.streetAddress && <View style={styles.adressContainer}>
                    <MapPinIcon color={Colors.dark.dateText} size={12} />
                    <ThemedText style={styles.taskAdress}>{vendor?.streetAddress}</ThemedText>
                </View>}
                {status && <ThemedText style={styles.taskStatus}>{statusText}</ThemedText>}
            </ThemedView>
        </ThemedView>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    dateContainer: {
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        minWidth: 65,
        paddingHorizontal: 16,
        height: '100%'
    },
    taskContainer: {
        width: 'auto',
        paddingHorizontal: 16,
        paddingVertical: 9,
        flex: 1,
        marginRight: 16,
        height: '100%',
        borderRadius: 4,

    },
    dayText: {
        opacity: 0.5,
        marginBottom: 5,
    },
    dateNumber: {
        opacity: 0.8,
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 8,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: 700,
        color: Colors.dark.dateText,
    },
    taskDescription: {
        fontSize: 12,
        fontWeight: 400,
        color: Colors.dark.dateText,
    },
    taskPhoneNumber: {
        fontSize: 12,
        fontWeight: 700,
        color: Colors.dark.dateText,
    },
    taskAdress: {
        fontSize: 12,
        fontWeight: 400,
        color: Colors.dark.dateText,
    },
    taskStatus: {
        fontSize: 12,
        fontWeight: 400,
        color: Colors.dark.dateText,
    },
    adressContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});