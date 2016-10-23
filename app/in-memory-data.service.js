"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice', power: 'PowerA', alterEgo: "what?" },
            { id: 12, name: 'Narco', power: 'PowerA', alterEgo: "what?" },
            { id: 13, name: 'Bombasto', power: 'PowerA', alterEgo: "what?" },
            { id: 14, name: 'Celeritas', power: 'PowerA', alterEgo: "what?" },
            { id: 15, name: 'Magneta', power: 'PowerA', alterEgo: "what?" },
            { id: 16, name: 'RubberMan', power: 'PowerA', alterEgo: "what?" },
            { id: 17, name: 'Dynama', power: 'PowerA', alterEgo: "what?" },
            { id: 18, name: 'Dr IQ', power: 'PowerA', alterEgo: "what?" },
            { id: 19, name: 'Magma', power: 'PowerA', alterEgo: "what?" },
            { id: 20, name: 'Tornado', power: 'PowerA', alterEgo: "what?" }
        ];
        // {} 로 감싸지 않으면 webAPI 로 동작하지 않는듯..
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map