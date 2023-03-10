import './ToDoTemplate.scss';

function TodoTemplate({children}) {
    return (
        <div className="TodoTemplate">
            <div className="app-title">현재 시각 : 17:00</div>
            <div className="TodoLength">할 일 <a>1</a>개 남았어요</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate;