import { ID, Query } from "appwrite";
import { account, database, url } from "./config";

{/* Method to save User details to Database */}
export async function saveUserToDB() {
    try {
        const res = await database.createDocument(
            
        )
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

{/* Method to create new user */}
export async function createAccount(){
    try {
        const newAccount = await account.create(
            
        )
        const save = await saveUserDetails({
            
        })
        console.log(save);
        return newAccount
    } catch (error) {
        console.log('Something went wrong while creating user!', error);
    }
}

{/* Method for login */}
export async function loginUser(email, password) {
    try {
        const newAccount = await account.createEmailSession(
            email,
            password,
        )
        return newAccount
    } catch (error) {
        console.log('Something went wrong while logging in!', error)
    }
}

{/* Method to logout */}
export async function logoutUserAccount() {
    try {
        const newAccount = await account.deleteSession('current')
        return newAccount
    } catch (error) {
        console.log('Something went wrong while logging out!', error)
    }
}

{/* Method to fetch user details */}
export async function getUserDetails() {
    try {
        const user = await account.get()
        return user
    } catch (error) {
        console.log('Account was not found!', error)
    }
}

{/* Method to save user details in database */}
export async function saveUserDetails() {
    try {
        
    } catch (error) {
        console.log('Something went wrong while saving details!', error);
    }
}

{/* Method to update user details */}
export async function updateUserDetails() {
    try {
        
    } catch (error) {
        
    }
}

{/*  */}

{/*  */}