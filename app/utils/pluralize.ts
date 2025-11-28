/**
 * Возвращает правильную форму слова в зависимости от числа
 * @param count - число
 * @param forms - массив из трех форм: [форма для 1, форма для 2-4, форма для 5+]
 * @returns правильная форма слова
 * 
 * @example
 * pluralize(1, ['день', 'дня', 'дней']) // 'день'
 * pluralize(2, ['день', 'дня', 'дней']) // 'дня'
 * pluralize(5, ['день', 'дня', 'дней']) // 'дней'
 * pluralize(21, ['отзыв', 'отзыва', 'отзывов']) // 'отзыв'
 */
export function pluralize(count: number, forms: [string, string, string]): string {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  // Для чисел 11-14 всегда используется третья форма
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return forms[2]
  }

  // Для чисел, оканчивающихся на 1 - первая форма
  if (lastDigit === 1) {
    return forms[0]
  }
  
  // Для чисел, оканчивающихся на 2-4 - вторая форма
  if (lastDigit >= 2 && lastDigit <= 4) {
    return forms[1]
  }

  // Для остальных - третья форма
  return forms[2]
}

