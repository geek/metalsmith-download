# metalsmith-download
Metalsmith plugin that downloads a file locally


## Installation

```javascript
$ npm install metalsmith-download
```

## Usage

### CLI

```javascript
{
  "plugins": {
    "metalsmith-download": {
      "url": "http://site.com/file.md",
      "file": "/path/to/save/file.md"
    }
  }
}
```

### JavaScript

```javascript
var MetalSmith = require('metalsmith');
var Download = require('metalsmith-download');

Metalsmith(__dirname).use(Download({
    url: 'http://site.com/file.md',
    file: '/path/to/save/file.md'
  }))
  .build();
```
