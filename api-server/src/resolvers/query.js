export default {
  Hello: () => "Hello world!",
  notes: async () => await models.Note.find(),
  note: async (parent, args, { models }) => await models.Note.findById(args.id),
};
