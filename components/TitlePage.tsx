import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";

export const TitlePage = () => {

    const color = useThemeColor({ light: undefined }, "text")

    return (
        <ThemedView style={[styles.container]}>
            <ThemedText type={"defaultSemiBold"}>Calendar</ThemedText>
        </ThemedView>
    )
};


const styles = StyleSheet.create({
    container: {
        height: 84,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 8,
    },
});

