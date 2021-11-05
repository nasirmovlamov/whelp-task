import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TaskContainer from '../app/components/Tasks-Container/TasksContainer'
import TasksHeader from '../app/components/Tasks-Header/TasksHeader'
import TasksOnBoard from '../app/components/Tasks-OnBoard/TasksOnBoard'
import TasksCompleted from '../app/components/Tasks-Completed/TasksCompleted'
import styles from '../styles/Home.module.css'
import TasksAdd from '../app/components/Tasks-Add/TasksAdd'

const Home: NextPage = () => {
  return (
      <TaskContainer>
        <TasksHeader/>
        <TasksAdd/>
        <TasksOnBoard/>
        <TasksCompleted/>
      </TaskContainer>
  )
}

export default Home
