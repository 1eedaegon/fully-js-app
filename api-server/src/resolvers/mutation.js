import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { AuthenticationError, ForbiddenError } from "apollo-server-express";

import gravatar from "../util/gravatar.js";

export default {
  newNote: async (parent, args, { models, user }) => {
    if (!user) {
      throw new AuthenticationError("You must be signed in to create a note");
    }
    return await models.Note.create({
      content: args.content,
      author: mongoose.Types.ObjectId(user.id),
    });
  },
  updateNote: async (parent, { id, content }, { models, user }) => {
    if (!user) {
      throw new AuthenticationError("You must be signed in to update a note");
    }
    const note = await models.Note.findById(id);
    if (note && String(note.author) !== user.id) {
      throw new AuthenticationError("You must be signed in to update the note");
    }
    return await models.Note.findOneAndUpdate(
      { _id: id },
      { $set: { content } },
      { new: true }
    );
  },
  deleteNote: async (parent, { id }, { models, user }) => {
    if (!user) {
      throw new AuthenticationError("You must be signed in to delete a note");
    }
    const note = await models.Note.findById(id);
    if (note && String(note.author) !== user.id) {
      throw new ForbiddenError("You don't permissions to delete the note");
    }
    try {
      await note.remove();
      return true;
    } catch (err) {
      return false;
    }
  },
  signUp: async (parent, { username, email, password }, { models }) => {
    email = email.trim().toLowerCase();
    const hashed = await bcrypt.hash(password, 10);
    const avatar = await gravatar(email);
    try {
      const user = await models.User.create({
        username,
        email,
        avatar,
        password: hashed,
      });
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    } catch (err) {
      console.error(err);
      throw new Error("[ERROR]: Creating account.");
    }
  },
  signIn: async (parent, { username, email, password }, { models }) => {
    email = email.trim().toLowerCase();
    const user = await models.User.findOne({ $and: [{ email }, { username }] });

    if (!user) {
      throw new Error("[ERROR]: User not found.");
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("[ERROR]: Fail signed in.");
    }
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  },
  toggleFavorite: async (parent, { id }, { models, user }) => {
    if (!user) {
      throw new Error("[ERROR]: User not found.");
    }
    const note = await models.Note.findById(id);
    const hasUser = note.favoritedBy.indexOf(user.id);
    if (hasUser >= 0) {
      return await models.Note.findByIdAndUpdate(
        id,
        {
          $pull: { favoritedBy: mongoose.Types.ObjectId(user.id) },
          $inc: { favoriteCount: -1 },
        },
        { new: true }
      );
    }
    return await models.Note.findByIdAndUpdate(
      id,
      {
        $push: { favoritedBy: mongoose.Types.ObjectId(user.id) },
        $inc: { favoriteCount: 1 },
      },
      { new: true }
    );
  },
};
