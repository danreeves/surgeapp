module.exports = (function () {

    (function AlterNodeListPrototype () {
        if (typeof NodeList.prototype.each !== 'function' && typeof HTMLCollection.prototype.each !== 'function') {
            NodeList.prototype.each = HTMLCollection.prototype.each = Array.prototype.forEach;
        }
        if (typeof NodeList.prototype.on !== 'function' && typeof HTMLCollection.prototype.on !== 'function')
        NodeList.prototype.on = function(a, b) {
            return this.each(function(c) {
                window.addEventListener ? c.addEventListener(a, b, false) : c.attachEvent('on' + a, b);
            });
        };
    })();

})();
