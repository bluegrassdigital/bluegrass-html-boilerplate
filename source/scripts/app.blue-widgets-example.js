// If you're going to use blue-widgets in your project
import { parser, registry } from 'blue-widgets'
// Import project widgets
import * as widgets from './widgets'

function init () {
  // Add widgets to the registry
  registry.add({
    ...widgets
  })

  // Parse the body element
  parser.parse()
}

init()
