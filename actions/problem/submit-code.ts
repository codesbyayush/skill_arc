"use server";

export const submitCode = async (
  code: string,
  problem: string,
  input?: string
) => {
  const url = process.env.CODE_ENGINE_URL! + "/submissions/?wait=true";
  const dataObj = {
    language_id: 62,
    source_code: code,
    stdin: input,
  };
  console.log("running");
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObj),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);

    if (result?.compile_output)
      return { error: result.compile_output, ...result };
    if (result?.stderr) return { error: result.stderr, ...result };
    if (result?.status.description !== "Accepted") {
      return { error: result.status.description, ...result };
    }
    return { success: result.stdout, ...result };
  } catch (error) {
    return { error: "Sorry for the Inconvenience, some error from our side" };
  }
};

// {
//     "success": true,
//     "source_code": "class Main {\n  public static void main(String[] args) {\n    System.out.println(2/1);\n  }\n}",
//     "language_id": 62,
//     "stdin": "5 10 5 2 5 2",
//     "expected_output": null,
//     "stdout": "2\n",
//     "status_id": 3,
//     "created_at": "2024-01-25T13:25:31.301Z",
//     "finished_at": "2024-01-25T13:25:32.761Z",
//     "time": "0.055",
//     "memory": 12600,
//     "stderr": null,
//     "token": "7db0a31d-d267-4fea-847d-84d0e994ed28",
//     "number_of_runs": 1,
//     "cpu_time_limit": "5.0",
//     "cpu_extra_time": "1.0",
//     "wall_time_limit": "10.0",
//     "memory_limit": 128000,
//     "stack_limit": 64000,
//     "max_processes_and_or_threads": 60,
//     "enable_per_process_and_thread_time_limit": false,
//     "enable_per_process_and_thread_memory_limit": false,
//     "max_file_size": 1024,
//     "compile_output": null,
//     "exit_code": 0,
//     "exit_signal": null,
//     "message": null,
//     "wall_time": "0.048",
//     "compiler_options": null,
//     "command_line_arguments": null,
//     "redirect_stderr_to_stdout": false,
//     "callback_url": null,
//     "additional_files": null,
//     "enable_network": false,
//     "status": {
//         "id": 3,
//         "description": "Accepted"
//     },
//     "language": {
//         "id": 62,
//         "name": "Java (OpenJDK 13.0.1)"
//     }
// }
