import { getProblemById } from "@/actions/problem/get-problem";
import ProblemPageNavbar from "@/components/problem-page/navbar/problem-page-navbar";
import ProblemsPage from "@/components/problem-page/problemspage";

import { getAvailableProblems } from "@/actions/problem/get-available-problems";

export async function generateStaticParams() {
  const tasks = (await getAvailableProblems()).result;

  return tasks.map((task: { title: string; id: string }) => ({
    id: task.id,
  }));
}

export default async function Problem({ params }: { params: { id: string } }) {
  const problem = await getProblemById(params.id);
  if (problem.error) return null;
  return (
    <main className="h-full flex flex-col w-screen dark:bg-backgroundBlack bg-gray-200 px-2 py-1">
      <ProblemPageNavbar />
      <ProblemsPage problem={problem as any} />
    </main>
  );
}
