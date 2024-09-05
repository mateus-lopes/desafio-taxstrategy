export interface Link {
  text: string;
  url: string;
  children?: Link[];
  notification?: boolean;
}