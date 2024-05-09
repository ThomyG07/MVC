import { Counter } from "/js/models/counter.js"
import { Notifier } from "/js/pattern/notifier.js" 
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
        console.log(this.counterValue);
        this.#counter.incrementValue();
        this.notify();

    }
    decrementCounter()
    {
        this.#counter.decrementValue();
        this.notify();
    }

    get counterValue()
    {
        return this.#counter.Value;

    }
    
}
