(function (window) {
     
    'use strict';

    window. = function () {

        let config = {
            endpoint: 'https://example.com',
        };

        /**
         * @param {string} endpoint
         * @returns {this}
         */
        let setEndpoint = function(endpoint) {
            config.endpoint = endpoint;

            return this;
        };

        let http = function(document) {
            let globalParams    = [],
                globalHeaders   = [];

            let addParam = function (url, param, value) {
                let a = document.createElement('a'), regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/g;
                let match, str = [];
                a.href = url;
                param = encodeURIComponent(param);

                while (match = regex.exec(a.search)) if (param !== match[1]) str.push(match[1] + (match[2] ? "=" + match[2] : ""));

                str.push(param + (value ? "=" + encodeURIComponent(value) : ""));

                a.search = str.join("&");

                return a.href;
            };

            /**
             * @param {Object} params
             * @returns {string}
             */
            let buildQuery = function(params) {
                let str = [];

                for (let p in params) {
                    if(Array.isArray(params[p])) {
                        for (let index = 0; index < params[p].length; index++) {
                            let param = params[p][index];
                            str.push(encodeURIComponent(p + '[]') + "=" + encodeURIComponent(param));
                        }
                    }
                    else {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
                    }
                }

                return str.join("&");
            };

            let addGlobalHeader = function(key, value) {
                globalHeaders[key] = {key: key.toLowerCase(), value: value.toLowerCase()};
            };
            
            let addGlobalParam = function(key, value) {
                globalParams.push({key: key, value: value});
            };

            addGlobalHeader('x-sdk-version', ':javascript:1.0.0');
            addGlobalHeader('content-type', '');

            /**
             * @param {string} method
             * @param {string} path string
             * @param {Object} headers
             * @param {Object} params
             * @param {function} progress
             * @returns {Promise}
             */
            let call = function (method, path, headers = {}, params = {}, progress = null) {
                let i;

                path = config.endpoint + path;

                if (-1 === ['GET', 'POST', 'PUT', 'DELETE', 'TRACE', 'HEAD', 'OPTIONS', 'CONNECT', 'PATCH'].indexOf(method)) {
                    throw new Error('var method must contain a valid HTTP method name');
                }

                if (typeof path !== 'string') {
                    throw new Error('var path must be of type string');
                }

                if (typeof headers !== 'object') {
                    throw new Error('var headers must be of type object');
                }

                for (i = 0; i < globalParams.length; i++) { // Add global params to URL
                    path = addParam(path, globalParams[i].key, globalParams[i].value);
                }

                for (let key in globalHeaders) { // Add Global Headers
                    if (globalHeaders.hasOwnProperty(key)) {
                        if (!headers[globalHeaders[key].key]) {
                            headers[globalHeaders[key].key] = globalHeaders[key].value;
                        }
                    }
                }

                if(method === 'GET') {
                    for (let param in params) {
                        if (param.hasOwnProperty(key)) {
                            path = addParam(path, key + (Array.isArray(param) ? '[]' : ''), params[key]);
                        }
                    }
                }

                switch (headers['content-type']) { // Parse request by content type
                    case 'application/json':
                        params = JSON.stringify(params);
                    break;

                    case 'multipart/form-data':
                        let formData = new FormData();

                        Object.keys(params).forEach(function(key) {
                            let param = params[key];
                            formData.append(key + (Array.isArray(param) ? '[]' : ''), param);
                        });

                        params = formData;
                    break;
                }

                return new Promise(function (resolve, reject) {

                    let request = new XMLHttpRequest(), key;

                    request.withCredentials = true;
                    request.open(method, path, true);

                    for (key in headers) { // Set Headers
                        if (headers.hasOwnProperty(key)) {
                            if (key === 'content-type' && headers[key] === 'multipart/form-data') { // Skip to avoid missing boundary
                                continue;
                            }

                            request.setRequestHeader(key, headers[key]);
                        }
                    }

                    request.onload = function () {
                        if (4 === request.readyState && 399 >= request.status) {
                            let data = request.response;
                            let contentType = this.getResponseHeader('content-type') || '';
                            contentType = contentType.substring(0, contentType.indexOf(';'));

                            switch (contentType) {
                                case 'application/json':
                                    data = JSON.parse(data);
                                    break;
                            }

                            resolve(data);

                        } else {
                            reject(new Error(request.statusText));
                        }
                    };

                    if (progress) {
                        request.addEventListener('progress', progress);
                        request.upload.addEventListener('progress', progress, false);
                    }

                    // Handle network errors
                    request.onerror = function () {
                        reject(new Error("Network Error"));
                    };

                    request.send(params);
                })
            };

            return {
                'get': function(path, headers = {}, params = {}) {
                    return call('GET', path + ((Object.keys(params).length > 0) ? '?' + buildQuery(params) : ''), headers, {});
                },
                'post': function(path, headers = {}, params = {}, progress = null) {
                    return call('POST', path, headers, params, progress);
                },
                'put': function(path, headers = {}, params = {}, progress = null) {
                    return call('PUT', path, headers, params, progress);
                },
                'patch': function(path, headers = {}, params = {}, progress = null) {
                    return call('PATCH', path, headers, params, progress);
                },
                'delete': function(path, headers = {}, params = {}, progress = null) {
                    return call('DELETE', path, headers, params, progress);
                },
                'addGlobalParam': addGlobalParam,
                'addGlobalHeader': addGlobalHeader
            }
        }(window.document);

        let iframe = function(method, url, params) {
            let form = document.createElement('form');

            form.setAttribute('method', method);
            form.setAttribute('action', config.endpoint + url);

            for(let key in params) {
                if(params.hasOwnProperty(key)) {
                    let hiddenField = document.createElement("input");
                    hiddenField.setAttribute("type", "hidden");
                    hiddenField.setAttribute("name", key);
                    hiddenField.setAttribute("value", params[key]);

                    form.appendChild(hiddenField);
                }
            }

            document.body.appendChild(form);

            return form.submit();
        };

        return {
            setEndpoint: setEndpoint,
        };
    };

    if(typeof module !== "undefined") {
        module.exports = window.Appwrite;
    }

})((typeof window !== "undefined") ? window : {});