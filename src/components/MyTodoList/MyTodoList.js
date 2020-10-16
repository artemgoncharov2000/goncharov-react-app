import React from 'react'
import Task from "../Task/Task";
import './MyTodoList.css'
class MyTodoList extends React.Component {
    state = {
        tasks: [
            {
                id: 1,
                name: 'Массив данных',
                description: 'Сделать сырые данные из выдуманных тасков',
                completed: true

            },
            {
                id: 2,
                name: 'Реализовать компонет',
                description: 'Написать компонент для представления одного Таска',
                completed: true
            },
            {
                id: 3,
                name: 'Стилизовать CSS',
                description: 'Нужно убить кучу времени, чтобы все выглядело красиво',
                completed: true
            },
            {
                id: 4,
                name: 'Загрузить проект на GitHub',
                description: 'git init и  первый commit!',
                completed: true
            },
            {
                id: 5,
                name: 'Проверить ДЗ',
                description: 'Необходимо сделать ревью данного мердж реквеста',
                completed: false
            },
        ]
    }

    render() {
        return (
            <div className="tasks-container">
                {this.state.tasks.map((it, i) => <Task className="task" key={i}  id={it.id} name={it.name} description={it.description} completed={it.completed}/>)}
            </div>

        )
    }
}

export default MyTodoList