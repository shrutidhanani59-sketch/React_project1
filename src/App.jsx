import Header from "./componets/Header.jsx";
import Main from "./componets/Main.jsx";
import Footer from "./componets/Footer.jsx";

import "./index.css";

const cars = [
    {
        company: "Toyota",
        modelname: "Fortuner",
        price: 4200000,
        category: "SUV",
        img:"https://imgd.aeplcdn.com/664x374/n/cw/ec/137767/fortuner-legender-exterior-right-front-three-quarter-5.png?isig=0&q=80",
    },
    {
        company: "Mahindra",
        modelname: "Thar",
        price: 1600000,
        category: "SUV",
        img:"https://imgd.aeplcdn.com/1920x1080/n/cw/ec/124839/thar-roxx-exterior-right-front-three-quarter-2.png?isig=0&q=80&q=80",
    },
    {
        company: "Tata",
        modelname: "Nexon",
        price: 1200000,
        category: "SUV",
        img:"https://imgd.aeplcdn.com/1920x1080/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-79.png?isig=0&q=80&q=80",
    },
    {
        company: "Hyundai",
        modelname: "Creta",
        price: 1800000,
        category: "SUV",
        img:"https://imgd.aeplcdn.com/664x374/n/cw/ec/167017/creta-electric-exterior-right-front-three-quarter-15.png?isig=0&q=80",
    },
    {
        company: "Maruti Suzuki",
        modelname: "Swift",
        price: 850000,
        category: "Hatchback",
        img:"https://ackodrive-prod.ackoassets.com/image/maruti-suzuki/swift/magma-grey/images_cdn/small/Transparent.webp",
    },
    {
        company: "Honda",
        modelname: "City",
        price: 1500000,
        category: "Sedan",
        img:"https://imgd.aeplcdn.com/1600x900/n/cw/ec/219846/city-facelift-exterior-right-front-three-quarter-3.png?isig=0&q=75",
    },
    {
        company: "Tata",
        modelname: "Harrier",
        price: 2200000,
        category: "SUV",
        img:"https://imgd.aeplcdn.com/1920x1080/n/cw/ec/139139/harrier-exterior-right-front-three-quarter-7.png?isig=0&q=80&q=80",
    },
    {
        company: "Kia",
        modelname: "Seltos",
        price: 1900000,
        category: "SUV",
        img:"https://imgd.aeplcdn.com/642x336/n/cw/ec/192817/seltos-exterior-right-front-three-quarter-50.png?isig=0&q=80",
    },
    {
        company: "BMW",
        modelname: "3 Series",
        price: 5500000,
        category: "Luxury",
        img:"https://marketplace-cdn.cars24.com/production/10702203717/main%20image/2025-09-16/car_replace_bg_1216ae7f-7602-407e-9e14-2d20507e80f4.png?width=3840&format=auto&quality=75&pad=75&trim-color=auto",
    },
    {
        company: "Mercedes-Benz",
        modelname: "C-Class",
        price: 6500000,
        category: "Luxury",
        img:"https://motozite.com/_next/image?url=https%3A%2F%2Fmotoziteprodstorage.blob.core.windows.net%2Fweb-media%2Fnc_images%2FMZ_B17_M490_V1568%2Fhero%2FApline%20Grey.png&w=3840&q=75",
    },
    {
        company: "Audi",
        modelname: "A4",
        price: 5800000,
        category: "Luxury",
        img:"https://imgd.aeplcdn.com/1920x1080/n/cw/ec/51909/a4-exterior-right-front-three-quarter-80.png?isig=0&q=80&q=80",
    },
    {
        company: "Volkswagen",
        modelname: "Virtus",
        price: 1600000,
        category: "Sedan",
        img:"https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-11.png?isig=0&q=80",
    },
    {
        company: "MG",
        modelname: "Hector",
        price: 2100000,
        category: "SUV",
        img:"https://mgmotor.scene7.com/is/image/mgmotor/mgi-hector-thm-img-0003?$mg-rgb-tablet-image-responsive$&fmt=png-alpha",
    },
    {
        company: "Renault",
        modelname: "Kwid",
        price: 650000,
        category: "Hatchback",
        img:"https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/c3643e00-9179-11f1-bd5b-02ede2007fbe/a79e30e8-f681-4ac5-8210-ddba0674488d/86dff52c-4dc3-41cb-b08a-e9f87861bb58/494b5b49-0350-4c76-9be3-05eca41aca3a/slot/1.png",
    },
    {
        company: "Skoda",
        modelname: "Slavia",
        price: 1700000,
        category: "Sedan",
        img:"https://stimg.cardekho.com/pwa/img/quickverdict/slavia-removebg-preview.png",
    }
];


function App() {
  return (
    <>
    <Header/>
    <Main cars={cars}/>
    <Footer />
    </>
  )
}

export default App
