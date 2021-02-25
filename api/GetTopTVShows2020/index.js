var fs = require('fs');
const { BlobServiceClient } = require("@azure/storage-blob");

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

    const blobContents = [];
    for (var blob of blobs)
    {
        var blobClient = containerClient.getBlobClient(blobName);

        // Get blob content from position 0 to the end
        // In Node.js, get downloaded data by accessing downloadBlockBlobResponse.readableStreamBody
        var downloadBlockBlobResponse = await blobClient.download();
        var downloaded = (
          await streamToBuffer(downloadBlockBlobResponse.readableStreamBody)
        ).toString();
        console.log("Downloaded blob content:", downloaded);
      
        // [Node.js only] A helper method used to read a Node.js readable stream into a Buffer
        async function streamToBuffer(readableStream) {
          return new Promise((resolve, reject) => {
            const chunks = [];
            readableStream.on("data", (data) => {
              chunks.push(data instanceof Buffer ? data : Buffer.from(data));
            });
            readableStream.on("end", () => {
              resolve(Buffer.concat(chunks));
            });
            readableStream.on("error", reject);
          });
        }

        blobContents.push(downloaded);
    }

    context.res = {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blobContents)
    };
};
