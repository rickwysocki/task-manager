import { sql } from "@vercel/postgres";
export default async function Tasks(){

  const { rows } = await sql`SELECT * from tasks`;

  return (
    <div>

        <h2 className="text-xl">New Tasks</h2>
        <form className="flex flex-row gap-4">
            <label>New Task</label>
            <input className="bg-neutral-200"></input>
            <button>Submit</button>
        </form>

        <h2 className="text-xl">Current Tasks</h2>
      {rows.map((row) => (
        <div key={row.id}>
            <input type="checkbox" id="{row.id}" name="{row.id}" className="mr-4" />
            <label htmlFor="{row.id}">{row.description}</label>
        </div>
      ))}
    </div>
  );
}