import { Separator } from "@/components/ui/separator";

function Examples() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="font-semibold pb-2">Example 1:</p>
        <div className="flex flex-col gap-1 text-sm text-white/75 border-l-2 border-white/25">

          <p className=" px-3 border-gray-500/90">
            <span className="font-semibold text-base text-white">Input :</span>{" "}
            nums = [2,7,11,15], target = 9
          </p>
          <p className=" px-3 border-gray-500/90">
            <span className="font-semibold text-base text-white">Output :</span>
            [0,1]
          </p>
          <p className=" px-3 border-gray-500/90">
            <span className="font-semibold text-base text-white">
              Explanation :
            </span>
            Because nums[0] + nums[1] == 9, we return [0, 1].
          </p>
        </div>
      </div>


      <div className="flex flex-col gap-2">
        <p className="font-semibold">Example 2:</p>
        <div className="flex flex-col gap-2 text-sm  text-white/75 border-l-2 border-white/25">
          <p className=" px-3 border-gray-500/90">
            <span className="font-semibold text-base text-white">Input :</span>{" "}
            nums = [3,2,4], target = 6
          </p>
          <p className=" px-3 border-gray-500/90">
            <span className="font-semibold text-base text-white">Output :</span>
            [1,2]
          </p>
          <p className=" px-3 border-gray-500/90">
            <span className="font-semibold text-base text-white">
              Explanation :
            </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing euid!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Example 3:</p>
        <div className="flex flex-col gap-2 text-sm text-white/75 border-l-2 border-white/25">
          <p className=" px-3 border-gray-500/90">
            <span className="font-semibold text-base text-white">Input :</span>{" "}
            nums = [3,3], target = 6
          </p>
          <p className=" px-3 border-gray-500/90">
            <span className="font-semibold text-base text-white">Output :</span>
            [0,1]
          </p>
          <p className=" px-3 border-gray-500/90">
            <span className="font-semibold text-base text-white">
              Explanation :
            </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing euid!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Examples;
