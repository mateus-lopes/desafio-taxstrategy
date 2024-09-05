export interface ILink {
  text: string;
  url: string;
  children?: ILink[];
  notification?: boolean;
}

export interface IService {
  ref: string;
  forecastDate: string;
  employee: string;
  email: string;
  description: string;
  status: string;
  selected?: boolean;
}