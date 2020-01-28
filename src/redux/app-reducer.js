import { mastercalcAPI} from '../api/api';
import { produce} from 'immer';

const SET_INITIAL_FLOOR_PARAMS = 'SET_INITIAL_FLOOR_PARAMS';
const SET_REQUIRED_FLOOR_PARAMS = 'SET_REQUIRED_FLOOR_PARAMS';
const SET_DATA_FOR_CALCULATION = 'SET_DATA_FOR_CALCULATION';
const DATA_RECEIPT_SUCCSESS = 'DATA_RECEIPT_SUCCSESS';

let initialState = {
    wallsInitialData: [{
            id: 0,
            value: ''
        },
        {
            category_id: 1,
            id: "R_BRCK",
            value: "Кирпичная стена"
        },
        {
            category_id: 1,
            id: "R_PLST",
            value: "Черновая штукатурка"
        },
        {
            category_id: 1,
            id: "R_WPPR",
            value: "Старые обои"
        },
        {
            category_id: 1,
            id: "R_TILE",
            value: "Старая плитка"
        },
    ],
    wallsRequiredData: [{
            id: 0,
            value: ''
        },
        {
            category_id: 1,
            id: "F_WPPR",
            value: "Обои"
        },
        {
            category_id: 1,
            id: "F_TILE",
            value: "Плитка"
        },
        {
            category_id: 1,
            id: "F_PAIN",
            value: "Окрашенная стена"
        },
        {
            category_id: 1,
            id: "F_DECO",
            value: "Декоративная штукатурка"
        },

    ],
    ceilingInitialData: [{
            id: 1,
            value: ''
        },
        {
            category_id: 2,
            id: "CEIL_R_CURV",
            value: "Потолок в старой краске/штукатурке"
        },
        {
            category_id: 2,
            id: "CEIL_R_NAKE",
            value: "Голая плита перекрытия"
        },
        {
            category_id: 2,
            id: "CEIL_R_STRC",
            value: "Старый натяжной потолок / гипсокартон"
        },

    ],
    ceilingRequiredData: [{
            id: 0,
            value: ''
        },
        {
            category_id: 2,
            id: "CEIL_F_PAIN",
            value: "Ровный окрашенный потолок"
        },
        {
            category_id: 2,
            id: "CEIL_F_DRPA",
            value: "Окрашенный потолок из гипсокартона"
        },
        {
            category_id: 2,
            id: "CEIL_F_STRC",
            value: "Натяжной потолок"
        },
    ],
    floorInitialData: [{
            category_id: 3,
            id: 0,
            value: ''
        },

    ],
    floorRequiredData: [{
            id: 0,
            value: ''
        },
        {
            category_id: 3,
            id: "FLOOR_F_TILE",
            value: "Плитка"
        },
        {
            category_id: 3,
            id: "FLOOR_F_PARQ",
            value: "Паркет на сухой стяжке"
        },
        {
            category_id: 3,
            id: "FLOOR_F_LAMI",
            value: "Ламинат на сухой стяжке"
        },
        {
            category_id: 3,
            id: "FLOOR_F_LINO",
            value: "Линолеум"
        },
    ],
    calcData: {
        room_length: 2,
        room_width: 3,
        room_hight: 1,
        doors_qty: 4,
        windows_qty: 5,
        walls_initial_state: 'Кирпичная стена',
        walls_required_state: 'Обои',
        ceiling_initial_state: null,
        ceiling_required_state: '',
        floor_initial_state: null,
        floor_required_state: 'Ламинат на сухой стяжке'
    },
    calcDataRec: false,
    response: {
        "walls": {
            "route": [{
                "id": 2,
                "category_id": 1,
                "code_in": "R_BRCK",
                "code_out": "R_PLST",
                "name": "Выравнивание стен (черновая отделка)",
                "cost_items": [{
                    "id": 3,
                    "name": "нанесение грунтовки",
                    "qt": 1,
                    "price": 1000,
                    "unit": "м2",
                    "total": 1000,
                    "materials": [{
                        "material_group_id": 1,
                        "qt": 0.2,
                        "name": "грунтовка глубокопроникающая",
                        "unit": "л",
                        "price": 2214,
                        "total": 442.8
                    }]
                }, {
                    "id": 4,
                    "name": "монтаж фасадной сетки",
                    "qt": 1,
                    "price": 5000,
                    "unit": "м2",
                    "total": 5000,
                    "materials": [{
                        "material_group_id": 3,
                        "qt": 1.1,
                        "name": "фасадная сетка",
                        "unit": "м2",
                        "price": 2160,
                        "total": 2376
                    }, {
                        "material_group_id": 11,
                        "qt": 0.08,
                        "name": "акриловая краска",
                        "unit": "л",
                        "price": 1985.7142857142858,
                        "total": 158.86
                    }]
                }, {
                    "id": 5,
                    "name": "выравнивание штукатуркой",
                    "qt": 1,
                    "price": 9000,
                    "unit": "м2",
                    "total": 9000,
                    "materials": [{
                        "material_group_id": 6,
                        "qt": 4,
                        "name": "уголок алюминиевый перфорированный",
                        "unit": "м",
                        "price": 492,
                        "total": 1968
                    }, {
                        "material_group_id": 2,
                        "qt": 8.5,
                        "name": "штукатурка гипсовая универсальная",
                        "unit": "кг",
                        "price": 511.3333333333333,
                        "total": 4346.33
                    }]
                }]
            }, {
                "id": 7,
                "category_id": 1,
                "code_in": "R_PLST",
                "code_out": "F_TILE",
                "name": "Укладка плитки на ровную поверхность стены",
                "cost_items": [{
                    "id": 14,
                    "name": "укладка керамической плитки и керамогранита на стены",
                    "qt": 1,
                    "price": 25000,
                    "unit": "м2",
                    "total": 25000,
                    "materials": [{
                        "material_group_id": 13,
                        "qt": 1,
                        "name": "плитка керамическая для стен",
                        "unit": "м2",
                        "price": 14869.999999999998,
                        "total": 14870
                    }, {
                        "material_group_id": 1,
                        "qt": 0.2,
                        "name": "грунтовка глубокопроникающая",
                        "unit": "л",
                        "price": 2214,
                        "total": 442.8
                    }, {
                        "material_group_id": 23,
                        "qt": 3,
                        "name": "клей для керамической плитки",
                        "unit": "кг",
                        "price": 469.20000000000005,
                        "total": 1407.6
                    }]
                }, {
                    "id": 15,
                    "name": "затирка швов",
                    "qt": 1,
                    "price": 5000,
                    "unit": "м2",
                    "total": 5000,
                    "materials": [{
                        "material_group_id": 14,
                        "qt": 0.3,
                        "name": "плиточная затирка (фуга)",
                        "unit": "кг",
                        "price": 13183.333333333334,
                        "total": 3955
                    }]
                }]
            }],
            "materials": [{
                "id": 1,
                "qt": 0.4,
                "name": "грунтовка глубокопроникающая",
                "unit": "л",
                "price": 2214,
                "total": 885.6,
                "supplier_materials": [{
                    "supplier_id": 3,
                    "supplier_name": "Интербудсервис",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 1,
                        "material_id": 1,
                        "supplier_material_id": 205,
                        "qt": 1,
                        "price": 21350,
                        "total": 21350,
                        "name": "Ceresit CT 17, грунтовка глубокопроникающая, 10 л",
                        "url": "https://knauf.kiev.ua/gruntovka/ceresit-ct-17-10-l",
                        "unit": "шт"
                    }]
                }, {
                    "supplier_id": 4,
                    "supplier_name": "Новая Линия",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 1,
                        "material_id": 45,
                        "supplier_material_id": 5,
                        "qt": 1,
                        "price": 5334,
                        "total": 5334,
                        "name": "Грунтовка Момент глубокого проникновения 2 л",
                        "url": "https://www.nl.ua/ru/otdelochnye_materialy/smesi/gruntovka/gruntovka_moment_2_l_glubokogo_proniknoveniya.html",
                        "unit": "шт"
                    }]
                }]
            }, {
                "id": 3,
                "qt": 1.1,
                "name": "фасадная сетка",
                "unit": "м2",
                "price": 2160,
                "total": 2376,
                "supplier_materials": []
            }, {
                "id": 11,
                "qt": 0.08,
                "name": "акриловая краска",
                "unit": "л",
                "price": 1985.7142857142858,
                "total": 158.86,
                "supplier_materials": []
            }, {
                "id": 6,
                "qt": 4,
                "name": "уголок алюминиевый перфорированный",
                "unit": "м",
                "price": 492,
                "total": 1968,
                "supplier_materials": [{
                    "supplier_id": 3,
                    "supplier_name": "Интербудсервис",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 6,
                        "material_id": 6,
                        "supplier_material_id": 202,
                        "qt": 1,
                        "price": 1570,
                        "total": 1570,
                        "name": "Уголок алюминиевый перфорированный 3 м",
                        "url": "https://knauf.kiev.ua/mayaki-ugolki/ugolok-alyuminievyy-perforirovannyy-3m",
                        "unit": "шт"
                    }, {
                        "estimate_id": 0,
                        "material_group_id": 6,
                        "material_id": 6,
                        "supplier_material_id": 201,
                        "qt": 1,
                        "price": 1330,
                        "total": 1330,
                        "name": "Уголок алюминиевый перфорированный 2,5 м",
                        "url": "https://knauf.kiev.ua/mayaki-ugolki/ugolok-alyuminievyy-perforirovannyy-25m",
                        "unit": "шт"
                    }]
                }]
            }, {
                "id": 2,
                "qt": 8.5,
                "name": "штукатурка гипсовая универсальная",
                "unit": "кг",
                "price": 511.3333333333333,
                "total": 4346.33,
                "supplier_materials": [{
                    "supplier_id": 2,
                    "supplier_name": "27.ua",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 2,
                        "material_id": 2,
                        "supplier_material_id": 206,
                        "qt": 1,
                        "price": 13940,
                        "total": 13940,
                        "name": "Штукатурка Knauf Rotband 25 кг",
                        "url": "https://epicentrk.ua/ua/shop/shtukaturka-rotband-25kg.html",
                        "unit": "меш"
                    }]
                }, {
                    "supplier_id": 3,
                    "supplier_name": "Интербудсервис",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 2,
                        "material_id": 2,
                        "supplier_material_id": 195,
                        "qt": 1,
                        "price": 15380,
                        "total": 15380,
                        "name": "Кнауф Ротбанд, штукатурка гипсовая 5-50 мм, 30 кг",
                        "url": "https://knauf.kiev.ua/shpaklevka-shtukaturka/v-meshkakh/knauf-rotband-30-kg",
                        "unit": "меш"
                    }]
                }]
            }, {
                "id": 13,
                "qt": 1,
                "name": "плитка керамическая для стен",
                "unit": "м2",
                "price": 14869.999999999998,
                "total": 14870,
                "supplier_materials": []
            }, {
                "id": 23,
                "qt": 3,
                "name": "клей для керамической плитки",
                "unit": "кг",
                "price": 469.20000000000005,
                "total": 1407.6,
                "supplier_materials": []
            }, {
                "id": 14,
                "qt": 0.3,
                "name": "плиточная затирка (фуга)",
                "unit": "кг",
                "price": 13183.333333333334,
                "total": 3955,
                "supplier_materials": []
            }],
            "supplier_materials": [{
                "supplier_id": 2,
                "supplier_name": "27.ua",
                "materials": [{
                    "estimate_id": 0,
                    "material_group_id": 2,
                    "material_id": 2,
                    "supplier_material_id": 206,
                    "qt": 1,
                    "price": 13940,
                    "total": 13940,
                    "name": "Штукатурка Knauf Rotband 25 кг",
                    "url": "https://epicentrk.ua/ua/shop/shtukaturka-rotband-25kg.html",
                    "unit": "меш"
                }]
            }, {
                "supplier_id": 3,
                "supplier_name": "Интербудсервис",
                "materials": [{
                    "estimate_id": 0,
                    "material_group_id": 1,
                    "material_id": 1,
                    "supplier_material_id": 205,
                    "qt": 1,
                    "price": 21350,
                    "total": 21350,
                    "name": "Ceresit CT 17, грунтовка глубокопроникающая, 10 л",
                    "url": "https://knauf.kiev.ua/gruntovka/ceresit-ct-17-10-l",
                    "unit": "шт"
                }, {
                    "estimate_id": 0,
                    "material_group_id": 6,
                    "material_id": 6,
                    "supplier_material_id": 202,
                    "qt": 1,
                    "price": 1570,
                    "total": 1570,
                    "name": "Уголок алюминиевый перфорированный 3 м",
                    "url": "https://knauf.kiev.ua/mayaki-ugolki/ugolok-alyuminievyy-perforirovannyy-3m",
                    "unit": "шт"
                }, {
                    "estimate_id": 0,
                    "material_group_id": 6,
                    "material_id": 6,
                    "supplier_material_id": 201,
                    "qt": 1,
                    "price": 1330,
                    "total": 1330,
                    "name": "Уголок алюминиевый перфорированный 2,5 м",
                    "url": "https://knauf.kiev.ua/mayaki-ugolki/ugolok-alyuminievyy-perforirovannyy-25m",
                    "unit": "шт"
                }, {
                    "estimate_id": 0,
                    "material_group_id": 2,
                    "material_id": 2,
                    "supplier_material_id": 195,
                    "qt": 1,
                    "price": 15380,
                    "total": 15380,
                    "name": "Кнауф Ротбанд, штукатурка гипсовая 5-50 мм, 30 кг",
                    "url": "https://knauf.kiev.ua/shpaklevka-shtukaturka/v-meshkakh/knauf-rotband-30-kg",
                    "unit": "меш"
                }]
            }, {
                "supplier_id": 4,
                "supplier_name": "Новая Линия",
                "materials": [{
                    "estimate_id": 0,
                    "material_group_id": 1,
                    "material_id": 45,
                    "supplier_material_id": 5,
                    "qt": 1,
                    "price": 5334,
                    "total": 5334,
                    "name": "Грунтовка Момент глубокого проникновения 2 л",
                    "url": "https://www.nl.ua/ru/otdelochnye_materialy/smesi/gruntovka/gruntovka_moment_2_l_glubokogo_proniknoveniya.html",
                    "unit": "шт"
                }]
            }]
        },
        "ceiling": {
            "route": [{
                "id": 9,
                "category_id": 2,
                "code_in": "CEIL_R_CURV",
                "code_out": "CEIL_R_NAKE",
                "name": "Подготовка потолка к черновой отделке",
                "cost_items": [{
                    "id": 18,
                    "name": "демонтаж штукатурки",
                    "qt": 1,
                    "price": 4000,
                    "unit": "м2",
                    "total": 4000,
                    "materials": []
                }]
            }, {
                "id": 13,
                "category_id": 2,
                "code_in": "CEIL_R_NAKE",
                "code_out": "CEIL_R_DRWL",
                "name": "Устройство одноуровневого потолка из гипсокартона",
                "cost_items": [{
                    "id": 27,
                    "name": "установка потолка из гипсокартона",
                    "qt": 1,
                    "price": 16000,
                    "unit": "м2",
                    "total": 16000,
                    "materials": [{
                        "material_group_id": 17,
                        "qt": 1.1,
                        "name": "гипсокартон стеновой",
                        "unit": "м2",
                        "price": 3725.000000000001,
                        "total": 4097.5
                    }, {
                        "material_group_id": 18,
                        "qt": 2.9,
                        "name": "профиль потолочный CD",
                        "unit": "м",
                        "price": 1256.6666666666667,
                        "total": 3644.33
                    }, {
                        "material_group_id": 19,
                        "qt": 4,
                        "name": "профиль направляющий UD",
                        "unit": "м",
                        "price": 790,
                        "total": 3160
                    }, {
                        "material_group_id": 20,
                        "qt": 0.2,
                        "name": "удлинитель профилей",
                        "unit": "м",
                        "price": 3883.3333333333335,
                        "total": 776.67
                    }]
                }]
            }, {
                "id": 14,
                "category_id": 2,
                "code_in": "CEIL_R_DRWL",
                "code_out": "CEIL_R_DRPU",
                "name": "Подготовка гипсокартона под чистовую отделку",
                "cost_items": [{
                    "id": 28,
                    "name": "грунтовка гипсокартона",
                    "qt": 1,
                    "price": 1800,
                    "unit": "м2",
                    "total": 1800,
                    "materials": [{
                        "material_group_id": 1,
                        "qt": 0.15,
                        "name": "грунтовка глубокопроникающая",
                        "unit": "л",
                        "price": 2214,
                        "total": 332.1
                    }]
                }, {
                    "id": 29,
                    "name": "шпаклевка под стеклохолст",
                    "qt": 1,
                    "price": 6000,
                    "unit": "м2",
                    "total": 6000,
                    "materials": [{
                        "material_group_id": 5,
                        "qt": 4.5,
                        "name": "финишная шпаклевка",
                        "unit": "кг",
                        "price": 811.5999999999999,
                        "total": 3652.2
                    }]
                }]
            }, {
                "id": 17,
                "category_id": 2,
                "code_in": "CEIL_R_DRPU",
                "code_out": "CEIL_F_DRPA",
                "name": "Покраска потолка из гипсокартона",
                "cost_items": [{
                    "id": 32,
                    "name": "грунтовка перед покраской",
                    "qt": 1,
                    "price": 1800,
                    "unit": "м2",
                    "total": 1800,
                    "materials": [{
                        "material_group_id": 1,
                        "qt": 0.15,
                        "name": "грунтовка глубокопроникающая",
                        "unit": "л",
                        "price": 2214,
                        "total": 332.1
                    }]
                }, {
                    "id": 33,
                    "name": "покраска",
                    "qt": 1,
                    "price": 7000,
                    "unit": "м2",
                    "total": 7000,
                    "materials": [{
                        "material_group_id": 11,
                        "qt": 0.08,
                        "name": "акриловая краска",
                        "unit": "л",
                        "price": 1985.7142857142858,
                        "total": 158.86
                    }]
                }]
            }],
            "materials": [{
                "id": 17,
                "qt": 1.1,
                "name": "гипсокартон стеновой",
                "unit": "м2",
                "price": 3725.000000000001,
                "total": 4097.5,
                "supplier_materials": []
            }, {
                "id": 18,
                "qt": 2.9,
                "name": "профиль потолочный CD",
                "unit": "м",
                "price": 1256.6666666666667,
                "total": 3644.33,
                "supplier_materials": [{
                    "supplier_id": 3,
                    "supplier_name": "Интербудсервис",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 18,
                        "material_id": 17,
                        "supplier_material_id": 211,
                        "qt": 1,
                        "price": 10270,
                        "total": 10270,
                        "name": "Кнауф Гипсокартон потолочный 2.5 м",
                        "url": "https://knauf.kiev.ua/gipsokarton/potolochnyy-knauf-2500mm",
                        "unit": "шт"
                    }, {
                        "estimate_id": 0,
                        "material_group_id": 18,
                        "material_id": 17,
                        "supplier_material_id": 210,
                        "qt": 1,
                        "price": 8250,
                        "total": 8250,
                        "name": "Кнауф Гипсокартон потолочный 2.0 м",
                        "url": "https://knauf.kiev.ua/gipsokarton/potolochnyy-knauf-2000mm",
                        "unit": "шт"
                    }]
                }]
            }, {
                "id": 19,
                "qt": 4,
                "name": "профиль направляющий UD",
                "unit": "м",
                "price": 790,
                "total": 3160,
                "supplier_materials": [{
                    "supplier_id": 3,
                    "supplier_name": "Интербудсервис",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 19,
                        "material_id": 18,
                        "supplier_material_id": 234,
                        "qt": 2,
                        "price": 3770,
                        "total": 7540,
                        "name": "Профиль CD-60, 3 м",
                        "url": "https://knauf.kiev.ua/profil-cd-ud-cw-uw/cd-60-3m",
                        "unit": "шт"
                    }]
                }]
            }, {
                "id": 20,
                "qt": 0.2,
                "name": "удлинитель профилей",
                "unit": "м",
                "price": 3883.3333333333335,
                "total": 776.67,
                "supplier_materials": [{
                    "supplier_id": 3,
                    "supplier_name": "Интербудсервис",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 20,
                        "material_id": 19,
                        "supplier_material_id": 236,
                        "qt": 1,
                        "price": 2370,
                        "total": 2370,
                        "name": "Профиль UD-27, 3 м",
                        "url": "https://knauf.kiev.ua/profil-cd-ud-cw-uw/ud27-3m",
                        "unit": "шт"
                    }]
                }]
            }, {
                "id": 1,
                "qt": 0.3,
                "name": "грунтовка глубокопроникающая",
                "unit": "л",
                "price": 2214,
                "total": 664.1999999999999,
                "supplier_materials": [{
                    "supplier_id": 3,
                    "supplier_name": "Интербудсервис",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 1,
                        "material_id": 1,
                        "supplier_material_id": 205,
                        "qt": 1,
                        "price": 21350,
                        "total": 21350,
                        "name": "Ceresit CT 17, грунтовка глубокопроникающая, 10 л",
                        "url": "https://knauf.kiev.ua/gruntovka/ceresit-ct-17-10-l",
                        "unit": "шт"
                    }]
                }, {
                    "supplier_id": 4,
                    "supplier_name": "Новая Линия",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 1,
                        "material_id": 45,
                        "supplier_material_id": 5,
                        "qt": 1,
                        "price": 5334,
                        "total": 5334,
                        "name": "Грунтовка Момент глубокого проникновения 2 л",
                        "url": "https://www.nl.ua/ru/otdelochnye_materialy/smesi/gruntovka/gruntovka_moment_2_l_glubokogo_proniknoveniya.html",
                        "unit": "шт"
                    }]
                }]
            }, {
                "id": 5,
                "qt": 4.5,
                "name": "финишная шпаклевка",
                "unit": "кг",
                "price": 811.5999999999999,
                "total": 3652.2,
                "supplier_materials": [{
                    "supplier_id": 2,
                    "supplier_name": "27.ua",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 5,
                        "material_id": 5,
                        "supplier_material_id": 254,
                        "qt": 1,
                        "price": 5900,
                        "total": 5900,
                        "name": "Шпаклівка Knauf MULTI-FINISH 5 кг",
                        "url": "https://epicentrk.ua/ua/shop/shpaklyevka-multi-finish-5kg.html",
                        "unit": "меш"
                    }]
                }]
            }, {
                "id": 11,
                "qt": 0.08,
                "name": "акриловая краска",
                "unit": "л",
                "price": 1985.7142857142858,
                "total": 158.86,
                "supplier_materials": []
            }],
            "supplier_materials": [{
                "supplier_id": 2,
                "supplier_name": "27.ua",
                "materials": [{
                    "estimate_id": 0,
                    "material_group_id": 5,
                    "material_id": 5,
                    "supplier_material_id": 254,
                    "qt": 1,
                    "price": 5900,
                    "total": 5900,
                    "name": "Шпаклівка Knauf MULTI-FINISH 5 кг",
                    "url": "https://epicentrk.ua/ua/shop/shpaklyevka-multi-finish-5kg.html",
                    "unit": "меш"
                }]
            }, {
                "supplier_id": 3,
                "supplier_name": "Интербудсервис",
                "materials": [{
                    "estimate_id": 0,
                    "material_group_id": 18,
                    "material_id": 17,
                    "supplier_material_id": 211,
                    "qt": 1,
                    "price": 10270,
                    "total": 10270,
                    "name": "Кнауф Гипсокартон потолочный 2.5 м",
                    "url": "https://knauf.kiev.ua/gipsokarton/potolochnyy-knauf-2500mm",
                    "unit": "шт"
                }, {
                    "estimate_id": 0,
                    "material_group_id": 18,
                    "material_id": 17,
                    "supplier_material_id": 210,
                    "qt": 1,
                    "price": 8250,
                    "total": 8250,
                    "name": "Кнауф Гипсокартон потолочный 2.0 м",
                    "url": "https://knauf.kiev.ua/gipsokarton/potolochnyy-knauf-2000mm",
                    "unit": "шт"
                }, {
                    "estimate_id": 0,
                    "material_group_id": 19,
                    "material_id": 18,
                    "supplier_material_id": 234,
                    "qt": 2,
                    "price": 3770,
                    "total": 7540,
                    "name": "Профиль CD-60, 3 м",
                    "url": "https://knauf.kiev.ua/profil-cd-ud-cw-uw/cd-60-3m",
                    "unit": "шт"
                }, {
                    "estimate_id": 0,
                    "material_group_id": 20,
                    "material_id": 19,
                    "supplier_material_id": 236,
                    "qt": 1,
                    "price": 2370,
                    "total": 2370,
                    "name": "Профиль UD-27, 3 м",
                    "url": "https://knauf.kiev.ua/profil-cd-ud-cw-uw/ud27-3m",
                    "unit": "шт"
                }, {
                    "estimate_id": 0,
                    "material_group_id": 1,
                    "material_id": 1,
                    "supplier_material_id": 205,
                    "qt": 1,
                    "price": 21350,
                    "total": 21350,
                    "name": "Ceresit CT 17, грунтовка глубокопроникающая, 10 л",
                    "url": "https://knauf.kiev.ua/gruntovka/ceresit-ct-17-10-l",
                    "unit": "шт"
                }]
            }, {
                "supplier_id": 4,
                "supplier_name": "Новая Линия",
                "materials": [{
                    "estimate_id": 0,
                    "material_group_id": 1,
                    "material_id": 45,
                    "supplier_material_id": 5,
                    "qt": 1,
                    "price": 5334,
                    "total": 5334,
                    "name": "Грунтовка Момент глубокого проникновения 2 л",
                    "url": "https://www.nl.ua/ru/otdelochnye_materialy/smesi/gruntovka/gruntovka_moment_2_l_glubokogo_proniknoveniya.html",
                    "unit": "шт"
                }]
            }]
        },
        "floor": {
            "route": [{
                "id": 20,
                "category_id": 3,
                "code_in": "FLOOR_R_PARQ",
                "code_out": "FLOOR_R_SCRD",
                "name": "Демонтаж старого паркета",
                "cost_items": [{
                    "id": 36,
                    "name": "демонтаж паркета",
                    "qt": 1,
                    "price": 5000,
                    "unit": "м2",
                    "total": 5000,
                    "materials": []
                }]
            }, {
                "id": 21,
                "category_id": 3,
                "code_in": "FLOOR_R_SCRD",
                "code_out": "FLOOR_F_SCRD",
                "name": "Выравнивание мокрой чистовой стяжкой",
                "cost_items": [{
                    "id": 37,
                    "name": "обеспыливание поверхности",
                    "qt": 1,
                    "price": 1000,
                    "unit": "м2",
                    "total": 1000,
                    "materials": []
                }, {
                    "id": 38,
                    "name": "гидроизоляция рулонным полиэтиленом",
                    "qt": 1,
                    "price": 2500,
                    "unit": "м2",
                    "total": 2500,
                    "materials": [{
                        "material_group_id": 24,
                        "qt": 1.2,
                        "name": "пленка полиэтиленовая",
                        "unit": "м2",
                        "price": 28.439999999999998,
                        "total": 34.13
                    }]
                }, {
                    "id": 39,
                    "name": "укладка утеплителя",
                    "qt": 1,
                    "price": 3000,
                    "unit": "м2",
                    "total": 3000,
                    "materials": [{
                        "material_group_id": 25,
                        "qt": 1,
                        "name": "экструдированный пенополистерол 20мм",
                        "unit": "м2",
                        "price": 4443.499101258238,
                        "total": 4443.5
                    }]
                }, {
                    "id": 40,
                    "name": "укладка демпферной ленты",
                    "qt": 1,
                    "price": 1500,
                    "unit": "м2",
                    "total": 1500,
                    "materials": [{
                        "material_group_id": 26,
                        "qt": 4,
                        "name": "демпферная лента",
                        "unit": "мп",
                        "price": 384,
                        "total": 1536
                    }]
                }, {
                    "id": 41,
                    "name": "укладка армирующей сетки",
                    "qt": 1,
                    "price": 3000,
                    "unit": "м2",
                    "total": 3000,
                    "materials": [{
                        "material_group_id": 27,
                        "qt": 1.3,
                        "name": "армирующая сварная сетка 25 100х100 ",
                        "unit": "м2",
                        "price": 3420.0000000000005,
                        "total": 4446
                    }]
                }, {
                    "id": 42,
                    "name": "заливка чистовой стяжки 6 мм",
                    "qt": 1,
                    "price": 5000,
                    "unit": "м2",
                    "total": 5000,
                    "materials": [{
                        "material_group_id": 28,
                        "qt": 1.6,
                        "name": "маяк для мокрой штукатурки",
                        "unit": "мп",
                        "price": 463.99999999999994,
                        "total": 742.4
                    }, {
                        "material_group_id": 29,
                        "qt": 100,
                        "name": "песок",
                        "unit": "кг",
                        "price": 16,
                        "total": 1600
                    }, {
                        "material_group_id": 30,
                        "qt": 25,
                        "name": "цемент",
                        "unit": "кг",
                        "price": 334,
                        "total": 8350
                    }, {
                        "material_group_id": 31,
                        "qt": 0.04,
                        "name": "фиброволокно",
                        "unit": "кг",
                        "price": 26464.999999999996,
                        "total": 1058.6
                    }, {
                        "material_group_id": 32,
                        "qt": 0.13,
                        "name": "пластификатор для бетона",
                        "unit": "л",
                        "price": 2400,
                        "total": 312
                    }]
                }]
            }, {
                "id": 26,
                "category_id": 3,
                "code_in": "FLOOR_F_SCRD",
                "code_out": "FLOOR_F_PARQ",
                "name": "Монтаж паркета на чистовую стяжку",
                "cost_items": [{
                    "id": 54,
                    "name": "Удаление мусора,смесей, красок, обеспыливание основания",
                    "qt": 1,
                    "price": 1000,
                    "unit": "м2",
                    "total": 1000,
                    "materials": []
                }, {
                    "id": 55,
                    "name": "Обычная грунтовка",
                    "qt": 1,
                    "price": 1000,
                    "unit": "м2",
                    "total": 1000,
                    "materials": [{
                        "material_group_id": 1,
                        "qt": 0.2,
                        "name": "грунтовка глубокопроникающая",
                        "unit": "л",
                        "price": 2214,
                        "total": 442.8
                    }]
                }, {
                    "id": 56,
                    "name": "Укладка паркета на клей (плавающий метод)",
                    "qt": 1,
                    "price": 10000,
                    "unit": "м2",
                    "total": 10000,
                    "materials": [{
                        "material_group_id": 41,
                        "qt": 1,
                        "name": "паркетная доска",
                        "unit": "м2",
                        "price": 152765.95744680852,
                        "total": 152765.96
                    }, {
                        "material_group_id": 42,
                        "qt": 0.8,
                        "name": "паркетный клей",
                        "unit": "кг",
                        "price": 8076.923076923077,
                        "total": 6461.54
                    }]
                }, {
                    "id": 57,
                    "name": "Полировка паркета маслом",
                    "qt": 1,
                    "price": 5000,
                    "unit": "м2",
                    "total": 5000,
                    "materials": [{
                        "material_group_id": 43,
                        "qt": 0.06,
                        "name": "паркетное масло",
                        "unit": "кг",
                        "price": 87480,
                        "total": 5248.8
                    }]
                }, {
                    "id": 58,
                    "name": "Монтаж деревянного плинтуса до 60 мм",
                    "qt": 1,
                    "price": 7000,
                    "unit": "м2",
                    "total": 7000,
                    "materials": [{
                        "material_group_id": 44,
                        "qt": 4,
                        "name": "плинтус деревянный ",
                        "unit": "мп",
                        "price": 5000,
                        "total": 20000
                    }]
                }]
            }],
            "materials": [{
                "id": 24,
                "qt": 1.2,
                "name": "пленка полиэтиленовая",
                "unit": "м2",
                "price": 28.439999999999998,
                "total": 34.13,
                "supplier_materials": []
            }, {
                "id": 25,
                "qt": 1,
                "name": "экструдированный пенополистерол 20мм",
                "unit": "м2",
                "price": 4443.499101258238,
                "total": 4443.5,
                "supplier_materials": []
            }, {
                "id": 26,
                "qt": 4,
                "name": "демпферная лента",
                "unit": "мп",
                "price": 384,
                "total": 1536,
                "supplier_materials": []
            }, {
                "id": 27,
                "qt": 1.3,
                "name": "армирующая сварная сетка 25 100х100 ",
                "unit": "м2",
                "price": 3420.0000000000005,
                "total": 4446,
                "supplier_materials": []
            }, {
                "id": 28,
                "qt": 1.6,
                "name": "маяк для мокрой штукатурки",
                "unit": "мп",
                "price": 463.99999999999994,
                "total": 742.4,
                "supplier_materials": []
            }, {
                "id": 29,
                "qt": 100,
                "name": "песок",
                "unit": "кг",
                "price": 16,
                "total": 1600,
                "supplier_materials": []
            }, {
                "id": 30,
                "qt": 25,
                "name": "цемент",
                "unit": "кг",
                "price": 334,
                "total": 8350,
                "supplier_materials": []
            }, {
                "id": 31,
                "qt": 0.04,
                "name": "фиброволокно",
                "unit": "кг",
                "price": 26464.999999999996,
                "total": 1058.6,
                "supplier_materials": []
            }, {
                "id": 32,
                "qt": 0.13,
                "name": "пластификатор для бетона",
                "unit": "л",
                "price": 2400,
                "total": 312,
                "supplier_materials": []
            }, {
                "id": 1,
                "qt": 0.2,
                "name": "грунтовка глубокопроникающая",
                "unit": "л",
                "price": 2214,
                "total": 442.8,
                "supplier_materials": [{
                    "supplier_id": 3,
                    "supplier_name": "Интербудсервис",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 1,
                        "material_id": 1,
                        "supplier_material_id": 205,
                        "qt": 1,
                        "price": 21350,
                        "total": 21350,
                        "name": "Ceresit CT 17, грунтовка глубокопроникающая, 10 л",
                        "url": "https://knauf.kiev.ua/gruntovka/ceresit-ct-17-10-l",
                        "unit": "шт"
                    }]
                }, {
                    "supplier_id": 4,
                    "supplier_name": "Новая Линия",
                    "materials": [{
                        "estimate_id": 0,
                        "material_group_id": 1,
                        "material_id": 45,
                        "supplier_material_id": 5,
                        "qt": 1,
                        "price": 5334,
                        "total": 5334,
                        "name": "Грунтовка Момент глубокого проникновения 2 л",
                        "url": "https://www.nl.ua/ru/otdelochnye_materialy/smesi/gruntovka/gruntovka_moment_2_l_glubokogo_proniknoveniya.html",
                        "unit": "шт"
                    }]
                }]
            }, {
                "id": 41,
                "qt": 1,
                "name": "паркетная доска",
                "unit": "м2",
                "price": 152765.95744680852,
                "total": 152765.96,
                "supplier_materials": []
            }, {
                "id": 42,
                "qt": 0.8,
                "name": "паркетный клей",
                "unit": "кг",
                "price": 8076.923076923077,
                "total": 6461.54,
                "supplier_materials": []
            }, {
                "id": 43,
                "qt": 0.06,
                "name": "паркетное масло",
                "unit": "кг",
                "price": 87480,
                "total": 5248.8,
                "supplier_materials": []
            }, {
                "id": 44,
                "qt": 4,
                "name": "плинтус деревянный ",
                "unit": "мп",
                "price": 5000,
                "total": 20000,
                "supplier_materials": []
            }],
            "supplier_materials": [{
                "supplier_id": 3,
                "supplier_name": "Интербудсервис",
                "materials": [{
                    "estimate_id": 0,
                    "material_group_id": 1,
                    "material_id": 1,
                    "supplier_material_id": 205,
                    "qt": 1,
                    "price": 21350,
                    "total": 21350,
                    "name": "Ceresit CT 17, грунтовка глубокопроникающая, 10 л",
                    "url": "https://knauf.kiev.ua/gruntovka/ceresit-ct-17-10-l",
                    "unit": "шт"
                }]
            }, {
                "supplier_id": 4,
                "supplier_name": "Новая Линия",
                "materials": [{
                    "estimate_id": 0,
                    "material_group_id": 1,
                    "material_id": 45,
                    "supplier_material_id": 5,
                    "qt": 1,
                    "price": 5334,
                    "total": 5334,
                    "name": "Грунтовка Момент глубокого проникновения 2 л",
                    "url": "https://www.nl.ua/ru/otdelochnye_materialy/smesi/gruntovka/gruntovka_moment_2_l_glubokogo_proniknoveniya.html",
                    "unit": "шт"
                }]
            }]
        },
        "basic": {
            "squares": {
                "1": 1,
                "2": 1,
                "3": 1
            },
            "running": 2.4,
            "room_length": 1,
            "room_width": 1,
            "room_height": 1,
            "doors_qty": 1,
            "windows_qty": 1,
            "window_height": 1.4,
            "window_width": 1.2,
            "perimeter": 4
        },
        "id": 2088
    }
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIAL_FLOOR_PARAMS: {
            return {
                ...state,
                floorInitialData: [...state.floorInitialData, ...action.param]
            }
        }

        case SET_REQUIRED_FLOOR_PARAMS: {
            return {
                ...state,
                floorRequiredData: [...state.floorRequiredData, ...action.param]
            }
        }

        case SET_DATA_FOR_CALCULATION: {
            return {
                ...state,
                calcData: action.payload
            }
        }
        case DATA_RECEIPT_SUCCSESS: {
            return {
                ...state,
                calcDataRec: action.flag
            }
        }
        default:
            return state;
    }
}

export const setInitialParam = (param) => ({
    type: SET_INITIAL_FLOOR_PARAMS,
    param
});
export const setDataForCalc = (payload) => ({
    type: SET_DATA_FOR_CALCULATION,
    payload
});
export const setRecFlag = (flag) => ({
    type: DATA_RECEIPT_SUCCSESS,
    flag
});

export const getInitialParams = (param) => async (dispatch) => {
    try {
        let response = await mastercalcAPI.getInitialParams(param)
        dispatch(setInitialParam(response.data))
    } catch (error) {
        dispatch(setInitialParam(
            [{
                    category_id: 3,
                    id: "FLOOR_R_SCRD",
                    value: "Черновая стяжка"
                },
                {
                    category_id: 3,
                    id: "FLOOR_R_TILE",
                    value: "Старая плитка"
                },
                {
                    category_id: 3,
                    id: "FLOOR_R_PARQ",
                    value: "Старый паркет"
                },
                {
                    category_id: 3,
                    id: "FLOOR_R_LINO",
                    value: "Старый линолеум"
                }
            ]))
    }

};

export const getEstimate = (payload) => async (dispatch) => {
    let response = await mastercalcAPI.getEstimate(payload)
    if (response.data.resultCode === 0) {
        dispatch(setDataForCalc(payload))
        dispatch(setRecFlag(true))
    }
}

export default appReducer;