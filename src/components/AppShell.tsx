import { useEffect, useMemo, useState } from 'react'
import { agents as seedAgents, tasks as seedTasks, logs, tokenUsage, alerts, memoryStats } from '../data/mockDashboardData'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import DashboardGrid from './DashboardGrid'
import AgentCard from './AgentCard'
import TaskTable from './TaskTable'
import ActivityFeed from './ActivityFeed'
import AlertsPanel from './AlertsPanel'
import MascotWidget from './MascotWidget'

export default function AppShell() {
  const [tick, setTick] = useState(0)
  const [agentFilter, setAgentFilter] = useState('all')
  const [taskFilter, setTaskFilter] = useState('all')
  useEffect(() => { const id = setInterval(() => setTick((t) => t + 1), 5000); return () => clearInterval(id) }, [])

  const agents = useMemo(() => seedAgents.map((a) => ({ ...a, tokens: a.tokens + tick * 12 })), [tick])
  const tasks = useMemo(() => seedTasks, [])
  const visibleAgents = agents.filter((a) => agentFilter === 'all' || a.status === agentFilter)
  const visibleTasks = tasks.filter((t) => taskFilter === 'all' || t.status === taskFilter)

  const stats = [
    { label: 'Active Agents', value: agents.filter((a) => a.status === 'active').length },
    { label: 'Open Tasks', value: tasks.filter((t) => t.status !== 'done').length },
    { label: 'Tokens / Minute', value: tokenUsage.at(-1)?.tokens ?? 0 },
    { label: 'Total Tokens Today', value: agents.reduce((sum, a) => sum + a.tokens, 0) },
    { label: 'Errors Today', value: tasks.reduce((sum, t) => sum + t.errors, 0) },
    { label: 'Loop Warnings', value: 3 },
    { label: 'Worker Health', value: '88%' },
    { label: 'Memory Usage', value: `${memoryStats.usedGb}/${memoryStats.totalGb} GB` }
  ]

  return <div className="min-h-screen bg-slate-950 text-slate-100 p-4"><div className="flex flex-col md:flex-row gap-4"><Sidebar /><main className="flex-1 space-y-4"><TopBar /><div className="flex gap-2 text-sm"><select className="ocean-card rounded px-2 py-1" value={agentFilter} onChange={(e)=>setAgentFilter(e.target.value)}><option value="all">All Agents</option><option value="active">Active</option><option value="idle">Idle</option><option value="error">Error</option></select><select className="ocean-card rounded px-2 py-1" value={taskFilter} onChange={(e)=>setTaskFilter(e.target.value)}><option value="all">All Tasks</option><option value="running">Running</option><option value="queued">Queued</option><option value="done">Done</option><option value="failed">Failed</option></select></div><DashboardGrid stats={stats} tokenUsage={tokenUsage} /><section><h3 className="mb-2">Live Activity Feed</h3><ActivityFeed logs={logs} /></section><section><h3 className="mb-2">Agent Cards</h3><div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">{visibleAgents.map((a)=><AgentCard key={a.name} agent={a} />)}</div></section><section><h3 className="mb-2">Task Monitor</h3><TaskTable tasks={visibleTasks as any[]} /></section><AlertsPanel alerts={alerts} /><section className="lobster-panel p-4"><h3>Settings Page Placeholder</h3><div className="grid sm:grid-cols-2 gap-2 mt-2">{['sound effects','desktop notifications','daily status reports','auto-refresh','compact mode','streamer overlay mode'].map(s=><label key={s} className="ocean-card rounded px-2 py-2 flex justify-between"><span>{s}</span><input type="checkbox" /></label>)}</div></section></main></div><MascotWidget /></div>
}
