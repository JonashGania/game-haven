export function formattedDate(){
    const currentDate = new Date();
    const lastThirtyDays = new Date();
    lastThirtyDays.setDate(lastThirtyDays.getDate() - 30);

    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
    const formattedLastThirtyDays = lastThirtyDays.toISOString().split('T')[0];

    return{ formattedCurrentDate, formattedLastThirtyDays}
}