import styled from 'styled-components';


export const TaskStyle = styled.div`
    width: 100%;
    height: auto;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    border-color: ${({theme }) => theme.borderColor};
    display: flex;
    align-items: center;
    box-sizing: border-box;
`

export const TaskStyle_left = styled.button<{task_status:string}>`
    width: 20px;
    flex: 0 0 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        color:${({theme}) => theme.svg};
        &:nth-child(1)
        {
            font-size: 9px;
            position: absolute;
            color: ${({task_status}) => task_status === 'completed' ?  '#4caf50' :  '#e0e0e0'} ;
        }   
        &:nth-child(2)
        {
            font-size: 15px;
            position: absolute;
            color: green;
        }
    }
`

export const TaskStyle_middle = styled.textarea<{task_status:string}>`
    width: 100%;
    height: 100%;
    padding-left: 5px;
    font-size: 15px;
    color: ${({theme}) => theme.text};
    text-decoration: ${ ({task_status}) => task_status === 'completed' ? 'line-through' : 'none'} ;
    resize: none;
    display: flex;
    align-items: center;
    padding-top: 5px;
`


export const TaskStyle_right = styled.div`
    flex: 0 0 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    
`

export const TaskStyle_edit = styled.button`
    color:${({theme}) => theme.svg};
    width: 20px;
    height: 100%;
    font-size: 18px;
`



export const TaskStyle_delete = styled.button`
    color:${({theme}) => theme.svg};
    font-size: 18px;
    width: 20px;
    height: 100%;
`