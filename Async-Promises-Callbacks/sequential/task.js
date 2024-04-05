const util = require('util');
const sleep = util.promisify(setTimeout)

module.export = {
   async taskOne(){
    await sleep(4000)
    return 'One value'
   },
    async tastTwo(){
        await sleep(2000)
        return 'Two value'
    },
}