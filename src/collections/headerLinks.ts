import {BookFilters, GalleryFilters} from '@/collections/filters'

export var headerLinks : Record<string,any> =[
    {
        title: 'home',
        url: 'Home'
    },
    {
        title: 'books',
        url: 'Books',
        filter: BookFilters.ALL,
        submenu:[
            {title: 'allBooks', url: 'Books', filter: BookFilters.ALL},
            {title: 'ineditsBooks',url: 'Books', filter: BookFilters.INEDIT},
            {title: 'publishedBooks',url: 'Books', filter: BookFilters.PUBLISHED}
        ]
    },
    {
        title: 'articles',
        url: 'Articles'
    },
    {
        title: 'interviews',
        url: 'Interviews'
    },
    {
        title: 'gallery',
        submenu:[
            {title: 'travelsGallery', url:'Gallery',filter: GalleryFilters.TRAVELS},
            {title: 'familyGallery', url:'Gallery',filter: GalleryFilters.FAMILY},
            {title: 'university', url:'Gallery',filter: GalleryFilters.UNIVERSITY},
            {title: 'tribute', url:'Gallery',filter: GalleryFilters.TRIBUTE}
        ]
    }
    ]