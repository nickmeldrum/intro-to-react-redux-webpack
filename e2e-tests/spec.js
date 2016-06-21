require('babel-core/register')({});

const testData = {
    documentName: 'nicks awesome document',
    partName: 'a new party!'
};

describe('Document', function() {
    before(function(client, done) { done(); });
    after(function(client, done) { client.end(function() { done(); }); });
    beforeEach(function(client, done) { done(); });
    afterEach(function(client, done) { done(); });

    describe('Part management', function() {
        it('typing add part and hitting return adds a part', function(client) {
            client.url('http://localhost:8080/')
                .expect.element('body').to.be.present.before(1000);

            client.perform((client, done) => {
                console.log('[LOG:] adding part with title: ', testData.partName);
                done();
            });

            client.setValue('input[type=text]', [testData.partName, client.Keys.ENTER]);

            client.expect.element('body').text.to.contain(testData.partName).before(1000);
        });
    });
});

