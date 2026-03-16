// context/TaskContext.jsx
import React, { createContext, useContext } from 'react';
import { useTasks } from '../hooks/useTasks'; 

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const taskLogic = useTasks();

    return (
        <TaskContext.Provider value={taskLogic}>
            {children}
        </TaskContext.Provider>
    );
};


export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext deve ser usado dentro de um TaskProvider');
    }
    return context;
};