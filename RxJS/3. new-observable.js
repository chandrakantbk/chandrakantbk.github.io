const { Observable } = Rx;
const { tap, share } = RxOperators;

const observable = new Observable((subscriber) => {
    //emits value to subscriber thruogh pipe if implemented
    subscriber.next(10);
    subscriber.next(20);
    subscriber.next(30);

    setTimeout(() => {
        /* this value will be listing by second observer bcz we subscribed it after 1st one and it takes time */
        subscriber.next(40);
    }, 500);

    // completes the observable now onwards observer will not receive any updates
    subscriber.complete();

    // sends error to observer, now onwards and stops emiting next values
    subscripber.error(new Error('Error found here'))
}).pipe(
    // .pipe is nothing the collection of processes using operators
    // .tap doesn't transform anything here
    tap(value => console.log("Tap value: ", value)),

    // the share() opertaor makes observer multicast
    // share()
);

observable.subscribe({
    // here we have passed the opbject to subscribe method where this object is known as observer
    next(val) {
        console.log("value after processing pipe from observable ", val);
    },
    error(err) {
        console.log("error from observable", err.message);
    },
    complete() {
        console.log('observable called complete method there')
    }
});


observable.subscribe((val) => {
    /* 
     here as soon as we call subscribe method, the observable re-execution begins, 
     that's why in this case we call this behaviour as "Unicast Observerver".
     Use share() operator to make observable multicast
    */
    console.log("second observer: ", val);
})