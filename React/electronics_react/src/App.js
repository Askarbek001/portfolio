import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Items from './Electronics/Items';
import './style.css';

const products = [
    {
        id: 709,
        title: 'Объектив Canon CN-E 15.5-47mm T2.8 L S',
        main_image: {
            id: 2548,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/1865652/img_id8120819881440557537/orig',
            },
            size: {
                original: 31718,
            },
            dimensions: {
                original: {
                    width: 596,
                    height: 410,
                },
            },
            extension: 'webp',
        },
        price: 13116,
        discount: null,
        category_id: 206,
    },
    {
        id: 694,
        title: 'Объектив Canon EF-S 18-55mm f/3.5-5.6',
        main_image: {
            id: 2517,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/175985/img_id4566048030954744467/900x1200',
            },
            size: {
                original: 20652,
            },
            dimensions: {
                original: {
                    width: 429,
                    height: 570,
                },
            },
            extension: 'webp',
        },
        price: 13915,
        discount: null,
        category_id: 206,
    },
    {
        id: 695,
        title: 'Объектив Canon EF-M 18-150mm f/3.5-6.3 IS STM',
        main_image: {
            id: 2518,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4220209/img_id3778335031408775858.jpeg/900x1200',
            },
            size: {
                original: 24478,
            },
            dimensions: {
                original: {
                    width: 441,
                    height: 292,
                },
            },
            extension: 'webp',
        },
        price: 18937,
        discount: 10,
        category_id: 206,
    },
    {
        id: 696,
        title: 'Объектив Canon EF 28-135mm f/3.5-5.6 IS USM',
        main_image: {
            id: 2519,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/199079/img_id8692182640270922496/900x1200',
            },
            size: {
                original: 34660,
            },
            dimensions: {
                original: {
                    width: 597,
                    height: 390,
                },
            },
            extension: 'webp',
        },
        price: 14878,
        discount: null,
        category_id: 206,
    },
    {
        id: 697,
        title: 'Объектив Canon EF 85mm f/1.8 USM',
        main_image: {
            id: 2520,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4291905/img_id4277340219207335799.jpeg/900x1200',
            },
            size: {
                original: 21806,
            },
            dimensions: {
                original: {
                    width: 325,
                    height: 398,
                },
            },
            extension: 'webp',
        },
        price: 16253,
        discount: null,
        category_id: 206,
    },
    {
        id: 698,
        title: 'Объектив Canon EF-S 15-85mm f/3.5-5.6 IS USM',
        main_image: {
            id: 2523,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/175985/img_id4566048030954744467/900x1200',
            },
            size: {
                original: 34412,
            },
            dimensions: {
                original: {
                    width: 701,
                    height: 579,
                },
            },
            extension: 'webp',
        },
        price: 12789,
        discount: 10,
        category_id: 206,
    },
    {
        id: 699,
        title: 'Объектив Canon EF 135mm f/2L USM',
        main_image: {
            id: 2527,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/1568604/img_id1192559978246945743.jpeg/900x1200',
            },
            size: {
                original: 25088,
            },
            dimensions: {
                original: {
                    width: 612,
                    height: 364,
                },
            },
            extension: 'webp',
        },
        price: 15390,
        discount: null,
        category_id: 206,
    },
    {
        id: 700,
        title: 'Объектив Canon EF 24-105mm f/3.5-5.6 IS STM',
        main_image: {
            id: 2530,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/1538707/img_id6455876070512143780/900x1200',
            },
            size: {
                original: 32644,
            },
            dimensions: {
                original: {
                    width: 620,
                    height: 437,
                },
            },
            extension: 'webp',
        },
        price: 27999,
        discount: null,
        category_id: 206,
    },
    {
        id: 701,
        title: 'Объектив Canon EF 17-40mm f/4L USM',
        main_image: {
            id: 2531,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/1669769/img_id600213315711286586/900x1200',
            },
            size: {
                original: 36696,
            },
            dimensions: {
                original: {
                    width: 416,
                    height: 571,
                },
            },
            extension: 'webp',
        },
        price: 24776,
        discount: null,
        category_id: 206,
    },
    {
        id: 702,
        title: 'Объектив Canon EF-S 18-200mm f/3.5-5.6 IS',
        main_image: {
            id: 2532,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/175985/img_id4566048030954744467/900x1200',
            },
            size: {
                original: 31854,
            },
            dimensions: {
                original: {
                    width: 701,
                    height: 437,
                },
            },
            extension: 'webp',
        },
        price: 23232,
        discount: null,
        category_id: 206,
    },
    {
        id: 703,
        title: 'Объектив Canon EF 17-35mm f/2.8L USM',
        main_image: {
            id: 2535,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4497593/img_id7157417318124023645.jpeg/900x1200',
            },
            size: {
                original: 23618,
            },
            dimensions: {
                original: {
                    width: 523,
                    height: 354,
                },
            },
            extension: 'webp',
        },
        price: 12718,
        discount: null,
        category_id: 206,
    },
    {
        id: 704,
        title: 'Объектив Canon CN-E 18-80mm T4.4 L IS KAS S',
        main_image: {
            id: 2536,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4262452/img_id2882192912903250991.jpeg/900x1200',
            },
            size: {
                original: 5305,
            },
            dimensions: {
                original: {
                    width: 200,
                    height: 200,
                },
            },
            extension: 'jpeg',
        },
        price: 22481,
        discount: null,
        category_id: 206,
    },
    {
        id: 705,
        title: 'Объектив Canon EF 70-300mm f/4-5.6 IS II USM',
        main_image: {
            id: 2541,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/1767151/img_id3028409436390517492/900x1200',
            },
            size: {
                original: 13360,
            },
            dimensions: {
                original: {
                    width: 594,
                    height: 321,
                },
            },
            extension: 'webp',
        },
        price: 16948,
        discount: null,
        category_id: 206,
    },
    {
        id: 706,
        title: 'Объектив Canon EF 180mm f/3.5L Macro USM',
        main_image: {
            id: 2542,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/96484/img_id5185557123491888125/900x1200',
            },
            size: {
                original: 13708,
            },
            dimensions: {
                original: {
                    width: 183,
                    height: 395,
                },
            },
            extension: 'webp',
        },
        price: 21496,
        discount: null,
        category_id: 206,
    },
    {
        id: 707,
        title: 'Объектив Canon EF 100mm f/2.8L Macro IS USM',
        main_image: {
            id: 2543,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4501142/img_id6032187675000428900.jpeg/900x1200',
            },
            size: {
                original: 26480,
            },
            dimensions: {
                original: {
                    width: 701,
                    height: 405,
                },
            },
            extension: 'webp',
        },
        price: 28953,
        discount: null,
        category_id: 206,
    },
    {
        id: 708,
        title: 'Объектив Canon EF 70-200mm f/2.8L IS USM',
        main_image: {
            id: 2546,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4415357/img_id713768621658059221.jpeg/900x1200',
            },
            size: {
                original: 23956,
            },
            dimensions: {
                original: {
                    width: 701,
                    height: 313,
                },
            },
            extension: 'webp',
        },
        price: 26926,
        discount: null,
        category_id: 206,
    },
    {
        id: 693,
        title: 'Объектив Canon EF-S 18-55mm f/3.5-5.6 IS',
        main_image: {
            id: 2516,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4262452/img_id2882192912903250991.jpeg/900x1200',
            },
            size: {
                original: 22968,
            },
            dimensions: {
                original: {
                    width: 529,
                    height: 442,
                },
            },
            extension: 'webp',
        },
        price: 26998,
        discount: 10,
        category_id: 206,
    },
    {
        id: 710,
        title: 'Объектив Canon EF 70-200mm f/2.8L IS III USM',
        main_image: {
            id: 2549,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4386141/img_id8324822514057988726.jpeg/900x1200',
            },
            size: {
                original: 21898,
            },
            dimensions: {
                original: {
                    width: 591,
                    height: 270,
                },
            },
            extension: 'webp',
        },
        price: 27895,
        discount: null,
        category_id: 206,
    },
    {
        id: 711,
        title: 'Объектив Canon EF-S 17-55mm f/2.8 IS USM',
        main_image: {
            id: 2551,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/5234525/img_id478434158237749556.jpeg/900x1200',
            },
            size: {
                original: 24978,
            },
            dimensions: {
                original: {
                    width: 701,
                    height: 437,
                },
            },
            extension: 'webp',
        },
        price: 14573,
        discount: null,
        category_id: 206,
    },
    {
        id: 712,
        title: 'Объектив Canon EF 24-105mm f/4L IS II USM',
        main_image: {
            id: 2554,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/96484/img_id7441459899941284640/900x1200',
            },
            size: {
                original: 39224,
            },
            dimensions: {
                original: {
                    width: 604,
                    height: 484,
                },
            },
            extension: 'webp',
        },
        price: 10201,
        discount: null,
        category_id: 206,
    },
    {
        id: 714,
        title: 'Объектив Canon RF 28-70mm f/2L USM',
        main_image: {
            id: 2560,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4408567/img_id5739866484491714909.jpeg/900x1200',
            },
            size: {
                original: 15084,
            },
            dimensions: {
                original: {
                    width: 444,
                    height: 322,
                },
            },
            extension: 'webp',
        },
        price: 23474,
        discount: null,
        category_id: 206,
    },
    {
        id: 715,
        title: 'Объектив Canon EF 16-35mm f/2.8L III USM',
        main_image: {
            id: 2561,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4080439/img_id1897573458981389258.jpeg/900x1200',
            },
            size: {
                original: 38242,
            },
            dimensions: {
                original: {
                    width: 571,
                    height: 474,
                },
            },
            extension: 'webp',
        },
        price: 25713,
        discount: null,
        category_id: 206,
    },
    {
        id: 716,
        title: 'Объектив Tamron AF SP 24-70mm f/2.8 DI VC USD G2 (A032) Canon EF',
        main_image: {
            id: 2563,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4599566/img_id6525008275268601238.jpeg/900x1200',
            },
            size: {
                original: 16142,
            },
            dimensions: {
                original: {
                    width: 701,
                    height: 532,
                },
            },
            extension: 'webp',
        },
        price: 17986,
        discount: null,
        category_id: 206,
    },
    {
        id: 717,
        title: 'Фотоаппарат Nikon D3300 Kit',
        main_image: {
            id: 2568,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4923482/img_id4381300217292316153.jpeg/900x1200',
            },
            size: {
                original: 59394,
            },
            dimensions: {
                original: {
                    width: 701,
                    height: 561,
                },
            },
            extension: 'webp',
        },
        price: 22148,
        discount: null,
        category_id: 206,
    },
    {
        id: 718,
        title: 'Вспышка YongNuo Speedlite YN-560 IV',
        main_image: {
            id: 2574,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/3614670/img_id6698761324341554213.jpeg/900x1200',
            },
            size: {
                original: 18574,
            },
            dimensions: {
                original: {
                    width: 435,
                    height: 519,
                },
            },
            extension: 'webp',
        },
        price: 12797,
        discount: null,
        category_id: 206,
    },
    {
        id: 720,
        title: 'Вспышка YongNuo Speedlite YN-560 III',
        main_image: {
            id: 2580,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4331935/img_id7110094230763386879.jpeg/900x1200',
            },
            size: {
                original: 26228,
            },
            dimensions: {
                original: {
                    width: 540,
                    height: 701,
                },
            },
            extension: 'webp',
        },
        price: 16319,
        discount: null,
        category_id: 206,
    },
    {
        id: 725,
        title: 'Вспышка Canon Speedlite 600EX II-RT',
        main_image: {
            id: 2594,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-marketpic/5859330/pic297fe4a37f1c95ab29eb589fd47a4157/900x1200',
            },
            size: {
                original: 44420,
            },
            dimensions: {
                original: {
                    width: 438,
                    height: 701,
                },
            },
            extension: 'webp',
        },
        price: 28691,
        discount: null,
        category_id: 206,
    },
    {
        id: 726,
        title: 'Вспышка YongNuo Speedlite YN-660',
        main_image: {
            id: 2598,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4397006/img_id8664432229554988127.jpeg/900x1200',
            },
            size: {
                original: 17378,
            },
            dimensions: {
                original: {
                    width: 466,
                    height: 540,
                },
            },
            extension: 'webp',
        },
        price: 11963,
        discount: null,
        category_id: 206,
    },
    {
        id: 564,
        title: 'Умные часы Amazfit Bip U Pro',
        main_image: {
            id: 2165,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/5243677/img_id4247317711330027935.jpeg/900x1200',
            },
            size: {
                original: 40992,
            },
            dimensions: {
                original: {
                    width: 648,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 1000,
        discount: null,
        category_id: 180,
    },
    {
        id: 566,
        title: 'Умный браслет Xiaomi Mi Band 5',
        main_image: {
            id: 2172,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/5220759/img_id7828605218073345712.jpeg/900x1200',
            },
            size: {
                original: 33388,
            },
            dimensions: {
                original: {
                    width: 435,
                    height: 652,
                },
            },
            extension: 'jpeg',
        },
        price: 1000,
        discount: 10,
        category_id: 180,
    },
    {
        id: 570,
        title: 'Беспроводные наушники QCY T5 Pro',
        main_image: {
            id: 2183,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/6780724/img_id5135502218215761313.jpeg/900x1200',
            },
            size: {
                original: 22560,
            },
            dimensions: {
                original: {
                    width: 437,
                    height: 556,
                },
            },
            extension: 'jpeg',
        },
        price: 1000,
        discount: 10,
        category_id: 179,
    },
    {
        id: 11,
        title: 'Планшет Apple iPad  Wi-Fi',
        main_image: {
            id: 129,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/5232583/img_id4185076160778195192.jpeg/900x1200',
            },
            size: {
                original: 21190,
            },
            dimensions: {
                original: {
                    width: 492,
                    height: 579,
                },
            },
            extension: 'jpeg',
        },
        price: 29801,
        discount: null,
        category_id: 24,
    },
    {
        id: 12,
        title: 'Apple Smart Cover для Apple iPad  10.2"/iPad Air 10.5"',
        main_image: {
            id: 117,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/5236741/img_id3966792314851453037.jpeg/900x1200',
            },
            size: {
                original: 2922,
            },
            dimensions: {
                original: {
                    width: 503,
                    height: 701,
                },
            },
            extension: 'webp',
        },
        price: 4490,
        discount: null,
        category_id: 24,
    },
    {
        id: 1,
        title: 'Смартфон Apple iPhone X',
        main_image: {
            id: 3,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/5284139/img_id7484586931246876968.png/orig',
            },
            size: {
                original: 12074,
            },
            dimensions: {
                original: {
                    width: 321,
                    height: 620,
                },
            },
            extension: 'webp',
        },
        price: 44500,
        discount: 5,
        category_id: 2,
    },
    {
        id: 64,
        title: 'Смартфон Apple iPhone 12 Pro',
        main_image: {
            id: 350,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4794494/img_id7969056159827924538.png/900x1200',
            },
            size: {
                original: 9914,
            },
            dimensions: {
                original: {
                    width: 361,
                    height: 701,
                },
            },
            extension: 'webp',
        },
        price: 93300,
        discount: null,
        category_id: 2,
    },
    {
        id: 151,
        title: 'Смартфон Apple iPhone 12 Pro Max',
        main_image: {
            id: 656,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4794494/img_id7969056159827924538.png/600x800',
            },
            size: {
                original: 14496,
            },
            dimensions: {
                original: {
                    width: 517,
                    height: 701,
                },
            },
            extension: 'webp',
        },
        price: 101700,
        discount: null,
        category_id: 2,
    },
    {
        id: 70,
        title: 'Смартфон Xiaomi Redmi Note 9 Pro',
        main_image: {
            id: 329,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/7067087/img_id8542553181673491047.jpeg/900x1200',
            },
            size: {
                original: 39515,
            },
            dimensions: {
                original: {
                    width: 421,
                    height: 518,
                },
            },
            extension: 'jpeg',
        },
        price: 14750,
        discount: null,
        category_id: 2,
    },
    {
        id: 179,
        title: 'Телефон MAXVI K18',
        main_image: {
            id: 791,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4353087/img_id5788699061309045146.png/orig',
            },
            size: {
                original: 143164,
            },
            dimensions: {
                original: {
                    width: 254,
                    height: 574,
                },
            },
            extension: 'png',
        },
        price: 1600,
        discount: null,
        category_id: 2,
    },
    {
        id: 181,
        title: 'Телефон MAXVI C15',
        main_image: {
            id: 826,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4606255/img_id4023554139087881644.png/900x1200',
            },
            size: {
                original: 227085,
            },
            dimensions: {
                original: {
                    width: 381,
                    height: 691,
                },
            },
            extension: 'png',
        },
        price: 1250,
        discount: null,
        category_id: 2,
    },
    {
        id: 171,
        title: 'Телефон Samsung SM-B310E',
        main_image: {
            id: 746,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/6354718/img_id5917271469588073804.jpeg/900x1200',
            },
            size: {
                original: 35494,
            },
            dimensions: {
                original: {
                    width: 301,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 2450,
        discount: null,
        category_id: 2,
    },
    {
        id: 176,
        title: 'Телефон MAXVI X850',
        main_image: {
            id: 785,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/5255974/img_id2877708074614611415.png/900x1200',
            },
            size: {
                original: 51657,
            },
            dimensions: {
                original: {
                    width: 470,
                    height: 643,
                },
            },
            extension: 'jpeg',
        },
        price: 2400,
        discount: null,
        category_id: 2,
    },
    {
        id: 177,
        title: 'Смартфон Samsung Galaxy A41',
        main_image: {
            id: 807,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/7388241/img_id229438348844076509.jpeg/900x1200',
            },
            size: {
                original: 16516,
            },
            dimensions: {
                original: {
                    width: 308,
                    height: 613,
                },
            },
            extension: 'webp',
        },
        price: 17800,
        discount: null,
        category_id: 2,
    },
    {
        id: 169,
        title: 'Телефон INOI 104',
        main_image: {
            id: 726,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/6069165/img_id7575816533826369220.jpeg/900x1200',
            },
            size: {
                original: 36755,
            },
            dimensions: {
                original: {
                    width: 392,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 1600,
        discount: null,
        category_id: 2,
    },
    {
        id: 100,
        title: 'Смартфон Xiaomi Redmi Note 8',
        main_image: {
            id: 462,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/5231768/img_id174493763755842270.jpeg/900x1200',
            },
            size: {
                original: 45998,
            },
            dimensions: {
                original: {
                    width: 543,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 13750,
        discount: null,
        category_id: 2,
    },
    {
        id: 150,
        title: 'Телефон INOI 239',
        main_image: {
            id: 634,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4120567/img_id22675744857527090.jpeg/900x1200',
            },
            size: {
                original: 24193,
            },
            dimensions: {
                original: {
                    width: 214,
                    height: 470,
                },
            },
            extension: 'jpeg',
        },
        price: 1200,
        discount: null,
        category_id: 2,
    },
    {
        id: 156,
        title: 'Телефон INOI 241',
        main_image: {
            id: 681,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4956986/img_id1461359804814162544.png/900x1200',
            },
            size: {
                original: 45639,
            },
            dimensions: {
                original: {
                    width: 513,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 1350,
        discount: null,
        category_id: 2,
    },
    {
        id: 168,
        title: 'Телефон INOI 109',
        main_image: {
            id: 709,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4493022/img_id6603291518293137323.jpeg/600x800',
            },
            size: {
                original: 49943,
            },
            dimensions: {
                original: {
                    width: 499,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 1300,
        discount: null,
        category_id: 2,
    },
    {
        id: 142,
        title: 'Телефон INOI 287',
        main_image: {
            id: 593,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4493022/img_id8109066766933432998.jpeg/600x800',
            },
            size: {
                original: 21982,
            },
            dimensions: {
                original: {
                    width: 212,
                    height: 470,
                },
            },
            extension: 'jpeg',
        },
        price: 1650,
        discount: null,
        category_id: 2,
    },
    {
        id: 145,
        title: 'Телефон INOI 281',
        main_image: {
            id: 621,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4076910/img_id5646726557758347203.jpeg/600x800',
            },
            size: {
                original: 43153,
            },
            dimensions: {
                original: {
                    width: 509,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 1500,
        discount: null,
        category_id: 2,
    },
    {
        id: 167,
        title: 'Телефон INOI 243',
        main_image: {
            id: 701,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4493022/img_id8109066766933432998.jpeg/600x800',
            },
            size: {
                original: 47165,
            },
            dimensions: {
                original: {
                    width: 462,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 1750,
        discount: null,
        category_id: 2,
    },
    {
        id: 153,
        title: 'Телефон INOI 249',
        main_image: {
            id: 664,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4956986/img_id1461359804814162544.png/900x1200',
            },
            size: {
                original: 50803,
            },
            dimensions: {
                original: {
                    width: 515,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 1500,
        discount: null,
        category_id: 2,
    },
    {
        id: 175,
        title: 'Телефон Nokia 110',
        main_image: {
            id: 777,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4076910/img_id6460229167663437833.jpeg/600x800',
            },
            size: {
                original: 32112,
            },
            dimensions: {
                original: {
                    width: 266,
                    height: 588,
                },
            },
            extension: 'jpeg',
        },
        price: 2350,
        discount: null,
        category_id: 2,
    },
    {
        id: 78,
        title: 'Смартфон Samsung Galaxy A11',
        main_image: {
            id: 360,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/7400882/img_id7716535156399837976.jpeg/600x800',
            },
            size: {
                original: 30508,
            },
            dimensions: {
                original: {
                    width: 308,
                    height: 604,
                },
            },
            extension: 'jpeg',
        },
        price: 10900,
        discount: null,
        category_id: 2,
    },
    {
        id: 73,
        title: 'Смартфон Xiaomi Poco X3 NFC',
        main_image: {
            id: 348,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4343059/img_id1117171784119993160.jpeg/600x800',
            },
            size: {
                original: 64493,
            },
            dimensions: {
                original: {
                    width: 587,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 19150,
        discount: null,
        category_id: 2,
    },
    {
        id: 69,
        title: 'Смартфон Samsung Galaxy A51',
        main_image: {
            id: 336,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/6354718/img_id5917271469588073804.jpeg/600x800',
            },
            size: {
                original: 34007,
            },
            dimensions: {
                original: {
                    width: 285,
                    height: 581,
                },
            },
            extension: 'jpeg',
        },
        price: 19800,
        discount: null,
        category_id: 2,
    },
    {
        id: 10,
        title: 'Гарнитура TurboSky TK-5',
        main_image: {
            id: 61,
            path: {
                original:
                    'https://avatars.mds.yandex.net/get-mpic/4080967/img_id1313089063833090514.jpeg/600x800',
            },
            size: {
                original: 31508,
            },
            dimensions: {
                original: {
                    width: 701,
                    height: 387,
                },
            },
            extension: 'jpeg',
        },
        price: 3150,
        discount: null,
        category_id: 2,
    },
    {
        id: 9,
        title: 'Телефон Panasonic KX-TS2388',
        main_image: {
            id: 57,
            path: {
                original:
                    'https://static.nix.ru/images/Panasonic-KX-TS2388RUB-1109922254.jpg?good_id=110992&width=500&height=500&view_id=2254',
            },
            size: {
                original: 62229,
            },
            dimensions: {
                original: {
                    width: 701,
                    height: 678,
                },
            },
            extension: 'jpeg',
        },
        price: 3280,
        discount: null,
        category_id: 2,
    },
    {
        id: 8,
        title: 'Рация TurboSky T9X2',
        main_image: {
            id: 51,
            path: {
                original:
                    'https://www.midland-rus.ru/uploads/original/9mOVwwfI.jpg',
            },
            size: {
                original: 13916,
            },
            dimensions: {
                original: {
                    width: 228,
                    height: 316,
                },
            },
            extension: 'jpeg',
        },
        price: 5980,
        discount: null,
        category_id: 2,
    },
    {
        id: 184,
        title: 'Телефон MAXVI B5',
        main_image: {
            id: 836,
            path: {
                original:
                    'https://otziv-otziv.ru/assets/cache/images/451/4503/img_id3205354078646421458-600x600-7d3.png',
            },
            size: {
                original: 30638,
            },
            dimensions: {
                original: {
                    width: 270,
                    height: 516,
                },
            },
            extension: 'jpeg',
        },
        price: 2000,
        discount: null,
        category_id: 2,
    },
    {
        id: 6,
        title: 'Сетевая зарядка Apple MHJE3ZM/A',
        main_image: {
            id: 40,
            path: {
                original:
                    'https://static.beeline.ru/shop/media/goods/334x434/e5057a87-7855-4767-8752-eff44362067f.jpg',
            },
            size: {
                original: 9362,
            },
            dimensions: {
                original: {
                    width: 360,
                    height: 701,
                },
            },
            extension: 'jpeg',
        },
        price: 1990,
        discount: 3,
        category_id: 2,
    },
    {
        id: 5,
        title: 'Кабель Baseus Golden Belt Series USB - Lightning (CALGB) 1 м',
        main_image: {
            id: 28,
            path: {
                original:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8vtY1C1-EkRaF462pb3FdvFYDd9lOTucVWSneeIcQg&s',
            },
            size: {
                original: 31589,
            },
            dimensions: {
                original: {
                    width: 574,
                    height: 555,
                },
            },
            extension: 'jpeg',
        },
        price: 548,
        discount: null,
        category_id: 2,
    },
];

export default function App() {
    return (
        <div className="wrapper">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">ProMarkeT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Домой</Nav.Link>
                            <Nav.Link
                                
                                href="#action2"
                            >
                                Скидки
                            </Nav.Link>
                            <NavDropdown
                                title="Категории"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    1
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    2
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    3
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    4
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="dark">Поиск</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Items items={products} />
        </div>
    );
}
