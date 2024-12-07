const parseISO = require('./modules/ISO');
const parseDashDot = require('./modules/dashDotFormat');
const parseNamedMonth = require('./modules/namedMonthFormat');
const parseSlash = require('./modules/slashFormat');
const { normalizeInput } = require('./utils');

function source({ src, options }) {
    const input = src[options];
    if (!input) throw new Error('Invalid options');

    const inputNormalized = normalizeInput(input);

    // Пытаемся обработать с помощью разных парсеров
    try {
        return parseISO(inputNormalized)
            || parseDashDot(inputNormalized)
            || parseNamedMonth(inputNormalized)
            || parseSlash(inputNormalized);
    } catch (error) {
        throw new Error('Unrecognized date format');
    }
}

module.exports = source;
