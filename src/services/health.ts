import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Health extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get HTTP
     *
     * Check the Appwrite HTTP server is up and responsive.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async get(): Promise<Models.HealthStatus> {
        const apiPath = '/health';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get antivirus
     *
     * Check the Appwrite Antivirus server is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getAntivirus(): Promise<Models.HealthAntivirus> {
        const apiPath = '/health/anti-virus';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get cache
     *
     * Check the Appwrite in-memory cache servers are up and connection is
     * successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getCache(): Promise<Models.HealthStatus> {
        const apiPath = '/health/cache';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get DB
     *
     * Check the Appwrite database servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getDB(): Promise<Models.HealthStatus> {
        const apiPath = '/health/db';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get pubsub
     *
     * Check the Appwrite pub-sub servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getPubSub(): Promise<Models.HealthStatus> {
        const apiPath = '/health/pubsub';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get queue
     *
     * Check the Appwrite queue messaging servers are up and connection is
     * successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueue(): Promise<Models.HealthStatus> {
        const apiPath = '/health/queue';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get builds queue
     *
     * Get the number of builds that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueBuilds(): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/builds';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get certificates queue
     *
     * Get the number of certificates that are waiting to be issued against
     * [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue
     * server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueCertificates(): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/certificates';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get databases queue
     *
     * Get the number of database changes that are waiting to be processed in the
     * Appwrite internal queue server.
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueDatabases(name?: string): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/databases';
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get deletes queue
     *
     * Get the number of background destructive changes that are waiting to be
     * processed in the Appwrite internal queue server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueDeletes(): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/deletes';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get functions queue
     *
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueFunctions(): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/functions';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get logs queue
     *
     * Get the number of logs that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueLogs(): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/logs';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get mails queue
     *
     * Get the number of mails that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueMails(): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/mails';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get messaging queue
     *
     * Get the number of messages that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueMessaging(): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/messaging';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get migrations queue
     *
     * Get the number of migrations that are waiting to be processed in the
     * Appwrite internal queue server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueMigrations(): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/migrations';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get webhooks queue
     *
     * Get the number of webhooks that are waiting to be processed in the Appwrite
     * internal queue server.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getQueueWebhooks(): Promise<Models.HealthQueue> {
        const apiPath = '/health/queue/webhooks';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get local storage
     *
     * Check the Appwrite local storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getStorageLocal(): Promise<Models.HealthStatus> {
        const apiPath = '/health/storage/local';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get time
     *
     * Check the Appwrite server time is synced with Google remote NTP server. We
     * use this technology to smoothly handle leap seconds with no disruptive
     * events. The [Network Time
     * Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is
     * used by hundreds of millions of computers and devices to synchronize their
     * clocks over the Internet. If your computer sets its own clock, it likely
     * uses NTP.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getTime(): Promise<Models.HealthTime> {
        const apiPath = '/health/time';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }
};
