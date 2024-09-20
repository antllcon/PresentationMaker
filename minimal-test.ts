//
// /// тесты
//
// // Минимальные данные
// import {Gradient, Image, ImageObject, Presentation, Slide, Solid, TextObject} from "./types";
//
// const minimalPresentation: Presentation = {
//     title: "Название презентации",
//     slides: [],
//     selectedSlidesId: [],
// };
//
// const minimalSlide: Slide = {
//     id: "Слайд - 1",
//     objects: [],
//     background: { type: "solid", color: "#FFFFFF" }
// };
//
// const minimalTextObject: TextObject = {
//     id: "Заголовок слайда",
//     position: { x: 0, y: 0 },
//     size: { width: 100, height: 50 },
//     value: "Minimal text",
//     fontSize: "12px",
//     fontFamily: "Arial"
// };
//
// // Максимальные данные
// const maximalPresentation: Presentation = {
//     title: "Maximal Presentation",
//     slides: [
//         {
//             id: "slide1",
//             objects: [
//                 {
//                     id: "text1",
//                     position: { x: 50, y: 50 },
//                     size: { width: 200, height: 50 },
//                     value: "Sample text",
//                     fontSize: "16px",
//                     fontFamily: "Arial"
//                 } as TextObject,
//                 {
//                     id: "image1",
//                     position: { x: 100, y: 100 },
//                     size: { width: 300, height: 200 },
//                     src: "image1.png"
//                 } as ImageObject
//             ],
//             background: { type: "gradient", colors: [{ color: "#FF0000" }, { color: "#0000FF" }], angle: 45 } as Gradient
//         },
//         {
//             id: "slide2",
//             objects: [
//                 {
//                     id: "text2",
//                     position: { x: 200, y: 150 },
//                     size: { width: 400, height: 100 },
//                     value: "Another text",
//                     fontSize: "20px",
//                     fontFamily: "Verdana"
//                 } as TextObject
//             ],
//             background: { type: "image", src: "background.jpg" } as Image
//         }
//     ],
//     selectedSlidesId: ["slide1", "slide2"]
// };
//
// // Примеры тестов
// console.log("== Тестированиb");
//
// // 1. Изменение названия презентации
// console.log(changePresentationTitle(minimalPresentation, "Updated Title - Minimal"));
// console.log(changePresentationTitle(maximalPresentation, "Updated Title - Maximal"));
//
// // 2. Добавление слайда
// console.log(addSlide(minimalPresentation, minimalSlide));
// console.log(addSlide(maximalPresentation, {
//     id: "slide3",
//     objects: [],
//     background: { type: "solid", color: "#00FF00" } as Solid
// }));
//
// // 3. Удаление слайда
// console.log(removeSlide(maximalPresentation, "slide1"));
// console.log(removeSlide(minimalPresentation, "slide1")); // Ничего не должно измениться
//
// // 4. Изменение позиции слайда
// console.log(moveSlide(maximalPresentation, 0, 1));
// console.log(moveSlide(minimalPresentation, 0, 1)); // Ничего не должно измениться
//
// // 5. Добавление текста на слайд
// console.log(addTextToSlide(minimalSlide, minimalTextObject));
// console.log(addTextToSlide(maximalPresentation.slides[0], {
//     id: "text3",
//     position: { x: 300, y: 300 },
//     size: { width: 150, height: 50 },
//     value: "New Text",
//     fontSize: "14px",
//     fontFamily: "Times New Roman"
// } as TextObject));
//
// // 6. Удаление объекта на слайде
// console.log(removeObjectFromSlide(maximalPresentation.slides[0], "text1"));
// console.log(removeObjectFromSlide(minimalSlide, "text1")); // Ничего не должно измениться
//
// // 7. Изменение позиции текста или картинки
// console.log(changeObjectPosition(maximalPresentation.slides[0], "text1", { x: 400, y: 400 }));
// console.log(changeObjectPosition(minimalSlide, "text1", { x: 100, y: 100 })); // Ничего не должно измениться
//
// // 8. Изменение текста
// console.log(changeTextContent(maximalPresentation.slides[0], "text1", "Updated text"));
// console.log(changeTextContent(minimalSlide, "text1", "Updated text")); // Ничего не должно измениться
//
// // 9. Изменение размера текста
// console.log(changeTextSize(maximalPresentation.slides[0], "text1", "18px"));
// console.log(changeTextSize(minimalSlide, "text1", "18px")); // Ничего не должно измениться
//
// // 10. Изменение семейства шрифтов
// console.log(changeTextFontFamily(maximalPresentation.slides[0], "text1", "Georgia"));
// console.log(changeTextFontFamily(minimalSlide, "text1", "Georgia")); // Ничего не должно измениться
//
// // 11. Изменение фона слайда
// console.log(changeSlideBackground(maximalPresentation.slides[0], { type: "solid", color: "#000000" }));
// console.log(changeSlideBackground(minimalSlide, { type: "gradient", colors: [{ color: "#FFFFFF" }, { color: "#000000" }], angle: 90 }));
