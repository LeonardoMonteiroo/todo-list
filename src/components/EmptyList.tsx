import clipBoard from "../assets/Clipboard.svg";

export function EmptyList() {
    return (
        <div style={{ width: 46 + "rem", borderTop: "1px solid #333333", marginTop: 1.5 + "rem", borderRadius: 8 }}>
            <div style={{ margin: 4 + "rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 1 + "rem" }}>
                <img src={clipBoard} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#808080" }}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>
        </div>
    )
}