import { useRouter } from "next/navigation";

function CardGroup(group, id) {
  const router = useRouter();

  function handleCLick() {
    router.push(`/about/${group.value.id}`);
  }

  async function handleDelete() {
    const res1 = await fetch(`/api/setlists/${group.value.id}`, {
      method: "GET",
    });
    const data = await res1.json();
    if (data.length === 0) {
      const del = confirm("¿Desea borrar este grupo?");
      if (del) {
        const res = await fetch(`/api/groups/${group.value.id}`, {
          method: "DELETE",
        });
        router.push("/group_delete");
      }
    } else {
      alert("El grupo tiene setlists que debe borrar previamente");
      router.push(`/about/${group.value.id}`);
    }
  }

  async function handleUpdate(){
    router.push(`/new_group/${group.value.id}`)
  }

  return (
    <div>
      <div
        onClick={handleCLick}
        key={id}
        className="bg-pink-800 mx-auto p-5 rounded-md hover:bg-pink-600"
      >
        <p>{group.value.id}</p>
        <p>{group.value.name}</p>
        <p>{group.value.members}</p>
        <p>{new Date(group.value.createAt).toLocaleDateString()}</p>
      </div>
      <div className="flex bg-pink-800  p-3 rounded-md">
        <button
          type="button"
          onClick={handleDelete}
          className="bg-cyan-700 rounded-md p-2 w-1/2 mx-1 hover:bg-cyan-400"
        >
          Borrar
        </button>
        <button
          type="button"
          onClick={handleUpdate}
          className="bg-cyan-500 rounded-md p-2 w-1/2 mx-1 hover:bg-cyan-300"
        >
          Actualizar
        </button>
      </div>
    </div>
  );
}

export default CardGroup;
