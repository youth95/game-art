declare namespace global {
    interface Effect {
        invert: (img: ImageData) => ImageData;
        dilate: (img: ImageData, radius: number) => ImageData;
        edge_detection: (img: ImageData, radius: number) => ImageData;
        emboss: (img: ImageData) => ImageData;
        erode: (img: ImageData, radius: number) => ImageData;
        grayscale: (img: ImageData) => ImageData;
        grayscale_with_weights: (img: ImageData, r: number, g: number, b: number) => ImageData;
        median: (img: ImageData, radius: number) => ImageData;
        sepia: (img: ImageData) => ImageData;
        sharpen: (img: ImageData) => ImageData;
        sobel: (img: ImageData) => ImageData;
        unsharp_mask: (img: ImageData, radius: number, amount: number) => ImageData;
    }

    interface Bild {
        effect: Effect;
    }

    interface Bex {
        bild: Bild;
    }

    interface Window {
        bex: Bex;
    }
}