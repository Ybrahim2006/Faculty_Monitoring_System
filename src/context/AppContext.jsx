import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { initialData, todayISO } from '../data/mockData.js'
const Ctx=createContext(null)
const load=()=>{try{return JSON.parse(localStorage.getItem('cite-monitor-data'))||initialData}catch{return initialData}}
export function AppProvider({children}){
 const [data,setData]=useState(load),[role,setRole]=useState(localStorage.getItem('cite-monitor-role')||'Administrator'),[facultyId,setFacultyId]=useState(localStorage.getItem('cite-monitor-faculty')||'FAC-001'),[theme,setTheme]=useState(localStorage.getItem('cite-monitor-theme')||'light'),[toast,setToast]=useState('')
 useEffect(()=>localStorage.setItem('cite-monitor-data',JSON.stringify(data)),[data]);useEffect(()=>{localStorage.setItem('cite-monitor-role',role);localStorage.setItem('cite-monitor-faculty',facultyId);localStorage.setItem('cite-monitor-theme',theme);document.documentElement.dataset.theme=theme},[role,facultyId,theme])
 const update=(key,fn)=>setData(d=>({...d,[key]:typeof fn==='function'?fn(d[key]):fn}))
 const notify=msg=>{setToast(msg);setTimeout(()=>setToast(''),2800)}
 const addActivity=text=>update('activity',a=>[{id:`ACT-${Date.now()}`,text,date:todayISO(),type:'Update'},...a].slice(0,20))
 const value=useMemo(()=>({data,setData,update,role,setRole,facultyId,setFacultyId,theme,setTheme,toast,notify,addActivity,reset:()=>{setData(initialData);setRole('Administrator');setFacultyId('FAC-001');notify('Demo data restored.')}}),[data,role,facultyId,theme,toast])
 return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export const useApp=()=>useContext(Ctx)
