import {Text_block} from './text_block';

export interface Project {
  id: number;
  name: string;
  description: string;
  icon_url: string;
  img_url: string;
  tags: string[];
  text: Text_block[];
  review: string;
}
