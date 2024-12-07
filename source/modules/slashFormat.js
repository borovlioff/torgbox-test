const { extractTime } = require('../utils');

function parseSlash(input) {
    // DD/MM/YYYY
    const match = input.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (match) {
        const [_, day, month, year] = match;
        return `${year}-${month}-${day}T${extractTime(input)}`;
    }

    return null;
}

module.exports = parseSlash;
