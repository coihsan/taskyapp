import {navlink} from './types/types'
import BoardIcons from '@/components/icons/board-split';
import WorkspaceIcons from '@/components/icons/workspace';
export const sidebar = [
    {id: 1, title: 'Board', url: '/', icons: WorkspaceIcons },
    {id: 2, title: 'Schedule', url: '/schedule', icons: BoardIcons},
    {id: 3, title: 'Task', url: '/task', icons: BoardIcons},
    {id: 4, title: 'Docs', url: '/docs', icons: BoardIcons},
    {id: 5, title: 'Team', url: '/teams', icons: BoardIcons},
]


export const coreFeature = [
    {
        id: 1,
        title: 'Reminders and notifications',
        description: 'Emphasize the reminder and notification system of your app, ensuring that users never miss important deadlines or tasks.',
        icon: BoardIcons
    },
    {
        id: 2,
        title: 'Team Collaboration',
        description: 'Highlight the collaboration features of your app, allowing users to share tasks with others, assign tasks to team members, and track progress together.',
        icon: BoardIcons
    },
    {
        id: 4,
        title: 'Security and Data Protection',
        description: 'Assure users of the data security and privacy measures implemented in your app, protecting their sensitive information',
        icon: BoardIcons
    }
]