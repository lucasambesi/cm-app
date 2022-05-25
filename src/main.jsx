import 'preact/debug'
import {render} from 'preact'
import {AppRouter} from './routers/AppRouter'

render(<AppRouter />, document.getElementById('app'))
