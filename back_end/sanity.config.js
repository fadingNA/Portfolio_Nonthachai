import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import testimonial from './schemas/testimonial';
import aboutme from "./schemas/aboutme";
import brands from "./schemas/brands";
import contact from "./schemas/contact";
import experiences from "./schemas/experiences";
import skills from "./schemas/skills";
import works from "./schemas/works";
import workExperience from "./schemas/workExperience";

export default defineConfig({
    name: 'default',
    title: 'My Portfolio_2023',

    projectId: '1nniajxd',
    dataset: 'production',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes.concat([
            testimonial,
            aboutme,
            brands,
            contact,
            experiences,
            skills,
            works,
            workExperience
        ]),
    },
})
