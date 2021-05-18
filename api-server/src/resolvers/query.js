export default {
  Hello: () => "Hello world!",
  notes: async (parent, args, { models }) => await models.Note.find(),
  note: async (parent, args, { models }) => await models.Note.findById(args.id),
  user: async (parent, { username }, { models }) =>
    await models.User.findOne({ username }),
  users: async (parent, args, { models }) => await models.User.find({}),
  // user is request parameter for authorization with token, Is not User entity
  me: async (parent, args, { models, user }) =>
    await models.User.findById(user.id),
};
