1. Clone this repo

2. Generate account in the wallet

https://bctestnetwallet.xpxsirius.io

3. Get some xpx

http://bctestnetfaucet.xpxsirius.io/

4. Replace the following with the account detail in app.ts

```
const senderPrivateKey = '';
const recipientPublicKey = '';
const recipientAddress = '';
```

5. Run the following command

```
npm install
npm run build
npm run start
```