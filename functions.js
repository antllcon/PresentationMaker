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
exports.removeSlide = removeSlide;
exports.moveSlide = moveSlide;
exports.addSlideObject = addSlideObject;
exports.removeSlideObject = removeSlideObject;
function changePresentationTitle(presentation, newTitle) {
    return __assign(__assign({}, presentation), { title: newTitle });
}
function addSlide(presentation, newSlide) {
    var UpdatedSlides = __spreadArray(__spreadArray([], presentation.slides, true), [newSlide], false);
    return __assign(__assign({}, presentation), { slides: UpdatedSlides });
}
function removeSlide(presentation, slideId) {
    var updatedSlides = presentation.slides.filter(function (slide) { return slide.id !== slideId; });
    return __assign(__assign({}, presentation), { slides: updatedSlides });
}
function moveSlide(presentation, fromIndex, toIndex) {
    var updatedSlides = __spreadArray([], presentation.slides, true);
    var movedSlide = updatedSlides.splice(fromIndex, 1)[0];
    updatedSlides.splice(toIndex, 0, movedSlide);
    return __assign(__assign({}, presentation), { slides: updatedSlides });
}
function addSlideObject(slide, newObject) {
    var updatedObjects = __spreadArray(__spreadArray([], slide.objects, true), [newObject], false);
    return __assign(__assign({}, slide), { objects: updatedObjects });
}
function removeSlideObject(slide, objectId) {
    var updatedObjects = slide.objects.filter(function (object) { return object.id !== objectId; });
    return __assign(__assign({}, slide), { objects: updatedObjects });
}
