import { Task } from "../Task/index.jsx";
export function Tasks({ tasks, onComplete, onDelete }) {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
      <div className="flex w-full px-16">
        <div className="flex h-full w-full items-center space-x-4 font-bold">
          <p className=" text-blueIce">Created Tasks</p>
          <p className="whitespace-nowrap rounded-md bg-taskBackground p-1 text-xs text-white">
            {taskQuantity}
          </p>
        </div>
        <div className="mb-6 flex w-full items-center justify-end space-x-4">
          <p className="space-x-8 font-bold  text-purpleDark">Completed</p>
          <p className="whitespace-nowrap rounded-md bg-taskBackground p-1 text-xs text-white">
            {completedTasks} de {taskQuantity}
          </p>
        </div>
      </div>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </>
  );
}
