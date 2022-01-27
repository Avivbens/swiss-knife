export function waiter(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms || 0))
}