export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [{
        name: 'name',
        title: 'title',
        type: 'string'
    }, {
        name: 'company',
        title: 'Company',
        type: 'string'
    }, {
        name: 'image',
        title: 'ImgURL',
        type: 'image',
        options: {
            hotspot: true, // can crop the image
        }
    }, {
        name: 'feedback',
        title: 'Feedback',
        type: 'string'
    }
    ]

}