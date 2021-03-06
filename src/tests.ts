import 'mocha';
import * as assert from 'assert';
import 'chai';

import { HubClient } from "./azure-iot-lite";
const dotenv = require('dotenv');

dotenv.config();

describe('Connect to IoT Hub', function() {
  it('Should connect', async function() {
    this.timeout(10000);
    const iothub = new HubClient(process.env.DEVICE_CONN_STRING);
    await iothub.ready;
    return true;
  });
});

describe('Send messages', function() {
  it('Should send a D2C message', async function() {
    this.timeout(5000);
    const iothub = new HubClient(process.env.DEVICE_CONN_STRING);
    await iothub.ready;
    iothub.sendMessage('test');
    return true;
  });
  
  it('Should receive a C2D message');
  
});

describe('Device twin properties', function() {
  it('Should receive desired properties');
  it('Should send reported properties');
})

describe('Direct methods', function() {
  it('Should invoke direct methods');
})
