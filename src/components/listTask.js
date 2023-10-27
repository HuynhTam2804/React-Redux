import { useDispatch, useSelector } from "react-redux";
import { del } from "../reducers/task_slice";
import './listTask.css';
function ListTask() {
    const dispatch = useDispatch();
    const arrTask = useSelector((state) => state.task ? state.task.list : []);

    const XoaTask = (name) => {
        dispatch(del(name));
    }

    return (
        <div className="name">
            <h1>Danh sách input</h1>
            <div className="task-name">
            {
               
                arrTask.map(function(task, index) {
                    return (
                        <div className="task-item" key={index}>{task}
                            <button onClick={() => XoaTask(task)}>Xóa</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ListTask;
