export interface ApiResponse<T> {
    result: string,
    message: string,
    body: T,
}