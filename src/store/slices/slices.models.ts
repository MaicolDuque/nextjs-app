export interface AppStateInfo {
  value: number;
  aloId: string;
  uiConfig: Record<string, unknown>;
  showLoading: boolean;
  user?: Record<string, unknown>;
}
