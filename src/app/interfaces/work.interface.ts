export interface IService {
    id: string;
    initialDate: string;
    finalDate: string;
    employee: string;
    equipmentType:  'Celular' | 'TV' | 'Notebook' | 'Monitor' | 'Computador desktop' | '';
    description: string;
    status:  'Em Andamento' | 'Finalizado' |  'Aguardando Funcionário' | '';
    selected?: boolean;
}