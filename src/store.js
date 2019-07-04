import {assoc, defaultTo} from 'ramda';

/**
 * The global store @hax
 * window.store.set(key, value) sets a value to the store
 * window.store.get(key) returns a value from the store
 */
export default (initialState = {}) => {

  window.store = {
    listeners: {},
    values: initialState
  }

  const listeners = {}
  const defaultToArr = defaultTo([])
  const nofity = 

  window.store.set = (key, value) => {
    window.store.values = assoc(key, value, window.store.values)
    if (window.store.listeners[value]) window.store.listeners[value].forEach(fn => fn(value))
  }
  window.store.get = (key) => window.store.values[key]
  window.store.listen = (key, fn) => {
    assoc(key, defaultToArr(window.store.listeners[key]).concat(fn), window.store.listeners)
    return window.store.get(key)
  }

}