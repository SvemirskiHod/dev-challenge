import fs from 'fs';
import util from 'util';

const readDir = util.promisify(fs.readdir);

import getUser from './getUser.js';

export default async function getAllUsers() {
  const files = await readDir('./data/users');
  const users = files
    .filter(filename => filename.includes('.json'))
    .map(filename => getUser(filename.replace('.json', '')));
  return Promise.all(users);
}
