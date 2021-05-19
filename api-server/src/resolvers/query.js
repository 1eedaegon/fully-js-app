export default {
  Hello: () => "Hello world!",
  notes: async (parent, args, { models }) => await models.Note.find().limit(10),
  note: async (parent, args, { models }) => await models.Note.findById(args.id),
  user: async (parent, { username }, { models }) =>
    await models.User.findOne({ username }),
  users: async (parent, args, { models }) =>
    await models.User.find({}).limit(10),
  // user is request parameter for authorization with token, Is not User entity
  me: async (parent, args, { models, user }) =>
    await models.User.findById(user.id),
  noteFeed: async (parent, { cursor }, { models }) => {
    const cursorLimit = 10;
    let hasNextPage = false;
    let cursorQuery = {};
    if (cursor) {
      cursorQuery = { _id: { $lt: cursor } };
    }
    let notes = await models.Note.find(cursorQuery)
      .sort({ _id: -1 })
      .limit(cursorLimit + 1);
    if (notes.length > cursorLimit) {
      hasNextPage = true;
      notes = notes.slice(0, -1);
    }
    const newCursor = notes[notes.length - 1].id;
    return { notes, cursor: newCursor, hasNextPage };
  },
};
