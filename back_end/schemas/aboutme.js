export default {
    name: 'abouts',
    title: 'Abouts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        }, {
            name: 'description',
            title: 'Details',
            type: 'string'
        }, {
            name: 'imgUrl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}