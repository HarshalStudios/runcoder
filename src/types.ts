export type Page = 
  | 'home' 
  | 'features' 
  | 'pro' 
  | 'download' 
  | 'support' 
  | 'privacy' 
  | 'terms' 
  | 'contact'
  | 'verifier'
  | 'security'
  | 'refund'
  | 'deletion';

export interface MobileFile {
  name: string;
  language: 'c' | 'cpp' | 'java' | 'python' | 'html' | 'css' | 'javascript';
  content: string;
  recentlyOpened?: boolean;
  timeOpened?: string;
}

export interface MobileTemplate {
  title: string;
  language: 'c' | 'cpp' | 'java' | 'python' | 'html' | 'css' | 'javascript';
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  code: string;
  input?: string;
  output?: string;
}
