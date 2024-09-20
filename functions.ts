import {Presentation, Slide, TextObject, Solid, Gradient, Image} from "./types";

function changePresentationTitle(presentation: Presentation, title: string) : Presentation {
    return {
        ...presentation,
        title: title
    }
}

function addSlide(presentation: Presentation, newSlide: Slide): Presentation {
    return {
        ...presentation,
        slides: [...presentation.slides, newSlide]
    };
}

function removeSlide(presentation: Presentation, slideId: string): Presentation {
    return {
        ...presentation,
        slides: presentation.slides.filter(slide => slide.id !== slideId)
    };
}

function moveSlide(presentation: Presentation, fromIndex: number, toIndex: number): Presentation {
    const slides = [...presentation.slides];
    const [movedSlide] = slides.splice(fromIndex, 1);
    slides.splice(toIndex, 0, movedSlide);
    return {
        ...presentation,
        slides
    };
}

function addTextToSlide(slide: Slide, newText: TextObject): Slide {
    return {
        ...slide,
        objects: [...slide.objects, newText]
    };
}

function removeObjectFromSlide(slide: Slide, objectId: string): Slide {
    return {
        ...slide,
        objects: slide.objects.filter(obj => obj.id !== objectId)
    };
}

function changeObjectPosition(slide: Slide, objectId: string, newPosition: { x: number; y: number }): Slide {
    return {
        ...slide,
        objects: slide.objects.map(obj =>
            obj.id === objectId ? { ...obj, position: newPosition } : obj
        )
    };
}

function changeTextContent(slide: Slide, textId: string, newValue: string): Slide {
    return {
        ...slide,
        objects: slide.objects.map(obj =>
            obj.id === textId && 'value' in obj ? { ...obj, value: newValue } : obj
        )
    };
}

function changeTextSize(slide: Slide, textId: string, newFontSize: string): Slide {
    return {
        ...slide,
        objects: slide.objects.map(obj =>
            obj.id === textId && 'fontSize' in obj ? { ...obj, fontSize: newFontSize } : obj
        )
    };
}

function changeTextFontFamily(slide: Slide, textId: string, newFontFamily: string): Slide {
    return {
        ...slide,
        objects: slide.objects.map(obj =>
            obj.id === textId && 'fontFamily' in obj ? { ...obj, fontFamily: newFontFamily } : obj
        )
    };
}

function changeSlideBackground(slide: Slide, newBackground: Solid | Image | Gradient): Slide {
    return {
        ...slide,
        background: newBackground
    };
}
