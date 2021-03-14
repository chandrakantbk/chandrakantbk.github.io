/* code to visualise at https://out.stegrider.now.sh/ */

const { fromEvent } = Rx;
const { map, pluck } = RxOperators;

const node = document.createElement('input')
const container = document.querySelector('.container');

container.appendChild(node)

const observable = fromEvent(node, 'input').pipe(
    map(event => event.target.value),
    map(value => parseInt(value)),
    map(val => {
        if (isNaN(val)) {
            // stops observable to emit any values further
            throw new Error('Type Number')
        }
        /* returns value which can be processed in the pipe with operator after this one */
        return val
    })
)

// only required to write at https://out.stegrider.now.sh/
// remove line below in devopment
observable