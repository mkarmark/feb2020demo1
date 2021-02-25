var fs = require('fs');
const { BlobServiceClient } = require("@azure/storage-blob");

module.exports = async function (context, req) {
    const connectionString = process.env.STORAGE_CONNECTION_STRING;
    const containerName = process.env.STORAGE_CONTAINER;
    const accountName = process.env.STORAGE_ACCOUNT;

    var blobName = req.query.blobName
    var title = req.body.title;

    // create a new instance of blogServiceClient from the Azure Storage SDK
    const blobServiceClient = BlobServiceClient.fromConnectionString(
        connectionString
    );

    // create a new instance of the containerClient from the Azure Storage SDK
    const containerClient = await blobServiceClient.getContainerClient(
        containerName
    );

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(title, title.length);

    context.res = {
        status: uploadBlobResponse.status
    };
};
