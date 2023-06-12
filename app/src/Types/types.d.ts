export type ProjectDescriptor = {
    title: string,
    thumbnail: string,
    date: string,
    description: string,
    skills: string,
    id: string
}

export type ProjectData = {
    paragraphOne: string,
    paragraphTwo: string,
    length: string,
    size: string,
    imageOne : Image,
    imageTwo : Image,
    imageThree : Image,
    link : string
}

export type Image = {
    path: string,
    description: string,
    alt: string
}