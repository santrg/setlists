"use client"
import {useState} from 'react'
import { useRouter } from 'next/navigation'


function NewGroupPage() {
    const [vname, setVname] = useState("")
    const [vmembers, setVmembers] = useState("")
    const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault();
    async function NewGroup(){
        const res = await fetch(`api/groups`,{
            method: "POST",
            body: JSON.stringify({name: vname, members: vmembers}),
            headers: {"Content-Type" : "application/json"}
        })
    }    
    NewGroup()
    router.push("/")
  }

  return (
    <div>
      <h1>Nuevo Grupo</h1>
      <div className="mx-80 justify-between bg-slate-700 rounded-md " >
        <form onSubmit={handleSubmit}>
          <div className='p-3 º'>
            <label>Nombre del grupo </label>
            <input
              type="text"
              onChange={(e) => setVname(e.target.value)}
              placeholder="name"
              autoFocus
              className="bg-slate-400 w-full "
            />
          </div>
          <div className='p-3'>            
            <label>Miembros del grupo </label>
              <input
                type=""
                onChange={(e) => setVmembers(e.target.value)}
                placeholder="Members"            
                className="bg-slate-400 gap-4 w-full"
              />
          </div>
          <div className='px-12 py-4'>
            <button className="bg-red-400 rounded-md p-3 gap-2 mx-4 w-full"> Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewGroupPage;
