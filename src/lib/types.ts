export interface cardType {
    id: number;
    title: string;
    tags?: string;
    createDate?: Date;
    subtask?: [
        {
            id: number;
            title?: string;
            isComplete?: boolean;
        }
    ];
    member?: string[];
    comment?: boolean;
    attachment?: boolean;
    media?: boolean;
}
export interface navlink {
    id: number;
    title: string;
    url: string;
    icons: any
}

export type boardProps = {
    status : 'Backlogs' | 'Inprogress' | 'Review' | 'Done'
}
export enum status {
    'Backlogs',
    'Inprogress',
    'Review',
    'Done'
}