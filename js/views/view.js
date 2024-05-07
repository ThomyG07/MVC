import { observer } from "/js/pattern/observer.js"
import { Controller } from "/js/controllers/controller.js"
export class View extends observer
{
    #controller 
    constructor(controller)
    {
        if(controller instanceof Controller) this.#controller = controller;
    }
    notify()
    {

        
    }


}