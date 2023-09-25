import RecommendImg from '../Assets/images/Bitmap.png';
import serviceImg1 from '../Assets/images/service/image 106.png';
import serviceImg2 from '../Assets/images/service/image 104.png';
import serviceImg3 from '../Assets/images/service/image 107.png';
import serviceImg4 from '../Assets/images/service/image 108.png';
import { ArrowSvg, InventorySvg, SearchSvg, SecuritySvg } from '../static/icons';

export const category = [
    {
        id: "eefaef2b-ffc0-42f5-8ad9-c8f62197438d",
        name: "Amazon Basics"
    },
    {
        id: "038ef086-9297-4305-813d-6b5a0ec3b8f6",
        name: "Pet Supplies"
    },
    {
        id: "798264e8-edc3-4855-9d04-ecbd46b36fd1",
        name: "Today's Deals"
    },
    {
        id: "5675483b-782e-4597-8473-6f637ff47f24",
        name: "Beauty & Personal Care"
    },
    {
        id: "64898828-32d9-4a87-86c5-6708a4e9c79f",
        name: "TV & Video"
    },
    {
        id: "b8024049-d0cf-446c-ac01-cc3f2bd9eaf4",
        name: "Luxury Stores"
    },
    {
        id: "4cef09d6-c996-4ae0-84be-64a8a2fff45c",
        name: "Sports & Fitness"
    },
    {
        id: "0bc5b4cb-5e86-45aa-8d43-ww318dd178a1",
        name: "Free Shipping"
    },
    {
        id: "f335d123-cf66-40e7-b749-087babc26430",
        name: "Video Games"
    },
    {
        id: "8af41f5f-3341-49fe-8e23-158cc0030bf7",
        name: "Handmade"
    },
    {
        id: "6a8e8e0a-7c06-41f7-9dbc-28392ee0b641",
        name: "Smart Home"
    },
    {
        id: "07d1c9c0-d6dd-47be-890a-1be753d1f84f",
        name: "Find a Gift"
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



