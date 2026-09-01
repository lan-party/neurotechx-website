'use server';
import mysql from  'mysql2/promise';
// import { getServerSession } from 'next-auth';

export default async function getConnection(){
  return await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
}

export async function addUser(email: string){
  'use server';
  const conn = await getConnection();

  await conn.execute('INSERT INTO `users` (`email`) VALUES (?)', [email]);

}