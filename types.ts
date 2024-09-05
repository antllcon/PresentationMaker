type Presentation = {
    title: string;
    slides: SlideCollection;
    currentSlideId: number;
    commandHistory: CommandHistory[];
}

// Для упорядочивания, добавления и удаления
type SlideCollection = Slide[];

type Slide = {
    id: number;
    objects: SlideObject[];
    background: Background;
}

// Для изменения, создания или удаления конкретного объекта
type SlideObject = {
    id: string;
    type: textObject | figureObject | imageObject;
    position: { x: number; y: number };
    size: { width: number; height: number };
};

type textObject = {
    content: string;
    fontSize: string;
    fontFamily: string;
}

type figureObject = {
    // ?
}

type imageObject = {
    src: string;
    // ?
}

// Для изменения фона слайда
type Background = {
    type: 'color' | 'image'| 'gradient';
    value: string;  //цвет, URL изображения и т.д.
};

// Для отката команд
type CommandHistory = {
    command: string;
    value: string;
    creationTime: Date;
}

// Для управления выделенными объектами
type SelectionArea = {
    selectedObjects: SlideObject[];
};




