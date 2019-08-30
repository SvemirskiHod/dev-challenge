import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile);

export default async function getUser(id) {
  try {
    const data = await readFile(`./data/users/${id}.json`, 'utf8');
  } catch (e) {
    throw new Error('User Not Found');
  }
  return JSON.parse(data);
}
