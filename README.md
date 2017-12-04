# React Exiting

[![version][version]](http://npm.im/react-exiting)
[![MIT License][mit license]](http://opensource.org/licenses/MIT)
[![Size][size]](https://unpkg.com/react-exiting)
[![Size gzip][size gzip]](https://unpkg.com/react-exiting)

Notifies your app when the user is exiting.

## Usage

```js
import React from 'react'
import {Exiting} from 'react-exiting'

const App = () => (
  <Exiting
    onChange={({isExiting}) => console.log({isExiting})}
    render={({isExiting}) => (
      <h1>User is {isExiting ? 'exiting' : 'not exiting'}</h1>
    )}
  />
)
```

### License

MIT

[version]: https://img.shields.io/npm/v/react-exiting.svg
[mit license]: https://img.shields.io/npm/l/react-exiting.svg
[size]: https://badges.herokuapp.com/size/npm/react-exiting
[size gzip]: https://badges.herokuapp.com/size/npm/react-exiting?gzip=true
