/* code to visualise at https://out.stegrider.now.sh/ */

const { fromEvent } = Rx;
const { map, pluck } = RxOperators;

const node = document.createElement('input')
const container = document.querySelector('.container');

container.appendChild(node)

const observable = fromEvent(node, 'input').pipe(
    //event obj would be like { target: {value: 20 }} then getting 20
    pluck('target', 'value')
)

// remove this line in dev
observable