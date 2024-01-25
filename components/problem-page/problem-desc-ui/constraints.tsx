import { getProblem } from "@/actions/problem/get-problem";


async function Constraints() {

  const problem = await getProblem("two-sum", 2);

  return (
    <div>
      <p className="font-semibold">Constraints :</p>
      <ol className="flex flex-col gap-3 list-disc px-4 py-4 text-sm text-white/75"
        dangerouslySetInnerHTML={{__html: problem.constraints}}
      >
      </ol>
    </div>
  );
}

export default Constraints;
