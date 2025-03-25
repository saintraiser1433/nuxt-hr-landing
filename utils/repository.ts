import type { NitroFetchRequest, $Fetch } from 'nitropack'
import type { ApiResponse, SubmitApplicant } from '~/types';



export const repository = <T>(fetch: $Fetch<ApiResponse<T>, NitroFetchRequest>, basePath: string) => ({

    async add(body: T): Promise<ApiResponse<T>> {

        return fetch<ApiResponse<T>>(`${basePath}`, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    },

    async update(body: T): Promise<ApiResponse<T>> {

        return fetch<ApiResponse<T>>(`${basePath}/${(body as any).id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        });

    },

    async updateById(id: number): Promise<ApiResponse<T>> {
        return fetch<ApiResponse<T>>(`${basePath}/${id}`, {
            method: 'PUT',
        });
    },

    async delete(id: number): Promise<ApiResponse<T>> {
        return fetch<ApiResponse<T>>(`${basePath}/${id}`, {
            method: 'DELETE',
        });
    },

    

    async deleteMany(data: any): Promise<ApiResponse<T>> {
        return fetch<ApiResponse<T>>(`${basePath}`, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },


    async getFiltered(id: number): Promise<ApiResponse<T[]>> {
        return fetch<ApiResponse<T[]>>(`${basePath}/${id}`)
    },

    async getAll(): Promise<ApiResponse<T[]>> {
        return fetch<ApiResponse<T[]>>(`${basePath}`)
    },


    //add with image:

    async addWithDocuments(body: any): Promise<ApiResponse<T>> {
        const formData = new FormData();
    
        Object.entries(body).forEach(([key, value]) => {
            if (value !== undefined && key !== "resume_path" && key !=="photo_path") {
                formData.append(key, String(value));
            }
        });
    
        // Ensure file is correctly appended
        if (body.resume_path instanceof File) {
            formData.append("resume_path", body.resume_path);
        }
        if (body.photo_path instanceof File) {
            formData.append("photo_path", body.photo_path);
        }
    
        return fetch<ApiResponse<T>>(`${basePath}`, {
            method: 'POST',
            body: formData,
        });
    },


    async updateWithImage(body: JobModel, file: any): Promise<ApiResponse<T>> {
        const formData = new FormData();

        // Append object fields to FormData
        Object.entries(body).forEach(([key, value]) => {
            if (value !== undefined) {
                if (key === "requirements" && Array.isArray(value)) {
                    value.forEach(reqId => formData.append("requirements[]", String(reqId))); // Append each ID separately
                } else {
                    formData.append(key, String(value));
                }
            }
        });

        // Append file if provided,
        if (file) {
            formData.append("file", file);
        }

        return fetch<ApiResponse<T>>(`${basePath}/${body.id}`, {
            method: 'PUT',  // Ensure backend handles PUT with multipart
            body: formData,
        });
    },




    async uploadImage(file: any) {
        const formData = new FormData();
        formData.append("file", file);
        return fetch(`/file${basePath}`, {
            method: 'POST',
            body: formData
        })
    },


















})