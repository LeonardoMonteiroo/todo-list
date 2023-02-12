import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

interface TaskProp {
  title: string;
  id: number;
  isChecked: boolean;
};

export function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Comer saudavel",
      isChecked: true,
    },
    {
      id: 2,
      title: "Ir na academia",
      isChecked: false,
    },
    {
      id: 3,
      title: "Jogar lol",
      isChecked: false,
    },
    {
      id: 4,
      title: "Fazer uma task muito grande porque precisa mesmo testar se o texto muito grande não vai zoar a porra toda",
      isChecked: false,
    },
    {
      id: 5,
      title: "Dormir sem deitar",
      isChecked: false,
    },
  ]);

  return (
    <div style={{ background: "#1A1A1A", minHeight: "100vh", height: "100%", paddingBottom: 1.5 + "rem" }}>
      <Header />
      <NewTask
        taskList={taskList}
        setTaskList={(state: TaskProp[]) => setTaskList(state)}
      />
      <TasksList
        taskList={taskList}
        setTaskList={(state: TaskProp[]) => setTaskList(state)}
      />
    </div>
  )
}