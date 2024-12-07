const months = {
    января: '01', февраля: '02', марта: '03', апреля: '04', мая: '05', июня: '06',
    июля: '07', августа: '08', сентября: '09', октября: '10', ноября: '11', декабря: '12',
    янв: '01', фев: '02', мар: '03', апр: '04', май: '05', июн: '06',
    июл: '07', авг: '08', сен: '09', окт: '10', ноя: '11', дек: '12',
};

function normalizeInput(input) {
    return input.replace(/[«»"]/g, ''); // Убираем кавычки
}

// Возвращает время в формате HH:MM:SS
function extractTime(input) {
    const match = input.match(/(\d{1,2}):(\d{2})/);
    return match ? `${match[1].padStart(2, '0')}:${match[2]}:00.000Z` : '00:00:00.000Z';
}

module.exports = { months, normalizeInput, extractTime };
