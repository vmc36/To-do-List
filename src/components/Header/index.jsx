import logo from "/logo.svg";
import { useState } from "react";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  return (
    <header className="w-full space-y-10">
      <div className="flex h-full space-x-5 ">
        <div
          className="m-auto h-32 w-32 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2 p-16">
        <input
          placeholder="Add a new task"
          value={title}
          onChange={onChangeTitle}
          className="w-full rounded-md bg-placeholderBackground p-2  text-whiteNotWhite"
        />
        <button className="whitespace-nowrap rounded-md bg-taskButton p-3 text-whiteNotWhite">
          Create +
        </button>
      </form>
    </header>
  );
}
