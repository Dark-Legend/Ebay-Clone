const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "Brown Leather Bag",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/qQOgUJ6axG91F9fru7ctN85_Skk52SFKuMxKphOc0yA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNC9Ccm93/bi1MZWF0aGVyLUJh/Zy1UcmFuc3BhcmVu/dC5wbmc",
        price: 2500, // EG: 25.00
      },
    });

    await prisma.products.create({
      data: {
        title: "School Books",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/9-uTHGL8YwAVNgDuxTWK-Pi8ea_bUGITrtfZ6g-5IrA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvQm9v/ay1QTkctSW1hZ2Uu/cG5n",
        price: 1999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Women's White Shoes",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/1s7szg7z3DK227JUwCnaC6nhRlvBOVYOfKte8vsB2rk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMi9XaGl0/ZS1TbmVha2Vycy1Q/TkcucG5n",
        price: 9999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Book",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/2PuT8b2BaRL3mfVVaqGhueH5pQZLjFxsGZ6h18DEoc4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvT3Bl/bi1Cb29rLVBORy5w/bmc",
        price: 5999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Cuban Mug",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/K5_qzk3mpAAHtDR32e1xCW607POHK4F4G78-PhRnVoA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMi9NdWct/UE5HLVBpY3R1cmUu/cG5n",
        price: 1299,
      },
    });

    await prisma.products.create({
      data: {
        title: "Barrel of Oil",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/b0dzmJzhmggmIiQnwvU_Fbd1uY5AJjMRzZpU4zBgeFU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL29pbC1iYXJy/ZWwtcG5nLWZpbGUt/b2lsLWJhcnJlbC1n/cmFwaGljLXBuZy02/NDUucG5n",
        price: 6589,
      },
    });

    await prisma.products.create({
      data: {
        title: "Camera Gadgets",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/GXYRgIJkoVTw88KZ19lvovSkoD-OEKw11TckpQoBBNQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3Bob3RvLWNh/bWVyYS1wbmctcGhv/dG8tY2FtZXJhLXBu/Zy1pbWFnZS0xMDI0/LnBuZw",
        price: 22499,
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Record Player",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/H3nprUrKPCCVxKXvAaDLc3vzl5f0HJBTRGLaHJjRYh8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODU2YWE3MzRmNmFl/MjAyZmVkZjI3NzAu/cG5n",
        price: 23599,
      },
    });

    await prisma.products.create({
      data: {
        title: "Dinner Table",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/JSQU6_NLy4De-oo5LCqdnjv85UipPt4BpCMiVSDdvoo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3BuZy1kaW5u/ZXItdGFibGUtZGlu/aW5nLXRhYmxlLXBu/Zy1waWN0dXJlLXBu/Zy1pbWFnZS0xMjg2/LnBuZw",
        price: 8999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Mac Book Pro",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/dihEM_do9OjF6uGNp0JxXAsvHtE0s460hkOHDA_7nrw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2FscGlu/ZS1pbmt3ZWxsLTMy/NTkxNy5hcHBzcG90/LmNvbS9kZXZpY2Vz/L21hY2Jvb2stcHJv/LW0xLTE0LWhlYWRl/ci5wbmc",
        price: 159599,
      },
    });

    await prisma.products.create({
      data: {
        title: "Light House",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/dPpboErD0uWTCQwqEaWU2nhqoqI7EJvT9Mjcv4MKZlk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTIvTGln/aHRob3VzZS1QTkct/UGljdHVyZS5wbmc",
        price: 999599,
      },
    });

    await prisma.products.create({
      data: {
        title: "Computer with accessories",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/u_AcUGKBpRZbOFZfeERpbll-jjn1lUprgsZTqFPWvQs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Db21w/dXRlci1BY2Nlc3Nv/cmllcy1IYXJkd2Fy/ZS5wbmc",
        price: 9699,
      },
    });

    await prisma.products.create({
      data: {
        title: "Cup of Tea",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/QS5G2cbB3ZYumEH35ZaLd4gP4bUeLmoxx0PPfqth8-s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1NGQu/cG5n",
        price: 125,
      },
    });

    await prisma.products.create({
      data: {
        title: "Playstation Controller",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/YVghkvXkP0hoZRmK7YnAg4KibaDsEspi-_uBFqUoAZk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2JmY2Eu/cG5n",
        price: 1599,
      },
    });

    await prisma.products.create({
      data: {
        title: "Rasberries",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/PrX145Bil5NAbK70gWRj7z6or1B5mykRbBrOSTbvDuE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3Jhc3BiZXJy/aWVzLXBuZy1yYXNw/YmVycmllcy01MzEu/cG5n",
        price: 259,
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Car",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/WufuBeUIjViJVDUbMZZYivXFkVLkAyjHP_qUQ69XJzs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODRmMDczODZhNWFl/NDFhODNkZGVlNTMu/cG5n",
        price: 104959,
      },
    });

    await prisma.products.create({
      data: {
        title: "Mac Mini",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/V72LN9qfPabN7BltZjoPvl5gpNr-qKds6y08XGte4YI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2QwL01hY19NaW5p/XzIwMjBfc2lsdmVy/LnBuZw",
        price: 99999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Bench",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/e09pWNlj0h7sqGiTLvWxtqi_8DEn8YCSgJ9s3glGXTs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNy9CZW5j/aC5wbmc",
        price: 8999,
      },
    });

    await prisma.products.create({
      data: {
        title: "Broken Cars",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/qhVicq3g21kN7SogyvoM2u3-btD6i_S3pV0_mbJDVLM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzI4MC0yODAy/NzQyX3JlcGFpci1h/bmQtYXV0by1tYWlu/dGVuYW5jZS1jcmFz/aGVkLWNhci10cmFu/c3BhcmVudC1iYWNr/Z3JvdW5kLnBuZw",
        price: 256595,
      },
    });

    await prisma.products.create({
      data: {
        title: "Guitar",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://imgs.search.brave.com/KSX9ZOpXHZ1jCpkZqZBivbweuRLsX7fdCnpLrlH5Umo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ni9BY291c3RpYy1H/dWl0YXIucG5n",
        price: 12595,
      },
    });
  } catch (error) {
    // console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
