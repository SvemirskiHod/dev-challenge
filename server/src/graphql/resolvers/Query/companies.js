import fs from 'fs';
import util from 'util';

const readDir = util.promisify(fs.readdir);

import { getCompany, getAllUsers } from '../../../helpers';

export default async function companies(root, args, { ctx }, info) {
  const files = await readDir('./data/companies');
  const companies = files
    .filter(filename => filename.includes('.json'))
    .map(filename => getCompany(filename.replace('.json', '')));

  ctx.allUsers = await getAllUsers();
  return companies;
}
