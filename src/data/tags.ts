export interface Tag {
  id: number;
  label: string;
  category?: string;
}

export const TagsData: Tag[] = [
  { id: 1, label: "Love Story", category: "genre" },
  { id: 2, label: "Romantic", category: "mood" },
  { id: 3, label: "Music", category: "category" },
  { id: 4, label: "Storytelling", category: "format" },
  { id: 5, label: "New", category: "status" },
  { id: 6, label: "Emotional", category: "mood" },
  { id: 7, label: "Softhearted", category: "mood" },
  { id: 8, label: "Melancholic", category: "mood" },
];
