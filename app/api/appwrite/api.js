import { account, appwriteConfig, avatars, client, databases } from "./AppWriteConfig";
import { ID, Query } from "appwrite";
import { toast } from 'sonner';
import state from "@/store/store";


//==================================
// CREDENTIALS
//==================================
export const checkUser = async () => {
    try {
        const response = await account.get()
        state.user = response
        state.logged = true
        console.log(response)
        const userCollection = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId", response.$id)]
        )
        state.userCollection = userCollection.documents[0].$id
        state.userInfo = userCollection.documents[0]
        return response
    } catch (error) {
        state.logged = false
        return false
    } finally {
        state.loading.start = false
    }
}
export const appWriteLogin = async (userAccount) => {
    try {
        const response = await account.createEmailSession(userAccount.email, userAccount.password)
        state.logged = true
        return response;
    } catch (error) {
        throw new Error("Invalid credentials, please try again");
    }
}
export const appWriteLogout = async () => {
    const response = await account.deleteSession('current')
    state.logged = false
    return response
}
//==================================
// GET DOCUMENTS
//==================================
// export const appWriteGetUsers = async () => {
//     const response = await databases.listDocuments(
//         appwriteConfig.databaseId,
//         appwriteConfig.userCollectionId,
//     )
//     console.log("the users", response)
//     state.users = response
//     return response
// }
//==================================
// CREATE DOCUMENTS
//==================================
export async function appWriteCreateUser(user, setLoading) {
    console.log("user", user)
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.username,
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await appWriteSaveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            avatarURL: avatarUrl,
        });

        return newUser;
    } catch (error) {
        console.log("THE ERROR", error);
        throw error
    } finally {
        setLoading(false)
    }
}
export async function appWriteSaveUserToDB(user) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: user.accountId,
                email: user.email,
                name: user.name,
                profileImage: user.imageUrl,
                username: user.username,
            }
        );
        return newUser;
    } catch (error) {
        console.log("THE ERROR", error);
        throw error
    }
}
//==================================
// EDIT DOCUMENTS
//==================================
// export const appWriteUpdateStatus = async (id) => {

//     const response = await databases.updateDocument(appwriteConfig.databaseId, appwriteConfig.userCollectionId, state.userCollection, {
//         status: id
//     })
//     console.log("RESPONSE", response)
//     return response
// }

//==================================
// DELETE DOCUMENTS
//==================================
