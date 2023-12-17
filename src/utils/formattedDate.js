export function formattedDate(){
    const currentDate = new Date();
    const lastThirtyDays = new Date();
    const fiveYearsAgo = new Date();
    lastThirtyDays.setDate(lastThirtyDays.getDate() - 30);
    fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 3);

    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
    const formattedLastThirtyDays = lastThirtyDays.toISOString().split('T')[0];
    const formattedFiveYearsAgo = fiveYearsAgo.toISOString().split('T')[0];

    return{ formattedCurrentDate, formattedLastThirtyDays, formattedFiveYearsAgo}
}