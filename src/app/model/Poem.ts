export interface Data {
    titles: Array <string>
    authors: Array <string>
    poems: Array <PoemI>
}

export interface PoemI {
    title: string
    author: string
    lines: Array <string>
    linecount: number
}

export class Poem {
    public id?: string | undefined
    isEditable?: boolean

    constructor (
        public title: string,
        public author: string, 
        public text: string[]) {
            this.isEditable = true
        }
}