import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

export function App() {
  return (
    <div style={{ background: "#1A1A1A", height: "100vh" }}>
      <Header />
      <NewTask />
    </div>
  )
}