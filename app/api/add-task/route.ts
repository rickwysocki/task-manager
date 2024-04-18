import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const taskid = searchParams.get('taskid');
  const taskdescription = searchParams.get('taskdescription');
 
  try {
    if (!taskid || !taskdescription) throw new Error('TaskID and TaskDescription required');
    await sql`INSERT INTO tasks (taskid, taskdescription) VALUES (${taskid}, ${taskdescription});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM tasks;`;
  return NextResponse.json({ pets }, { status: 200 });
}