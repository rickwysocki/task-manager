import { sql } from "@vercel/postgres";

export default async function Tasks(){

  const { rows } = await sql`SELECT * from tasks`;

  return (
    <div>
        <h2 className="text-xl">Tasks</h2>
      {rows.map((row) => (
        <div key={row.id}>
          {row.taskid} - {row.taskdescription}
        </div>
      ))}
    </div>
  );
}