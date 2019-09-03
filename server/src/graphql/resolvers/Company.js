export default {
  employees: async (root, args, { ctx }, info) => {
    if (ctx.allUsers) {
      return ctx.allUsers.filter(user => user.company === root.id);
    }
    return [];
  },
};
