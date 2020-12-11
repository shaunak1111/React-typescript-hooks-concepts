export interface httpGet {
    get(url: string): Promise<Response>
}
