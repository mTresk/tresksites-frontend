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

export interface IPricesItem {
    service: string
    price: string
}

export interface IPrice {
    title: string
    description: string
    items: IPricesItem[]
}

export interface IAdvantagesItem {
    title: string
    description: string
}

export interface IServicesItem {
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

export interface ILogosItem {
    name: string
    path: string
}

export interface IChip {
    title: string
    icon: string
}

export interface ISearchResult {
    id: number
    slug: string
    name: string

}

export type ValidationErrors = Record<string, string[]>

export interface IApiErrorResponse {
    data?: {
        errors?: ValidationErrors
    }
    response?: {
        status: number
    }
    message: string
}

export interface IUseSubmitOptions<T> {
    onSuccess?: (result: T) => void
    onError?: (error: IApiErrorResponse) => void
}
