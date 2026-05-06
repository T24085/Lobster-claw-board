export default function StatusBadge({ status }: { status: string }) {
  const tone = status.includes('error') || status.includes('failed') ? 'danger-alert' : status.includes('active') || status.includes('running') ? 'token-glow' : 'lobster-glow'
  return <span className={`rounded-full px-3 py-1 text-xs uppercase tracking-wide ${tone}`}>{status}</span>
}
