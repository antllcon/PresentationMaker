// Презентация
type Presentation = {
    title: string;
    slides: Slide[];
}

// Слайд
type Slide = {
    id: string;
    objects: SlideObject[];
    background: Solid | Image | Gradient;
}

// Объекты на слайде
type SlideObject = {
    id: string;
    position: {
        x: number;
        y: number;
    };
    size: {
        width: number;
        height: number;
    };
    borderColor: string;
    borderWidth: number;
}

// Текстовый объект
type TextObject = SlideObject & {
    value: string;
    fontSize: string;
    fontFamily: string;
}

// Объект изображения
type ImageObject = SlideObject & {
    src: string;
}

// Объект фигуры
type FigureObject = SlideObject & {
    shape: Rectangle | Circle | Triangle | ArbitraryLine;
    fillColor: string;
}

// Заливка цветом фон
type Solid = {
    type: "solid";
    color: string;
}

// Изображение фон
type Image = {
    type: "image";
    src: string;
}

// Градиентный фон
type Gradient = {
    type: "gradient";
    colors: { color: string }[];
    angle: number;
}

// Прямоугольник
type Rectangle = {
    type: "rectangle";
    width: number;
    height: number;
}

// Круг
type Circle = {
    type: "circle";
    radius: number;
}

// Треугольник
type Triangle = {
    type: "triangle";
}

// Произвольная линия
type ArbitraryLine = {
    type: "arbitraryLine";
    points: { x: number; y: number }[];
}

// Выделенные слайды
type SelectionSlidesId = {
    id: string[];
}

// Выделение объектов на слайде
type SelectionSlideObjectsId = {
    selectedObjectsId: string[];
}

export {
    Presentation,
    Slide,
    SlideObject,
    TextObject,
    Solid,
    Gradient,
    Image,
    ImageObject,
    FigureObject,
    SelectionSlidesId,
    SelectionSlideObjectsId
}
