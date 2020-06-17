import React from 'react';
import './toDoItem.css';

const toDoItem = (props) => {
    const resolvedClass = {
        textDecoration: 'line-through'
    }
    return (
        <div className={'to-do item'}>
            <div className={'description-wrapper'}>
                <p style={props.completed === true ? resolvedClass : {}}>{props.description}</p>
            </div>
            <div className={'input-wrapper'}>
                <input type='checkbox' defaultChecked={props.completed} onChange={props.handleChange}/>
            </div>
        </div>
    )
}

export default toDoItem;