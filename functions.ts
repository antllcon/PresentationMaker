import {Presentation, Slide, SlideObject} from './types';

function changePresentationTitle(presentation: Presentation, newTitle: string): Presentation {
    return {...presentation, title: newTitle};
}

function addSlide(presentation: Presentation, newSlide: Slide): Presentation {
    const UpdatedSlides = [...presentation.slides, newSlide];
    return {...presentation, slides: UpdatedSlides};
}

export function removeSlide(presentation: Presentation, slideId: number): Presentation {
    const updatedSlides = presentation.slides.filter(slide => slide.id !== slideId);
    return {...presentation, slides: updatedSlides};
}

export function addSlideObject(slide: Slide, newObject: SlideObject): Slide {
    const updatedObjects = [...slide.objects, newObject];
    return {...slide, objects: updatedObjects};
}

// export function removeSlideObject(slide: Slide, objectId: string): Slide {
//     const updatedObjects = slide.objects.filter(object => object.id !== objectId);
//     return {...slide, objects: updatedObjects};
// }

//
// export function moveSlide(presentation: Presentation, fromIndex: number, toIndex: number): Presentation {
//     const updatedSlides = [...presentation.slides];
//     const [movedSlide] = updatedSlides.splice(fromIndex, 1);
//     updatedSlides.splice(toIndex, 0, movedSlide);
//     return {...presentation, slides: updatedSlides};
// }
//

//
