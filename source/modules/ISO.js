function parseISO(input) {
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/.test(input)) {
        if (input.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(input)) {
            return input;
        }
        // Добавляем секунды
        if (!/\.\d{3}/.test(input)) {
            return `${input}.000Z`;
        }
        return `${input}Z`;
    }

    if (/^\d{4}-\d{2}-\d{2}([+-]\d{2}:\d{2})?$/.test(input)) {
        const [date, tz] = input.split('+');
        return tz
            ? `${date}T00:00:00.000+${tz}`
            : `${date}T00:00:00.000Z`;
    }

    return null; // Если формат не подходит
}

module.exports = parseISO;
