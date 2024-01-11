import React from "react";

export default function Role({ roleTasks, textClass }) {
  return (
    <>
      <h2>My Role</h2>
      {roleTasks.map((roleTask, i) => (
        <div key={`role-${i}`}>
          <p className={`${textClass} font-bold`}>{roleTask.role}</p>
          <ul>
            {roleTask.tasks.map((task, j) => (
              <li key={`task-${i}-${j}`}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
