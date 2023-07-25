import LunarCalendar from 'lunar-calendar';

export function getLunarDate(date) {
  const lunar = LunarCalendar.solarToLunar(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );

  return `${lunar.GanZhiYear}${lunar.zodiac}年 农历${lunar.lunarMonthName}${lunar.lunarDayName}`;
}
