"use client";
import { useEffect, useState } from "react";
import CardSetLists from "@/components/CardSetLists";
import HeadCol from "@/components/HeadCol";
import Facil from "@/components/Facil";

export default function GroupPage({ params }) {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("");
  const [setlists, setSetLists] = useState([]);

  useEffect(() => {
    const myFn = async () => {
      const res = await fetch(`/api/groups/${params.id}`, {
        method: "GET",
      });

      const data = await res.json();
      setName(data.name);
      setMembers(data.members);

      const res1 = await fetch(`/api/setlists/${params.id}`, {
        method: "GET",
      });
      if (res1 != null) {
        const data1 = await res1.json();
        setSetLists(data1);
      }
    };
    myFn();
  }, []);

  return (
    <div className="bg-slate-700 w-full">
      <div className="bg-slate-500 grid grid-cols-3 p-7 m-10">
        <h2>{params.id}</h2>
        <h2>{"Grupo:    " + name}</h2>
        <h2>{"Miembros:    " + members}</h2>
      </div>
      <div className="text-center">
        {setlists.length == 0 ? (
          "No existen setlists para este grupo"
        ) : (
          <HeadCol />
        )}
      </div>
      <div>
        {setlists.map((setlist) => (
          <CardSetLists value={setlist} key={setlist.id} />
        ))}
      </div>
    </div>
  );
}
