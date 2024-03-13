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
		item:
		{
			content: string
		}
	}
}

export interface IPrice {
	price: {
		service: string
		price: string
	}
}

export interface IPrices {
	title: string
	description: string
	block: IPrice
}

export interface IServices {
	id: number
	icon: string
	title: string
	description: string
	files: {
		original: string
	}
}

export interface IWork {
	name: string
	slug: string
	url: string
	list: string
	label: string
	description: string
	files: {
		imageWebp: string
		imageWebpX2: string
		image: string
		imageX2: string
	}
}

export interface IWorks {
	pages: {
		page: {
			pageData: {
				work: IWork
			}
		}
	}
}

export interface IWorkItem {
	seo: {
		title: string
		description: string
	}
	name: string
	url: string | null
	list: string
	label: string | null
	content: {
		data: {
			data: {
				html: string
				files: {
					imageWebp: string
					imageWebpX2: string
					image: string
					imageX2: string
				}
			}

		}
	}
	otherWorks: IWorks | IWork[]
}
