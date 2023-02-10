import { TasksNumber } from "./TasksNumber";
import clipBoard from "../assets/Clipboard.svg";

export function TasksList() {
    return (
        <div style={{ marginTop: 4 + "rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30.375 + "rem" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#4EA8DE", fontWeight: 700, gap: 0.5 + "rem" }}>
                    Tarefas criadas <TasksNumber />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#8284FA", fontWeight: 700, gap: 0.5 + "rem" }}>
                    Concluídas <TasksNumber />
                </div>
            </div>
            <div style={{ width: 46 + "rem", borderTop: "1px solid #333333", marginTop: 1.5 + "rem", borderRadius: 8 }}>
                <div style={{ margin: 4 + "rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 1 + "rem" }}>
                    <img src={clipBoard} />
                    <div style={{ display: "flex", flexDirection: "column", color: "#808080" }}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}