import { sql } from "@vercel/postgres";

export default async function Tasks({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from TASKS`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.description}
        </div>
      ))}
    </div>
  );
}