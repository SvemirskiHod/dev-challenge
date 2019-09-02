import fs from 'fs';
import util from 'util';
import userCache from './userCache.js';
import getUser from './getUser.js';

const writeFile = util.promisify(fs.writeFile);

export default async function setUser(user) {
  const userInDatabase = await getUser(user.id);
  const updatePayload = Object.assign({}, userInDatabase, user);
  userCache[user.id] = updatePayload;
  return writeFile(`./data/users/${user.id}.json`, JSON.stringify(updatePayload));
}
