import ProblemPageNavbar from "@/components/navbars/question-page-navbar/problem-page-navbar";
import ProblemsPage from "@/components/problem-page/problemspage";

export default function Problem() {
  return (
    <main className="h-full flex flex-col w-screen bg-backgroundBlack px-2 py-1">
      <ProblemPageNavbar />
      <ProblemsPage />
    </main>
  );
}
