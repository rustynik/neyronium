const   expect = require('chai').expect,
        read = require('../../services/settings').read,
        path = process.cwd() + '/test/settings_test',
        conf = "merge";
         
describe('when reading settings', () => {
    
    describe('without configuration name', () => {
        
        it('settings object is returned', () => {
            expect(read(path)).to.be.an('object');
        }); 

        it('settings object is basic', () => {
            expect(read(path).field).to.equal('root value');
        });
    });

    describe('with configuration name', () => {
        
        it('settings object is returned', () => {
            expect(read(path, conf)).to.be.an('object');
        });

        it('settings object contains overridden scalar value at root level', () => {
            expect(read(path, conf).field).to.equal('overridden value');
        });

        it('settings object contains overridden scalar value in embedded object', () => {
            expect(read(path, conf).obj.field).to.equal('overridden value');
        });

        it('settings object contains basic scalar value in embedded object if no override found', () => {
            expect(read(path, conf).obj.field2).to.equal('root value');
        });

        it('settings object contains new scalar value in embedded object', () => {
            expect(read(path, conf).obj.field3).to.equal('overridden value');
        });
    });
});