import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";

interface TaskProp {
    title: string;
    id: number;
    isChecked: boolean;
};

interface NewTaskProps {
    taskList: TaskProp[];
    setTaskList: Function;
}

export function NewTask({ taskList, setTaskList }: NewTaskProps) {
    const [isHover, setIsHover] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    }

    const handleCreateButton = () => {
        let newTaskList = [...taskList];
        newTaskList.push({
            id: newTaskList[newTaskList.length - 1].id + 1,
            title: inputText,
            isChecked: false
        });
        setTaskList(newTaskList);
        setInputText("");
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: -1.625 + "rem", gap: 0.5 + "rem" }}>
            <input
                style={{
                    background: "#262626",
                    border: "none",
                    borderRadius: 8,
                    fontSize: 16,
                    height: 3.375 + "rem",
                    width: 39.875 + "rem",
                    padding: 1 + "rem",
                    color: "#F2F2F2"
                }}
                onChange={handleTextInput}
                value={inputText}
                placeholder="Adicione uma nova tarefa"
            />
            <div
                style={{ background: isHover ? "#4EA8DE" : "#1E6F9F", width: 5.625 + "rem", height: 3.25 + "rem", borderRadius: 8, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", gap: 0.5 + "rem" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCreateButton}
            >
                <span style={{ color: "#F2F2F2" }}>Criar</span>
                <PlusCircle
                    size={16}
                    color="#F2F2F2"
                />
            </div>
        </div>
    )
}