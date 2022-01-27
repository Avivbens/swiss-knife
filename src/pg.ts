import { PerformanceTimer } from './lib/performance'

class Pg {
    @PerformanceTimer('calc')
    async calc() {
        const numbers = Array.from({ length: 10000000 }, () => Math.floor(Math.random() * 1000))
        const res = numbers.map(x => x * 2)
        return res
    }
}

(async () => {
    const a = new Pg()
    const res = await a.calc()

    console.log('res', res)
})()
