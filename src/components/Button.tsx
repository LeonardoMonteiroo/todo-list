import { PlusCircle } from "phosphor-react";

export function Button() {
    return (
        <div style={{ background: "#1E6F9F", width: 5.625 + "rem", height: 3.25 + "rem", borderRadius: 8, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", gap: 0.5 + "rem" }}>
            <span style={{ color: "#F2F2F2" }}>Criar</span>
            <PlusCircle
                size={16}
                color="#F2F2F2"
            />
        </div>
    )
}