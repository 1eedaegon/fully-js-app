export default {
  Hello: () => "Hello world!",
  notes: async (parent, args, { models }) => await models.Note.find(),
  note: async (parent, args, { models }) => await models.Note.findById(args.id),
};
