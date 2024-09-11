import {Account, Avatars, Client, Databases, ID, Query} from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.pokemon-teams',
    projectId: '66e0bd9a00020720a5d0',
    databaseId: '66e1a3b7001d2419a39b',
    userCollectionId: '66e1a3cc001f574c9210',
    teamCollectionId: '66e1a3ec00373b9fd8c5'
}

const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        return await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
}

export const signIn = async (email, password) => {
    try {
        return await account.createEmailPasswordSession(email, password);
    } catch (e) {
        throw new Error(e);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        return currentUser.documents[0];
    } catch (e) {
        console.error(e)
        throw new Error(e)
    }
}
