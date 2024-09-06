// Libraries

// Same Layer

// Lower Layers

import type Event from '../../application/events/Event.js';
import type EventHandler from '../../application/events/EventHandler.js';

import EventDispatcher from '../../application/events/EventDispatcher.js';

// Types

// Constants


/**
* @description 
*/
export default class InMemoryEventDispatcher extends EventDispatcher
{

    [property: string | symbol]: unknown;

    // public ATTRIBUTES

    // protected ATTRIBUTES

    protected readonly _observers: Map<Function, Set<EventHandler>>;

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    public constructor()
    {
        super();
        this._observers = new Map<Function, Set<EventHandler>>();
    }

    // public METHODS

    public subscribe(constructor: Function, handler: EventHandler): void
    {

        const list = this._observers.get(constructor);

        if (list === undefined) {
            this._observers.set(constructor, new Set([handler]));
            return;
        }

        list.add(handler);
    }

    public unsubscribe(constructor: Function, handler: EventHandler): void
    {
        const list = this._observers.get(constructor);

        if (list === undefined) {
            return;
        }

        list.delete(handler);

        if (list.size === 0) {
            this._observers.delete(constructor);
        }

    }

    public dispatch(event: Event): void
    {
        const list = this._observers.get(event.constructor);

        if (list === undefined) {
            return;
        }

        for (const handler of list) {
            handler.handle(event);
        }

    }

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
