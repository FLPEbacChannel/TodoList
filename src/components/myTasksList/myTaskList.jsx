// páginas ou componentes
import { Container, Input, Button, TaskList, FilterButtonsBoxe } from './styles'
import { useTaskContext } from '../../contexts/TaskContext'; 
import { useInput } from '../../hooks/useInput';

export function MyTaskList() {
   
    const { filteredTasks, addTask, deleteTask, toggleComplete, setFilterType } = useTaskContext();
    const { value, onChange, clear } = useInput('');

    const handleAddTask = () => {
        addTask(value);
        clear();    
    }   

    return (
        <Container>
            <h1>Task's List</h1>
            
            <FilterButtonsBoxe>
                <Button onClick={() => setFilterType('all')}>Todas</Button>
                <Button onClick={() => setFilterType('pending')}>Pendentes</Button>
                <Button onClick={() => setFilterType('completed')}>Concluídas</Button>
            </FilterButtonsBoxe>

            <Input
                value={value}
                onChange={onChange}
                placeholder='Qual é a sua tarefa?'
            />
           
            <Button onClick={handleAddTask}>Adicionar</Button>
            
            <TaskList>
                {filteredTasks.map((task) => (
                    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                        <span onClick={() => toggleComplete(task.id)}>{task.name}</span>
                        <button onClick={() => deleteTask(task.id)}></button>
                    </li>
                ))}
            </TaskList>           
        </Container>
    )                                                                
}