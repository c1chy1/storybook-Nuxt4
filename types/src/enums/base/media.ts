/**
 * @enum {string} EMedia
 * @description Represents MIME-types for media files.
 * @prop DATA Represents a general data type
 * @prop FILE Represents a general file type
 * @prop IMAGE Represents a general image type
 * @prop UNDEFINED Represents an undefined type
 * @prop PNG Represents a PNG image type
 * @prop JPG Represents a JPG image type
 * @prop JPEG Represents a JPEG image type
 * @prop SVG Represents an SVG image type
 * @prop WEBP Represents a WEBP image type
 * @prop BMP Represents a BMP image type
 * @prop GIF Represents a GIF image type
 * @prop PDF Represents a PDF document type
 * @prop XLS Represents an XLS document type
 * @prop DOCX Represents a DOCX document type
 */
export enum EMedia {
    DATA = 'data',
    FILE = 'file',
    IMAGE = 'image',
    UNDEFINED = 'undefined',

    PNG = 'image/png',
    JPG = 'image/jpg',
    JPEG = 'image/jpeg',
    SVG = 'image/svg',
    WEBP = 'image/webp',
    BMP = 'image/bmp',
    GIF = 'image/gif',

    PDF = 'application/pdf',
    XLS = 'application/vnd.ms-excel',
    DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}
