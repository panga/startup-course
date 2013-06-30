var calculatePrimes = function(n) {
        var primes = [];

        for (var i = 2; primes.length < n; i++) {
            var isPrime = true;
            var r = parseInt(Math.sqrt(i), 10);

            for (var j = 2; j <= r; j++) {
                if (i != j && i % j === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                primes.push(i);
            }
        }
        return primes;
    };

var fs = require('fs');
var outfile = "prime.txt";
var prime = calculatePrimes(100);
var out = prime.join(",");
fs.writeFileSync(outfile, out);

console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outfile);