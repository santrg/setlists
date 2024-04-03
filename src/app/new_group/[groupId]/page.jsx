"use client"
import {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'


export default function UpdateGroupPage({params}) {
    const [vname, setVname] = useState("")
    const [vmembers, setVmembers] = useState("")
    const router = useRouter()

    console.log(params.groupId)
    useEffect(()=>{
        const myFn = async ()=>{
            const res = await fetch(`../api/groups/${params.groupId}`,{
                method: "GET"
            })
            const data = await res.json()
            setVname(data.name)
            setVmembers(data.members)
        }
        myFn()
    },[])

  function handleSubmit(e) {
    e.preventDefault();
    console.log(vmembers)
    async function UpdateGroup(){
        const res = await fetch(`../api/groups/${params.groupId}`,{
            method: "PUT",
            body: JSON.stringify({name: vname, members: vmembers}),
            headers: {"Content-Type" : "application/json"}
        })
    }    
    UpdateGroup()
    router.push("/")
  }

  return (
    <div className='flex justify-center items-center'>
      <div className="flex justify-center items-center w-80 bg-green-900 rounded-md m-10" >
        <form onSubmit={handleSubmit}>
          <label className='flex bg-green-950 justify-center '>Actualizar Grupo</label>
          <div className='p-3'>
            <label>Nombre del grupo </label>
            <input
              value={vname}
              type="text"
              onChange={(e) => setVname(e.target.value)}
              placeholder="name"
              autoFocus
              className="bg-slate-400 w-full p-3 text-black"
            />
          </div>
          <div className='p-3'>            
            <label>Miembros del grupo </label>
              <input
                value={vmembers}
                type="text"
                onChange={(e) => setVmembers(e.target.value)}
                placeholder="Members"            
                className="bg-slate-400 gap-4 w-full p-3 text-black"
              />
          </div>
          <div className='px-12 py-4'>
            <button className="bg-red-400 rounded-md p-3 gap-2 w-full"> Actualizar</button>
            
          </div>
        </form>
      </div>
    </div>
  );
}