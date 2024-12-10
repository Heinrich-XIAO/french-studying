export interface StudyTool {
  id: string;
  name: string;
  description: string;
  comingSoon: boolean;
}

export interface NavigationState {
  currentTool: string | null;
}