import { getProblemById } from "@/actions/problem/get-problem";
import ProblemPageNavbar from "@/components/problem-page/navbar/problem-page-navbar";
import ProblemsPage from "@/components/problem-page/problemspage";
import { problems } from "@/testdata/all-problems";

export default async function Problem({ params } : { params: {id: string}}) {

  const problem = await getProblemById(params.id)
  if(problem.error) return null;
  return (
    <main className="h-full flex flex-col w-screen bg-backgroundBlack px-2 py-1">
      <ProblemPageNavbar />
      <ProblemsPage problem={problem as any}/>
    </main>
  );
}
