// Преобразование даты в формат 'день и месяц', например, '15 марта'
function useFormatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const monthNames = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  return `${day} ${monthNames[monthIndex]}`;
}

export { useFormatDate };