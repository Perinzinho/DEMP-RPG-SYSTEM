import {UserRole} from './enums';

export interface userResponse {
    userId: string;
    email: string;
    username: string;
    roleEnum: UserRole;
    createdAt:Date;
    updatedAt:Date|null;
}