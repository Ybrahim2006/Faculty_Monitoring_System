import { getStatus } from '../data/mockData.js'
export const fmtDate=d=>d?new Date(`${d}T00:00:00`).toLocaleDateString('en-PH',{month:'short',day:'numeric',year:'numeric'}):'—'
export const personName=(data,id)=>data.faculty.find(f=>f.id===id)?.name||'Unassigned'
export const getRows=data=>data.submissions.map(s=>{const d=data.deliverables.find(x=>x.id===s.deliverableId), f=data.faculty.find(x=>x.id===s.facultyId);return {...s,deliverable:d,faculty:f,status:getStatus(s,d)}}).filter(x=>x.deliverable&&x.faculty)
export const downloadCsv=(filename,rows)=>{if(!rows.length)return;const keys=Object.keys(rows[0]),csv=[keys.join(','),...rows.map(r=>keys.map(k=>`"${String(r[k]??'').replaceAll('"','""')}"`).join(','))].join('\r\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download=filename;a.click();URL.revokeObjectURL(a.href)}
