const dayStart = "07:30";
const dayEnd = "17:45";

/**
 *  Return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd)
 *  Return false if the meeting violates the work day bounds.
 * @param {string} startTime 
 * @param {number} durationMinutes 
 */
function scheduleMeeting(startTime, durationMinutes) {
    const dayStartMinutes = computeMinutes(dayStart);
    const dayEndMinutes = computeMinutes(dayEnd);
    const startTimeMinutes = computeMinutes(startTime);

    return (startTimeMinutes >= dayStartMinutes
        && startTimeMinutes + durationMinutes <= dayEndMinutes);

    /**
     * Compute minutes from HH:MM
     * @param {string} time Time in format HH:MM 
     */
    function computeMinutes(time) {
        const hourMinutes = time.split(":");
        return Number(hourMinutes[0] * 60) + Number(hourMinutes[1]);
    }
}

scheduleMeeting("7:00", 15);     // false
scheduleMeeting("07:15", 30);    // false
scheduleMeeting("7:30", 30);     // true
scheduleMeeting("11:30", 60);    // true
scheduleMeeting("17:00", 45);    // true
scheduleMeeting("17:30", 30);    // false
scheduleMeeting("18:00", 15);    // false
