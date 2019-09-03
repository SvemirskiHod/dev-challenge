import { getCompany, getAllUsers } from '../../../helpers';

export default async function company(root, { id }, { ctx }, info) {
  ctx.allUsers = await getAllUsers();
  return getCompany(id);
}
