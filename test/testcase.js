var host = process.env.REDIS_PORT_6379_TCP_ADDR || "127.0.0.1";
var port = process.env.REDIS_PORT_6379_TCP_PORT || 6379;

var assert = require("assert")
var client = require('redis').createClient(port, host ,{});

describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
        it('redis connection',function() {
            setObj = { "status": 200, "message": "hogefuga" };
            client.set('key:test:0', JSON.stringify(setObj));
            client.get('key:test:0',function(err,getObj) {
                if(err) return console.log(err);
                assert.deepEqual(setObj,JSON.parse(getObj));
            });
        });
    })
})
