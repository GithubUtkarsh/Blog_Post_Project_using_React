const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteTableId: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

// Debug: Log config values (remove in production)
console.log("Appwrite Config:", {
    url: config.appwriteUrl,
    projectId: config.appwriteProjectId,
    databaseId: config.appwriteDatabaseId,
    tableId: config.appwriteTableId,
    bucketId: config.appwriteBucketId
});

export default config;