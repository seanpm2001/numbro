/*!
 * numbro.js language configuration
 * language : belgium-dutch (be-nl)
 * author : Dieter Luypaert : https://github.com/moeriki
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : 'mln',
            billion  : 'mld',
            trillion : 'bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;
            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
        },
        currency: {
            symbol: '€',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('nl-BE', language);
    }
}());