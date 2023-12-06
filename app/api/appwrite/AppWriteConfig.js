import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
    url: import.meta.env.APPWRITE_URL,
    projectId: import.meta.env.APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.APPWRITE_DATABASE_ID,
    storageId: import.meta.env.APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.APPWRITE_USER_COLLECTION_ID,
    projectsCollectionId: import.meta.env.APPWRITE_PROJECTS_COLLECTION_ID,
};
export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
