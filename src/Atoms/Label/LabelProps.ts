export interface LabelProps {
    text: string;
    options?: LabelOptions;
}

export interface LabelOptions{
    className?: string;
    font?: FontTypes;
    type?: LabelTypes;
}

export enum LabelTypes {
    HEADING = 'heading',
    LIMITED = 'limited',
}

export enum FontTypes {
    BOLD = 'bold',
    ITALICS = 'italics',
    REGULAR = 'regular',
}