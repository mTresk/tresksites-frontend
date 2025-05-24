import type { IFeaturedImage } from '@/types/api'

export interface PageRoute {
    name: string
    slug: string
    updatedAt: string
    images: IFeaturedImage
}
