'use client'
import { useResultStore } from "@/store/zustand"
import { Badge } from "../ui/badge";

function SubmissionResult() {

  const { error, codeExecuted, testResult} = useResultStore();

  if(!codeExecuted) return <h3 className="py-6">{testResult}</h3>;

  console.log(testResult)
  
  return (
    <div>
      {error ? (
        <ErrorOccured testResult={testResult} />
      ) : (
        <Success testResult={testResult} />
      )}
    </div>
  );
}

export default SubmissionResult

const ErrorOccured = ({testResult} : { testResult: string}) => {
  return (
    <div className="py-6 flex flex-col gap-3">
      <Badge variant={"destructive"} className="w-min whitespace-nowrap  text-sm">
        {" "}
        Error occured{" "}
      </Badge>
      <span className="bg-lightGray/20 px-6 py-6 rounded-lg font-semibold text-lg text-red-400">
        Output : &nbsp; {testResult}
      </span>
    </div>
  );
}

const Success = ({ testResult }: { testResult: string }) => {
  console.log(testResult);
  return (
    <div className="py-6 flex flex-col gap-3">
      <Badge variant={"default"} className="max-w-min bg-emerald-600 text-sm"> Success </Badge>
      <span className="bg-lightGray/20 px-6 py-6 rounded-lg font-semibold text-lg">Output : &nbsp; {testResult.split('\n').map((val) => <p key={val}>{val}</p>)}</span>
    </div>
  );
};