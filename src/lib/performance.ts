export function PerformanceTimer(msg: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any[]) {
            console.time(msg)
            const result = originalMethod.apply(this, args)
            console.timeEnd(msg)
            return result
        }
        return descriptor
    }
}
