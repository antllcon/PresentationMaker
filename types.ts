// Презентация
type Presentation = {
    title: string;
    slides: Slide[];
}

// Слайд
type Slide = {
    id: string;
    objects: CommonObject[];
    background: Background;
}

// Фон
type Background = BackgroundSolid | BackgroundImage | BackgroundGradient;

// Заливка цветом фон
type BackgroundSolid = {
    type: 'solid';
    color: string;
}

// Изображение фон
type BackgroundImage = {
    type: 'image';
    src: string;
}

// Градиентный фон
type BackgroundGradient = {
    type: 'gradient';
    colors: { color: string }[];
}

// Объекты на слайде
type SlideObject = TextObject | ImageObject | FigureObject;

type CommonObject = {
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
type TextObject = CommonObject & {
    type: 'text';
    value: string;
    textColor: string;
    backgroundColor: BackgroundSolid;
    fontSize: string;
    fontFamily: string;
}

// Объект изображения
type ImageObject = BackgroundImage & CommonObject;

// Объект фигуры
type FigureObject = CommonObject & {
    type: 'figure';
    shape: Shape;
    backgroundColor: BackgroundSolid;
}

// Форма фигуры
type Shape = Rectangle | Circle | Triangle | ArbitraryLine;

// Прямоугольник
type Rectangle = {
    type: 'rectangle';
}

// Круг
type Circle = {
    type: 'circle';
}

// Треугольник
type Triangle = {
    type: 'triangle';
}

// Произвольная линия
type ArbitraryLine = {
    type: 'arbitraryLine';
    points: { x: number; y: number }[];
}

// Выделенные слайды
type SelectedSlides = {
    selectedId: string[];
};

// Выделенные объекты
type SelectedObjects = {
    selectedId: string[];
}

export type {
    Presentation,
    Slide,
    SlideObject,
    TextObject,
    BackgroundSolid,
    BackgroundGradient,
    BackgroundImage,
    ImageObject,
    FigureObject,
    SelectedSlides,
    SelectedObjects
};
