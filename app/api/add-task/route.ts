import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const description = searchParams.get('description');
 
  try {
    if (!description) throw new Error('Description required');
    await sql`INSERT INTO tasks (description) VALUES (${description});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const tasks = await sql`SELECT * FROM tasks;`;
  return NextResponse.json({ tasks }, { status: 200 });
}