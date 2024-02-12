import { type PropsWithChildren, type ReactNode } from "react"


// interface CourseGoalProps {
//     title:string,
//     description:string,
//     children:ReactNode,
// }

type CourseGoalProps = PropsWithChildren<{
  id:number;
  title:string;
  onDelete: (id:number) => void;
}>

function CourseGoal({ title,id,children,onDelete }: CourseGoalProps) {
  return (
    <article>
        <h2>{title}</h2>
        
        {children}
        <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  )
}

export default CourseGoal