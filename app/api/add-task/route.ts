import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  noStore();
  const { searchParams } = new URL(request.url);
  const description = searchParams.get('description');
 
  try {
    if ( !description) throw new Error('Pet and owner names required');
    await sql`INSERT INTO tasks (description) VALUES (${description});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const tasklist = await sql`SELECT * FROM tasks;`;
  return NextResponse.json({ tasklist }, { status: 200 });
}