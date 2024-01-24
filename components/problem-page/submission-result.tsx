'use client'
import { useResultStore } from "@/store/zustand"
import { Badge } from "../ui/badge";

function SubmissionResult() {

  const { error, codeExecuted, testResult} = useResultStore();

  if(!codeExecuted) return <h3 className="py-6">{testResult}</h3>;
  
  return (
    <div>
      {error && <ErrorOccured testResult={testResult}/>}
    </div>
  )
}

export default SubmissionResult

const ErrorOccured = ({testResult} : { testResult: string}) => {
  return (
    <div className="py-6">
      <Badge variant={"destructive"}> Error Occured</Badge>
    </div>
  )
}