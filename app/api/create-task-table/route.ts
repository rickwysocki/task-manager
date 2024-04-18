import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS Tasks ( id SERIAL PRIMARY KEY, description VARCHAR(65) )`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}