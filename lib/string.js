
var STRING_DECAMELIZE_REGEXP = (/([a-z])([A-Z])/g);
var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);
var STRING_UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g);
var STRING_UNDERSCORE_REGEXP_2 = (/\-|\s+/g);

var Stringy = function() {
    
    var Stringy = function() {
        if(!this instanceof Stringy) {
            return new Stringy();
        }
        return this;
    }
    
    /**
        Returns the UpperCamelCase form of a string.

        ````javascript
        this.classify('one-for-the-money')      // OneForTheMoney
        this.classify('two for the show')       // TwoForTheShow
        this.classify('three_to_get_ready')     // ThreeToGetReady
        this.classify('nowGOcatGO')             // NowGoCatGo
        ````

        @method classify
        @param {String} str the string to classify
        @return {String} the classified string
    */
    Stringy.prototype.classify = function(str) {
        var parts = str.split("."),
            out = [];

        for (var i=0, l=parts.length; i<l; i++) {
            var camelized = this.camelize(parts[i]);
            out.push(camelized.charAt(0).toUpperCase() + camelized.substr(1));
        }

        return out.join(".");
    }

    /**
        Returns the lowerCamelCase form of a string.

        ```javascript
        this.camelize('trueDAT');               // 'trueDAT'
        this.camelize('motion_sensor');         // 'motionSensor'
        this.camelize('funny-funny-ha-ha');     // 'funnyFunnyHaHa'
        this.camelize('is Funky Teleputer');    // 'isFunkyTeleputer'
        this.camelize('Is Funky Teleputer');    // 'isFunkyTeleputer'
        ```

        @method camelize
        @param {String} str The string to camelize.
        @return {String} the camelized string.
    */
    Stringy.prototype.camelize = function(str) {
        return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
            return chr ? chr.toUpperCase() : '';
        }).replace(/^([A-Z])/, function(match, separator, chr) {
            return match.toLowerCase();
        });
    }
    
    /**
      Converts a camelized string into all lower case separated by underscores.

      ```javascript
      this.decamelize('hornBAT');               // 'horn_bat'
      this.decamelize('fiddle_sticks');         // 'fiddle_sticks'
      this.decamelize('Only-the-Lonely');       // 'only-the-lonely'
      this.decamelize('Fat cats can't Jump');  // 'fat cats can't jump'
      ```

      @method decamelize
      @param {String} str The string to decamelize.
      @return {String} the decamelized string.
    */
    Stringy.prototype.decamelize = function(str) {
        return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
    }
    
    /**
        More general than decamelize. Returns the lower\_case\_and\_underscored
        form of a string.

        ```javascript
        this.underscore('RosesAreRed')    // 'roses_are_red'
        this.underscore('violets_are_blue') // 'violets_are_blue'
        this.underscore('cats-have-feet')   // 'cats_have_feet'
        this.underscore("but don't wear shoes") // 'but_don\'t_wear_shoes'
        ```

        @method underscore
        @param {String} str The string to underscore.
        @return {String} the underscored string.
    */
    Stringy.prototype.underscore = function(str) {
        return str.replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2').
            replace(STRING_UNDERSCORE_REGEXP_2, '_').toLowerCase();
    }
    
    /**
        Returns the Capitalized form of a string

        ````javascript
        this.captialize('what a Silly Sight');  'What a Silly Sight'
        ````

        @method capitalize
        @param {String} str
        @return {String}
    */
    Stringy.prototype.capitalize = function(str) {
      return str.charAt(0).toUpperCase() + str.substr(1);
    }
    
    return new Stringy();

}

module.exports = Stringy;