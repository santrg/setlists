"use client";

import { useRouter } from "next/navigation";

function MenuGroup({ params, children }) {
  const router = useRouter();
  return (
    <div className="flex  row-1 bg-slate-800  align-middle m-6">
      <div className="flex-col p-5 ">
        <div
          onClick={() => router.push(`../new_setlist/${params.id}`)}
          className="bg-cyan-600 hover:bg-cyan-500 p-6 w-40 my-2 text-center"
        >
          <h1>Crear nuevo Setlist de grupo {" " + params.id}</h1>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MenuGroup;
