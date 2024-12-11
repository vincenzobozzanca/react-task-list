import tasks from "../tasks";
console.log(tasks);

//array filtrati
function App() {
  const inBack = tasks.filter((curItem) => curItem.state !== "completed");
  console.log(inBack);
  const completed = tasks.filter((curItem) => curItem.state === "completed");
  console.log(completed);

//per ogni array filtrato creo la lista
const list = (array) => {
  return array.map(curItem => {
    return <li key={curItem.id}>
      <h3>{curItem.title}</h3> <span className = "btn-orange">{curItem.state}</span>
      <p>Priority: {curItem.priority}</p>
      <p>Est. time: {curItem.estimatedTime}</p>
    </li>
  })
}



  return (
    <>
      <header>
      <h1 className = "pd-20">Task Manager</h1>
      </header>

      <main>
      <h2 className = "pd-20">Current task (4)</h2>
      <ul>
       {list(inBack)}
      </ul>

      <hr></hr>

      <h2 className = "pd-20">Completed Task (6)</h2>
      <ul>
        {list(completed)}
      </ul>
      </main>
    
    </>
  )
}

export default App
