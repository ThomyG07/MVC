import { Observer } from "/js/pattern/observer.js"
export class Notifier
{
#observers
constructor()
{
this.#observers = [];
}
addObserver(observer)
{
    if(observer instanceof Observer)
    this.#observers.push(observer)
}
notify()
{
    for(const obs  of this.#observers)
    {
        obs.notify();

    }

}

}