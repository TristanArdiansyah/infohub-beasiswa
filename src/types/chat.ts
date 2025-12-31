// types/chat.ts

export type ChatAction = 'reset' | 'link' | 'download';

export type ChatOption = {
  label: string;
  nextId: string;
  action?: ChatAction;
  actionPayload?: string; // URL for links or file paths for downloads
};

export type ChatNode = {
  id: string;
  message: string;
  options: ChatOption[];
  type?: 'question' | 'ending' | 'rejection' | 'info';
  requirements?: string[]; // For the "Backpack/Checklist" feature
  citation?: string; // To keep track of which PDF this came from
};