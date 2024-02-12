import React, { ReactNode } from 'react'
import CourseGoal from './CourseGoal.tsx'
import {type CourseGoal as CGoal} from '../App.tsx'
import InfoBox from './InfoBox.tsx'

type CourseGoalListProps = {
    goals: CGoal[],
    onDeleteGoal: (id:number) => void; 
}

function CourseGoalList({goals,onDeleteGoal} : CourseGoalListProps) {
    if(goals.length === 0){
        return <InfoBox mode='hint'>You have no goals yet.</InfoBox>
    }

    let warningbox : ReactNode
    if(goals.length > 4){
        warningbox = <InfoBox mode='warning' severity='medium'>More goals</InfoBox>
    }
  return (
    <>
    {warningbox}
    <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
      <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
      <p>{goal.description}</p>
    </CourseGoal>
    </li>
    ))}
    </ul>
    </>
  )
}

export default CourseGoalList