export interface PostType {
  id: number;
  username: string;
  user_display_picture: string;
  description: string;
  photo_url: string;
  timestamp: string;
  comments: [{ id: number; username: string; comment: string }];
}
