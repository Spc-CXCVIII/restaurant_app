<template>
  <div id="map">
    <GMap
      ref="gMap"
      :center="{ lat: 13.736717, lng: 100.523186 }"
      :zoom="10"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative',
      }"
    >
      <GMapMarker
        v-for="data in restaurant_list_props"
        :position="{ lat: data.geometry.location.lat, lng: data.geometry.location.lng }"

      >
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <b>{{ data.name }}</b>
          <br />
          <br />
          <code>
            Lat: {{ data.geometry.location.lat }},
            <br />
            Lng: {{ data.geometry.location.lng }}
          </code>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
  </div>
</template>

<script>
  import restaurant from '../../scripts/restaurant';
  
  export default {
    props: {
      restaurant_list_props: {
        type: Object,
        default: () => [],
      },
    },
    mixins: [restaurant],
    name: 'Map',
    data() {
      return {
        restaurant_data: {},
        currentLocation: {},
        locationsVisibleOnMap: "",
        results: [
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8302636,
                    "lng": 100.5347839
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8316041302915,
                        "lng": 100.5361205802915
                    },
                    "southwest": {
                        "lat": 13.8289061697085,
                        "lng": 100.5334226197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "ร้านอาหาร ศิริชัยไก่ย่าง สาขาบางซื่อ",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111385036100555840132\">ร้านอาหาร ศิริชัยไก่ย่าง สาขาบางซื่อ</a>"
                    ],
                    "photo_reference": "AfLeUgO8ABsvxSc2Lrcs303u4pFSrX9VCWgDblH0RmEH5u4CrhHAtowact1vykhPe11oGsoDJz7bTB3woRP6uONiRCC-O3sfObvpOOtCVLWhLuOsz9BjV00RxHP6WRKwUBpNdqTRmpvXnSmmKMrV0_aF0KrX4IGMm2e2ivR4u4tWkkA-Svad",
                    "width": 4032
                }
            ],
            "place_id": "ChIJ1X_ASIGc4jARfsa8a3SI9wA",
            "plus_code": {
                "compound_code": "RGJM+4W Bangkok, Thailand",
                "global_code": "7P52RGJM+4W"
            },
            "price_level": 2,
            "rating": 4.4,
            "reference": "ChIJ1X_ASIGc4jARfsa8a3SI9wA",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 112,
            "vicinity": "59 Soi Ratchadaphisek 37"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8268187,
                    "lng": 100.528235
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8286121802915,
                        "lng": 100.5295399802915
                    },
                    "southwest": {
                        "lat": 13.8259142197085,
                        "lng": 100.5268420197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "S&P Big C Wong Swang",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101553387130433890086\">Prin Pinmanee</a>"
                    ],
                    "photo_reference": "AfLeUgMtEuhhhDQfsWMCCDbDFU3dOtkB6HJRT98WkP5F41eIhB1UaplRSG-ay9VcfsWnpDjr_iLAGblrK8gWSap1XcVKhrEm5GZR5SV6ZkGEo-DtpVpRoZbVnY2IvDs0NcIeP1JyiAuK_VgyPYHnWEUgThBpLbUV8R3GPzjHAmy_Bq-a2WHb",
                    "width": 1920
                }
            ],
            "place_id": "ChIJHSCKfoOb4jAR7l9T5TquoBE",
            "plus_code": {
                "compound_code": "RGGH+P7 Bangkok, Thailand",
                "global_code": "7P52RGGH+P7"
            },
            "rating": 3.9,
            "reference": "ChIJHSCKfoOb4jAR7l9T5TquoBE",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "bakery",
                "point_of_interest",
                "food",
                "store",
                "establishment"
            ],
            "user_ratings_total": 16,
            "vicinity": "888/42 ชั้น 1 ถนนพิบูลสงคราม, ชั้น 1, บางซื่อ"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8290149,
                    "lng": 100.5293492
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8303709802915,
                        "lng": 100.5306913802915
                    },
                    "southwest": {
                        "lat": 13.8276730197085,
                        "lng": 100.5279934197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "อีสานเพลซ ร้านอาหาร",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJ99nJ1H-b4jAR8CXH2CLyqrg",
            "reference": "ChIJ99nJ1H-b4jAR8CXH2CLyqrg",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "vicinity": "949/1 รัชดาภิเษก, Khwaeng Bang Sue, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8212047,
                    "lng": 100.5315726
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8225510302915,
                        "lng": 100.5329105802915
                    },
                    "southwest": {
                        "lat": 13.8198530697085,
                        "lng": 100.5302126197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "ร้าน โมโมจิ",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJzbO6Sl6Z4jARCOsm5afb_eo",
            "plus_code": {
                "compound_code": "RGCJ+FJ Bangkok, Thailand",
                "global_code": "7P52RGCJ+FJ"
            },
            "reference": "ChIJzbO6Sl6Z4jARCOsm5afb_eo",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "vicinity": "225/54, 56 ซอยกรุงเทพนนท์, Khwaeng Wong Sawang, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.830124,
                    "lng": 100.5366414
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8315226802915,
                        "lng": 100.5378428802915
                    },
                    "southwest": {
                        "lat": 13.8288247197085,
                        "lng": 100.5351449197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Nittaya Grilled Chicken",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116679321195037010563\">Wasu klinkaew</a>"
                    ],
                    "photo_reference": "AfLeUgPPaa6oGbdaNTAK8gGxR2kmRVoWwzpb51Rw1E_bYGpKhCxEfd6hR7v6B1PFqGgs1LuFs9WRMjMW_v_W0DaLvcR_vnlr2Hl-97e3QPDkEgNdE7DcS0Be9ao8zmVlwocwdl7MRZpbxsyLGBZ1f6WwGKmSGmaInZsDjTUZPl-W7YIpV4Kg",
                    "width": 3024
                }
            ],
            "place_id": "ChIJPSq2lYac4jARoBvWBClXGgE",
            "plus_code": {
                "compound_code": "RGJP+2M Bangkok, Thailand",
                "global_code": "7P52RGJP+2M"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJPSq2lYac4jARoBvWBClXGgE",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 1571,
            "vicinity": "2259 Thanon Ratchadaphisek"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8247708,
                    "lng": 100.5375653
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8261138302915,
                        "lng": 100.5389560802915
                    },
                    "southwest": {
                        "lat": 13.8234158697085,
                        "lng": 100.5362581197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "เจริญชัยไก่ตอน",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106822491910409422714\">Wisit W.</a>"
                    ],
                    "photo_reference": "AfLeUgN8fOAEALvFgaptTGOSs1mmsnhxX774Rem2UzgrYfT6exxckV9rls-JwLf0sbPjL30v0ldIMBJ95StM5T6pmWzSeqb9wmZS8Fm6Gt-SRLVbaTcLil6wui3asKcloC6UjuOqZs7ALJvSdZKahS-RFezCa1lL_-9fW9G6NWfyXx8DF6uT",
                    "width": 4032
                }
            ],
            "place_id": "ChIJ5aXVun2c4jARtqy0HyQrJ3I",
            "plus_code": {
                "compound_code": "RGFQ+W2 Bangkok, Thailand",
                "global_code": "7P52RGFQ+W2"
            },
            "price_level": 1,
            "rating": 4.1,
            "reference": "ChIJ5aXVun2c4jARtqy0HyQrJ3I",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 1220,
            "vicinity": "816 Thanon Pracha Chuen, Khwaeng Wong Sawang, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8307766,
                    "lng": 100.5386816
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8320902302915,
                        "lng": 100.5400275302915
                    },
                    "southwest": {
                        "lat": 13.8293922697085,
                        "lng": 100.5373295697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "About Beef",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 315,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101403214614290945672\">About Beef</a>"
                    ],
                    "photo_reference": "AfLeUgPlYNefCg-dVpJTagJMptHZkbkyG5InYVK_xZC9Z0XcyH_K0yLeExbAG-9uDch9NMcWJ1xBHpDzS_-4ACpwZJEVsQa2vjGWDfDmEqeFJCUAod85CUtp5EC7tyQmh_Y93pFJVYk2OEtkImkfx6YdXbGaxocRe_mvbtWdM5u6B6T_h0FK",
                    "width": 815
                }
            ],
            "place_id": "ChIJ99nJ1H-b4jARcsfgL2wZdgw",
            "plus_code": {
                "compound_code": "RGJQ+8F Bangkok, Thailand",
                "global_code": "7P52RGJQ+8F"
            },
            "price_level": 2,
            "rating": 4.3,
            "reference": "ChIJ99nJ1H-b4jARcsfgL2wZdgw",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 708,
            "vicinity": "949/1 Thanon Ratchadaphisek, Khwaeng Bang Sue, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8189777,
                    "lng": 100.5360268
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8202816302915,
                        "lng": 100.5373832302915
                    },
                    "southwest": {
                        "lat": 13.8175836697085,
                        "lng": 100.5346852697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Come Home",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2304,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106759193758994069597\">Come Home Cafe ร้านอาหาร คำโฮม คาเฟ่</a>"
                    ],
                    "photo_reference": "AfLeUgN3Q8Q9xcOd6kokdWbuzjjRyEZBP8Xpk1wkbobkSE0dmLKrxbK6z1pTYYilC7juFOXbnKFXTILM6f59llJ1N1bSXRYUbikegvRbJdf8_pJwkkx5TBD_TUs1hsxZqWEhE3r77c0AulSnwDVbR7GoW-9x4tT_w3IfwH91V9cSU0wbqIVt",
                    "width": 4096
                }
            ],
            "place_id": "ChIJ5-YV6Xuc4jARXI2YW2JufKw",
            "plus_code": {
                "compound_code": "RG9P+HC Bangkok, Thailand",
                "global_code": "7P52RG9P+HC"
            },
            "rating": 4.2,
            "reference": "ChIJ5-YV6Xuc4jARXI2YW2JufKw",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "cafe",
                "health",
                "point_of_interest",
                "food",
                "store",
                "establishment"
            ],
            "user_ratings_total": 118,
            "vicinity": "4, คอนโดยูดีไลท์ 2 Shop, ปาก Soi Praha Chuen 19, Khwaeng Bang Sue, Khet Bang Sue"
        },
        {
            "business_status": "CLOSED_TEMPORARILY",
            "geometry": {
                "location": {
                    "lat": 13.8166304,
                    "lng": 100.5309249
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8179761802915,
                        "lng": 100.5322747802915
                    },
                    "southwest": {
                        "lat": 13.8152782197085,
                        "lng": 100.5295768197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "อิ่มจัง",
            "permanently_closed": true,
            "photos": [
                {
                    "height": 2160,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111627972371969754614\">pomtrue True</a>"
                    ],
                    "photo_reference": "AfLeUgMLHZaHi8lkQzCahnIOEnYDfhpbG4zrfUFZxSuKMj6AKqOXcZDNEAzyiZcM91o5KngHX6GYo-QK8RMXZGrCmxiv9pFOZVQNx0BjphaJ7pGA1-ekjXMxhoWNJ7H4GVjDSjp5X_WiszCl8FNCFehciovmps1eT0x-cCNcGjfIEhFG3zxz",
                    "width": 3840
                }
            ],
            "place_id": "ChIJXXN7aXic4jAR2MwW81KILdI",
            "plus_code": {
                "compound_code": "RG8J+M9 Bangkok, Thailand",
                "global_code": "7P52RG8J+M9"
            },
            "price_level": 2,
            "rating": 4.4,
            "reference": "ChIJXXN7aXic4jAR2MwW81KILdI",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 28,
            "vicinity": "126 ถนน กรุงเทพ - นนทบุรี, Khwaeng Bang Sue, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8371503,
                    "lng": 100.5369666
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8382710802915,
                        "lng": 100.5380914302915
                    },
                    "southwest": {
                        "lat": 13.8355731197085,
                        "lng": 100.5353934697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "ซาลาเปาคุณเหวิน (ด่านประชาชื่นขาเข้า)",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4064,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110066061321831301215\">Free Act</a>"
                    ],
                    "photo_reference": "AfLeUgNPqIroA4q9-49E1JTJfA5IC82TIQXai4QudqtsDpDoJ7n3zosgCsX-Tlzhf86ZSNvZPl3aKZ_MRL2ySg22g9zL8tQEJkZhM172lCLQe1IaoqY-DDkzm_jX_iyOZfSFGrqdzywao0EFEiAi5U9MxRnxR0Ov3EIf9hc0f29AYuRASWuR",
                    "width": 3048
                }
            ],
            "place_id": "ChIJb7IfM5uc4jARC-MH8HU3dOM",
            "plus_code": {
                "compound_code": "RGPP+VQ Bangkok, Thailand",
                "global_code": "7P52RGPP+VQ"
            },
            "rating": 5,
            "reference": "ChIJb7IfM5uc4jARC-MH8HU3dOM",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 2,
            "vicinity": "Soi Pracha Chuen 30, Khwaeng Wong Sawang, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8254006,
                    "lng": 100.515345
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8267156302915,
                        "lng": 100.5166566302915
                    },
                    "southwest": {
                        "lat": 13.8240176697085,
                        "lng": 100.5139586697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "GyuYoshi",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4160,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116745366067597444730\">patipon mangkangkhun</a>"
                    ],
                    "photo_reference": "AfLeUgM_bA-ES7z4IIBzS8ave5rEs7cyme-Hz56pTiOjFzyb2CbQz-Ro8nbR0hhHSGB42GcwuB9T6JT6Pi11rpwKmqle7ONobRe52o4zrENTJFBQtA16Hai9yim2cUMZpeykimpl4tvt2VGJ1p835a8JvMo9SCZFcbMCmQr2cqWOKg_rsVLk",
                    "width": 3120
                }
            ],
            "place_id": "ChIJT256n52b4jARSBj8Nwq8qS4",
            "plus_code": {
                "compound_code": "RGG8+54 Bangkok, Thailand",
                "global_code": "7P52RGG8+54"
            },
            "reference": "ChIJT256n52b4jARSBj8Nwq8qS4",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "vicinity": "296 Soi 8, Khwaeng Wong Sawang, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8318612,
                    "lng": 100.5387861
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8331197802915,
                        "lng": 100.5401542802915
                    },
                    "southwest": {
                        "lat": 13.8304218197085,
                        "lng": 100.5374563197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "S&P Kasemrad Prachachuen Hospital",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3120,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117104611444295725484\">ธวัชชัย อารีย์</a>"
                    ],
                    "photo_reference": "AfLeUgPKR8QebGl7z8Lv-OO4pvAiPM0puCzcKVrrnatinIxnp7p3Hu5MiIKybjszHKR7GYMLabgB2Bmb3BG2fONVtOKlgPby2ZHG7hQq37U2h8T3eQDko6h4zBI2Q4XXl02ItWLKgPny8H4PVLmnqzzyFNXZOlwAGcCdcudshJU1y2w03TY8",
                    "width": 4160
                }
            ],
            "place_id": "ChIJL_TY1oWc4jARadaTGJ0_yRM",
            "plus_code": {
                "compound_code": "RGJQ+PG Bangkok, Thailand",
                "global_code": "7P52RGJQ+PG"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJL_TY1oWc4jARadaTGJ0_yRM",
            "scope": "GOOGLE",
            "types": [
                "bakery",
                "doctor",
                "restaurant",
                "health",
                "point_of_interest",
                "food",
                "store",
                "establishment"
            ],
            "user_ratings_total": 1614,
            "vicinity": "950 ชั้น 1 ถ.ประชาชื่น แขวงบางซื่อ, โรงพยาบาลเกษมราษฎร์ประชาชื่น Lobby ชั้น 1, บางซื่อ"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.836747,
                    "lng": 100.523254
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8380880302915,
                        "lng": 100.5246044302915
                    },
                    "southwest": {
                        "lat": 13.8353900697085,
                        "lng": 100.5219064697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "บจก. สยามคาร์ดอทคอม",
            "place_id": "ChIJDwaSWfKb4jAR_zQ3dagd820",
            "plus_code": {
                "compound_code": "RGPF+M8 Nonthaburi, Mueang Nonthaburi District, Nonthaburi, Thailand",
                "global_code": "7P52RGPF+M8"
            },
            "rating": 4.7,
            "reference": "ChIJDwaSWfKb4jAR_zQ3dagd820",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 3,
            "vicinity": "1562/3ถนนประชาราษฎร์ สาย 1, บางซื่อ, กรุงเทพมหานคร 10800"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8317952,
                    "lng": 100.5387918
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8330859802915,
                        "lng": 100.5401531302915
                    },
                    "southwest": {
                        "lat": 13.8303880197085,
                        "lng": 100.5374551697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Black Canyon รพ.เกษมราษฎร์ ประชาชื่น",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114969317421477508147\">Natouchphong Aisi</a>"
                    ],
                    "photo_reference": "AfLeUgPq94RqRpsKWHQiDRIeC1y9Ei46Y_KOFlt60QF_rsQvNnYi1YQYSruZyHu1mK8tF5YaIHylBHiFqOveUbviB0UXklKA2ZYqFFdtUmFi9kVFcuSQNUVGxnTSQYaMf-4EgwUbJ3m_PMLhy9pvhnKO3ZQC4JlGFqxk-KbEJOiwjtc2-Twy",
                    "width": 4608
                }
            ],
            "place_id": "ChIJ34xHw4Wc4jARVZk34_5vC94",
            "plus_code": {
                "compound_code": "RGJQ+PG Bangkok, Thailand",
                "global_code": "7P52RGJQ+PG"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJ34xHw4Wc4jARVZk34_5vC94",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "cafe",
                "point_of_interest",
                "food",
                "store",
                "establishment"
            ],
            "user_ratings_total": 142,
            "vicinity": "เลขที่ 950 Thanon Pracha Chuen"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.827828,
                    "lng": 100.5284016
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8292565802915,
                        "lng": 100.5296824302915
                    },
                    "southwest": {
                        "lat": 13.8265586197085,
                        "lng": 100.5269844697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Shabushi by Oishi Big C Wongsawang",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4608,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111239440725254232287\">Somboon Prakitcharoensuk</a>"
                    ],
                    "photo_reference": "AfLeUgOhw60BVnnmPtveNNw8KLe3jlbpcz27AcNLZwplLVxvFAVlKgTOR6NB5BcxUE4shbF8Ldav8p1bD0MKLM_dOvBlklfcenPSO54Xkk8r5lYnu3CqzcL2n307EtZmehFddBj4rwov9WaVtpTvizBTH6yDlCWVbF9MuNj6IW2hedN5kswL",
                    "width": 3456
                }
            ],
            "place_id": "ChIJRxRdV6Cb4jARdwvvh44gL8k",
            "plus_code": {
                "compound_code": "RGHH+49 Bangkok, Thailand",
                "global_code": "7P52RGHH+49"
            },
            "reference": "ChIJRxRdV6Cb4jARdwvvh44gL8k",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "vicinity": "888 Thanon Wong Sawang, Khwaeng Wong Sawang, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8278652,
                    "lng": 100.5286791
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8293339802915,
                        "lng": 100.5298940302915
                    },
                    "southwest": {
                        "lat": 13.8266360197085,
                        "lng": 100.5271960697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "KFC Wongsawang Center",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111239440725254232287\">Somboon Prakitcharoensuk</a>"
                    ],
                    "photo_reference": "AfLeUgPgQxiP3-Hd37mJ3dYtQ5cZyOoiLTGF0OT25EE5rEy6y5IJpXIJjJjgATP1i59xqQgUzKpF-QCYFINayZYz_sYdzCAiU43defy6jnMLCtCbP3pjUngVo--rj7dVtLTvG_2BMIzjbsmVERZ4_yWf9OMbaeLtYhLgEYS27tA1cutuxyml",
                    "width": 4608
                }
            ],
            "place_id": "ChIJUWTM6n-b4jAR0UbILIx7Ut8",
            "plus_code": {
                "compound_code": "RGHH+4F Bangkok, Thailand",
                "global_code": "7P52RGHH+4F"
            },
            "price_level": 2,
            "rating": 3.8,
            "reference": "ChIJUWTM6n-b4jAR0UbILIx7Ut8",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 285,
            "vicinity": "Thanon Wong Sawang, Khwaeng Wong Sawang, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8277983,
                    "lng": 100.5286326
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8292420802915,
                        "lng": 100.5300537302915
                    },
                    "southwest": {
                        "lat": 13.8265441197085,
                        "lng": 100.5273557697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "Noodle boat pranakon wongsawang",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3000,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101553387130433890086\">Prin Pinmanee</a>"
                    ],
                    "photo_reference": "AfLeUgPYCsC0BovJgnaq7ZdYofDftfP1Mw4Yxp8UqAfUbLU9vg7j8k6yKc8wl6f9PjZ8JpcASzUY6X4aBeWnSsmoC1ciTyaF4YWtJnfncAP6ig43AiL5luso_vOclsjiTIlApU9AASJpEz49_VvXA75ASqCeW0-tz8QiRKCkB3TQ5K1kFn2L",
                    "width": 4000
                }
            ],
            "place_id": "ChIJrbVkghib4jARdR4rc1y6tU4",
            "plus_code": {
                "compound_code": "RGHH+4F Bangkok, Thailand",
                "global_code": "7P52RGHH+4F"
            },
            "rating": 3.3,
            "reference": "ChIJrbVkghib4jARdR4rc1y6tU4",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 6,
            "vicinity": "เลขที่ 888 ห้างบิ๊กซี วงศ์สว่าง ชั้น 2 ห้อง B203, ถนน พิบูลย์สงคราม, Khwaeng Bang Sue, Khet Bang Sue"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 13.8277066,
                    "lng": 100.5287301
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8291486802915,
                        "lng": 100.5301614302915
                    },
                    "southwest": {
                        "lat": 13.8264507197085,
                        "lng": 100.5274634697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "เต็มโต๊ะเตี๋ยวไก่(Food story วงศ์สว่าง)",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 608,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101745606323118625865\">เต็มโต๊ะเตี๋ยวไก่(Food story วงศ์สว่าง)</a>"
                    ],
                    "photo_reference": "AfLeUgPIZS1YrAY5DXoS7A2OHX5FE1vJgf3JToBvPUDg4TuteAAlod7O77wIsnu6BoozaOJcmz0UfBx3O59cWNIQVkiY4wqfTJRsDplFTrzYXyQ2m75hzVtHqQjPhltL6ji9yg06-7tUoUKs650cWMpNlgr6G7KUiRtm1PLXKoQ0LilxoSbi",
                    "width": 1080
                }
            ],
            "place_id": "ChIJpw9hEYOb4jARViyUo6I70Do",
            "plus_code": {
                "compound_code": "RGHH+3F Bangkok, Thailand",
                "global_code": "7P52RGHH+3F"
            },
            "rating": 3.5,
            "reference": "ChIJpw9hEYOb4jARViyUo6I70Do",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 2,
            "vicinity": "ชั้น2, Big c วงศ์สว่าง, ร้านเจี๊ยะเปี๊ยะจั๊บ Food Story, บางซื่อ, Khet Bang Sue"
        },
        {
            "business_status": "CLOSED_TEMPORARILY",
            "geometry": {
                "location": {
                    "lat": 13.8276212,
                    "lng": 100.5284628
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8291226802915,
                        "lng": 100.5296754802915
                    },
                    "southwest": {
                        "lat": 13.82642471970849,
                        "lng": 100.5269775197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "มุมสุขภาพ",
            "permanently_closed": true,
            "place_id": "ChIJmWlZsr2b4jARoD_DCqclVmg",
            "plus_code": {
                "compound_code": "RGHH+29 Bangkok, Thailand",
                "global_code": "7P52RGHH+29"
            },
            "reference": "ChIJmWlZsr2b4jARoD_DCqclVmg",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "vicinity": "เลขที่ 888 หมู่ บิ๊กซีวงศ์สว่าง, Thanon Wong Sawang, วงศ์สว่าง, Khet Bang Sue"
        },
        {
            "business_status": "CLOSED_TEMPORARILY",
            "geometry": {
                "location": {
                    "lat": 13.8277215,
                    "lng": 100.5288995
                },
                "viewport": {
                    "northeast": {
                        "lat": 13.8291185302915,
                        "lng": 100.5302910802915
                    },
                    "southwest": {
                        "lat": 13.8264205697085,
                        "lng": 100.5275931197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "ครัวนายหัว",
            "permanently_closed": true,
            "place_id": "ChIJf1li3X-b4jARjltSSVbwXTU",
            "plus_code": {
                "compound_code": "RGHH+3H Bangkok, Thailand",
                "global_code": "7P52RGHH+3H"
            },
            "reference": "ChIJf1li3X-b4jARjltSSVbwXTU",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "vicinity": "1251/3 ถนน กรุงเทพ - นนทบุรี, Khwaeng Wong Sawang, Khet Bang Sue"
        }
    ],
        pins: {
          selected:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=",
          notSelected:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII=",
        },
        clusterStyle: [
          {
            url:
              "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
            width: 56,
            height: 56,
            textColor: "#fff",
          },
        ],
        mapStyle: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#ffffff",
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#3e606f",
              },
              {
                weight: 2,
              },
              {
                gamma: 0.84,
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                weight: 0.6,
              },
              {
                color: "#313536",
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#44a688",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#13876c",
              },
            ],
          },
          {
            featureType: "poi.attraction",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#f5e4e4",
              },
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi.attraction",
            elementType: "labels",
            stylers: [
              {
                visibility: "on",
              },
              {
                lightness: "14",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#13876c",
              },
              {
                visibility: "simplified",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#067372",
              },
              {
                lightness: "-20",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#357374",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#004757",
              },
            ],
          },
        ],
      };
    },

    methods: {
      returnToCenter() {
        this.$refs.gMap.map.setCenter(this.results[0].geometry.location);
      },

      checkForMarkers() {
        this.results.forEach((location, i) => {
          location.visible = this.$refs.gMap.map
            .getBounds()
            .contains(this.$refs.gMap.markers[i].getPosition());
        });

        // this.results.geometryVisibleOnMap = this.results.geometry
        //   .filter((l) => l.visible)
        //   .map((l) => l.name)
        //   .join(", ");
      },
    },
  };
</script>
