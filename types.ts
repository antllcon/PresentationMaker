// Презентация
export type Presentation = {
    title: string;
    slides: Slide[];
    currentSlideId: number;
    commandHistory: CommandHistory[];
};

// Коллекция слайдов
export type SlideCollection = Slide[];

// Слайд
export type Slide = {
    id: number;
    objects: SlideObject[];
    background: Background;
};

// Объекты на слайде (текст, фигуры, изображения)
export type SlideObject = {
    id: number;
    type: textObject | figureObject | imageObject;
    position: { x: number; y: number };
    size: { width: number; height: number };
};

// Текстовый объект
export type textObject = {
    content: string;
    fontSize: string;
    fontFamily: string;
};

// Объект фигуры (примерный вариант)
export type figureObject = {
    shape: 'rectangle' | 'circle' | 'triangle';
    color: string;
    // borderColor: string;
    // borderWidth: number;
    // fillColor: string;
};

// Объект изображения
export type imageObject = {
    src: string;
    altText?: string;
};

// Фон слайда
export type Background = {
    type: 'color' | 'image' | 'gradient';
    value: string;  // Цвет или URL изображения
};

// История команд для отката
export type CommandHistory = {
    command: string;
    value: string;
    creationTime: Date;
};

// Управление выделенными объектами на слайде
export type SelectionSlideObjects = {
    selectedObjects: SlideObject[];
};
