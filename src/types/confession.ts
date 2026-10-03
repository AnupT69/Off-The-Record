export type RoleType =
  | "CFO"
  | "CTO"
  | "CIO"
  | "Finance Leader"
  | "Technology Leader"
  | "Other";

export interface ConfessionItem {
  id: string;
  confession: string;
  role?: RoleType;
  prompt?: string;
  createdAt: string;
  approved: boolean;
  likesCount?: number;
}

export interface CreateConfessionPayload {
  confession: string;
  role?: RoleType;
  prompt?: string;
}
