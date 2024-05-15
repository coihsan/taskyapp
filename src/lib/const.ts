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
    {id: 1, title: 'Workspace', url: '/', icons: WorkspaceIcons },
    {id: 2, title: 'Schedule', url: '/schedule', icons: CalenderDate},
    {id: 3, title: 'Task', url: '/task', icons: FluentTaskListSquare24Regular},
    {id: 4, title: 'Memos', url: '/memos', icons: FluentDocumentFolder24Regular},
    {id: 5, title: 'Funnel', url: '/funnel', icons: FluentDataFunnel24Regular},
    {id: 6, title: 'Teams', url: '/teams', icons: FluentPeopleTeam24Regular},
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
        name: 'Workspace 1',
        icon: WorkspaceIcons,
        url: "/"
    },
    {
        id: 1,
        name: 'Workspace 2',
        icon: WorkspaceIcons,
        url: "/"
    },
    {
        id: 2,
        name: 'Workspace 3',
        icon: WorkspaceIcons,
        url: "/"
    },
    {
        id: 3,
        name: 'Workspace 4',
        icon: WorkspaceIcons,
        url: "/"
    },
]