# Appwrite Console SDK

![License](https://img.shields.io/github/license/appwrite/sdk-for-console.svg?style=flat-square)
![Version](https://img.shields.io/badge/api%20version-0.8.0-blue.svg?style=flat-square)
[![Twitter Account](https://img.shields.io/twitter/follow/appwrite_io?color=00acee&label=twitter&style=flat-square)](https://twitter.com/appwrite_io)
[![Discord](https://img.shields.io/discord/564160730845151244?label=discord&style=flat-square)](https://appwrite.io/discord)

**This SDK is compatible with Appwrite server version 0.8.x. For older versions, please check [previous releases](https://github.com/appwrite/sdk-for-console/releases).**

Appwrite is an open-source backend as a service server that abstract and simplify complex and repetitive development tasks behind a very simple to use REST API. Appwrite aims to help you develop your apps faster and in a more secure way.
                        Use the Console SDK to integrate your app with the Appwrite server to easily start interacting with all of Appwrite backend APIs and tools.
                        For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

![Appwrite](https://appwrite.io/images/github.png)

## Installation

### NPM

To install via [NPM](https://www.npmjs.com/):

```bash
npm install appwrite --save
```

If you're using a bundler (like [Rollup](https://rollupjs.org/) or [webpack](https://webpack.js.org/)), you can import the Appwrite module when you need it:

```js
import { Appwrite } from "appwrite";
```

### CDN

To install with a CDN (content delivery network) add the following scripts to the bottom of your <body> tag, but before you use any Appwrite services:

```html
<script src="https://cdn.jsdelivr.net/npm/appwrite@2.0.0"></script>
```


## Getting Started

### Add your Web Platform
For you to init your SDK and interact with Appwrite services you need to add a web platform to your project. To add a new platform, go to your Appwrite console, choose the project you created in the step before and click the 'Add Platform' button.

From the options, choose to add a **Web** platform and add your client app hostname. By adding your hostname to your project platform you are allowing cross-domain communication between your project and the Appwrite API.

### Init your SDK
Initialize your SDK code with your project ID which can be found in your project settings page.

```js
// Init your Web SDK
const appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj') // Your project ID
    .setSelfSigned() // Use only on dev mode with a self-signed SSL cert
;
```

### Make Your First Request
Once your SDK object is set, access any of the Appwrite services and choose any request to send. Full documentation for any service method you would like to use can be found in your SDK documentation or in the API References section.

```js
// Register User
appwrite
    .account.create('me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });

```

### Full Example
```js
// Init your Web SDK
const appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj')
    .setSelfSigned() // Use only on dev mode with a self-signed SSL cert
;

// Register User
appwrite
    .account.create('me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
```

### Learn more
You can use followng resources to learn more and get help
- 🚀 [Getting Started Tutorial](https://appwrite.io/docs/getting-started-for-flutter)
- 📜 [Appwrite Docs](https://appwrite.io/docs)
- 💬 [Discord Community](https://appwrite.io/discord)
- 🚂 [Appwrite Flutter Playground](https://github.com/appwrite/playground-for-flutter)


## Getting Started

Initialise the Appwrite SDK in your code, and setup your API credentials:

```js

// Init your Web SDK
var appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost/v1') // Set only when using self-hosted solution
    .setProject('455x34dfkj') // Your Appwrite Project UID
;

```


## Contribution

This library is auto-generated by Appwrite custom [SDK Generator](https://github.com/appwrite/sdk-generator). To learn more about how you can help us improve this SDK, please check the [contribution guide](https://github.com/appwrite/sdk-generator/blob/master/CONTRIBUTING.md) before sending a pull-request.

## License

Please see the [BSD-3-Clause license](https://raw.githubusercontent.com/appwrite/appwrite/master/LICENSE) file for more information.