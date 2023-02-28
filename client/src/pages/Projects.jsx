import { ProjectForm } from "../components/ProjectForm";
import { ProjectList } from "../components/ProjectList";

export function Projects() {
  return (
    <div className="bg-zinc-900 rounded-md shadow-black p-8 h-4/5 w-3/5">
      <h1 className="text-2x1 font-bold py-2 mb-4">Project Manager</h1>
      <div className="flex justify-between gap-x-1">
        <ProjectForm />
        <ProjectList />
      </div>
    </div>
  );
}
