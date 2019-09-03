import { getCompany, getAllUsers, base62 } from '../../../helpers';

export default async function company(root, { id }, { ctx }, info) {
  ctx.allUsers = await getAllUsers();
  const decodedID = base62.decode(id);
  return getCompany(decodedID);
}
