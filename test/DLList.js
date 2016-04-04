var expect = require("chai").expect;
var DLList = require("../DLList");

describe("Doubly-linked list", function() {
    describe("#list()", function() {
        it("Creates a new empty list of length 0", function() {
            var list = new DLList.list();
            expect(list.length()).to.equal(0);
        });
    });
    
    describe("#append()", function() {
        
        it("should have length of one when appended to for first time", function() {
            var list = new DLList.list();
            list.append(100);
            expect(list.length()).to.equal(1);
        });
        
        it("should have the same head and tail when the first element is appended", function() {
            var list = new DLList.list();
            list.append(100);
            expect(list.head().value).to.equal(list.tail().value);
        });
        
        it("The head's previous element should be null", function() {
            var list = new DLList.list();
            list.append(100);
            expect(list.head().prev).to.equal(null);
        });
        
        it("The tail's next element should be null", function() {
            var list = new DLList.list();
            list.append(100);
            expect(list.head().next).to.equal(null);
        });
  
    });
  
});