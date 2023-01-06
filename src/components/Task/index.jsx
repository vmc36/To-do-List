import trashIcon from "/trash.svg";

export function Task({ task, onComplete, onDelete }) {
  return (
    <section className="mb-3 px-16">
      <div className="flex w-full items-center justify-between rounded-md bg-taskBackground p-5">
        <article className=" flex items-center space-x-12">
          <input
            className=""
            type="checkbox"
            onClick={() => onComplete(task.id)}
          ></input>
          <p
            className={`text-whiteNotWhite ${
              task.isCompleted ? `text-inputBackground line-through` : ""
            }`}
          >
            {task.title}
          </p>
        </article>
        <button className="pt-4" onClick={() => onDelete(task.id)}>
          <img className="w-12" src={trashIcon} alt="trash icon" />
        </button>
      </div>
    </section>
  );
}
