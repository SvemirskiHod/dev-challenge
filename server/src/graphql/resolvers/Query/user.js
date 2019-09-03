import { getUser, base62 } from '../../../helpers';

export default async function user(root, { id }, { ctx }, info) {
  const decodedID = base62.decode(id);
  return getUser(decodedID);
}
