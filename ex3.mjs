import * as Client from '@web3-storage/w3up-client';
import { filesFromPaths } from 'files-from-path';
  
const client = await Client.create();

await client.login('admin@lost-lore.com');
await client.setCurrentSpace('did:key:z6Mkf4zsEb1MNhGJR9RQ5V4f3q3jTfXFRtiAfzKCz6rSmfED')

const files = await filesFromPaths(['./hug.png']);
 
const directoryCid = await client.uploadFile(files);

console.log(directoryCid).catch(console.error);