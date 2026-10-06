export type Month = {
  index: number
  name: string
  ingredient: string
  note: string
  image: string
}

export const CALENDAR_YEAR = 2027

export const MONTHS: Month[] = [
  { index: 0, name: "January", ingredient: "Blood Oranges & Citrus", note: "Bright, bitter-sweet sunshine in the darkest weeks.", image: "/images/months/01.png" },
  { index: 1, name: "February", ingredient: "Roasted Beets", note: "Earthy roots, deep color, slow oven evenings.", image: "/images/months/02.png" },
  { index: 2, name: "March", ingredient: "Leeks & Pea Shoots", note: "The first green whispers of spring.", image: "/images/months/03.png" },
  { index: 3, name: "April", ingredient: "Asparagus", note: "Snap-fresh spears, best with lemon and butter.", image: "/images/months/04.png" },
  { index: 4, name: "May", ingredient: "Strawberries & Rhubarb", note: "Tart meets sweet in the classic pairing.", image: "/images/months/05.png" },
  { index: 5, name: "June", ingredient: "Cherries", note: "Short season, long memories. Eat them by the handful.", image: "/images/months/06.png" },
  { index: 6, name: "July", ingredient: "Heirloom Tomatoes", note: "Sliced thick with salt, oil and torn basil.", image: "/images/months/07.png" },
  { index: 7, name: "August", ingredient: "Peaches & Sweet Corn", note: "Peak summer, dripping and golden.", image: "/images/months/08.png" },
  { index: 8, name: "September", ingredient: "Figs & Grapes", note: "Jammy harvest fruit as the light softens.", image: "/images/months/09.png" },
  { index: 9, name: "October", ingredient: "Pumpkin & Squash", note: "Sage, brown butter and a warm oven.", image: "/images/months/10.png" },
  { index: 10, name: "November", ingredient: "Apples & Pears", note: "Crisp orchard fruit, spiced and baked.", image: "/images/months/11.png" },
  { index: 11, name: "December", ingredient: "Pomegranates & Chestnuts", note: "Jewel-toned seeds for the festive table.", image: "/images/months/12.png" },
]

export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function getMonthGrid(year: number, monthIndex: number): (number | null)[] {
  const firstWeekday = new Date(Date.UTC(year, monthIndex, 1)).getUTCDay()
  const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate()
  const cells: (number | null)[] = Array.from({ length: firstWeekday }, () => null)
  for (let day = 1; day <= daysInMonth; day++) cells.push(day)
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}
