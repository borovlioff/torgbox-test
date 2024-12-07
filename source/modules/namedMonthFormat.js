const { months } = require('../utils');

function parseNamedMonth(input) {
    //  DD month YYYY
    let match = input.match(/(\d{1,2})\s+([а-яё]+)\s+(\d{4})/i);
    if (match) {
        const [_, day, monthName, year] = match;
        const month = months[monthName.toLowerCase()] || '01';
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00.000Z`;
    }

    //  DD month. YYYY
    match = input.match(/(\d{1,2})\s+([а-яё]{3})\.\s+(\d{4})/i);
    if (match) {
        const [_, day, monthName, year] = match;
        const month = months[monthName.toLowerCase()] || '01';
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00.000Z`;
    }

    return null;
}

module.exports = parseNamedMonth;
