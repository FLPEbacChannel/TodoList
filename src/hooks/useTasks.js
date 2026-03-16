// hooks/useTasks.js
import { useState, useMemo, useEffect } from 'react';
import { tasks as initialTasks } from '../data/tasks';

const LOCAL_STORAGE_KEY = '@MyTaskList:tasks';

export const useTasks = () => {
    
    const [tasks, setTasks] = useState(() => {
        try {
            const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
            
            return storedTasks ? JSON.parse(storedTasks) : initialTasks;
        } catch (error) {
            console.error("Erro ao ler LocalStorage, resetando dados...", error);
            return initialTasks; 
        }
});


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);


    const [filterType, setFilterType] = useState('all');

    function addTask(taskName) {
        if (taskName && taskName.trim()) {
            const newTask = {
                id: Date.now(),
                name: taskName,
                completed: false
            };
            setTasks([...tasks, newTask]);
        }
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function toggleComplete(id) {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }

    const filteredTasks = useMemo(() => {
        console.log('Calculando filtro...');
        switch(filterType) {
            case 'pending': return tasks.filter(task => !task.completed);
            case 'completed': return tasks.filter(task => task.completed);
            default: return tasks;
        }
    }, [tasks, filterType]);

    return { tasks, addTask, deleteTask, toggleComplete, filteredTasks, setFilterType };
};