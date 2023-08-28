import { Client } from 'appwrite';


export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e9b0fa27e86200a9f1');