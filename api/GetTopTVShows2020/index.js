var fs = require('fs');

module.exports = async function (context, req) {
    const connectionString = process.env.STORAGE_CONNECTION_STRING;
    const containerName = process.env.STORAGE_CONTAINER;
    const accountName = process.env.STORAGE_ACCOUNT;

    // create a new instance of blogServiceClient from the Azure Storage SDK
    const blobServiceClient = BlobServiceClient.fromConnectionString(
        connectionString
    );

    // create a new instance of the containerClient from the Azure Storage SDK
    const containerClient = await blobServiceClient.getContainerClient(
        containerName
    );

    const blobs = [];

    // list all objects in the storage container
    for await (const blob of containerClient.listBlobsFlat({
        includeMetadata: true,
    })) {
        blobs.push(blob);
    }

    // order the blobs by date descending
    blobs.sort((a, b) => {
        return (
        new Date(b.properties.lastModified) - new Date(a.properties.lastModified)
        );
    });

    context.res = {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blobs)
    };
};
