export default {
    transition(to, from) {
        console.log('TO:')
        console.log(to)
        console.log('FROM:')
        console.log(from)
        if (from !== undefined) {
            let links=['index','about','items','connect']
            let n_to=links.indexOf(to.name)
            let n_from=links.indexOf(from.name)
            console.log(n_to + ' ' + n_from)
            if (n_to>n_from) {
                return 'slideleft' 
            }
            if (n_from>n_to) {
                return 'slideright' 
            }
        }
    }
}