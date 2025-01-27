# codemod

codemod rewrites JavaScript and TypeScript using babel plugins.

## Install

Install from [npm](https://npmjs.com/):

```sh
$ npm install -g @codemod/cli
```

> NOTE: You can also install using `yarn global add @codemod/cli`.

This will install the runner as `codemod`. This package requires node v6 or higher.

## Usage

The primary interface is as a command line tool, usually run like so:

```sh
$ codemod --plugin transform-module-name \
  path/to/file.js \
  another/file.js \
  a/directory
```

This will re-write the files `path/to/file.js`, `another/file.js`, and any supported files found in `a/directory` by transforming them with the babel plugin `transform-module-name`. Multiple plugins may be specified, and multiple files or directories may be re-written at once.

Note that TypeScript support is provided by babel and therefore may not completely support all valid TypeScript code. If you encounter an issue, consider looking for it in the [babel issues labeled `area: typescript`](https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22area%3A+typescript%22+) before filing an issue.

Plugins may also be loaded from remote URLs, including saved [AST Explorer](https://astexplorer.net/) URLs, using `--remote-plugin`. This feature should only be used as a convenience to load code that you or someone you trust wrote. It will run with your full user privileges, so please exercise caution!

```sh
$ codemod --remote-plugin URL …
```

By default, `codemod` makes minimal changes to your source files by using [recast](https://github.com/benjamn/recast) to parse and print your code, retaining the original comments and formatting. If desired, you can reformat files using [Prettier](https://prettier.io/) or ESLint or whatever other tools you prefer after the fact.

For more detailed options, run `codemod --help`.

## Writing a Plugin

There are [many, many existing plugins](https://www.npmjs.com/search?q=babel-plugin) that you can use. However, if you need to write your own you should consult the [babel handbook](https://github.com/thejameskyle/babel-handbook). If you publish a plugin intended specifically as a codemod, consider using both the [`babel-plugin`](https://www.npmjs.com/search?q=babel-plugin) and [`babel-codemod`](https://www.npmjs.com/search?q=babel-codemod) keywords.

### Transpiling using Babel Plugins

`codemod` supports parsing language features supported by a standard Babel or TypeScript build toolchain, similar to what a Create React App build pipeline can handle. Feel free to write your plugins using these language features–they'll be transpiled on the fly.

### Passing Options to Plugins

You can pass a JSON object as options to a plugin:

```sh
# Pass a JSON object literal
$ codemod --plugin ./my-plugin.ts --plugin-options '{"opt": true}'
# Pass a JSON object from a file
$ codemod --plugin ./my-plugin.ts --plugin-options @opts.json
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for information on setting up the project for development and on contributing to the project.

## License

Copyright 2017 Brian Donovan

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
