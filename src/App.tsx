import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import AddNewGoal from "./components/AddNewGoal.tsx";

export type CourseGoal = {
  title:string,
  description:string,
  id:number,
}

export default function App() {

  const [goals,setGoals] = useState<Array<CourseGoal>>([]);

  function handleAddGoal(title:string,description:string){
    setGoals((previousgoal) => {
      const newGoal:CourseGoal = {
        id : Math.random(),
        title:title,
        description:description
      }
      return [...previousgoal,newGoal]
    })
  }


  function handleDeleteGoal(id:number){
    setGoals((prevGoals) => 
      prevGoals.filter((goal) => 
        goal.id !== id
      )
    )
  }

  return <main>
    <Header image={{src:goalsImg, alt:"A lisy of Goals"}}>
      <h1> Your Course Goals</h1>
    </Header>
   <AddNewGoal onAddGoal={handleAddGoal}/>
    
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
  </main>;
}
