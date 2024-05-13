import {navlink} from './types/types'
import BoardIcons from '@/components/icons/board-split';
import WorkspaceIcons from '@/components/icons/workspace';
export const sitelink = [
    {id: 0, title: 'Home', url: '/'},
    {id: 1, title: 'Demo', url: '/demo'},
    {id: 2, title: 'Support Me', url: '/supportme'},
]
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