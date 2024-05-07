export class Counter
{
    #value;
    constructor()
    {

        this.#value = 0;
    
    }

    get Value()
    {
        return this.#value;
    }
    incrementValue()
    {
        this.#value = Number(this.#value) + 1;
    }
    decrementValue()
    {
        this.#value = Number(this.#value) - 1;
    }



}
