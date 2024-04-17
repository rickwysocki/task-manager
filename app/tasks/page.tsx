import { sql } from "@vercel/postgres";

export default async function Tasks(){

  const { rows } = await sql`SELECT * from tasks`;

  return (
    <div>
        <h2 className="text-xl">Tasks</h2>
      {rows.map((row) => (
        <div key={row.taskid}>
            <input type="checkbox" id="{row.taskid}" name="{row.taskid}" className="mr-4" />
            <label for="{row.taskid}">{row.taskdescription}</label>
        </div>
      ))}
    </div>
  );
}