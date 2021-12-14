const { assert } = require('chai')

const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('TokenFarm', (accounts) => {
    // Write tests here...
    describe('Mock Dai deployment', async () => {
        it('has a name', async () => {
            let daiToken = await daiToken.new()
            const name = await daiToken.name()
            assert.equal(name, 'Mock Dai Token')
        })
    })

})