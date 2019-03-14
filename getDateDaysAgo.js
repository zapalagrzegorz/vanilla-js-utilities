/* eslint-disable no-unused-vars */

/**
 * Podaj datę na wyznaczoną liczby dni wstecz
 * @param {number} daysBefore - liczba dni wstecz, która ma być punktem wyjścia, domyślnie 7
 * @param {string} format - format wyjściowy. Domyślnie 'dd.mm.yyyy'. Opcja narazie: 'yyyy-mm-dd'
 * @returns string - domyślnie week-day of a day week
 */
function getDateDaysAgo (daysBefore = 7, format) {
    
    const dateOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };

    const today = new Date();

    const dayAgo = new Date(today.setDate(today.getDate() - daysBefore));

    const date = dayAgo.toLocaleString(navigator.language, dateOptions);

    if (format === 'yyyy-mm-dd') {

        /* date jest w formacie 'dd.mm.yyyy' -> 'yyyy-mm-dd' */
        return date.replace(/(\w+)[.](\w+)[.](\w+)/g, '$3-$2-$1');
    }
    else {
        return date;
    }
}
