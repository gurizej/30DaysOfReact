class Statistics{
    constructor(arr){
        this.arr = arr
    }
    count() {
        return this.arr.length
    }
    sum() {
        let result = 0
        for(var i=0; i<this.arr.length; i++){
            result += this.arr[i]
        }
        return result
    }
    min() {
        let min = this.arr[0]
        for(var i=0; i<this.arr.length; i++){
            if(min > this.arr[i]){
                min = this.arr[i]
            }
        }
        return min
    }
    max() {
        let max = this.arr[0]
        for(var i=0; i<this.arr.length; i++){
            if(max < this.arr[i]){
                max = this.arr[i]
            }
        }
        return max
    }
    range() {
        return this.max() - this.min()
    }
    mean() {
        let mean = 0
        for(var i=0; i<this.arr.length; i++){
            mean += this.arr[i]
        }
        return mean/this.arr.length
    }
    var() {
        let v = 0
        let mean = this.mean()
        for(var i=0; i<this.arr.length; i++){
            v = v + (this.arr[i] - mean) * (this.arr[i] - mean)
        }
        return v/this.arr.length
    }
    std() {
        return Math.sqrt(this.var())
    }
    freqDist() {
        const map = {}
        for(let i = 0; i < this.arr.length; i++){
            map[this.arr[i]] = (map[this.arr[i]] || 0) + 1;
        }
        return map;
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = new Statistics(ages)
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2