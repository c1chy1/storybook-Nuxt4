import type {Ref, UnwrapRef} from 'vue'
import {reactive} from 'vue'

type EventCallback = (...args: any[]) => void
type EventMap = Record<string, EventCallback[]>

class EventBus {
    private _events: UnwrapRef<Ref<EventMap>> = reactive({} as EventMap)

    $on(event: string, callback: EventCallback): void {
        if (!this._events[event]) {
            this._events[event] = []
        }
        this._events[event].push(callback)
    }

    $emit(event: string, ...args: any[]): void {
        if (this._events[event]) {
            this._events[event].forEach((callback) => {
                callback(...args)
            })
        }
    }

    $off(event: string, callback: EventCallback): void {
        if (this._events[event]) {
            const index = this._events[event].indexOf(callback)
            if (index !== -1) {
                this._events[event].splice(index, 1)
            }
        }
    }
}

/**
 * @constant {EventBus}
 * @description Creates an event bus to be used globally for emitting and listening to events over all components.
 * @example
 * TEventBus.$on('change:visible-markers', handleVisibleMarkersChange); -> registers event handler when event is emitted
 * TEventBus.$off('change:visible-markers', handleVisibleMarkersChange); -> removes event handler
 */
export const EVENTBUS: UnwrapRef<EventBus> = new EventBus()
