import { v4 as uuidv4 } from 'uuid';// so that we do not need to hardcode product ids

/*
   These will be the products that are displayed, or "for sale", in our home page. For efficiency, I am following along with how Omar made his product List.
*/
const productList = [
   {
      id: uuidv4(),
      title: "Apple iPhone 13 Pro Max",
      description: 'A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life.',
      brand: 'Apple',
      price: 109999,
      img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_colors_09142021_big.jpg.large.jpg",
   },
   {
      id: uuidv4(),
      title: "Apple iPad 13 Mini",
      description: 'iPad mini is meticulously designed to be absolutely beautiful. An all-new enclosure features a new, larger edge-to-edge screen, along with narrow borders and elegant rounded corners.',
      brand: 'Apple',
      price: 44999,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-202109?wid=1080&hei=1060&fmt=jpeg&qlt=80&.v=1631751017000",
   },
   {
      id: uuidv4(),
      title: "Apple Watch Series 7",
      description: 'The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking yet.',
      brand: 'Apple',
      price: 39999,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU83_VW_34FR+watch-41-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171038000,1631661171000",
   },
   {
      id: uuidv4(),
      title: "MacBook Pro",
      description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.',
      brand: 'Apple',
      price: 199999,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000",
   },
];

/*
export  product list for use across our app
in real use, we would be using axios get data from an actual database/backend.
*/ 

export const fetchProducts = () => new Promise((resolve, reject) => {
   // console.log('fetching Data from imaginary products database')
   setTimeout(() => {
      try {
         // get products from our list
         resolve(productList)
      } catch (error) {
         reject(error);
      }
   }, 1000);
});
