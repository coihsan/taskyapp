import { navlink } from "./types/types";
import BoardIcons from "@/components/icons/board-split";
import CalenderDate from "@/components/icons/calender-date";
import WorkspaceIcons from "@/components/icons/workspace";
import FluentTaskListSquare24Regular from "@/components/icons/task-square";
import FluentDocumentFolder24Regular from "@/components/icons/document-folder";
import FluentPeopleTeam24Regular from "@/components/icons/people-team";
import FluentDataFunnel24Regular from "@/components/icons/data-funnel";
import { WorkflowsIcons } from "@/components/icons/workflows";
import {FluentHome24Regular} from "@/components/icons/home";
import {FluentPerson24Regular} from "@/components/icons/person";
import {FluentSettings24Regular} from "@/components/icons/settings";
import {FluentSignOut24Regular} from "@/components/icons/sign-out";

export const sitelink = [
  { id: 0, title: "Home", url: "/" },
  { id: 1, title: "Demo", url: "/demo" },
  { id: 2, title: "Support Me", url: "/supportme" },
];
export const menuUser = [
  { id: 1, title: "Profile", url: "/user/profile", icon:  FluentPerson24Regular},
  { id: 2, title: "Task", url: "/user/task", icon: FluentTaskListSquare24Regular},
  { id: 3, title: "Settings", url: "/user/profilesettings", icon: FluentSettings24Regular},
  { id: 4, title: "Sign Out", url: "/sign-out", icon: FluentSignOut24Regular},
]
export const sidebar = [
  { id: 1, title: "View", url: "/view", icons: WorkspaceIcons },
  { id: 2, title: "Schedule", url: "/schedule", icons: CalenderDate },
  { id: 7, title: "Teams", url: "/teams", icons: FluentPeopleTeam24Regular },
];
export const workspaceMenu = [
  {
    id: 4,
    title: "Memos",
    url: "/memos",
    icons: FluentDocumentFolder24Regular,
  },
  { id: 5, title: "Funnel", url: "/funnel", icons: FluentDataFunnel24Regular },
  { id: 6, title: "Workflows", url: "/workflows", icons: WorkflowsIcons },

]
export const coreFeature = [
  {
    id: 1,
    title: "Don't Miss Out!",
    description:
      "Emphasize the reminder and notification system of your account, ensuring that users never miss important deadlines or tasks.",
    icon: BoardIcons,
  },
  {
    id: 2,
    title: "Work Together!",
    description:
      "Highlight the collaboration features of your account, allowing users to share tasks with others, assign tasks to team members, and track progress together.",
    icon: BoardIcons,
  },
  {
    id: 4,
    title: "It's Safe!",
    description:
      "Assure users of the data security and privacy measures implemented in your account, protecting their sensitive information",
    icon: BoardIcons,
  },
];

export const workspaceExample = [
  {
    id: 0,
    name: "TodoApp",
    icon: WorkspaceIcons,
    url: "/",
  },
  {
    id: 1,
    name: "MangolabsApp",
    icon: WorkspaceIcons,
    url: "/",
  },
  {
    id: 2,
    name: "E-Commerce",
    icon: WorkspaceIcons,
    url: "/",
  },
  {
    id: 3,
    name: "WorkbookApp",
    icon: WorkspaceIcons,
    url: "/",
  },
  {
    id: 4,
    name: "ScheduleApp",
    icon: WorkspaceIcons,
    url: "/",
  },
  {
    id: 5,
    name: "POS-Restaurant App",
    icon: WorkspaceIcons,
    url: "/",
  },
];
