import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/category/entities/category.entity';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsSeeder implements Seeder {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<Category>,

    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async seed(): Promise<any> {
    const categories = [
      {
        name: 'Sneakers',
        description: 'The best sneakers in the world',
        image:
          'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600',
        products: [
          {
            name: 'Nike Air Max',
            description: 'The best sneakers in the world',
            price: 100,
            currency: 'USD',
            image:
              'https://static.nike.com/a/images/t_default/fba909b5-4406-4eef-bde0-ba558bb77956/calzado-air-max-90-2ZsM2w.png',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Adidas Superstar',
            description: 'The best sneakers in the world',
            price: 80,
            currency: 'USD',
            image:
              'https://assets.adidas.com/images/w_1880,f_auto,q_auto/2ff0016f6bf443b2b41bbe6c7c022e2f_9366/IE8249_01_standard.jpg',
            stock: 10,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Converse All Star',
            description: 'The best sneakers in the world',
            price: 70.45,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iLCIr6CvnqQ5UyfHGi2yS83jduR1rjwnMg&s',
            stock: 10,
            rate: 3,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Vans Old Skool',
            description: 'The best sneakers in the world',
            price: 90.34,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLurpdyy2ckwFN5skomB8TzXXn0o0N7QWJQ&s',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Puma Suede',
            description: 'The best sneakers in the world',
            price: 75.6,
            currency: 'USD',
            image:
              'https://www.blockstore.cl/cdn/shop/products/p-37491501-5_1800x.jpg?v=1644925614',
            stock: 10,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 1),
          },
          {
            name: 'Reebok Classic',
            description: 'The best sneakers in the world',
            price: 85.34,
            currency: 'USD',
            image: 'https://i.ebayimg.com/images/g/M30AAOSwVApiWH6~/s-l500.jpg',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 1),
          },
          {
            name: 'Puma RS-X',
            description: 'Retro meets modern design',
            price: 110,
            currency: 'USD',
            image:
              'https://media.marathon.store/products/h27/hbf/h00/10197029715998.jpg',
            stock: 20,
            rate: 4.5,
            createdAt: new Date().setDate(new Date().getDate() - 30),
          },
          {
            name: 'New Balance 990v5',
            description: 'Perfect blend of cushioning and stability',
            price: 175,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/07sAAOSwKLtkmYDC/s-l960.webp',
            stock: 8,
            rate: 4.9,
            createdAt: new Date().setDate(new Date().getDate() - 10),
          },
        ],
      },
      {
        name: 'Beachwear',
        description: 'The best beachwear in the world',
        image:
          'https://images.pexels.com/photos/8157744/pexels-photo-8157744.jpeg?auto=compress&cs=tinysrgb&w=600',
        products: [
          {
            name: 'Swimsuit',
            description: 'The best swimsuit in the world',
            price: 50,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn2y2L-QAcuyWPD1wbaSJ9yEywZvMn6wIag&s',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Sunglasses',
            description: 'The best sunglasses in the world',
            price: 30,
            currency: 'USD',
            image:
              'https://m.media-amazon.com/images/I/51OQ3sPBAsL._AC_UY1100_.jpg',
            stock: 10,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Hat',
            description: 'The best hat in the world',
            price: 25,
            currency: 'USD',
            image:
              'https://m.media-amazon.com/images/I/91amcOPUcNL._AC_UY1000_.jpg',
            stock: 10,
            rate: 3,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Flip-flops',
            description: 'The best flip-flops in the world',
            price: 20,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBg9NCwi69fGhyXBanq9x12REsXVEdSzEPQ&s',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Beach towel',
            description: 'The best beach towel in the world',
            price: 15,
            currency: 'USD',
            image:
              'https://m.media-amazon.com/images/I/81T-W+2GShL._AC_UY1100_.jpg',
            stock: 10,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 1),
          },
          {
            name: 'Beach bag',
            description: 'The best beach bag in the world',
            price: 35,
            currency: 'USD',
            image:
              'https://m.media-amazon.com/images/I/81QxbDXeTtL._AC_SL1500_.jpg',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 1),
          },
          {
            name: 'Sunset Bikini Set',
            description: 'Vibrant colors for the perfect beach day',
            price: 49.99,
            currency: 'USD',
            image:
              'https://www.paperplanestore.com/cdn/shop/files/Zulu-_-Zephyr---Sunset-Tile-High-Waisted-Bikini---1a_640x640.jpg?v=1699999980',
            stock: 12,
            rate: 4.6,
            createdAt: new Date().setDate(new Date().getDate() - 20),
          },
          {
            name: 'Ocean Wave Boardshorts',
            description: 'Durable and quick-drying boardshorts',
            price: 39.99,
            currency: 'USD',
            image:
              'https://i5.walmartimages.com/asr/ba74c254-3da6-4570-b708-0a01e1e70578.9514e0b5074cb915338a406fbba4c9e2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
            stock: 18,
            rate: 4.7,
            createdAt: new Date().setDate(new Date().getDate() - 40),
          },
          {
            name: 'Tropical Rash Guard',
            description: 'Protective rash guard with a tropical flair',
            price: 34.99,
            currency: 'USD',
            image:
              'https://www.everythingmanatee.com/cdn/shop/products/all-over-print-womens-rash-guard-white-front-6105ea477a98f_713x.jpg?v=1627777616',
            stock: 10,
            rate: 4.8,
            createdAt: new Date().setDate(new Date().getDate() - 15),
          },
          {
            name: 'Coral Reef Swimsuit',
            description: 'Elegant one-piece with coral reef design',
            price: 59.99,
            currency: 'USD',
            image:
              'https://modernrascals.ca/cdn/shop/files/coral-reef-swimsuit-kite_5000x.jpg?v=1710523202',
            stock: 7,
            rate: 4.5,
            createdAt: new Date().setDate(new Date().getDate() - 25),
          },
          {
            name: 'Beach Vibes Cover-Up',
            description: 'Lightweight and stylish cover-up for any swimsuit',
            price: 29.99,
            currency: 'USD',
            image:
              'https://m.media-amazon.com/images/I/8173XPK-WbL._AC_SR736,920_.jpg',
            stock: 20,
            rate: 4.9,
            createdAt: new Date().setDate(new Date().getDate() - 5),
          },
        ],
      },
      {
        name: 'Sportswear',
        description:
          'High-quality athletic clothing for all your workout needs',
        image:
          'https://media.istockphoto.com/id/1366052585/es/foto/foto-de-un-grupo-de-amigos-pasando-el-rato-antes-de-hacer-ejercicio-juntos.jpg?b=1&s=612x612&w=0&k=20&c=S-t6EJLTC6flpWeqRm8TeH_50njC6aGIvrK3okeny4c=',
        products: [
          {
            name: 'Adidas Ultraboost',
            description: 'Comfortable running shoes with responsive cushioning',
            price: 180,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnY4Dmytqs18E5kv3HD3URYA3WTr4yvMNEp7GzlDu4UI9zD3yP6LFmDS4OUqoazSIvTPaVlAUqhkjxR7R8nYeWgU5LPjukQIUIvzqHfDAwEGpEE25AVjNi&usqp=CAc',
            stock: 15,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 50),
          },
          {
            name: 'Nike Pro Tights',
            description: 'Dri-FIT technology to keep you dry and comfortable',
            price: 50,
            currency: 'USD',
            image:
              'https://www.whirlwindsports.com/productimages/bx1200x800/nike-pro-tights-black---white_130833.jpg',
            stock: 20,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 20),
          },
          {
            name: 'Under Armour Sports Bra',
            description:
              'High support and breathability for high-impact activities',
            price: 35,
            currency: 'USD',
            image:
              'https://underarmour.scene7.com/is/image/Underarmour/PS1357719-200_HF?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
            stock: 25,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 30),
          },
          {
            name: 'Reebok Speedwick Tee',
            description:
              'Lightweight fabric that wicks sweat away from the body',
            price: 25,
            currency: 'USD',
            image:
              'https://images.reebok.eu/reebok-running-speedwick-t-shirt_19729001_44911227_2048.jpg?c=1',
            stock: 30,
            rate: 3,
            createdAt: new Date().setDate(new Date().getDate() - 10),
          },
          {
            name: 'Nike Dri-FIT Tee',
            description:
              'Moisture-wicking fabric to keep you dry and comfortable',
            price: 25,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/IR4AAOSwoThkpcjQ/s-l1600.webp',
            stock: 30,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 10),
          },
          {
            name: 'Adidas Running Shorts',
            description: 'Lightweight shorts for freedom of movement',
            price: 30,
            currency: 'USD',
            image: 'https://m.media-amazon.com/images/I/31XPRpyFZQL._AC_.jpg',
            stock: 20,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 15),
          },
          {
            name: 'Puma Training Hoodie',
            description:
              'Warm and comfortable hoodie for pre and post workouts',
            price: 45,
            currency: 'USD',
            image:
              'https://www.bing.com/th?id=OIP.kmb5-idxiniY00t930quSQHaHa&w=162&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
            stock: 15,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 20),
          },
          {
            name: 'Reebok Crossfit Nano Shoes',
            description: 'Durable and supportive shoes for intense workouts',
            price: 120,
            currency: 'USD',
            image:
              'https://www.bing.com/th?id=OIP.gR6NFe3PLU01-WSKvhi7cQHaHa&w=185&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2g',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 25),
          },
        ],
      },
      {
        name: 'Casual',
        description: 'Ropa cómoda y versátil para el día a día',
        image:
          'https://cdn.pixabay.com/photo/2024/06/16/06/48/girls-8832760_640.jpg',
        products: [
          {
            name: 'Hooded Sweatshirt',
            description: 'Warm hooded sweatshirt for cold days',
            price: 35,
            currency: 'USD',
            image:
              'https://cdn.listingmirror.com/9064/167199ce-9c8f-5cfd-b1cb-2b103fc93a84/full.jpg',
            stock: 20,
            rate: 4.2,
            createdAt: new Date().setDate(new Date().getDate() - 5),
          },
          {
            name: 'Leather Jacket',
            description: `Stylish leather jacket that's wind-resistant`,
            price: 120,
            currency: 'USD',
            image:
              'https://hmecuador.vtexassets.com/arquivos/ids/1457341-483-725?v=638386697842030000&width=483&height=725&aspect=true',
            stock: 10,
            rate: 4.7,
            createdAt: new Date().setDate(new Date().getDate() - 15),
          },
          {
            name: 'Sports Sneakers',
            description: 'Lightweight and comfortable sneakers for sports',
            price: 60,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/~2wAAOSw1MdgmPEF/s-l960.webp',
            stock: 30,
            rate: 4.3,
            createdAt: new Date().setDate(new Date().getDate() - 8),
          },
          {
            name: 'Baseball Cap',
            description: 'Adjustable cap to protect from the sun',
            price: 15,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/mNkAAOSwtgdkqN~M/s-l960.webp',
            stock: 40,
            rate: 3.9,
            createdAt: new Date().setDate(new Date().getDate() - 12),
          },
          {
            name: 'Smart Watch',
            description: `Smartwatch with intelligent features and fitness tracking`,
            price: 199,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/6cwAAOSwMb9kUu9g/s-l960.webp',
            stock: 18,
            rate: 4.6,
            createdAt: new Date().setDate(new Date().getDate() - 22),
          },
          {
            name: 'Travel Backpack',
            description: 'Spacious and durable backpack for outdoor adventures',
            price: 70,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/0qgAAOSwo35grUlA/s-l1600.webp',
            stock: 22,
            rate: 4.1,
            createdAt: new Date().setDate(new Date().getDate() - 18),
          },
        ],
      },
      {
        name: 'Lingerie',
        description: 'Delicate and elegant underwear',
        image:
          'https://images.pexels.com/photos/950758/pexels-photo-950758.jpeg?auto=compress&cs=tinysrgb&w=600',
        products: [
          {
            name: 'Silk Nightgown',
            description: `Elegant silk nightgown with lace detailing`,
            price: 85,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/9u8AAOSwWBth78QF/s-l960.webp',
            stock: 15,
            rate: 4.9,
            createdAt: new Date().setDate(new Date().getDate() - 10),
          },
          {
            name: 'Lace Bralette',
            description: `Comfortable lace bralette with adjustable straps`,
            price: 35,
            currency: 'USD',
            image:
              'https://s7d2.scene7.com/is/image/aeo/2692_3665_158_of?$cat-main_large$&fmt=jpeg&defaultImage=2692_3665_158_f',
            stock: 20,
            rate: 4.8,
            createdAt: new Date().setDate(new Date().getDate() - 20),
          },
          {
            name: 'Satin Robe',
            description: `Luxurious satin robe perfect for lounging`,
            price: 60,
            currency: 'USD',
            image:
              'https://www.maquibeauty.com/images/productos/glov-bata-saten-kimono-style-champan-2-76867.jpeg',
            stock: 12,
            rate: 4.6,
            createdAt: new Date().setDate(new Date().getDate() - 5),
          },
          {
            name: 'Mesh Bodysuit',
            description: `Alluring mesh bodysuit with floral embroidery`,
            price: 50,
            currency: 'USD',
            image:
              'https://www.ohpolly.com/cdn/shop/files/6134_Almond_Bodysuit_FRONT_be0bdb8a-229a-4a98-bdd0-bba50b088375.jpg?v=1684500191&width=720',
            stock: 8,
            rate: 4.7,
            createdAt: new Date().setDate(new Date().getDate() - 30),
          },
          {
            name: 'Cotton Pajama Set',
            description: `Cozy cotton pajama set with classic piping`,
            price: 70,
            currency: 'USD',
            image:
              'https://pyxis.nymag.com/v1/imgs/93e/ecb/6ca25cf6072e41ad9b5fa66022bf62a163-bic-pajamas-for-women.rhorizontal.w1100.jpg',
            stock: 10,
            rate: 4.5,
            createdAt: new Date().setDate(new Date().getDate() - 12),
          },
          {
            name: 'Velvet Chemise',
            description: `Soft velvet chemise with delicate lace trim`,
            price: 65,
            currency: 'USD',
            image:
              'https://www.blueboutique.com/cdn/shop/products/70159_5fc6ade513b668.00971588_12099fr_large_c2b6158f-b8c4-4e5e-bfbb-f5fc91f2bbee_480x480.jpg?v=1606857360',
            stock: 6,
            rate: 4.8,
            createdAt: new Date().setDate(new Date().getDate() - 18),
          },
          {
            name: 'Floral Kimono',
            description: `Lightweight floral kimono, perfect as a cover-up`,
            price: 45,
            currency: 'USD',
            image:
              'https://www.hunkemoller.com/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dw76e94062/images/large/167317_6.jpg?sw=453&q=100',
            stock: 5,
            rate: 4.4,
            createdAt: new Date().setDate(new Date().getDate() - 25),
          },
          {
            name: 'High-Waisted Briefs',
            description: `High-waisted briefs with full coverage`,
            price: 30,
            currency: 'USD',
            image:
              'https://www.etafashion.com/medias/5000000966023-900x1200-0.jpg?context=bWFzdGVyfGltYWdlc3wxNjcwMDN8aW1hZ2UvanBlZ3xhR013TDJnd015ODBOVGM1TmprMk5qQXpPVFU0TWk4MU1EQXdNREF3T1RZMk1ESXpMVGt3TUhneE1qQXdYekF1YW5CbnxkNjdjZjczNjRhYTUyNGRjNWU2M2NmZTcwZTZlZTdmZTZiOGQ0ZjYzOTUxODBjNjg5OGEyNmE0ZWY0MjdhMTEz',
            stock: 18,
            rate: 4.6,
            createdAt: new Date().setDate(new Date().getDate() - 7),
          },
          {
            name: 'Plunge Balconette Bra',
            description: `Seductive plunge balconette bra with underwire support`,
            price: 40,
            currency: 'USD',
            image:
              'https://ml.thcdn.com/productimg/960/960/14308597-1765037950128335.jpg',
            stock: 20,
            rate: 4.7,
            createdAt: new Date().setDate(new Date().getDate() - 14),
          },
          {
            name: 'Strappy Teddy',
            description: `Strappy teddy with daring cut-outs`,
            price: 55,
            currency: 'USD',
            image:
              'https://i5.walmartimages.com/seo/Mitankcoo-Womens-Lingerie-Sexy-Cut-Out-Strappy-Teddy-Bodysuit-Valentine-Day-Sleepwear_cbf7c4cd-fe28-4415-b958-4b098fbd30d4.3987f4fbd59ff83b1a4eb2f1dc9b895d.jpeg',
            stock: 9,
            rate: 4.9,
            createdAt: new Date().setDate(new Date().getDate() - 22),
          },
        ],
      },
      {
        name: 'Elegant',
        description: 'Elegance and sophistication for special events',
        image:
          'https://images.pexels.com/photos/7691227/pexels-photo-7691227.jpeg?auto=compress&cs=tinysrgb&w=600',
        products: [
          {
            name: 'Classic Black Suit',
            description: `Tailored black suit with a modern fit`,
            price: 250,
            currency: 'USD',
            image:
              'https://www.bucco.us/wp-content/uploads/2021/12/Classic-Black-Suit.png',
            stock: 10,
            rate: 4.8,
            createdAt: new Date().setDate(new Date().getDate() - 8),
          },
          {
            name: 'Silk Tie',
            description: `Pure silk tie with a subtle pattern`,
            price: 40,
            currency: 'USD',
            image:
              'https://www.tiemart.com/cdn/shop/products/red-silk-skinny-tie_1001x1001@2x.jpg?v=1580853890',
            stock: 30,
            rate: 4.7,
            createdAt: new Date().setDate(new Date().getDate() - 16),
          },
          {
            name: 'White Dress Shirt',
            description: `Crisp white shirt made from premium cotton`,
            price: 90,
            currency: 'USD',
            image:
              'https://paulmalone.com/cdn/shop/products/White_f263841f-7367-452e-875b-a2ca8d0413ed.jpg?v=1655760674',
            stock: 25,
            rate: 4.6,
            createdAt: new Date().setDate(new Date().getDate() - 3),
          },
          {
            name: 'Leather Dress Shoes',
            description: `Elegant leather shoes with a timeless design`,
            price: 150,
            currency: 'USD',
            image:
              'https://media.istockphoto.com/id/523113015/es/foto/zapatos-de-hombres-marr%C3%B3n.jpg?s=612x612&w=0&k=20&c=z1T9jW-L5cFFS4SqtyKh0n53jqU7PaOZWA3giDsG2Sk=',
            stock: 15,
            rate: 4.9,
            createdAt: new Date().setDate(new Date().getDate() - 20),
          },
          {
            name: 'Formal Dress Pants',
            description: `Versatile dress pants with a sleek silhouette`,
            price: 120,
            currency: 'USD',
            image:
              'https://media.istockphoto.com/id/1149139165/es/foto/pantal%C3%B3n-azul-chino-con-cintur%C3%B3n-de-piel-marr%C3%B3n-aislado-sobre-fondo-blanco-comodidad-slim-fit.jpg?s=612x612&w=0&k=20&c=kBfAYwygY57pKxeauAbrcgVJouOHLjoV5YxnGP7rDS0=',
            stock: 20,
            rate: 4.5,
            createdAt: new Date().setDate(new Date().getDate() - 11),
          },
          {
            name: 'Business Blazer',
            description: `Professional blazer for a polished look`,
            price: 180,
            currency: 'USD',
            image:
              'https://hmecuador.vtexassets.com/arquivos/ids/1860877-483-725?v=638537894070030000&width=483&height=725&aspect=true',
            stock: 12,
            rate: 4.7,
            createdAt: new Date().setDate(new Date().getDate() - 18),
          },
          {
            name: 'Pencil Skirt',
            description: `Fitted pencil skirt in a high-quality fabric`,
            price: 80,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/82EAAOSwtpdiAvyJ/s-l960.webp',
            stock: 22,
            rate: 4.6,
            createdAt: new Date().setDate(new Date().getDate() - 5),
          },
          {
            name: 'Sleeveless Blouse',
            description: `Chic sleeveless blouse with ruffle detailing`,
            price: 70,
            currency: 'USD',
            image:
              'https://hmecuador.vtexassets.com/arquivos/ids/1824033-483-725?v=638521482054370000&width=483&height=725&aspect=true',
            stock: 18,
            rate: 4.8,
            createdAt: new Date().setDate(new Date().getDate() - 14),
          },
          {
            name: 'Cufflinks',
            description: `Sophisticated cufflinks for a touch of elegance`,
            price: 50,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/eOUAAOSw9-tlk~~8/s-l960.webp',
            stock: 30,
            rate: 4.9,
            createdAt: new Date().setDate(new Date().getDate() - 21),
          },
          {
            name: 'Evening Gown',
            description: `Stunning evening gown for formal events`,
            price: 300,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/SYgAAOSwKX5lJp7w/s-l960.webp',
            stock: 8,
            rate: 5.0,
            createdAt: new Date().setDate(new Date().getDate() - 17),
          },
        ],
      },
      {
        name: 'Children',
        description: `A delightful collection of children’s clothing that combines style, comfort, and practicality for everyday adventures and special occasions`,
        image:
          'https://media.istockphoto.com/id/931577634/es/foto/enfoque-suave-de-dos-a%C3%B1os-edad-ni%C3%B1o-elegir-sus-propios-vestidos-de-estante-del-pa%C3%B1o-de-los-ni%C3%B1os.jpg?s=612x612&w=0&k=20&c=LtZQqvs11MTwFzPBjY04D-IUYW-IPL37CQo_12kjazU=',
        products: [
          {
            name: 'Kids Denim Jacket',
            description: `Durable denim jacket for everyday play`,
            price: 35,
            currency: 'USD',
            image: 'https://m.media-amazon.com/images/I/51KKx5QeHIL._AC_.jpg',
            stock: 20,
            rate: 4.7,
            createdAt: new Date().setDate(new Date().getDate() - 9),
          },
          {
            name: 'Graphic Tee',
            description: `Fun graphic tee with vibrant colors`,
            price: 15,
            currency: 'USD',
            image:
              'https://hmecuador.vtexassets.com/arquivos/ids/1490080-483-725?v=638423061007100000&width=483&height=725&aspect=true',
            stock: 30,
            rate: 4.6,
            createdAt: new Date().setDate(new Date().getDate() - 2),
          },
          {
            name: 'Polka Dot Dress',
            description: `Adorable polka dot dress with a tulle skirt`,
            price: 25,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSV6QgnEmgSbm362Kd1jmmDHjqaCFyZy4fzA&s',
            stock: 15,
            rate: 4.8,
            createdAt: new Date().setDate(new Date().getDate() - 13),
          },
          {
            name: 'Boys Chinos',
            description: `Stylish chinos that are perfect for any occasion`,
            price: 20,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/2oYAAOSwGe9kUsX~/s-l960.webp',
            stock: 25,
            rate: 4.5,
            createdAt: new Date().setDate(new Date().getDate() - 6),
          },
          {
            name: 'Rain Boots',
            description: `Waterproof rain boots to keep little feet dry`,
            price: 30,
            currency: 'USD',
            image:
              'https://media.istockphoto.com/id/160902877/es/foto/rojo-gumboots-con-lunares-blancos-puntos.jpg?s=612x612&w=0&k=20&c=fGpKINOVY_OydFCT3MFlulvTXp7_SRRnJd_MfK3Sq7M=',
            stock: 18,
            rate: 4.9,
            createdAt: new Date().setDate(new Date().getDate() - 19),
          },
          {
            name: 'Fleece Hoodie',
            description: `Cozy fleece hoodie for chilly days`,
            price: 40,
            currency: 'USD',
            image:
              'https://media.istockphoto.com/id/1142211901/es/foto/frente-de-sudadera-con-capucha-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=QaDPZpndArxpJ_YzcEnhrVgsdZ4R1LKdW1vbMyxYEvc=',
            stock: 12,
            rate: 4.7,
            createdAt: new Date().setDate(new Date().getDate() - 7),
          },
          {
            name: 'Tutu Skirt',
            description: `Sparkly tutu skirt for the little dancer`,
            price: 22,
            currency: 'USD',
            image:
              'https://media.istockphoto.com/id/848821658/es/foto/falda-de-bailarina-glamour-rosa-p%C3%A1lido-tul-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=I9AaqwAc6CxXKRHxoG9y7BiZEcC-9R_D2bPkHwuqG7M=',
            stock: 20,
            rate: 4.8,
            createdAt: new Date().setDate(new Date().getDate() - 16),
          },
          {
            name: 'Sports Shorts',
            description: `Breathable sports shorts for active kids`,
            price: 18,
            currency: 'USD',
            image:
              'https://i.ebayimg.com/images/g/-OwAAOSwPpxmZ-r4/s-l960.webp',
            stock: 22,
            rate: 4.6,
            createdAt: new Date().setDate(new Date().getDate() - 10),
          },
          {
            name: 'Knit Sweater',
            description: `Warm knit sweater with a cute animal motif`,
            price: 45,
            currency: 'USD',
            image:
              'https://hmecuador.vtexassets.com/arquivos/ids/1362623-483-725?v=638346117653070000&width=483&height=725&aspect=true',
            stock: 10,
            rate: 4.7,
            createdAt: new Date().setDate(new Date().getDate() - 14),
          },
          {
            name: 'Baby Onesie',
            description: `Soft cotton onesie with snap buttons for easy changing`,
            price: 12,
            currency: 'USD',
            image:
              'https://hmecuador.vtexassets.com/arquivos/ids/1654418-483-725?v=638458401640930000&width=483&height=725&aspect=true',
            stock: 30,
            rate: 4.9,
            createdAt: new Date().setDate(new Date().getDate() - 21),
          },
        ],
      },
    ];

    const currentCategories = await this.categoryModel.find();
    if (currentCategories.length > 0) {
      return;
    }
    for (const category of categories) {
      const newCate = await this.categoryModel.create(category);
      for (const product of category.products) {
        await this.productModel.create({
          ...product,
          categoryId: newCate._id,
        });
      }
    }
  }

  async drop(): Promise<any> {
    await this.productModel.deleteMany({});
    await this.categoryModel.deleteMany({});
    return;
  }
}
