import { base62 } from '../../helpers';

export default {
  id: async (root, args, { ctx }, info) => {
    return base62.encode(root.id);
  },
  employees: async (root, args, { ctx }, info) => {
    if (ctx.allUsers) {
      return ctx.allUsers.filter(user => user.company === root.id);
    }
    return [];
  },
};
