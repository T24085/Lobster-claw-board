export type AgentStatus = 'active' | 'idle' | 'error'
export type TaskStatus = 'running' | 'queued' | 'done' | 'failed'

export const agents = [
  { name: 'Scout-01', role: 'Planner', status: 'active', activeTask: 'Map dependency graph', model: 'gpt-5.3', tokens: 4210, uptime: '6h 12m', health: 96, lastAction: 'Generated task batches' },
  { name: 'Forge-04', role: 'Coder', status: 'idle', activeTask: 'Waiting assignment', model: 'gpt-5.3-mini', tokens: 2180, uptime: '5h 40m', health: 89, lastAction: 'Patched worker config' },
  { name: 'Audit-02', role: 'QA', status: 'error', activeTask: 'Regression suite', model: 'gpt-5.3', tokens: 1730, uptime: '4h 04m', health: 72, lastAction: 'Assertion mismatch detected' }
] as const

export const tasks = [
  { id: 'T-1881', name: 'Sync agent registry', agent: 'Scout-01', status: 'running', started: '09:11', duration: '00:14:20', tokens: 980, errors: 0 },
  { id: 'T-1882', name: 'Repair stale worker pool', agent: 'Forge-04', status: 'queued', started: '09:18', duration: '00:00:00', tokens: 0, errors: 0 },
  { id: 'T-1879', name: 'Validate memory snapshots', agent: 'Audit-02', status: 'failed', started: '08:57', duration: '00:22:02', tokens: 1240, errors: 2 }
] as const

export const workers = [{ id: 'W-1', health: 98 }, { id: 'W-2', health: 91 }, { id: 'W-3', health: 76 }]
export const logs = ['task started', 'worker connected', 'agent spawned', 'error detected', 'memory updated', 'loop warning', 'task completed']
export const tokenUsage = [
  { t: '09:00', tokens: 3200, cpu: 42 }, { t: '09:05', tokens: 3800, cpu: 47 }, { t: '09:10', tokens: 4100, cpu: 55 }, { t: '09:15', tokens: 3900, cpu: 49 }, { t: '09:20', tokens: 4400, cpu: 58 }
]
export const alerts = ['loop detected', 'high token burn', 'failed task', 'disconnected worker', 'memory limit warning']
export const memoryStats = { usedGb: 31, totalGb: 64 }
export const networkNodes = [{ id: 'N1' }, { id: 'N2' }, { id: 'N3' }]
