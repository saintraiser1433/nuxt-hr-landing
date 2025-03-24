export type DataOrientation = 'vertical' | 'horizontal';
export type Direction = 'top' | 'middle' | 'bottom';

interface Timestamped {
    createdAt?: Date;
    updatedAt?: Date;
}

interface DepartmentModel {
    id?: number;
    title?: string;
    status?: boolean;
}

interface ScreeningModel {
    id?: number;
    title: string;
    description?: string;
    status?: boolean;
    JobScreening?: JobScreeningModel[];
}

interface JobScreeningModel extends Timestamped {
    id?: number;
    job_id: number;
    screening_id: number;
    jobList?: JobModel;
    screeningList?: ScreeningModel;
}

export interface JobModel extends Timestamped {
    id?: number;
    title?: string;
    description?: string;
    totalAvailable?: number;
    departmentsId?: number;
    department?: DepartmentModel,
    status?: boolean;
    headerImage?: string;
    file?: object;
    requirements?: RequirementCommandPallete[];
    JobScreening?: JobScreeningModel[];
}

interface RequirementCommandPallete {
    id: number;
    label?: string;
    title?: string;
}



