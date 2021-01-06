import React from 'react'
import ReactDOM from 'react-dom'


const Header =(props)=>{
  return(
    <div>
      <p> name of the course {props.course.name}</p>
    </div>
  )

}
const Content =(props)=>{
  console.log(props)
  return(
    <div>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
      
      {/* <p>the Content {props.part1} and Number of exercices is {props.exercises1}</p>
      <p>the Content {props.part2} and Number of exercices is {props.exercises2}</p>
      <p>the Content {props.part3} and Number of exercices is {props.exercises3}</p> */}
      
    </div>
  )
  
}
const Total =(props)=>{
  return(
    <div>
      <p>total number of the exercices {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
    </div>
  )
  
}

const Part =(props)=>{
  return(
    <>
      <p>the Content {props.part} and Number of exercices is {props.exercises}</p>
    </>
  )
}






const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
       <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))