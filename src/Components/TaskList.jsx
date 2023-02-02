// rfc
import React from 'react'

const TaskItem = (task, index) => {
    return <li className='task__item' key={index}>{task}</li>
}

export default function TaskList(props) {
    const { TaskList } = props;
    return (
        <div className="task">
            <ul className='task__list'>
                {TaskList.map((task, index) => {
                    return TaskItem(task, index);
                })}
            </ul>
        </div>
    )
}
