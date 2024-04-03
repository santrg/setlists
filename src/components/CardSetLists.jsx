"use client"
import {useRouter} from 'next/navigation'

function CardSetLists(setlist, setlistId) {
    const router = useRouter()
    
    async function handleDelete(){
      console.log("borrando")
      console.log(setlist.value.groupId)
      console.log(setlist.value.id)
      const res = await fetch(`../api/setlists/${setlist.value.groupId}/${setlist.value.id}`, {
         method: "DELETE"
      })
      router.push("/")
    }
    async function handleUpdate(){
      router.push(`/new_setlist/${setlist.value.groupId}/${setlist.value.id}`) 
    }
  return (
    <div className="bg-orange-500  m-10 rounded-md">
      <div className="flex grid grid-cols-4 justify-center mx-4">        
        <p>{setlist.value.id}</p>
        <p>{setlist.value.name}</p>
        <p className="text-justify" >{setlist.value.list}</p>
        <section>
          <button onClick={()=>handleDelete()} className="bg-black p-2 m-3">Borrar</button>
          <button onClick={()=>handleUpdate()} className="bg-black p-2 m-3">Actualizar</button>
        </section>

      </div>
    </div>
  )
}

export default CardSetLists
