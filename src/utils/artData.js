// artPiecesという概念が存在するWebサイトです。このファイルには、artPiecesのデータが含まれています。このデータは、アプリケーションの他の場所で使用されます。データは、CMSから取得される可能性がありますが、今のところ、このファイルにハードコードされています。各artPieceには、撮影された地域名、画像URL（複数あり）、アートの種類、タグ、撮影場所の緯度と軽度、追加された順に3桁のID、が含まれます。まずは画像データは10件だけですが、後ほど増やしていきます。先述のタグは、アートの種類をより細かく表すためのタグで、別の配列で管理されています。このデータは、アプリケーションの他の場所で使用されます。artPieceとtagは、idで関連付けられており、一対多の関係です。このデータは、アプリケーションの他の場所で使用されます。

// Path: src/utils/tagData.js

const tagData = [
    {
        id: 1,
        name: 'Graffiti',
    },
    {
        id: 2,
        name: 'sculpture',
    },
    {
        id: 3,

        name: 'graffiti',
    },
    {
        id: 4,
        name: 'installation',
    },
    {
        id: 5,
        name: 'mosaic',
    },
    {
        id: 6,
        name: 'sticker',
    },
    {
        id: 7,
        name: 'pasteup',
    },
    {
        id: 8,
        name: 'other',
    },
];


const artPieces = [
    {
        id: 1,
        name: 'The Kiss',
        neightborhood: 'Little Portugal',
        image: [
            '/images/sample/mm_01_1-1.jpg',
        ],
        aspectRatio: ['1:1', '4:3', '指定なし'], 
        type: 'Graffiti',
        tags: [1],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 2,
        name: 'The Kiss',
        neightborhood: 'Little Portugal',
        image: [
            '/images/sample/mm_02_235-1.jpg',
        ],
        aspectRatio: ['2.35:1', '4:3'], 
        type: 'Graffiti',
        tags: [1],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 3,
        name: 'painting',
        neightborhood: 'Plateau',
        image: [
            '/images/sample/mm_03_16-9.jpg',
        ],
        aspectRatio: ['16:9', '4:3', '指定なし'], 
        type: 'Industrial',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 4,
        name: 'painting',
        neightborhood: 'Plateau',
        image: [
            '/images/sample/mm_04_9-16.jpg',
        ],
        aspectRatio: ['9:16', '4:3', '指定なし'], 
        type: 'Mashup',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 5,
        name: 'painting',
        neightborhood: 'Little Portugal',
        image: [
            '/images/sample/mm_05_1-1.jpg',
        ],
        aspectRatio: ['1:1', '4:3', '指定なし'], 
        type: 'Mashup',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 6,
        name: 'painting',
        neightborhood: 'Little Portugal',
        image: [
            '/images/sample/mm_06_3-4.jpg',
        ],
        aspectRatio: ['3:4', '4:3', '指定なし'], 
        type: 'Mural',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 7,
        name: 'painting',
        neightborhood: 'Little Portugal',
        image: [
            '/images/sample/mm_07_16-9.jpg',
        ],
        aspectRatio: ['16:9', '4:3', '指定なし'], 
        type: 'Graffiti',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 8,
        name: 'painting',
        neightborhood: 'Little Portugal',
        image: [
            '/images/sample/mm_08_4-3.jpg',
        ],
        aspectRatio: ['4:3', '4:3', '指定なし'], 
        type: 'Graffiti',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 9,
        name: 'painting',
        neightborhood: 'Place des Arts',
        image: [
            '/images/sample/mm_09_1-1.jpg',
        ],
        aspectRatio: ['1:1', '4:3', '指定なし'], 
        type: 'Mural',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 10,
        name: 'painting',
        neightborhood: 'Little Portugal',
        image: [
            '/images/sample/mm_10_16-9.jpg',
        ],
        aspectRatio: ['16:9', '4:3', '指定なし'], 
        type: 'Mural',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 11,
        name: 'painting',
        neightborhood: 'Place des Arts',
        image: [
            '/images/sample/mm_11_4-3.jpg',
        ],
        aspectRatio: ['4:3', '4:3', '指定なし'], 
        type: 'Mashup',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 12,
        name: 'painting',
        neightborhood: 'Friedrichshain',
        image: [
            '/images/sample/mm_12_16-9.jpg',
        ],
        aspectRatio: ['16:9', '4:3', '指定なし'], 
        type: 'Graffiti',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 13,
        name: 'painting',
        neightborhood: 'Mont Royal',
        image: [
            '/images/sample/mm_13_3-4.jpg',
        ],
        aspectRatio: ['3:4', '4:3', '指定なし'], 
        type: 'Mural',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
];  

export { tagData, artPieces };
