import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  difficulty: z.string(),
  
  // status: z.enum(["todo", "attempted", "solved"]),
  // difficulty: z.enum(["easy", "medium", "hard"]),
});

export type Task = z.infer<typeof taskSchema>;
