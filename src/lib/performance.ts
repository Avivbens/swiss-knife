export function PerformanceTimer(msg: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value
        const consoleStamp = `[${propertyKey}] >>> ${msg}`

        descriptor.value = function (...args: any[]) {
            console.time(consoleStamp)
            const result = originalMethod.apply(this, args)
            console.timeEnd(consoleStamp)
            return result
        }
        return descriptor
    }
}
