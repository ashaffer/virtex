
# virtex

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Small, focused virtual dom library.  Right now this is an experiment to try to create a simple virtual dom library that can be extended in interesting ways by allowing the calling code to reinterpret all side-effects (thunk rendering & DOM manipulation at the moment) via an action dispatcher.

## Usage

```javascript
const {create, update} = virtex(dispatch)

let tree = render(state)
const node = create(tree)

// ... on state update ...

update()

```

## Installation

    $ npm install virtex

## Performance

Virtex is not the fastest, but it's pretty fast.  6-7x faster than React, and about on par with [snabbdom](https://github.com/paldepind/snabbdom)/[deku](https://github.com/dekujs/deku).  Here's the [vdom-benchmark](https://github.com/ashaffer/vdom-benchmark-virtex).

## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
