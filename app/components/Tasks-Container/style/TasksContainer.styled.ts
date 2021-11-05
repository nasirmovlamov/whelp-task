import styled from 'styled-components'


export const TasksContainerStyle = styled.div`
    width:900px;
    height:auto;
    min-height: 400px;
    border-radius:10px;
    margin: auto;
    margin-top: 250px;
    padding: 15px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    box-shadow: ${({ theme }) => theme.boxShadow};
    @media (max-width: 1000px) {
        width: 90%;
    }

`