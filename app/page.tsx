import ProblemPageNavbar from "@/components/navbars/question-page-navbar/problem-page-navbar";
import ProblemsPage from "@/components/problem-page/problemspage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex flex-col w-screen bg-blackLeetcode px-2 py-1">
      <ProblemPageNavbar />
      <ProblemsPage />
    </main>
  );
}
