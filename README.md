# Adapter-serializer

Ember.js的适配器和序列化器示例，主要是通过创建一个完整的示例去演示如何使用Ember的[adapter](https://guides.emberjs.com/v2.5.0/models/customizing-adapters/)和[serializer](https://guides.emberjs.com/v2.5.0/models/customizing-serializers/)。

[adapter](https://guides.emberjs.com/v2.5.0/models/customizing-adapters/)和[serializer](https://guides.emberjs.com/v2.5.0/models/customizing-serializers/)最重要的作用就是用于链接自定义的后端数据，
其中包括自定义的数据库、数据格式等等。本例子使用的数据后端是[adapter-serializer-server]()，此后端使用的数据库是Mongodb，并且数据交换格式[json api](https://jsonapi.org)，因为Ember Data默认支持的就是JSONAPI格式的数据。那么如何格式化数据为JSONAPI格式呢？？很简单，直接使用现有的轮子[node json-api](https://github.com/ethanresnick/json-api)，如果你想使用其他语言格式化数据为JSONAPI，请看[JSONAPI implementations](http://jsonapi.org/implementations/)有更多插件介绍，其中包括客户端和后端的插件。

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
