import { TASK_INTERFACE } from '../app/components/Task/interfaces/Task.interface';
import { useAppSelector } from '../app/store/Slice_Hooks';
import { setCookie, getCookie } from '../database/cookie/CookieHandle';

import { useState, useEffect } from "react";

const useTaskCookie = (tasks:TASK_INTERFACE[]) => {

    const addTasksCookie = (tasks:TASK_INTERFACE[]) => {
        setCookie('tasks' , JSON.stringify(tasks) , 14);
    }
    const getTasksCookie = (tasks:TASK_INTERFACE[]) => {
        getCookie('tasks');
    }
    const onboardTasks = tasks.filter(task => task.task_status === 'on-board');
    const completedTasks = tasks.filter(task => task.task_status === 'completed');
    

    return [onboardTasks , completedTasks,  getTasksCookie , addTasksCookie];
};

export default useTaskCookie;