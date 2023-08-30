import RecommendImg from '../Assets/images/Bitmap.png';
import serviceImg1 from '../Assets/images/service/image 106.png';
import serviceImg2 from '../Assets/images/service/image 104.png';
import serviceImg3 from '../Assets/images/service/image 107.png';
import serviceImg4 from '../Assets/images/service/image 108.png';
import { ArrowSvg, InventorySvg, SearchSvg, SecuritySvg } from '../static/icons';

export const category = [
    {
        
        id: 1,
        CategoryName: 'automobile',
    },
    {
        id:2 ,
        CategoryName: 'Clothes and wear',
    },
    {
        id: 3,
        CategoryName: 'home interiors',
    },
    {
        id: 4,
        CategoryName: 'Computer and tech',
    },
    {
        id: 5,
        CategoryName: 'Tools, equipments',
    },
    {
        id: 6,
        CategoryName: 'Sports and outdoor',
    },
    {
        id: 7,
        CategoryName: 'Animal and pets',
    },
    {
        id:8 ,
        CategoryName: 'Machinery tools',
    },
    {
        id:9 ,
        CategoryName: 'More category',
    },
    {
        id: 10,
        CategoryName: 'More category',
    },
    {
        id:11 ,
        CategoryName: 'More category',
    }

]



export const recommendItems = [
    {
        id:1,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    },
    {
        id: 11,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    },
    {
        id:12 ,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    },
    {
        id: 13,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    },
    {
        id: 14,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    },
    {
        id: 15,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    },
    {
        id: 16,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    },
    {
        id: 17,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    },
    {
        id: 18,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    },
    {
        id: 19,
        img: RecommendImg,
        price:10.30,
        describe: "T-shirts with multiple colors, for men"
    }
]

export const service = [
    {
        id: 11,
        img: serviceImg4,
        describe: "Source from  Industry Hubs",
        icon:<SearchSvg/>
    },
    {
        id: 22,
        img: serviceImg2,
        describe: "Customize Your Products",
        icon:<InventorySvg/>
    },
    {
        id: 33,
        img: serviceImg1,
        describe: "Fast, reliable shipping by ocean or air",
        icon: <ArrowSvg />
    },
    {
        id: 44,
        img: serviceImg3,
        describe: "Product monitoring  and inspection",
        icon: <SecuritySvg/>
    }

]



