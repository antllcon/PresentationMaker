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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePresentationTitle = changePresentationTitle;
exports.changeTextSize = changeTextSize;
exports.addSlide = addSlide;
exports.removeSlide = removeSlide;
exports.moveSlide = moveSlide;
exports.addTextToSlide = addTextToSlide;
exports.removeObjectFromSlide = removeObjectFromSlide;
exports.changeObjectPosition = changeObjectPosition;
exports.changeTextContent = changeTextContent;
exports.changeTextFontFamily = changeTextFontFamily;
exports.changeSlideBackground = changeSlideBackground;
function changePresentationTitle(presentation, title) {
    return __assign(__assign({}, presentation), { title: title });
}
function addSlide(presentation, newSlide) {
    return __assign(__assign({}, presentation), { slides: __spreadArray(__spreadArray([], presentation.slides, true), [newSlide], false) });
}
function removeSlide(presentation, slideId) {
    return __assign(__assign({}, presentation), { slides: presentation.slides.filter(function (slide) { return slide.id !== slideId; }) });
}
function moveSlide(presentation, fromIndex, toIndex) {
    var slides = __spreadArray([], presentation.slides, true);
    var movedSlide = slides.splice(fromIndex, 1)[0];
    slides.splice(toIndex, 0, movedSlide);
    return __assign(__assign({}, presentation), { slides: slides });
}
function addTextToSlide(slide, newText) {
    return __assign(__assign({}, slide), { objects: __spreadArray(__spreadArray([], slide.objects, true), [newText], false) });
}
function removeObjectFromSlide(slide, objectId) {
    return __assign(__assign({}, slide), { objects: slide.objects.filter(function (obj) { return obj.id !== objectId; }) });
}
function changeObjectPosition(slide, objectId, newPosition) {
    return __assign(__assign({}, slide), { objects: slide.objects.map(function (obj) {
            return obj.id === objectId ? __assign(__assign({}, obj), { position: newPosition }) : obj;
        }) });
}
function changeTextContent(slide, textId, newValue) {
    return __assign(__assign({}, slide), { objects: slide.objects.map(function (obj) {
            return obj.id === textId && 'value' in obj ? __assign(__assign({}, obj), { value: newValue }) : obj;
        }) });
}
function changeTextSize(slide, textId, newFontSize) {
    return __assign(__assign({}, slide), { objects: slide.objects.map(function (obj) {
            return obj.id === textId && 'fontSize' in obj ? __assign(__assign({}, obj), { fontSize: newFontSize }) : obj;
        }) });
}
function changeTextFontFamily(slide, textId, newFontFamily) {
    return __assign(__assign({}, slide), { objects: slide.objects.map(function (obj) {
            return obj.id === textId && 'fontFamily' in obj ? __assign(__assign({}, obj), { fontFamily: newFontFamily }) : obj;
        }) });
}
function changeSlideBackground(slide, newBackground) {
    return __assign(__assign({}, slide), { background: newBackground });
}
