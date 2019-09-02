import { getAllUsers } from '../../../helpers';

export default async function users(root, { name }, { ctx }, info) {
  // DONE - todo: 3. can we accept a input variable into the graphql query to only show certain users? Maybe allowing
  //  filter by name to begin with.

  // NOTE: Opted for an in-memory cache to speed up the getUser query. - todo: 5. getting this list of all users is slow.  Would be really cool if it could return all the users
  //  in a more performant way.  Keeping in mind that the underlaying JSON files may get updated.

  const users = await getAllUsers();
  if (name) {
    return users.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(name.toLowerCase());
    });
  }
  return users;
}
