import styled from 'styled-components'

export const TasksHeaderStyle = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
`


export const TasksHeaderStyle_Left = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
`
export const TasksHeaderStyle_Date = styled.p`
    width: auto;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: ${({theme}) => theme.text};

`


export const TasksHeaderStyle_Right = styled.button`
    width: auto;
    display: flex;
    align-items: center;
    column-gap: 20px;
    font-size: 18px;
    height: 20px;
    color: ${({theme}) => theme.text};
    position: relative;
`


export const TasksHeaderStyle_SorterButtons = styled.div<{visible:boolean}>`
    width: auto;
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 18px;
    height: 20px;
    display: ${({visible}) => visible ? 'flex' : 'none'};
    flex-direction: column;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    background-color: ${({theme}) => theme.body};
    right: -5px;
    top: 0px;
    height: auto;
    width: 30px;
    border: 1px solid gray;
    row-gap: 15px;
`
export const TasksHeaderStyle_SorterButton = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px dashed gray;
    color: ${({theme}) => theme.text};

    padding-top: 10px;
    &:nth-child(1){
        border: none;
    }
`



