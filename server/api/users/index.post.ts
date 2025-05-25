export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);

  const todo = await useDrizzle()
    .insert(tables.users)
    .values({
      name,
    })
    .returning();

  return todo;
});
