import { add } from "../reducers/task_slice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

function InputTask (){
    const taskName = useRef();
    const dispatch = useDispatch();
    const handleAddTask=()=>{
        dispatch(add(taskName.current.value));
        console.log('check:',taskName.current.value)
    }
    
    return(
        
        <div className="main">
            <input type="text" placeholder="Nhập một đoạn text bất kì" ref={taskName} />
            <button onClick={handleAddTask}>Thêm</button>
        </div>
    )
}
export default InputTask;