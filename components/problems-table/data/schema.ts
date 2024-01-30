import { z } from "zod";

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  difficulty: z.string(),
  
  // status: z.enum(["todo", "attempted", "solved"]),
  // difficulty: z.enum(["easy", "medium", "hard"]),
});

export type Task = z.infer<typeof taskSchema>;
