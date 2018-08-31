// This is an example of a Widget, feel free to delete
import { Widget } from 'blue-widgets'

class Foo extends Widget {
  constructor (el) {
    super(el)

    this.barEl = el.querySelector('.bar')

    // Avoid having to bind this every time
    this.someMethod = this.someMethod.bind(this)

    this.barEl.addEventListener('click', this.someMethod, false)
  }
  onBarElClick (event) {
    event.preventDefault()
    window.alert('clicked bar el')
  }
  beforeRemove () {
    this.barEl.removeEventListener('click', this.someMethod, false)
  }
}

export default Foo
