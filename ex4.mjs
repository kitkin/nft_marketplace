import { create } from '@web3-storage/w3up-client'
import { filesFromPaths } from 'files-from-path'
 
// e.g "./best-gifs"
const path = './hug.png'
const files = await filesFromPaths([path])
 
const client = await create()
const directoryCid = await client.uploadDirectory(files)

console.log(directoryCid)

// https://bafybeiblt72ngwp6osffewuyrovxcu3raynt6y2xgwluohdkixcyqgl5za.ipfs.w3s.link/