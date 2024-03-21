import { Client, Account, Avatars, Databases } from "appwrite";


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65e9f1a2269ffacdb988');
    

export const account = new Account(client);
export const avatars = new Avatars(client);
export const database = new Databases(client);
export const url = {
    db:'',
    collection:''
} 