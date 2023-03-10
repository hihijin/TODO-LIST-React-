import './ToDoInsert.scss';

import {
  useCallback,
  useState,
} from 'react';

import { MdAdd } from 'react-icons/md';

function ToDoInsert({onInsert}) {
    
    const [value, setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); //value 초기화
            //기본이벤트(새로고침) 방지
            e.preventDefault();
        }
    ,[onInsert, value])
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            onChange={onChange}
            value={value} placeholder="오늘의 할일은?" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default ToDoInsert;