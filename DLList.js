(function(exports) {
    "use strict";

    
    function DLList() {
        this._head = null,
        this._tail = null;
        this._length = 0;
    }
    
    DLList.prototype.length = function () {
        return this._length;
    };
    
    DLList.prototype.append = function (value) {
        
        var node = {
            value: value,
            prev: null,
            next: null
        };
        
        if (this._length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            var oldTail = this._tail;
            var newTail = node;
            
            this._tail = newTail;
            oldTail.next = newTail;
            newTail.prev = oldTail;
        }
        
        this._length += 1;
        
    };
    
    DLList.prototype.head = function () {
        return this._head;  
    };
    
    DLList.prototype.tail = function () {
        return this._tail;
    };



    exports.list = DLList;
})(typeof exports === 'undefined' ? this['DLList'] = {} : exports);