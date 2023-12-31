import { dbConnect } from "@/app/database/db";
import { NextResponse } from "next/server";

// it is static data but how can we add and use db here ?
// id 1 to 10 assign to sliders
// id 11 to 20 assign to categorys
// id 21 to 30 assign to Providers
// id 50 to 100 assign to Providers
// id 101 to 200 assign to sub categorys

// id 200 to 210 for home sub cat
// id 211 to 220 for home sub cat
// id 221 to 230 for home sub cat
// id 250 to 260 for deals of day
// id 260 to 270 for deals of day

dbConnect();

export async function POST(request) {
  return NextResponse.json(
    {
      success: true,
      message: `home screen fetching success`,
      data: {
        slider: {
          id: 51,
          title: ``,
          section_type: `slider`,
          sliders: [
            {
              id: 1,
              title: `Electrict`,
              description: `Electrict slider`,
              image: `https://media.istockphoto.com/id/1412399528/photo/professional-boiler-service-at-home.webp?s=2048x2048&w=is&k=20&c=rdsGKB8_RhEVcuYydhAqrYOxs2Uu39Zo21cAFu_a7pU=`,
            },
            {
              id: 2,
              title: `ac repair`,
              description: `ac repair slider`,
              image: `https://media.istockphoto.com/id/1407834781/photo/repairman-cleaning-and-fixing-indoors-ac-unit.webp?s=2048x2048&w=is&k=20&c=SmCAkuEDu2Ou5WVYfKjSd4IWMNCW9snK-AHsi7IgngM=`,
            },
            {
              id: 3,
              title: `plumbing`,
              description: `plumbing slider`,
              image: `https://media.istockphoto.com/id/1154644436/photo/handsome-plumber-at-the-kitchen.webp?s=2048x2048&w=is&k=20&c=vnFLvtCWLGBgSX3EjpFfdMxGKqBs-XpIK1fU4_RC398=`,
            },
            {
              id: 4,
              title: `Full Home Cleaning`,
              description: `Full Home Cleaning slider`,
              image: `https://media.istockphoto.com/id/847630070/photo/worker-in-overall-cleaning-countertop.webp?s=2048x2048&w=is&k=20&c=twP2iE4XSa5KBZ4yDp6E1sfJj8oz6sPqCsHQscgmlDM=`,
            },
            {
              id: 5,
              title: `Kitchen Installation`,
              description: `Kitchen Installation slider`,
              image: `https://media.istockphoto.com/id/1128872887/photo/male-handyman-installing-cabinet-door.webp?s=2048x2048&w=is&k=20&c=h504ANx2AUnbiLFVSBrZMdtJbtVYRY2UCiF3E30Aj5U=`,
            },
          ],
        },
        options: {
          id: 51,
          title: ``,
          section_type: `options`,
          cards: [
            {
              id: 1,
              title: `Showcase of the Week`,
              description: `services, ratings`,
              image: `https://plus.unsplash.com/premium_photo-1671578325135-edb91319a6d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
              slug: "showcase-of-week",
            },
            {
              id: 2,
              title: `Deals of the Week`,
              description: `upto 50% off`,
              image: `https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
              slug: "deals-of-week",
            },
            {
              id: 3,
              title: `Top Providers`,
              description: `highly rated providers`,
              image: `https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80`,
              slug: "top-providers",
            },
          ],
        },
        categorys: {
          id: 52,
          title: `categories`,
          section_type: `categories`,
          data: [
            {
              id: 11,
              sub_category_id: 50,
              title: `Home Cleaning`,
              description: `we are offering home cleaningn services`,
              image: `image here`,
            },
            {
              id: 12,
              sub_category_id: 51,
              title: `Lundry Cleaning`,
              description: `we are offering laundry cleaningn services`,
              image: `image here`,
            },
            {
              id: 13,
              sub_category_id: 52,
              title: `Kitchen Cleaning`,
              description: `we are offering kitchen cleaningn services`,
              image: `image here`,
            },
            {
              id: 14,
              sub_category_id: 53,
              title: `Slaon`,
              description: `we are offering salon services`,
              image: `image here`,
            },
            {
              id: 15,
              sub_category_id: 54,
              title: `Car Service`,
              description: `we are offering car services`,
              image: `image here`,
            },
            {
              id: 16,
              sub_category_id: 55,
              title: `Electric Service`,
              description: `we are offering electric services`,
              image: `image here`,
            },
            {
              id: 17,
              sub_category_id: 56,
              title: `Pest Control`,
              description: `we are offering pest control services`,
              image: `image here`,
            },
            {
              id: 18,
              sub_category_id: 57,
              title: `Plumbing Service`,
              description: `we are offering plumbing services`,
              image: `image here`,
            },
          ],
        },
        sub_Categorys: [
          {
            id: 53,
            category_id: 11,
            title: `home`,
            section_type: `sub_categories`,
            sub_categories: [
              {
                id: 201,
                name: `home1`,
                image: ``,
              },
              {
                id: 202,
                name: `home2`,
                image: ``,
              },
              {
                id: 203,
                name: `home3`,
                image: ``,
              },
            ],
          },
          {
            id: 102,
            category_id: 12,
            title: `laundry`,
            section_type: `sub_categories`,
            sub_categories: [
              {
                id: 211,
                name: `laundry1`,
                image: ``,
              },
              {
                id: 212,
                name: `laundry2`,
                image: ``,
              },
              {
                id: 213,
                name: `laundry3`,
                image: ``,
              },
            ],
          },
          {
            id: 103,
            category_id: 13,
            title: `kitchen`,
            section_type: `sub_categories`,
            sub_categories: [
              {
                id: 221,
                name: `kitchen1`,
                image: ``,
              },
              {
                id: 222,
                name: `kitchen2`,
                image: ``,
              },
              {
                id: 223,
                name: `kitchen3`,
                image: ``,
              },
            ],
          },
        ],
        providers: {
          id: 54,
          title: `our top rated provider`,
          section_type: `providers`,
          data: [
            {
              id: 21,
              title: `Home Cleaner`,
              available: true,
              rating: 4.5,
              order_complted: 10,
              banner: `https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.webp?s=2048x2048&w=is&k=20&c=v-y7ZrJRnJUE4CZYn9-jP8hnJj39dzMYA0qAVK0m5Zo=`,
              logo: `https://media.istockphoto.com/id/1200097176/vector/cleaning-service-vector-icon.webp?s=2048x2048&w=is&k=20&c=PkoZzpDaqCeb_b56674CqKbj2PY4PO0BHyOU6Xf17Pg=`,
              address: `Schwarzenberg, Switzerland, 6867`,
              description: `We offer a comprehensive range of home services to cater to all your needs. Whether you're facing plumbing issues, electrical problems, or require general maintenance, our skilled technicians are here to help. We understand that your home is your sanctuary, and we are committed to ensuring it remains in top condition.At our home service company, we believe in a customer-centric approach. Your satisfaction is our ultimate goal. We listen to your needs, provide transparent solutions, and ensure that the work is completed to your satisfaction. We take pride in building lasting relationships with our clients`,
              slug: `home-cleaner`,
            },
            {
              id: 22,
              title: `Laundry Cleaner`,
              available: true,
              rating: 4.0,
              order_complted: 7,
              banner: `https://media.istockphoto.com/id/1134696879/photo/laundry-room-with-a-washing-machine.webp?s=2048x2048&w=is&k=20&c=7sCJmezXwRdI2zr_Zd25D5SAhYpVkVMHdFXHztvCoyI=`,
              logo: `https://media.istockphoto.com/id/1286932939/vector/washing-and-drying-clothes-design-laundry-room-with-a-washing-machine-and-laundry-basket.webp?s=2048x2048&w=is&k=20&c=kAB3-YKx7sCCdjE6zgcR0WsjvKofhEhG35QRTskE2SM=`,
              address: `lorem, Switzerland, 6867`,
              description: `As your comprehensive plumbing service provider, we offer a wide range of plumbing solutions to meet your residential and commercial needs. Our services encompass everything from routine plumbing maintenance to emergency repairs. We understand the crucial role plumbing plays in your daily life, and we're here to keep it running smoothly.We offer competitive and transparent pricing for our plumbing services. You'll receive clear estimates and invoices, so you know exactly what you're paying for. Our goal is to provide cost-effective solutions without compromising on the quality of our work.`,
              slug: `laundry-cleaner`,
            },
            {
              id: 23,
              title: `Full Service Cleaner`,
              available: true,
              rating: 3.8,
              order_complted: 10,
              banner: `https://media.istockphoto.com/id/1224850161/photo/a-middle-aged-woman-tidies-up-her-cupboard-in-the-kitchen-and-reorganizes-everything.webp?s=2048x2048&w=is&k=20&c=FpaMzY_vy4Klg9fd6qM5f5C7TzCFVQpW0H9F29GovHg=`,
              logo: `https://media.istockphoto.com/id/1272687883/vector/stay-home-concept-home-love-heart-icon.webp?s=2048x2048&w=is&k=20&c=D71vWi6UGctpY7DAOX14FNcQ7o_Syp-VJOgWAfSglyM=`,
              address: `Schwarzenberg, Switzerland, 6867`,
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime in eum labore officiis id. Expedita quaerat molestias voluptatum nisi incidunt blanditiis quidem dolorem quisquam possimus esse accusantium voluptatibus debitis, corrupti repellat quam numquam aliquam voluptates, quis eveniet fugiat itaque earum eos reprehenderit laborum. Accusantium quo numquam eveniet eos quod!`,
              slug: `full-service-cleaner`,
            },
            {
              id: 24,
              title: `New Barber`,
              available: true,
              rating: 4.0,
              order_complted: 58,
              banner: `https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.webp?s=2048x2048&w=is&k=20&c=JfHrRbaY4VFXB3S3e-ZdNneYAoakxw0E3OK8egtEYPQ=`,
              logo: `https://media.istockphoto.com/id/1387780759/vector/barbershop-vector.webp?s=2048x2048&w=is&k=20&c=L2EMZicbO8KMMVMs0pM48pO9Jk1r01FI9xTOFpeXX8g=`,
              address: `Schwarzenberg, Switzerland, 6867`,
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime in eum labore officiis id. Expedita quaerat molestias voluptatum nisi incidunt blanditiis quidem dolorem quisquam possimus esse accusantium voluptatibus debitis, corrupti repellat quam numquam aliquam voluptates, quis eveniet fugiat itaque earum eos reprehenderit laborum. Accusantium quo numquam eveniet eos quod!`,
              slug: `new-barber`,
            },
            {
              id: 25,
              title: `Electric`,
              available: true,
              rating: 4.3,
              order_complted: 49,
              banner: `https://media.istockphoto.com/id/1049775258/photo/smiling-handsome-electrician-repairing-electrical-box-with-pliers-in-corridor-and-looking-at.webp?s=2048x2048&w=is&k=20&c=2MfJrDttEgalp7h1BQNUi8XZSgjKUH0dONnALk8QgN4=`,
              logo: `https://media.istockphoto.com/id/1032150246/vector/power-lightning-logo-icon-vector-electric-fast-thunder-bolt-symbol-isolated-on-transparent.webp?s=2048x2048&w=is&k=20&c=lSNuZ05BmYDg1LyIFqC_m-xqWLhGH6v2eVKk8VtFgFM=`,
              address: `Schwarzenberg, Switzerland, 6867`,
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime in eum labore officiis id. Expedita quaerat molestias voluptatum nisi incidunt blanditiis quidem dolorem quisquam possimus esse accusantium voluptatibus debitis, corrupti repellat quam numquam aliquam voluptates, quis eveniet fugiat itaque earum eos reprehenderit laborum. Accusantium quo numquam eveniet eos quod!`,
              slug: `electric`,
            },
            {
              id: 26,
              title: `Pest Control`,
              available: true,
              rating: 4.0,
              order_complted: 23,
              banner: `https://media.istockphoto.com/id/1212787021/photo/exterminators-in-warehouse-spraying-pesticides-with-sprayer.webp?s=2048x2048&w=is&k=20&c=MMilsZf224hsa8EOp5S39OASvofqyIozs-3MxisOLqA=`,
              logo: `https://media.istockphoto.com/id/1448695751/vector/pest-control-cockroach-logo-design-vector.webp?s=2048x2048&w=is&k=20&c=vqRpq2xA8gDaOCFmV37pxEELYk1Bw7emmiGTpOofkPQ=`,
              address: `Schwarzenberg, Switzerland, 6867`,
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime in eum labore officiis id. Expedita quaerat molestias voluptatum nisi incidunt blanditiis quidem dolorem quisquam possimus esse accusantium voluptatibus debitis, corrupti repellat quam numquam aliquam voluptates, quis eveniet fugiat itaque earum eos reprehenderit laborum. Accusantium quo numquam eveniet eos quod!`,
              slug: `pest-control`,
            },
          ],
        },
        deals: {
          id: 55,
          title: `Dealse of Day`,
          data: [
            {
              id: 250,
              title: `Home Service`,
              image: `https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.webp?s=2048x2048&w=is&k=20&c=v-y7ZrJRnJUE4CZYn9-jP8hnJj39dzMYA0qAVK0m5Zo=`,
              provider: `Home Cleaner`,
              rating: `4.5`,
              order_complted: 10,
              discount: `50%`,
              description: `We offer a comprehensive range of home services to cater to all your needs. Whether you're facing plumbing issues, electrical problems, or require general maintenance, our skilled technicians are here to help. We understand that your home is your sanctuary, and we are committed to ensuring it remains in top condition.At our home service company, we believe in a customer-centric approach. Your satisfaction is our ultimate goal. We listen to your needs, provide transparent solutions, and ensure that the work is completed to your satisfaction. We take pride in building lasting relationships with our clients`,
              short_intro: `We are your one-stop solution for all your home service needs. From plumbing and electrical work to cleaning and repairs, we've got you covered. Our team of skilled professionals is dedicated to delivering high-quality service. You can trust us to make your home a better place.`,
              available: true,
              address: `Schwarzenberg, Switzerland, 6867`,
              provider_id: 21,
              slug: `home-cleaner`,
            },
            {
              id: 251,
              title: `Plumbing Service`,
              image: `https://media.istockphoto.com/id/1134696879/photo/laundry-room-with-a-washing-machine.webp?s=2048x2048&w=is&k=20&c=7sCJmezXwRdI2zr_Zd25D5SAhYpVkVMHdFXHztvCoyI=`,
              provider: ` Laundry Cleaner`,
              rating: `4.0`,
              order_complted: 7,
              discount: `60%`,
              description: ` As your comprehensive plumbing service provider, we offer a wide range of plumbing solutions to meet your residential and commercial needs. Our services encompass everything from routine plumbing maintenance to emergency repairs. We understand the crucial role plumbing plays in your daily life, and we're here to keep it running smoothly.We offer competitive and transparent pricing for our plumbing services. You'll receive clear estimates and invoices, so you know exactly what you're paying for. Our goal is to provide cost-effective solutions without compromising on the quality of our work.`,
              short_intro: `We're your trusted source for all your plumbing needs. From fixing leaks to installing new fixtures, we've got the expertise to handle it all.We provide quality plumbing services to ensure your home's plumbing systems are in top condition. Your satisfaction is our priority.`,
              available: true,
              address: `Schwarzenberg, Switzerland, 6867`,
              provider_id: 22,
              slug: `laundry-cleaner`,
            },
          ],
        },
        tweets: {
          id: 56,
          title: `Twittes`,
          data: [
            {
              id: 261,
              username: "Alice",
              tweet: `🏠 Need a helping hand around the house? eRequirement's got you covered! From plumbing to cleaning, we've got the experts for all your home service needs. `,
              likes: 128,
              comments: 45,
              shares: 32,
              tags: `#eRequirement #HomeServices`,
            },
            {
              id: 262,
              username: "Bob",
              tweet: `Transform your house into a dream home with eRequirement's professional services. Quality, reliability, and a touch of magic—just for you! ✨`,
              likes: 256,
              comments: 78,
              shares: 55,
              tags: ` #DreamHome #eRequirement`,
            },
            {
              id: 263,
              username: "Charlie",
              tweet: `Experience the future of home services with eRequirement. Our expert team is ready to make your life easier and your home better. 🏡`,
              likes: 198,
              comments: 62,
              shares: 42,
              tags: `#FutureHome #eRequirement`,
            },
            {
              id: 264,
              username: "David",
              tweet: `No more home service hassles! eRequirement offers convenient and reliable solutions for all your household needs. Try us today! 💪`,
              likes: 175,
              comments: 50,
              shares: 38,
              tags: `#Convenience #eRequirement`,
            },
            {
              id: 265,
              username: "Eve",
              tweet: `Looking for top-notch home services? Look no further! eRequirement brings you the best professionals for every task. ⭐️`,
              likes: 212,
              comments: 54,
              shares: 40,
              tags: `#TopNotch #eRequirement`,
            },
            {
              id: 266,
              username: "Frank",
              tweet: `Your home deserves the best, and eRequirement delivers! Discover a world of quality and reliability with our services. 🏠`,
              likes: 245,
              comments: 68,
              shares: 47,
              tags: `#QualityService #eRequirement`,
            },
            {
              id: 267,
              username: "Grace",
              tweet: `Make your dream home a reality with eRequirement's expert touch. We bring beauty and functionality to every corner. ✨`,
              likes: 278,
              comments: 72,
              shares: 53,
              tags: `#DreamHome #eRequirement`,
            },
            {
              id: 268,
              username: "Harry",
              tweet: `Join the eRequirement family today and experience hassle-free home services like never before. Your satisfaction is our priority! 👨‍🔧`,
              likes: 307,
              comments: 85,
              shares: 60,
              tags: `#HassleFree #eRequirement`,
            },
            {
              id: 269,
              username: "Ivy",
              tweet: `eRequirement - Where expertise meets excellence. Discover a world of possibilities for your home. 🏡`,
              likes: 321,
              comments: 92,
              shares: 64,
              tags: `#Expertise #eRequirement`,
            },
            {
              id: 270,
              username: "Jack",
              tweet: `Home services made simple with eRequirement. Say goodbye to stress and hello to convenience! 🛠️`,
              likes: 352,
              comments: 104,
              shares: 70,
              tags: `#SimpleLiving #eRequirement`,
            },
          ],
        },
      },
    },
    {
      status: 200,
    }
  );
}
