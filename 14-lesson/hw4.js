function flatten(obj){
    for (o in obj){
        console.log(o)
    }
}

flatten({ a: 1, b: { c: 2, d: { e: 3 } } })