export interface ILink {
  text: string;
  url: string;
  children?: ILink[];
  notification?: number;
}

export interface IService {
  ref: string;
  initialDate: string;
  finalDate: string;
  employee: string;
  equipmentType:  'Celular' | 'TV' | 'Notebook' | 'Monitor' | 'Computador desktop' | '';
  description: string;
  status:  'Em Andamento' | 'Finalizado' |  'Aguardando Funcionário' | '';
  selected?: boolean;
}