import FeaturedCourseCard from '@/components/problemset-page/featured-course-card'
import ProblemsListCard from '@/components/problemset-page/problems-list-card';
import { UserNav } from '@/components/problems-table/user-nav';
import { DataTable } from '@/components/problems-table/data-table';
import  { columns } from '@/components/problems-table/columns'
import { getAvailableProblems } from '@/actions/problem/get-available-problems';

async function ProblemsSet() {

  const tasks = (await getAvailableProblems()).result;

  return (
    <div className="p-6 bg-backgroundBlack text-white">
      {/* <div className="flex gap-2 py-6">
        <FeaturedCourseCard />
        <FeaturedCourseCard />
        <FeaturedCourseCard />
      </div>
      <div className="py-6">
        <h2 className="font-bold text-xl">Study plan</h2>
        <div className="grid grid-cols-2 xl:grid-cols-3 py-6 justify-between items-between gap-2">
          <ProblemsListCard />
          <ProblemsListCard />
          <ProblemsListCard />
          <ProblemsListCard />
          <ProblemsListCard />
          <ProblemsListCard />
        </div>
      </div> */}
      {/* TODO: Filter componets and tags implementation */}
      <div className="hidden h-full flex-1 flex-col space-y-8 px-2 py-6 md:flex  rounded-lg">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Problems!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all the problems we have!
            </p>
          </div>
          {/* <div className="flex items-center space-x-2">
            <UserNav />
          </div> */}
        </div>
        <div className='max-w-[1800px]'>
          <DataTable data={tasks} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default ProblemsSet;