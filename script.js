const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        room:[
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },

    {
        name: 'Mrs. White',
        present: false,
        room:[
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },

    {
        name: 'Reverend Green',
        present: true,
        room:[
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },

    {
        name: 'Rusty',
        present: false,
        room:[
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },

    {
        name: 'Colonel Mustard',
        present: true,
        room:[
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },

    {
        name: 'Professor Plum',
        present: true,
        room:[
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false},
        ]
    },
];

let suspects = videoData.filter((videoData) => videoData.present === true);

console.log('Jumlah yang hadir : ' + suspects.length);

console.log(suspects);

//console.log(videoData);