import { dom } from 'blue-js'
import { parser, registry } from 'blue-widgets'

// Import project widgets
import * as widgets from './widgets'

// Add widgets to the registry

registry.add({
  ...widgets
})

// Parse the body element
parser.parse()

// Anything that needs dom ready
dom.onReady(() => {
  /* All tables in the rte or with the .table class will be wrapped with a div with
     class table-overflow automatically to allow horizontal scrolling tables on mobile */
  const tables = document.querySelectorAll('.rte table, .table')

  for (let table of tables) {
    dom.wrap(table, html => `<div class="table-overflow">${html}</div>`)
  }
})
