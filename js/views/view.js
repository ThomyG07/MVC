import { Observer } from "/js/pattern/observer.js"
import { Controller } from "/js/controllers/controller.js"
export class View extends Observer
{
    #controller;
    constructor(controller)
    {
        super();
        if(controller instanceof Controller) this.#controller = controller;
        this.#controller.addObserver(this);
        const btn_increment = document.getElementById("btn-increment");
        btn_increment.addEventListener("click", () => this.#controller.incrementCounter(this.#controller));
        const btn_decrement = document.getElementById("btn-decrement");
        btn_decrement.addEventListener("click", () => this.#controller.decrementCounter(this.#controller));
    }
    get GetController()
    {
        return this.#controller;
    }

    notify()
    {
        const text_counter = document.getElementById("txt-counter");
        let value = this.#controller.counterValue;
        text_counter.textContent = value;   
    }
    RunBtn()
    {
        console.log(GetController);
        this.GetController.incrementCounter();

        
        
    }


}


