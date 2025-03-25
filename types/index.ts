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

export interface SubmitApplicant {
    jobId:string;
    first_name:string;
    last_name:string;
    middle_name:string;
    email:string;
    contact_number:string;
    resume_path:File
    photo_path:File
}

export interface ApiResponse<T> {
    status: number;
    message: string;
    data?: T;
  }

