import React from 'react'
import '@model/lodash'
import * as ReactDOM from 'react-dom/client'
const App = () => (
<div className="container">
<h1>Webpack training</h1>
<div className="webpack-logo" />
<pre />
<div className="less-demo">
<h2>Less</h2>
</div>
<div className="scss-demo">
<h2>Scss</h2>
</div>
<div className="sass-demo">
<h2>Sass</h2>
</div>
</div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)