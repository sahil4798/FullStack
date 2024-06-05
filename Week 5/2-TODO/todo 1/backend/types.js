const zod = require("zod");

const createTodoValidationSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodoValidationSchema = zod.object({
  id: zod.string(),
});
module.exports = { createTodoValidationSchema, updateTodoValidationSchema };
