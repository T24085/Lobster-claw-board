export default function StatCard({ label, value }: { label: string; value: string | number }) {
  return <div className="lobster-panel ocean-card p-4"><p className="text-xs text-teal-200">{label}</p><p className="text-2xl font-bold">{value}</p></div>
}
