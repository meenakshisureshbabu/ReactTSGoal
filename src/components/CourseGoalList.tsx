import React from 'react'
import CourseGoal from './CourseGoal.tsx'
import {type CourseGoal as CGoal} from '../App.tsx'

type CourseGoalListProps = {
    goals: CGoal[],
    onDeleteGoal: (id:number) => void; 
}

function CourseGoalList({goals,onDeleteGoal} : CourseGoalListProps) {
  return (
    <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
      <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
      <p>{goal.description}</p>
    </CourseGoal>
    </li>
    ))}
    </ul>
  )
}

export default CourseGoalList