import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

export function App() {
  return (
    <div style={{ background: "#1A1A1A", height: "100vh" }}>
      <Header />
      <NewTask />
      <TasksList />
    </div>
  )
}