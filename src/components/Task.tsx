import { Check } from 'phosphor-react'
import Trash from '../assets/Trash.svg'
import HovereredTrash from '../assets/trash-hovered.svg';
import { useState } from 'react';

interface TaskProp {
    title: string;
    id: number;
    isChecked: boolean;
};

interface TaskProps {
    taskProp: TaskProp;
    setTaskList: Function;
    taskList: TaskProp[];
}

interface newHover {
    delete: boolean;
    checkbox: boolean;
}

export function Task({ taskProp, setTaskList, taskList }: TaskProps) {
    const [task, setTask] = useState(taskProp);
    const [isHover, setIsHover] = useState({
        delete: false,
        checkbox: false
    });

    const handleMouseEnter = (newHover: newHover) => {
        setIsHover(newHover);
    };

    const handleMouseLeave = (newHover: newHover) => {
        setIsHover(newHover);
    };

    const handleCheck = () => {
        const index = taskList.findIndex(currTask => currTask.id === task.id);
        let currTaskItem = taskList[taskList.findIndex(currTask => currTask.id === task.id)];
        currTaskItem.isChecked = !currTaskItem.isChecked;

        setTaskList([...taskList.slice(0, index), currTaskItem, ...taskList.slice(index + 1)]);
        setTask(currTaskItem);
    }

    const handleDeleteTask = () => {
        setTaskList(taskList.filter(taskItem => taskItem.id !== task.id));
    }

    return (
        <div style={{ width: 46 + "rem", border: "1px solid #333333", marginTop: 1.5 + "rem", borderRadius: 8, background: "#333333", padding: 1 + "rem", display: "flex", gap: 0.75 + "rem", alignItems: "center", justifyContent: "space-between" }}>
            {task.isChecked ?
                <div onClick={handleCheck} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.75 + "rem" }}>
                    <div
                        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1.09 + "rem", width: 1.09 + "rem", background: isHover.checkbox ? "#8284FA" : "#5E60CE", borderRadius: "100%" }}
                        onMouseEnter={() => handleMouseEnter({
                            delete: false,
                            checkbox: true,
                        })}
                        onMouseLeave={() => handleMouseLeave({
                            delete: false,
                            checkbox: false,
                        })}
                    >
                        <Check
                            size={12}
                            weight="bold"
                            color="#F2F2F2"
                        />
                    </div>

                    <span style={{ color: "#808080", fontWeight: 400, lineHeight: 1.225 + "rem", fontSize: 14, textDecoration: "line-through" }}>
                        {task.title}
                    </span>
                </div>
                :
                <div onClick={handleCheck} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.75 + "rem" }}>
                    <div
                        style={{ height: 1.09 + "rem", width: 1.09 + "rem", border: isHover.checkbox ? "2px solid #1E6F9F" : "2px solid #4EA8DE", borderRadius: "100%", background: isHover.checkbox ? "rgba(30,111,159,0.2)" : "transparent" }}
                        onMouseEnter={() => handleMouseEnter({
                            delete: false,
                            checkbox: true,
                        })}
                        onMouseLeave={() => handleMouseLeave({
                            delete: false,
                            checkbox: false,
                        })}
                    />

                    <span style={{ color: "#F2F2F2", fontWeight: 400, lineHeight: 1.225 + "rem", fontSize: 14 }}>
                        {task.title}
                    </span>
                </div>
            }

            {isHover.delete ?
                <img
                    src={HovereredTrash}
                    onClick={handleDeleteTask}
                    onMouseEnter={() => handleMouseEnter({
                        delete: true,
                        checkbox: false,
                    })}
                    onMouseLeave={() => handleMouseLeave({
                        delete: false,
                        checkbox: false,
                    })}
                />
                :
                <img
                    src={Trash}
                    onClick={handleDeleteTask}
                    onMouseEnter={() => handleMouseEnter({
                        delete: true,
                        checkbox: false,
                    })}
                    onMouseLeave={() => handleMouseLeave({
                        delete: false,
                        checkbox: false,
                    })}
                />
            }

        </div>
    )
}