"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var input_1 = require("./ui/input");
var cities_list_1 = require("@/lib/cities-list");
exports["default"] = react_1.forwardRef(function LocationInput(_a, ref) {
    var onLocationSelected = _a.onLocationSelected, props = __rest(_a, ["onLocationSelected"]);
    var _b = react_1.useState(""), locationSearchInput = _b[0], setLocationSearchInput = _b[1];
    var _c = react_1.useState(false), hasFocus = _c[0], setHasFocus = _c[1];
    var cities = react_1.useMemo(function () {
        console.log(cities_list_1["default"]);
        if (!locationSearchInput.trim())
            return [];
        var searchWords = locationSearchInput.split(" ");
        return cities_list_1["default"]
            .map(function (city) { return city.name + ", " + city.subcountry; })
            .filter(function (city) {
            return city.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
                searchWords.every(function (word) {
                    return city.toLowerCase().includes(word.toLowerCase());
                });
        })
            .slice(0, 5);
    }, [locationSearchInput]);
    return (React.createElement("div", { className: "relative" },
        React.createElement(input_1.Input, __assign({}, props, { ref: ref, value: locationSearchInput, onChange: function (e) { return setLocationSearchInput(e.target.value); }, onFocus: function () { return setHasFocus(true); }, onBlur: function () { return setHasFocus(false); }, placeholder: "Search for a city", type: "search" })),
        locationSearchInput.trim() && hasFocus && (React.createElement("div", { className: "absolute z-20 divide-y bg-background shadow-xl border-b rounded-b-lg" },
            !cities.length && React.createElement("p", { className: "p-3" }, "No Results Found"),
            cities.map(function (city) { return (React.createElement("button", { key: city, className: "block w-full text-start p-2", onMouseDown: function (e) {
                    e.preventDefault();
                    onLocationSelected(city);
                    setLocationSearchInput("");
                } }, city)); })))));
});
