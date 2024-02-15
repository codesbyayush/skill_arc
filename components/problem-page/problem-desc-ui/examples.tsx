

async function Examples({ examples }: { examples: {
  input?: string,
  output?: string,
  explanation?: string,
}[]}) {

  return (
    <div className="flex flex-col gap-3">
      {examples.map((example, index) => {
        if(example?.input) return null;
        return (
          <div key={example?.input as string}>
            <p className="font-semibold pb-2">Example {index + 1}:</p>
            <div className="flex flex-col gap-1 text-sm text-white/75 border-l-2 border-white/25">
              <p className=" px-3 border-gray-500/90">
                <span className="font-semibold text-base text-white">
                  Input :{" "}
                </span>
                <span> {example.input} </span>
               
              </p>
              <p className=" px-3 border-gray-500/90">
                <span className="font-semibold text-base text-white">
                  Output :
                </span>
                <span> {example.output} </span>
              
              </p>
              {example.explanation && (
                <p className=" px-3 border-gray-500/90">
                  <span className="font-semibold text-base text-white">
                    Explanation :
                  </span>
                  <span> {example.explanation} </span>
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
