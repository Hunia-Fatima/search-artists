exports.formatDateRange = function (startDate, endDate) {
    return startDate.getFullYear() + '-' + ("0" + (startDate.getMonth() + 1)).slice(-2) + '-' + startDate.getDate() + '%2C' + endDate.getFullYear() + '-' + ("0" + (endDate.getMonth() + 1)).slice(-2) + '-' + endDate.getDate()
}