export interface Section {
  type: "project" | "narrative";
  label: string;
  content: string;
}

export interface Profile {
  name: string;
  role: string;
  tags: string[];
  sections: Section[];
}

export interface ProfileResponse {
  profile: Profile;
  updatedAt: string;
  error?: string;
}
