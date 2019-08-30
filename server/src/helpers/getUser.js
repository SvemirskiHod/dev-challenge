import fs from 'fs';
import util from 'util';
import userCache from './userCache.js';

const readFile = util.promisify(fs.readFile);

export default async function getUser(id) {
  if (userCache[id]) {
    return userCache[id];
  }
  let data;
  try {
    data = await readFile(`./data/users/${id}.json`, 'utf8');
  } catch (e) {
    throw new Error('User Not Found');
  }
  const parsed = JSON.parse(data);
  userCache[id] = parsed;
  return parsed;
}
