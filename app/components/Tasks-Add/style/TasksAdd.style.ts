import styled from 'styled-components'

export const TasksAddStyle = styled.form<{active:boolean}>`
    width: 100%;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    border-color: ${({theme , active}) => active ? theme.borderColorActive : theme.borderColor};
    height: 50px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`

export const TasksAddStyle_left = styled.div`
    width: 20px;
    flex: 0 0 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        color:${({theme}) => theme.svg};
    }
`

export const TasksAddStyle_middle = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 5px;
    font-size: 15px;
    color: ${({theme}) => theme.text};
`

export const TasksAddStyle_right = styled.button`
    flex:0 0 35px;
    height: 100%;
    padding-left: 5px;
    font-size: 15px;
    color: ${({theme}) => theme.text};
`