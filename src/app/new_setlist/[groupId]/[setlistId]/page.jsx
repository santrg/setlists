"use client";

import { useState, useEffect } from "react";
import  {useRouter} from 'next/navigation'

function UpdateSetlist({params}) {
  const [list_name, setList_name] = useState("");
  const [list_themes, setList_themes] = useState("");
  const router = useRouter()

  useEffect(()=>{
    const myFn = async ()=>{
        const res = await fetch(`/api/setlists/${params.groupId}/${params.setlistId}`,{
            method: "GET"
        })
        const data = await res.json()
        setList_name(data.name)
        setList_themes(data.list)
      }
    myFn()
  },[])
  

  function HandlerSubmit(e) {
    e.preventDefault();
    const MyFn = async () => {
      const data = JSON.stringify({ name: list_name, list: list_themes, groupId: params.groupId});
      const res = await fetch(`../../api/setlists/${params.groupId}/${params.setlistId}`, {
        method: "PUT", 
        body: data ,
        headers: {"Content-Type": "application/json"},
      });
    };
    MyFn();
    router.push("/")
  }


  return (
    <div>
      <h1>Actualización de Setlist</h1>
      <div className="flex-col m-8 w-1/2 mx-auto bg-slate-700 p-5">
        <form onSubmit={HandlerSubmit}>
          <label className="w-full">Nombre Setlist</label>
          <input
            value = {list_name}
            className="w-full text-black"
            onChange={(e) => setList_name(e.target.value)}
            type="text"
            placeholder="Nombre nuevo Setlist"
          />
          <label className="w-full">Lista temas</label>
          <input
            value= {list_themes}
            className="w-full text-black"
            onChange={(e) => setList_themes(e.target.value)}
            type="text"
            placeholder="Lista temas"
          />
          <button
            type="submit"
            className="my-4 p-3 rounded-md w-full bg-amber-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateSetlist;
