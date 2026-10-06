import { CalendarDays, Leaf, Printer, Sprout } from "lucide-react"

const FEATURES = [
  {
    icon: Leaf,
    title: "Peak-season produce",
    body: "Each month spotlights an ingredient at its very best, so your shopping list follows the harvest.",
  },
  {
    icon: CalendarDays,
    title: "Clean monthly grids",
    body: "A full Sunday-to-Saturday layout for every month of 2027, with room to jot market days and dinners.",
  },
  {
    icon: Printer,
    title: "Print at home",
    body: "A high-resolution PDF ready for your home printer or local print shop. Trim, bind, and hang.",
  },
  {
    icon: Sprout,
    title: "Gentle inspiration",
    body: "Not a diet, not a rulebook. Just a quiet nudge on the wall to cook something seasonal tonight.",
  },
]

export function Features() {
  return (
    <section id="inside" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">{"What's Inside"}</p>
        <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Designed for the kitchen wall.
        </h2>
      </div>
      <ul className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
        {FEATURES.map(({ icon: Icon, title, body }) => (
          <li key={title} className="flex flex-col gap-4 bg-background p-8">
            <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="font-serif text-xl tracking-tight">{title}</h3>
            <p className="leading-relaxed text-muted-foreground">{body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
