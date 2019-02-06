require("chai").should();

({a:1}).should.eql({a:1}, "no match");
({a:1}).should.equal({a:1}, "no match");
