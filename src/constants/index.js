import { 
    food, 
    documents, 
    lightitems, 
    delicateitems, 
    services, 
    locationIcon, 
    messageIcon, 
    phoneIcon,
    wwwIcon,
    cheesyTakoyaki,
    trioTakoyaki,
    classicTakoyaki,
    gyudonBeef,
    teriyakiChicken,
    katsudonChicken,
    japaneseSiomai,
    gyunikuRamenBeef,
    niwatoriRamenChicken,
    gyoza,
    japSiomaiSolo,
    sushiTray,
    soloSushi,
    foodBundleImg,
    milkShakes,
    softDrinks,
    bottledWater,
    tapsilog,
    chickenJoy

} from '../assets'

export const navLinks = [
    {
        id: 'home',
        title: 'Home'
    },
    {
        id: 'services',
        title: 'Services'
    },
    {
        id: 'restaurants',
        title: 'Restaurants'
    },
    {
        id: 'contacts',
        title: 'Contact Us'
    },
]

export const servicesImg = [
    {   
        id:'1',
        title:'food',
        image: food
    },
    {   
        id:'2',
        title:'documents',
        image: documents
    },
    {
        id:'3',
        title:'light items',
        image: lightitems
    },
    {
        id:'4',
        title:'delicate items',
        image: delicateitems
    },
    {
        id:'5',
        title:'services',
        image: services
    }
]
    
export const exploreLinks = [
    {   id: 1,
        link:'Explore',
    },
    {   id: 2,
        link:'Explore',
    },
    {   id: 3,
        link:'Explore',
    },
]

export const servicesLinks = [
    {   id: 1,
        link:'Services',
    },
    {   id: 2,
        link:'Services',
    },
    {   id: 3,
        link:'Services',
    },
]

export const contactLinks = [
    {   
        id: 1, 
        title: 'address',
        icon: locationIcon,
        link: `Cluster 5 1g Campbridge Brgy. San Isidro,Cainta Rizal`,
    },
    {   id: 2,  
        title: 'message',
        icon: messageIcon,
        link:'sab_princes@yahoo.com',
    },
    {   id: 3,
        title: 'phone',
        icon: phoneIcon,
        link:'00966508624264',
    },
    {   id: 4,
        title: 'website',
        icon: wwwIcon,
        link:'http://www.mappiya.com/',
    },
]

export const takoyaki = [
    {
        title: 'Cheesy Takoyaki',
        img: cheesyTakoyaki,
        description: '',
        price:'23'
    },
    {
        title: 'Trio Takoyaki',
        img: trioTakoyaki,
        description: '-Bonito Flakes -Cheese -Aonari Flakes -Chicken Floss/Bacon Tid Bits',
        price:'45'
    },
    {
        title: 'Classic Takoyaki',
        img: classicTakoyaki,
        description: '',
        price:'20'
    }
]

export const riceBowl = [
    {
        title: 'Gyudon (Beef)',
        img: gyudonBeef,
        description: 'Free Miso Soup',
        price:'33'
    },
    {
        title: 'Teriyaki (Chicken)',
        img: teriyakiChicken,
        description: 'Free Miso Soup',
        price:'28'
    },
    {
        title: 'Tori Katsudon (Chicken)',
        img: katsudonChicken,
        description: 'Free Miso Soup',
        price:'28'
    },
    {
        title: 'Japanese Siomai with Rice',
        img: japaneseSiomai,
        description: 'Free Miso Soup',
        price:'23'
    }
]

export const ramen = [
    {
        title: 'Gyuniku Ramen (Beef)',
        img: gyunikuRamenBeef,
        description: '',
        price:'54'
    },
    {
        title: 'Niwatori Ramen (Chicken)',
        img: niwatoriRamenChicken,
        description: 'Free Miso Soup',
        price:'54'
    },
]

export const dimsum = [
    {
        title: 'Gyoza',
        img: gyoza,
        description: '',
        price:'23'
    },
    {
        title: 'Jap Siomai Solo',
        img: japSiomaiSolo,
        description: '',
        price:'23'
    },
]

export const sushi = [
    {
        title: 'Sushi Tray',
        img: sushiTray,
        description: '',
        price:'79'
    },
    {
        title: 'Solo Sushi',
        img: soloSushi,
        description: '',
        price:'40'
    },
]

export const foodBundle = [
    {
        title: 'Eben Ezar Food Bundle',
        img: foodBundleImg,
        description: '8pcs Cali Maki - 8pcs Japanese Siomai - 8pcs Crunchy Cali Aburi - 8pcs New Style - 6pcs Cheesy Takoyaki - 6pcs Classic Takoyaki',
        price:'187'
    },
]

export const beverages = [
    {
        title: 'Milkshakes',
        img: milkShakes,
        description: '330ML',
        price:'15'
    },
    {
        title: 'Softdrinks',
        img: softDrinks,
        description: '325ML',
        price:'5'
    },
    {
        title: 'Bottled Water',
        img: bottledWater,
        description: '600ML',
        price:'3'
    },
]

export const breakfast = [
    {
        title: 'Tapsilog',
        img: tapsilog,
        description: '',
        price:'23'
    },
]

export const meal = [
    {
        title: '2-pc Chicken Joy',
        img: chickenJoy,
        description: "Philippines' best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside",
        price:'23'
    },
    
]
