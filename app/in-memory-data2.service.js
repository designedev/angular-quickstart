"use strict";
var InMemoryData2Service = (function () {
    function InMemoryData2Service() {
    }
    InMemoryData2Service.prototype.createDb = function () {
        var villain = [
            { id: 1, name: 'Mr. Nice', hp: 100 },
            { id: 2, name: 'Narco', hp: 20 },
            { id: 3, name: 'Bombasto', hp: 300 },
            { id: 4, name: 'Celeritas', hp: 255 },
            { id: 5, name: 'Magneta', hp: 65535 },
            { id: 6, name: 'RubberMan', hp: 1048576 },
            { id: 7, name: 'Dynama', hp: 333 },
            { id: 8, name: 'Dr IQ', hp: 666 },
            { id: 9, name: 'Magma', hp: 31 },
            { id: 10, name: 'Tornado', hp: 256 }
        ];
        // {} 로 감싸지 않으면 webAPI 로 동작하지 않는듯..
        return { villain: villain };
    };
    return InMemoryData2Service;
}());
exports.InMemoryData2Service = InMemoryData2Service;
//# sourceMappingURL=in-memory-data2.service.js.map