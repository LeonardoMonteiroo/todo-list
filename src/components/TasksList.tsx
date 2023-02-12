import { EmptyList } from "./EmptyList";
import { Task } from "./Task";
import { TasksNumber } from "./TasksNumber";

interface TaskProp {
    title: string;
    id: number;
    isChecked: boolean;
};

interface TasksListProps {
    taskList: TaskProp[];
    setTaskList: Function;
}

export function TasksList({ taskList, setTaskList }: TasksListProps) {
    const tasksCompleted = taskList?.reduce((acc, current) => current.isChecked ? acc + 1 : acc, 0);

    return (
        <div style={{ marginTop: 4 + "rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 28.75 + "rem" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#4EA8DE", fontWeight: 700, gap: 0.5 + "rem", fontSize: 14 }}>
                    Tarefas criadas <TasksNumber number={taskList.length} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#8284FA", fontWeight: 700, gap: 0.5 + "rem", fontSize: 14 }}>
                    Concluídas <TasksNumber number={taskList.length} completed={tasksCompleted} />
                </div>
            </div>

            {taskList.length === 0 ?
                <EmptyList />
                :
                <div>
                    {taskList.map(task => {
                        return (
                            <Task
                                key={task.id}
                                taskProp={task}
                                setTaskList={(state: TaskProp[]) => setTaskList(state)}
                                taskList={taskList}
                            />
                        )
                    })}
                </div>
            }
        </div>
    )
}