import {navlink} from './types/types'
import BoardIcons from '@/components/icons/board-split';
import CalenderDate from '@/components/icons/calender-date';
import WorkspaceIcons from '@/components/icons/workspace';
import FluentTaskListSquare24Regular from '@/components/icons/task-square';
import FluentDocumentFolder24Regular from '@/components/icons/document-folder';
import FluentPeopleTeam24Regular from '@/components/icons/people-team';
import FluentDataFunnel24Regular from '@/components/icons/data-funnel';
export const sitelink = [
    {id: 0, title: 'Home', url: '/'},
    {id: 1, title: 'Demo', url: '/demo'},
    {id: 2, title: 'Support Me', url: '/supportme'},
]
export const sidebar = [
    {id: 1, title: 'Workspace', url: '/dashboard/workspace', icons: WorkspaceIcons },
    {id: 2, title: 'Schedule', url: '/dashboard/schedule', icons: CalenderDate},
    {id: 3, title: 'Task', url: '/dashboard/task', icons: FluentTaskListSquare24Regular},
    {id: 4, title: 'Memos', url: '/dashboard/memos', icons: FluentDocumentFolder24Regular},
    {id: 5, title: 'Funnel', url: '/dashboard/funnel', icons: FluentDataFunnel24Regular},
    {id: 6, title: 'Teams', url: '/dashboard/teams', icons: FluentPeopleTeam24Regular},
]


export const coreFeature = [
    {
        id: 1,
        title: "Don't Miss Out!",
        description: 'Emphasize the reminder and notification system of your account, ensuring that users never miss important deadlines or tasks.',
        icon: BoardIcons
    },
    {
        id: 2,
        title: 'Work Together!',
        description: 'Highlight the collaboration features of your account, allowing users to share tasks with others, assign tasks to team members, and track progress together.',
        icon: BoardIcons
    },
    {
        id: 4,
        title: "It's Safe!",
        description: 'Assure users of the data security and privacy measures implemented in your account, protecting their sensitive information',
        icon: BoardIcons
    }
]

export const workspaceExample = [
    {
        id: 0,
        name: 'TodoApp',
        icon: WorkspaceIcons,
        url: "/"
    },
    {
        id: 1,
        name: 'MangolabsApp',
        icon: WorkspaceIcons,
        url: "/"
    },
    {
        id: 2,
        name: 'E-Commerce',
        icon: WorkspaceIcons,
        url: "/"
    },
    {
        id: 3,
        name: 'WorkbookApp',
        icon: WorkspaceIcons,
        url: "/"
    },
    {
        id: 4,
        name: 'ScheduleApp',
        icon: WorkspaceIcons,
        url: "/"
    },
    {
        id: 5,
        name: 'POS-Restaurant App',
        icon: WorkspaceIcons,
        url: "/"
    },
]