const { extractTime } = require('../utils');

function parseDashDot(input) {
    let match = input.match(/(\d{2})[-.](\d{2})[-.](\d{4})/);
    if (match) {
        const [_, day, month, year] = match;
        return `${year}-${month}-${day}T${extractTime(input)}`;
    }

    match = input.match(/(\d{4})[-.](\d{2})[-.](\d{2})/);
    if (match) {
        const [_, year, month, day] = match;
        return `${year}-${month}-${day}T${extractTime(input)}`;
    }

    return null;
}

module.exports = parseDashDot;
