import FeaturedCourseCard from '@/components/problemset-page/featured-course-card'
import ProblemsListCard from '@/components/problemset-page/problems-list-card';
import { UserNav } from '@/components/problems-table/user-nav';
import { DataTable } from '@/components/problems-table/data-table';
import * as z from 'zod'
import data from '@/components/problems-table/data/task.json'
import { taskSchema } from '@/components/problems-table/data/schema';
import  { columns } from '@/components/problems-table/columns'
// import { promises as fs } from "fs";
// import path from "path";

// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "components/problems-table/data/tasks.json")
//   );

//   const tasks = JSON.parse(data.toString());

//   return z.array(taskSchema).parse(tasks);
// }

async function ProblemsSet() {

  const tasks = data;

  return (
    <div className="p-6 bg-backgroundBlack text-white">
      <div className="flex gap-2 py-6">
        <FeaturedCourseCard />
        <FeaturedCourseCard />
        <FeaturedCourseCard />
      </div>
      <div className="py-6">
        <h2 className="font-bold text-xl">Study plan</h2>
        <div className="flex flex-wrap gap-2 py-6">
          <ProblemsListCard />
          <ProblemsListCard />
          <ProblemsListCard />
          <ProblemsListCard />
          <ProblemsListCard />
          <ProblemsListCard />
        </div>
      </div>
      {/* TODO: Filter componets and tags implementation */}
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex bg-green-500/75">
        {/* <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div> */}
        <DataTable data={tasks} columns={columns}/>
      </div>
    </div>
  );
}

export default ProblemsSet;