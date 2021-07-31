import artCategories from '../data/artCategories';

import art1 from '../../assets/art/art1.jpg';
import art2 from '../../assets/art/art2.jpg';
import art3 from '../../assets/art/art3.jpg';
import art4 from '../../assets/art/art4.jpg';
import art5 from '../../assets/art/art5.jpg';
import art6 from '../../assets/art/art6.jpg';
import art7 from '../../assets/art/art7.jpg';
import art8 from '../../assets/art/art8.jpg';
import art9 from '../../assets/art/art9.jpg';
import art10 from '../../assets/art/art10.jpg';
import art11 from '../../assets/art/art11.jpg';
import art12 from '../../assets/art/art12.jpg';
import art13 from '../../assets/art/art13.jpg';
import art14 from '../../assets/art/art14.jpg';
import art15 from '../../assets/art/art15.jpg';
import art16 from '../../assets/art/art16.jpg';

let illustrations = [
    {
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art1,
        images : [art1, art3, art10]
    }
    ,{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art2,
        images : [art2]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art3,
        images : [art3, art5]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art8,
        images : [art8, art11]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art9,
        images : [art9]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art10,
        images : [art10, art13, art3]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art11,
        images : [art11]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art12,
        images : [art12]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art13,
        images : [art13, art1]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art3,
        images : [art3]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art8,
        images : [art8, art10]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art9,
        images : [art9]
    }
];

let comics = [
    {
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art4,
        images : [art4, art1]
    },{
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art5,
        images : [art5, art4, art8]
    },{
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art6,
        images : [art6, art9]
    },{
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art7,
        images : [art7, art10, art11, art14]
    },{
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art8,
        images : [art8]
    },{
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art9,
        images : [art9, art6]
    },{
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art10,
        images : [art10, art3]
    },{
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art11,
        images : [art11, art1]
    },{
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art12,
        images : [art12]
    },{
        title : "Test Images",
        technicalDetails: "Dato 1, Dato 2, Dato 3, etc.",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art13,
        images : [art13, art12, art11, art10, art4, art1]
    }
];
let fanarts = [
    {
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art11,
        images : [art11, art1]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art12,
        images : [art12, art12]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art13,
        images : [art13, art15]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art14,
        images : [art14]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art15,
        images : [art15]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art16,
        images : [art16, art3]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art4,
        images : [art4, art16]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art5,
        images : [art5]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art6,
        images : [art6]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art11,
        images : [art11, art12, art1, art9]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art12,
        images : [art12, art10]
    },{
        title : "Test Images",
        description : "dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha",
        thumbnail : art13,
        images : [art13]
    }
];

illustrations.forEach(i => i.category = artCategories.illustrations);
comics.forEach(i => i.category = artCategories.comics);
fanarts.forEach(i => i.category = artCategories.fanarts);

let collection = [...illustrations, ...comics, ...fanarts];
collection.forEach((i, index) => i.id = index + 1);

export default collection;
