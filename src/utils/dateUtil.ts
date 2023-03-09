export const getMaxDay = () => {
    const today = new Date();
    today.setDate(today.getDate() + 7);
    return today.toISOString().split('T')[0];
};

export const getTravelTime = (startTime: string, endTime: string) => {
    const start = Number(startTime.slice(0, 2)) * 60 + Number(startTime.slice(3));
    const end = Number(endTime.slice(0, 2)) * 60 + Number(endTime.slice(3));
    const totalMinutes = end - start;

    const hours = Math.floor(totalMinutes / 60)
        .toString()
        .padStart(2, '0');
    const minutes = (totalMinutes % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}`;
};
