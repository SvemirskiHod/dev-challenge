import fs from 'fs';
import util from 'util';
import userCache from './userCache';

const writeFile = util.promisify(fs.writeFile);

export default async function setUser(user) {
  userCache[user.id] = user;
  return writeFile(`./data/users/${user.id}.json`, JSON.stringify(user));
}
