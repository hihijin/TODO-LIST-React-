import './ToDoTemplate.scss';

function TodoTemplate({children}) {
    const checked = document.querySelectorAll(".checked");
    const checkbox = document.querySelectorAll(".checkbox");
    const num = Number(checkbox.length-checked.length);
    console.log(num);
    return (
        <div className="TodoTemplate">
            <div className="app-title">현재 시각 : 17:00</div>
            <div className="TodoLength">할 일 <a>2</a>개 남았어요</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate;