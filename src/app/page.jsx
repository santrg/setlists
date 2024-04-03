"use client"
import {useState, useEffect} from 'react'
import CardGroup from '@/components/CardGroup'


export default function Home() {
  const [list_groups, setList_groups] = useState([])
  const [list_setlists, setList_setlists] = useState([])

  useEffect(()=> {
    const myFn = async ()=> {
      const res1 = await fetch (`/api/groups`)
      const res2 = await fetch (`/api/setlists`)
      const data1 = await res1.json()
      const data2 = await res2.json()
      setList_groups(data1)
      setList_setlists(data2)
    }
    myFn()
  },[])
  return (
    <div >
      <div className='bg-green-700 p-5' >
        <h1>Grupos</h1>

        <div className='grid  grid-cols-3 p-4 gap-4 bg-slate-700 rounded-md m-5'>
          {list_groups.map((group) => <CardGroup value={group} key={group.id }/>)}
        </div>
      </div>
    </div>
  );
}
