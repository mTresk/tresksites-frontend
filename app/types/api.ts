export interface IPolicy {
    title: string
    content: string
}

export interface IContacts {
    name: string
    inn: string
    telegram: string
    email: string
    brief: string
    block: {
        item: {
            content: string
        }
    }
}

export interface IPriceItem {
    service: string
    price: string
}

export interface IPrices {
    title: string
    description: string
    block: {
        price: IPriceItem
    }
}

export interface IAdvantageItem {
    title: string
    description: string
}

export interface IAdvantages {
    block: {
        advantage: IAdvantageItem
    }
}

export interface IServices {
    id: number
    icon: string
    title: string
    description: string
}

export interface IWorkTag {
    name: string
    slug: string
}

export interface IFeaturedImage {
    imageWebp: string
    imageWebpX2: string
    image: string
    imageX2: string
    imageWebpSm: string
    imageWebpSmX2: string
    imageSm: string
    imageSmX2: string
}

export interface IWork {
    title: string
    slug: string
    url: string | null
    list: string
    label: string | null
    description: string
    tags: IWorkTag[] | null
    featured: IFeaturedImage
}

export interface WorksResponse {
    pageData: IWork[]
    cursor?: number
}

export interface IWorkItem {
    data: {
        seo: {
            title: string
            description: string
        }
        title: string
        url: string | null
        list: string
        label: string | null
        tags: IWorkTag[] | null
        content: {
            data: {
                data: {
                    html: string
                    images: IFeaturedImage
                }
            }
        }
    }
    otherWorks: IWork[]
}

export interface ApiValidationError {
    response: {
        _data: {
            errors: {
                [key: string]: string[]
            }
        }
    }
}

export interface ApiPaginationMeta {
    current_page: number
    last_page: number
    per_page: number
    total: number
}

export interface ApiResponse<T> {
    data: T
    meta: ApiPaginationMeta
}

export interface ILogoItem {
    name: string
    path: string
}
