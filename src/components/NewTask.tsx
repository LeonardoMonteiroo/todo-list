import { Button } from "./Button";
import { TextField } from "./TextFIeld";

export function NewTask() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: -1.625 + "rem", gap: 0.5 + "rem" }}>
            <TextField />
            <Button />
        </div>
    )
}