interface TaskNumberProps {
    number: number;
    completed?: number;
}

export function TasksNumber({ number, completed }: TaskNumberProps) {
    return (
        <div style={{ background: "#333333", borderRadius: 16, color: "#D9D9D9", display: "flex", justifyContent: "center", alignItems: "center", padding: "2px 8px" }}>
            {completed || completed === 0 ?
                `${completed} de ${number}`
                :
                number
            }
        </div>
    )
}