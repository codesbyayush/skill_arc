import { getProblem } from "@/actions/problem/get-problem";
import { Separator } from "@/components/ui/separator";

async function Examples() {
  const { examples } = await getProblem("two-sum", 2);

  return (
    <div className="flex flex-col gap-3">
      {examples.map((example, index) => {
        return (
          <div key={examples.id}>
            <p className="font-semibold pb-2">Example {index + 1}:</p>
            <div className="flex flex-col gap-1 text-sm text-white/75 border-l-2 border-white/25">
              <p className=" px-3 border-gray-500/90">
                <span className="font-semibold text-base text-white">
                  Input :{" "}
                </span>
                <span> {example.inputText} </span>
                {/* nums = [2,7,11,15], target = 9 */}
              </p>
              <p className=" px-3 border-gray-500/90">
                <span className="font-semibold text-base text-white">
                  Output :
                </span>
                <span> {example.outputText} </span>
                {/* [0,1] */}
              </p>
              {example.explanation && (
                <p className=" px-3 border-gray-500/90">
                  <span className="font-semibold text-base text-white">
                    Explanation :
                  </span>
                  <span> {example.explanation} </span>
                  {/* Because nums[0] + nums[1] == 9, we return [0, 1]. */}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Examples;
