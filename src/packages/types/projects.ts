export interface Project {
  id: number;
  name: string;
  description: string;
}

export interface ProjectsData {
  listProjects: {
    items: Project[];
  };
}

export interface ProjectsListViewData {
  id: number;
  name: string;
  description?: string;
}
