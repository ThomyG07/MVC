import { Counter } from "/js/models/counter.js"
import {Notifier } from "/js/pattern/notifier.js" 
export class Controller extends Notifier
{
    #counter;
    constructor()
    {
        super();
        this.#counter = new Counter();

    }

    incrementCounter()
    {
        this.#counter.incrementValue();
        notify();

    }
    decrementCounter()
    {
        this.#counter.decrementValue();
        notify();

    }
    get counterValue()
    {
        return this.#counter.Value;

    }

}
