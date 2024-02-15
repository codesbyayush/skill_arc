import { getProblem } from "@/actions/problem/get-problem";


async function Constraints() {

  const problem = await getProblem("two-sum");

  const { constraints } = problem;

  return (
    <div>
      <p className="font-semibold">Constraints :</p>
      {constraints && <ol className="flex flex-col gap-3 list-disc px-4 py-4 text-sm text-white/75"
        dangerouslySetInnerHTML={{ __html: constraints }}
      >
      </ol>
      }
    </div>
  );
}

export default Constraints;
