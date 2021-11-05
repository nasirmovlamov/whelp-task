export interface TASK_INTERFACE {
    task_id:number
    task_content:string
    task_status:'completed' | 'on-board'
    task_created_at:number
    isEditEnabled: boolean
}