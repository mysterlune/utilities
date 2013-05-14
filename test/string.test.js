(function() {

    var string = require('../').string()
    , _ = require('underscore')
    , expect = require('expect.js');

    describe('String test', function() {
        
        it('Classify', function(done) {
            var classified = string.classify('one-for-the-money');
            expect(classified).to.be.equal('OneForTheMoney');
            
            classified = string.classify('one-for-the-money');
            expect(classified).to.be.equal('OneForTheMoney');
            
            classified = string.classify('two for the show');
            expect(classified).to.be.equal('TwoForTheShow');
            
            classified = string.classify('three_to_get_ready');
            expect(classified).to.be.equal('ThreeToGetReady');
            
            classified = string.classify('nowGOcatGO');
            expect(classified).to.be.equal('NowGOcatGO');
            
            done();
        });
                
        it('Underscore', function(done) {

            var underscored = string.underscore('RosesAreRed');
            expect(underscored).to.be.equal('roses_are_red');
            
            underscored = string.underscore('violets_are_blue');
            expect(underscored).to.be.equal('violets_are_blue');
                
            underscored = string.underscore('cats-have-feet');
            expect(underscored).to.be.equal('cats_have_feet');
                
            underscored = string.underscore("but don't wear shoes");
            expect(underscored).to.be.equal("but_don't_wear_shoes");
            
            done();
        });
        
        it('Camelize', function(done) {

            var camelized = string.camelize('trueDAT');
            expect(camelized).to.be.equal('trueDAT');
            
            camelized = string.camelize('motion_sensor');
            expect(camelized).to.be.equal('motionSensor');
            
            camelized = string.camelize('funny-funny-ha-ha');
            expect(camelized).to.be.equal('funnyFunnyHaHa');
            
            camelized = string.camelize('is Funky Teleputer');
            expect(camelized).to.be.equal('isFunkyTeleputer');
            
            camelized = string.camelize('Is Funky Teleputer');
            expect(camelized).to.be.equal('isFunkyTeleputer');
            
            done();
        });
                
        it('Decamelize', function(done) {

            var decamelized = string.decamelize('hornBAT');
            expect(decamelized).to.be.equal('horn_bat');

            decamelized = string.decamelize('fiddle_sticks');
            expect(decamelized).to.be.equal('fiddle_sticks');
                
            decamelized = string.decamelize('Only-the-Lonely');
            expect(decamelized).to.be.equal('only-the-lonely');
                
            decamelized = string.decamelize("Fat cats can't Jump");
            expect(decamelized).to.be.equal("fat cats can't jump");
            
            done();
        });

        it('Captialize', function(done) {

            var capitalized = string.capitalize('hornBAT');
            expect(capitalized).to.be.equal('HornBAT');
            
            capitalized = string.capitalize('what a silly Sight to seE');
            expect(capitalized).to.be.equal('What a silly Sight to seE');
        
            done();
        });
    });

}).call(this);
