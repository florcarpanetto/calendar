
export const extractDayAndDayName = (dateString: string) => {
    const date = new Date(dateString);

    const dayNumber = date.getDate();
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayName = dayNames[date.getDay()];

    return { dayNumber, dayName };
};


