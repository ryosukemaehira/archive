// artPiecesという概念が存在するWebサイトです。このファイルには、artPiecesのデータが含まれています。このデータは、アプリケーションの他の場所で使用されます。データは、CMSから取得される可能性がありますが、今のところ、このファイルにハードコードされています。各artPieceには、撮影された地域名、画像URL（複数あり）、アートの種類、タグ、撮影場所の緯度と軽度、追加された順に3桁のID、が含まれます。まずは画像データは10件だけですが、後ほど増やしていきます。先述のタグは、アートの種類をより細かく表すためのタグで、別の配列で管理されています。このデータは、アプリケーションの他の場所で使用されます。artPieceとtagは、idで関連付けられており、一対多の関係です。このデータは、アプリケーションの他の場所で使用されます。

// Path: src/utils/tagData.js

const tagData = [
    {
        id: 1,
        name: 'mural',
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
        neightborhood: 'Friedrichshain',
        image: [
            'https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80',
            'https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80',
            'https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80',
        ],
        aspectRatio: ['4:3', '4:3', '指定なし'], 
        type: 'mural',
        tags: [1],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 2,
        name: 'The Kiss',
        neightborhood: 'Friedrichshain',
        image: [
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
        ],
        aspectRatio: ['1:1', '4:3'], 
        type: 'mural',
        tags: [1],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 4,
        name: 'painting',
        neightborhood: 'Friedrichshain',
        image: [
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
        ],
        aspectRatio: ['2.35:1', '4:3', '指定なし'], 
        type: 'mural',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 3,
        name: 'painting',
        neightborhood: 'Friedrichshain',
        image: [
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
        ],
        aspectRatio: ['16:9', '4:3', '指定なし'], 
        type: 'mural',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 5,
        name: 'painting',
        neightborhood: 'Friedrichshain',
        image: [
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
        ],
        aspectRatio: ['3:4', '4:3', '指定なし'], 
        type: 'mural',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 5,
        name: 'painting',
        neightborhood: 'Friedrichshain',
        image: [
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
        ],
        aspectRatio: ['3:4', '4:3', '指定なし'], 
        type: 'mural',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
    {
        id: 5,
        name: 'painting',
        neightborhood: 'Friedrichshain',
        image: [
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
            'https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80',
        ],
        aspectRatio: ['3:4', '4:3', '指定なし'], 
        type: 'mural',
        tags: [2],
        lat: 52.515,
        lng: 13.454,
    },
];  

export { tagData, artPieces };
