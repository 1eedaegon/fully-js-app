export default {
  author: async (note, args, { models }) =>
    await models.User.findOne(note.author),
  favoritedBy: async (note, args, { models }) =>
    await models.User.find({
      _id: { $in: note.favoritedBy },
    }),
};
