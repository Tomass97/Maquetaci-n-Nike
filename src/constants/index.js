import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about-us", label: "Sobre nosotros" },
    { href: "#products", label: "Productos" },
    { href: "#contact-us", label: "Contacto" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: ' +500', label: 'Tiendas' },
    { value: '+250k', label: 'Clientes' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "€200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "€210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "€220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "€230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Envio Gratis",
        subtext: "Disfruta de envíos gratuitos en todos los pedidos superiores a 100€"
    },
    {
        imgURL: shieldTick,
        label: "Paga de manera segura",
        subtext: "Nuestro sistema de pago es seguro y confiable para todas tus compras."
    },
    {
        imgURL: support,
        label: "Soporte 24/7",
        subtext: "Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Carlos Daniel',
        rating: 4.5,
        feedback: "Estoy muy satisfecho con la calidad de los productos y el servicio que brindan. ¡Definitivamente recomendaré a mis amigos!"
    },
    {
        imgURL: customer2,
        customerName: 'Bianka Gabriela',
        rating: 4.8,
        feedback: "¡Los productos son increíbles! La calidad es insuperable y el servicio es excelente. ¡Gracias por todo!"
    }
];


export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Ayuda",
        links: [
            { name: "Sobre nosotros", link: "/" },
            { name: "FAQS", link: "/" },
            { name: "Politica de privacidad", link: "/" },
            { name: "Politica de pagos", link: "/" },
        ],
    },
    {
        title: "Contacto",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
