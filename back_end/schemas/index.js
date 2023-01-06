import {createSchema} from "sanity";
import testimonial from "./testimonial";

export const schemaTypes = []


export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        testimonial
    ]),
})