import { ReactNode } from 'react'
export default function ChartFrame({ title, children }: { title: string; children?: ReactNode }) {
  return <section className="lobster-frame lobster-panel p-4"><h3 className="mb-2 text-sm text-yellow-300">{title}</h3><div className="h-48">{children ?? <div className="grid h-full place-items-center text-teal-200">placeholder</div>}</div></section>
}
