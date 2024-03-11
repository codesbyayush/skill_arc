import { DataTable } from '@/components/problems-table/data-table';
import  { columns } from '@/components/problems-table/columns'
import { getAvailableProblems } from '@/actions/problem/get-available-problems';

async function ProblemsSet() {

  const tasks = (await getAvailableProblems()).result;

  return (
    <div className="p-6 dark:bg-backgroundBlack bg-white  dark:text-white max-w-[1800px] w-full mx-auto pt-24">
      <div className="hidden h-full flex-1 flex-col space-y-8 px-2 py-6 md:flex  rounded-lg ">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Problems!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all the problems we have!
            </p>
          </div>
        </div>
        <div className='max-w-[1800px] w-full mx-auto'>
          <DataTable data={tasks} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default ProblemsSet;