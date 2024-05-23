import * as Client from '@web3-storage/w3up-client'
const client = await Client.create()
console.log(client.did())

const space = await client.createSpace('Lost Lore NFT Marketplace')

const myAccount = await client.login('admin@lost-lore.com')

// wait for payment plan to be selected
while (true) {
    const res = await myAccount.plan.get()
    if (res.ok) break
    console.log('Waiting for payment plan to be selected...')
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
  
  // provision the space
  await myAccount.provision(space.did())

  await space.createRecovery(myAccount.did())

  await space.save()
  console.log(space.did())