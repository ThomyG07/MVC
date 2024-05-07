import { observer } from "/js/pattern/observer.js"
export class Notifier
{
#observers
constructor()
{
this.#observers = [];
}
addObserve(observer)
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