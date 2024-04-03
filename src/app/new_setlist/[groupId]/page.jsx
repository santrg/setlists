"use client";

import { useState } from "react";
import  {useRouter} from 'next/navigation'

function NewSetlist({params}) {
  const [list_name, setList_name] = useState("");
  const [list_themes, setList_themes] = useState("");
  const router = useRouter()

  

  function HandlerSubmit(e) {
    e.preventDefault();

    const MyFn = async () => {
      const data = await JSON.stringify({ name: list_name, list: list_themes, groupId: Number(params.groupId)});
      console.log(data)
      const res = await fetch(`../api/setlists`, {
        method: "POST", 
        body: data ,
        headers: {"Content-Type": "application/json"},
      });
      console.log(res)
    };
    MyFn();
    router.push("/")
  }


  return (
    <div>
      <h1>Nuevo Setlist</h1>
      <div className="flex-col m-8 w-1/2 mx-auto bg-slate-700 p-5">
        <form onSubmit={HandlerSubmit}>
          <label className="w-full">Nombre Setlist</label>
          <input
            className="w-full text-black"
            onChange={(e) => setList_name(e.target.value)}
            type="text"
            placeholder="Nombre nuevo Setlist"
          />
          <label className="w-full">Lista temas</label>
          <input
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

export default NewSetlist;
