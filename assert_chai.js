require("chai").should();

({a:1}).should.eql({a:1}, "no match"); // Matches because of deeply equal 
({a:1}).should.equal({a:1}, "no match"); // Fails because of strict match using ===
