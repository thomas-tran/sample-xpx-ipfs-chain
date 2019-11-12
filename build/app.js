"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsjs_chain_xipfs_sdk_1 = require("tsjs-chain-xipfs-sdk");
const tsjs_xpx_chain_sdk_1 = require("tsjs-xpx-chain-sdk");
// Creates ipfs connection
const ipfsConnection = new tsjs_chain_xipfs_sdk_1.IpfsConnection('ipfs1-dev.xpxsirius.io', // the host or multi address
5001, // the port number
{ protocol: 'http' } // the optional protocol
);
// Creates Proximax blockchain network connection
const blockchainConnection = new tsjs_chain_xipfs_sdk_1.BlockchainNetworkConnection(tsjs_chain_xipfs_sdk_1.BlockchainNetworkType.TEST_NET, 'bctestnet1.brimstone.xpxsirius.io', 3000, tsjs_chain_xipfs_sdk_1.Protocol.HTTP);
const connectionConfig = tsjs_chain_xipfs_sdk_1.ConnectionConfig.createWithLocalIpfsConnection(blockchainConnection, ipfsConnection);
/*
const account = Account.generateNewAccount(NetworkType.TEST_NET);
console.log(account.privateKey);
console.log(account.address.pretty());
console.log(account.publicKey);
*/
// Initialised uploader
const uploader = new tsjs_chain_xipfs_sdk_1.Uploader(connectionConfig);
// Default network currency prx.xpx
const mosaics = [new tsjs_xpx_chain_sdk_1.Mosaic(new tsjs_xpx_chain_sdk_1.MosaicId('13bfc518e40549d7'), tsjs_xpx_chain_sdk_1.UInt64.fromUint(0))];
// Prepares upload data file
const metadata = new Map();
metadata.set('author', 'Proximax');
const paramData = tsjs_chain_xipfs_sdk_1.FileParameterData.create('./data/NEM_techRef.pdf', 'test name', 'test description', 'application/pdf', metadata);
const senderPrivateKey = 'B41926ECD6A69B62D0B487E9B70B09DA565827708EB9760160E2B8B43821C77F';
const recipientPublicKey = 'A6DB65BEDB7663BD5D860D3863BC08E42C6C3A0978A931BB92FB667B8D3E8DFC';
const recipientAddress = 'VB3BMW-XJNUS4-QWFTLP-K2AY2T-SANCWK-QWOZGJ-UQMI';
const uploadParam = tsjs_chain_xipfs_sdk_1.UploadParameter.createForFileUpload(paramData, senderPrivateKey)
    .withTransactionMosaics(mosaics)
    .withPlainPrivacy()
    .withDetectContentType(true)
    .withTransactionDeadline(1)
    .withRecipientPublicKey(recipientPublicKey)
    .withRecipientAddress(recipientAddress)
    .build();
console.log('Uploading ....');
uploader.upload(uploadParam).then(result => {
    console.log(result);
    console.log('Upload completed');
}).catch(error => {
    console.log('Upload error');
    console.log(error);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQW9MO0FBQ3BMLDJEQUE4RDtBQUc5RCwwQkFBMEI7QUFDMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxxQ0FBYyxDQUN2Qyx3QkFBd0IsRUFBRSw0QkFBNEI7QUFDdEQsSUFBSSxFQUFFLGtCQUFrQjtBQUN4QixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyx3QkFBd0I7Q0FDOUMsQ0FBQztBQUdGLGlEQUFpRDtBQUNqRCxNQUFNLG9CQUFvQixHQUFHLElBQUksa0RBQTJCLENBQzFELDRDQUFxQixDQUFDLFFBQVEsRUFDOUIsbUNBQW1DLEVBQ25DLElBQUksRUFDSiwrQkFBUSxDQUFDLElBQUksQ0FDZCxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBSSx1Q0FBZ0IsQ0FBQyw2QkFBNkIsQ0FDdEUsb0JBQW9CLEVBQ3BCLGNBQWMsQ0FDZixDQUFDO0FBRUY7Ozs7O0VBS0U7QUFFRix1QkFBdUI7QUFDdkIsTUFBTSxRQUFRLEdBQUcsSUFBSSwrQkFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFaEQsbUNBQW1DO0FBQ25DLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBSSwyQkFBTSxDQUFDLElBQUksNkJBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLDJCQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUVsRiw0QkFBNEI7QUFDNUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7QUFDM0MsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFbkMsTUFBTSxTQUFTLEdBQUcsd0NBQWlCLENBQUMsTUFBTSxDQUN4Qyx3QkFBd0IsRUFDeEIsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsUUFBUSxDQUNULENBQUM7QUFHRixNQUFNLGdCQUFnQixHQUFHLGtFQUFrRSxDQUFDO0FBQzVGLE1BQU0sa0JBQWtCLEdBQUcsa0VBQWtFLENBQUM7QUFDOUYsTUFBTSxnQkFBZ0IsR0FBRyxnREFBZ0QsQ0FBQztBQUUxRSxNQUFNLFdBQVcsR0FBRyxzQ0FBZSxDQUFDLG1CQUFtQixDQUNyRCxTQUFTLEVBQ1QsZ0JBQWdCLENBQ2pCO0tBQ0Esc0JBQXNCLENBQUMsT0FBTyxDQUFDO0tBQy9CLGdCQUFnQixFQUFFO0tBQ2xCLHFCQUFxQixDQUFDLElBQUksQ0FBQztLQUMzQix1QkFBdUIsQ0FBQyxDQUFDLENBQUM7S0FDMUIsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7S0FDMUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7S0FDdEMsS0FBSyxFQUFFLENBQUM7QUFFVCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQSxFQUFFO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFBIn0=