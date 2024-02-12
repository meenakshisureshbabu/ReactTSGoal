import React, {type FormEvent } from 'react'
import { useRef } from 'react';

type AddNewGoalProps = {
    onAddGoal: (title:string,description:string) => void;
}

function AddNewGoal({onAddGoal} : AddNewGoalProps) {
    const title = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLInputElement>(null);

    function handleSubmit(event : FormEvent<HTMLFormElement>){
        event.preventDefault();
        const enteredGoal = title.current!.value;
        const enteredDesc = description.current!.value;
        event.currentTarget.reset();
        onAddGoal(enteredGoal,enteredDesc)
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor='title'>Goal:</label>
            <input id="title" type="text" name="title" ref={title}></input>
        </p>
        <p>
            <label htmlFor='description'>Summary:</label>
            <input id="description" type="text" ref={description}></input>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
  )
}

export default AddNewGoal