import { api } from "./api";
import type { userResponse } from "../types/userResponse";

export async function getUserById(userId: string): Promise<userResponse> {
    return api.get(`/users/${userId}`);
}