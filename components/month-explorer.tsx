"use client"

import Image from "next/image"
import { useState } from "react"
import { CALENDAR_YEAR, MONTHS, WEEKDAYS, getMonthGrid } from "@/lib/months"

export function MonthExplorer() {
  const [selected, setSelected] = useState(0)
  const month = MONTHS[selected]
  const cells = getMonthGrid(CALENDAR_YEAR, selected)

  return (
    <section id="months" className="border-y bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">A Year at the Market</p>
            <h2 className="max-w-xl text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              One ingredient to celebrate every month.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Pick a month to preview its page &mdash; the featured produce and the full {CALENDAR_YEAR} date grid.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <div
            role="tablist"
            aria-label="Months of 2027"
            className="grid flex-1 grid-cols-3 gap-3 sm:grid-cols-4"
          >
            {MONTHS.map((m) => {
              const isActive = m.index === selected
              return (
                <button
                  key={m.name}
                  type="button"
                  role="tab"
                  id={`month-tab-${m.index}`}
                  aria-selected={isActive}
                  aria-controls="month-panel"
                  onClick={() => setSelected(m.index)}
                  className={`group flex flex-col gap-2 rounded-xl p-1.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    isActive ? "bg-muted" : "hover:bg-muted/60"
                  }`}
                >
                  <span className="relative block aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={m.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 140px, (min-width: 640px) 22vw, 30vw"
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                        isActive ? "" : "opacity-85"
                      }`}
                    />
                  </span>
                  <span className="px-1 pb-1">
                    <span className="block font-serif text-sm font-medium">{m.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{m.ingredient}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <article
            id="month-panel"
            role="tabpanel"
            aria-labelledby={`month-tab-${month.index}`}
            className="w-full overflow-hidden rounded-2xl border bg-background shadow-sm lg:w-[400px] lg:shrink-0"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={month.image}
                alt={`${month.ingredient} styled for the ${month.name} page`}
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl tracking-tight">{month.name}</h3>
                <span className="text-sm text-muted-foreground">{CALENDAR_YEAR}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-primary">{month.ingredient}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{month.note}</p>

              <table className="mt-6 w-full table-fixed text-center text-xs">
                <caption className="sr-only">{`${month.name} ${CALENDAR_YEAR} dates`}</caption>
                <thead>
                  <tr>
                    {WEEKDAYS.map((d) => (
                      <th key={d} scope="col" className="pb-2 font-medium uppercase tracking-wider text-muted-foreground">
                        {d.slice(0, 2)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: cells.length / 7 }, (_, row) => (
                    <tr key={row}>
                      {cells.slice(row * 7, row * 7 + 7).map((day, col) => (
                        <td key={col} className="py-1.5 tabular-nums">
                          {day ?? ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
