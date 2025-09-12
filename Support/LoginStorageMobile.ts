import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '../Assets/StoredLoginMobile.json');

export async function saveLogin(login: string): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify({ login }, null, 2), 'utf-8');
  console.log(`💾 Login salvo em arquivo: ${login}`);
}

export async function loadLogin(): Promise<string | null> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const parsed = JSON.parse(data);
    return parsed.login || null;
  } catch (err) {
    console.log('⚠️ Nenhum login salvo encontrado.');
    return null;
  }
}