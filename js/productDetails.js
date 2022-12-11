function changeMainImage(imglink) {
  document.querySelector("img.img-main").src = imglink;
}
function opendetail() {
  document.querySelector(".description-detail").style.display = "block";
  document.querySelector(".material-detail").style.display = "none";
}
function openmaterial() {
  document.querySelector(".description-detail").style.display = "none";
  document.querySelector(".material-detail").style.display = "block";
}

function addToCart(productImage, productName, productDimension, price) {
  {
    alert("Item " + productName + " is successfully added to your cart");
  }
  let list = [];
  if (window.localStorage.getItem("list")) {
    list = JSON.parse(window.localStorage.getItem("list"));
  }

  const addToCart = {
    productId: self.crypto.randomUUID(),
    productImage: productImage,
    productName: productName,
    productDimension: productDimension,
    productPrice: price,
    productQuantity: 1,
    subtotalPrice: 0,
  };

  addToCart.subtotalPrice = addToCart.productPrice * addToCart.productQuantity;

  list = [...list, addToCart];

  window.localStorage.setItem("list", JSON.stringify(list));

}

const chair1 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Veneto Club Chair",
  price: 100.0,
  dimension: "L67 x W73 x H80",
  description:
    "The Veneto Club Chair offers a beautifully understated elegance. With plush padded upholstery and slim profile legs, this would add a touch of contemporary elegance to your living room. The Veneto club chair combines classic tub styling with some modern twists, such as genuine leather that is practical yet luxurious. With wonderful sloping arms, low enough to allow for, the chair makes chatting away with your family and guests easy and comfortable.",
  material:
    "New buck leather upholstered only. E1-compliant multi-layered plywood inner frame and joints. Brass-finished stainless steel legs. High density foam. Resilient sinuous springs with webbing and deck cover.",
};
const chair2 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Piero Club Chair",
  price: 200.0,
  dimension: "L77 x W76 x H78",
  description:
    "A mid-century modern chic lounge chair, the familiar, leaned-back posture of the classic lounge chair takes on new resonance when covered in leather. Casual shapes and touchable textures create comfort and inspire easy conversation. Keep things fresh and build in flexibility by placing tables side by side, ready to move at a whim. This lounge chair, with its vintage-vibe brass elements, perfectly resembles classy seating in the chic libraries of the 1940's.",
  material:
    "Upholstered in fabric. E1-compliant multi-layered plywood inner frame and joints. Brass-finished stainless steel legs. High density foam. Resilient sinuous springs with webbing and deck cover.",
};
const chair3 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Linate Sofa Single",
  price: 300.0,
  dimension: "L98 x W174 x H92",
  description:
    "Designed in a modern minimalist style, the Linate furniture collection features elegant smoked oak overlays on wood with open grain finish, hints of brass elements and subtle, understated gunmetal powder-coated mild steel legs. This is a collection that celebrates minimalist and masculine elements in a stylish and modern way, through its distinctive brass finishes, sleek black lines achieved through matte gunmetal powder-coated mild steel and dark stained oak wood. With its deliberately slim legs, the furniture is also designed to look as though it lightly 'floats' above the ground, while showcasing the precision and strength of its design as a sturdy, stable piece of furniture.",
  material:
    "Frame: Solid American alder wood <br> Side and rail panels: Engineered wood (MDF and laminated veneer lumber) <br> Tightly upholstered in 100% polyester fabric, with foam and feather seating. Fabric comes in various other colour options. <br> Legs: Steel",
};
const table1 = {
  mainimage: "../asset/Table/1.png",
  secimage: "../asset/Table/4.png",
  thirdimage: "../asset/Table/5.png",
  fourthimage: "../asset/Table/6.png",
  productname: "Dual Tone Dining",
  price: 500.0,
  dimension: "L180 x W90 x H75",
  description:
    "This quirky collection is sterling matrimony between two types of hardy American wood-bright oak and dark walnut set in mid-century flavors. Its simple two-toned design and light colors allow for the easy matching of an eclectic mix of colors and patterns.",
  material:
    "Solid American oak top. Legs in solid American walnut with brass-finished metal stretchers.",
};
const table2 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Crimson Dining Table",
  price: 600.0,
  dimension: "L160 x W90 x H75",
  description:
    "The slim tapered legs of the crimson collection's design instantly carve out a distinct character of its own, with a hint of vintage. As the legs of the furniture are tilted obliquely outwards, they lend vitality and character to the collection.",
  material:
    "American Walnut overlay top on engineered wood with solid rubber wood legs in wenge stain.",
};
const table3 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Weiland Round Dining",
  price: 400.0,
  dimension: "L110 x W110 x H75",
  description:
    "The simple, democratic design of 1950s Scandinavian furniture lives on in today's mid-century modern collection, influencing the natural curves and geometric lines of the Weiland collection. Mid-century modern's emphasis on pared-down forms, contemporary patterns, and natural materials allows the fluid form of this collection.",
  material: "Solid American Walnut.",
};
const wardrobe1 = {
  mainimage: "../asset/wardrobe/1.1.png",
  secimage: "../asset/wardrobe/4.png",
  thirdimage: "../asset/wardrobe/5.png",
  fourthimage: "../asset/wardrobe/6.png",
  productname: "Rakkestad",
  price: 679.0,
  dimension: "L117 x W55 x H176",
  description:
    "Of course your home should be a safe place for the entire family. That's why a safety fitting is included so that you can attach the wardrobe to the wall. Maximise your storage and create a coordinated look by building your own RAKKESTAD wardrobe combination. Additional RAKKESTAD shelves can be purchased to customise your storage solution to your personal needs.",
  material:
    "Top panel/ Bottom panel/ Side panel/ Shelf/ Plinth:<br> Particleboard, Paper foil<br>Back panel:<br>Fibreboard, Printed acrylic paint<br>Door frame:<br>Fibreboard, Particleboard, Paper foil<br>Door panel:<br>Fibreboard, Paper foil.",
};
const wardrobe2 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Vuku",
  price: 65.0,
  dimension: "L74 x W51 x H149",
  description:
    "A hook on each side - perfect for clothes, bags or other things you want close at hand.You can easily clean the bottom with a damp cloth since it's made from durable polypropylene plastic, the same material used for our well-known FRAKTA carrier bag.Easy to bring home since it is roll packed.Easy to assemble – no tools required.",
  material:
    "Fabric: <br>100% polyester (min. 90% recycled), Polyurethane plastic<br>Other textiles:<br>100% polypropylene<br>Mesh:<br>100% polyester (min. 90% recycled) <br>Zipper:<br>100% polyester",
};
const wardrobe3 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Visthus",
  price: 1699.0,
  dimension: "L122 x W59 x H216",
  description:
    "Smooth running drawers with pull-out stop.Adjustable feet make it possible to compensate any irregularities in the floor.Easy to assemble.",
  material:
    "Shelf:<br>Particleboard, Fibreboard, Plastic edging, Plastic foil<br>Back panel:<br>Fibreboard, Plastic foil<br>Drawer bottom:<br>Fibreboard, Plastic foil, Plastic foil<br>Drawer side/ Drawer back:<br>Particleboard, Plastic edging, Paper foil",
};
const mattress1 = {
  mainimage: "../asset/mattress/1.1.png",
  secimage: "../asset/mattress/4.png",
  thirdimage: "../asset/mattress/5.png",
  fourthimage: "../asset/mattress/6.png",
  productname: "Vagstranda",
  price: 1599.0,
  dimension: "L200 x W150  x H28",
  description:
    "The innovative S-core of the mattress has two layers of pocket springs to provide comfort exactly where it's needed and support your back. Individually wrapped pocket springs isolate movements, so you won't disturb your partner if you have the habit of moving a lot when sleeping. Pressure points like shoulders and hips are supported by 7 comfort zones-slightly softer springs around the heavier parts of the body help keep your body aligned.",
  material:
    "Ticking/ Ticking, top/ Ticking, side:<br>100 % polyester (100% recycled)<br>Ticking, underside/ Lining, top/ Lining, side:<br>Non-woven polypropylene<br>Filling, top:<br>100 % polyester<br>Filling, top:<br>Polyurethane foam 25 kg/cu.m.",
};
const mattress2 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Vasdo",
  price: 299.0,
  dimension: "L200 x W150 x H17",
  description:
    "Bonnell springs provide stable and even support, giving you the feeling that you´re sleeping on top of the mattress rather than in it. A layer of wadding and foam on the top adds a soft, cushioning feel to the firmness of the Bonnell springs. The Bonnell springs help you maintain a comfortable body temperature while you sleep, since they have an open construction that allows air to circulate. The mattress is roll-packed so it’s easy to carry home and its practical handles on the sides help you when moving the mattress.",
  material:
    "Ticking/ Ticking:<br>100 % polyester (100% recycled)<br>Lining, top/ Lining, side:<br>100% polypropylene<br>Filling, top/ Filling, side:<br>100 % polyester<br>Comfort filling:<br>Polyurethane foam 25 kg/cu.m.",
};
const mattress3 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Vatnestrom",
  price: 3499.0,
  dimension: "L200 x W180 x H26",
  description:
    "Natural materials like natural latex, coconut fiber, cotton and wool provides extra comfort and gives a very pleasant sleeping environment with an even temperature. The textiles closest to your skin are made of 100% cotton from sustainable sources. You get support in the right places with the help of individually wrapped pocket springs that work independently and closely follow your body. 5 comfort zones give very precise support and relieve pressure on your shoulders and hips.",
  material:
    "Ticking/ Ticking/ Ticking/ Ticking, underside:<br>100% cotton<br>Filling:<br>Polylactide (PLA) fibre wadding<br>Filling material:<br>Latex foam<br>Ticking, side:<br>53% linen, 47% viscose/rayon",
};
const cabinet1 = {
  mainimage: "../asset/Cabinet/1.1.png",
  secimage: "../asset/Cabinet/4.png",
  thirdimage: "../asset/Cabinet/5.png",
  fourthimage: "../asset/Cabinet/6.png",
  productname: "Godmorgon",
  price: 650.0,
  dimension: "L100 x W49 x H64",
  description:
    "10 year guarantee. Read about the terms in the guarantee brochure. Laminate countertops are highly durable and easy to maintain. A little care will keep them looking brand new for years. You can place the wash-basin where you prefer-left, right or in the middle. Smooth-running and soft-closing drawers with pull-out stop.",
  material:
    " Frame/ Back rail:<br>Particleboard, Plastic foil, Plastic edging<br>Drawer front:<br>Fibreboard, Plastic foil, Plastic foil, Plastic edging<br>Drawer sides/ Drawer back:<br>Solid birch, Clear acrylic lacquer<br>Drawer bottom:<br>Particleboard, Melamine foil, Plastic edging",
};
const cabinet2 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Hemnes",
  price: 550.0,
  dimension: "L82 x W48 x H91",
  description:
    "Coordinates nicely with other products in the HEMNES series. The straightforward, crafted look of the drawers and knobs enhances the Scandinavian expression. The drawer has been rigorously tested to make sure it can be open and closed over many years of morning rush hour. The round shape of the wash-basin is a soft contrast to the rectangular shapes of the furniture. There’s space for toothbrushes, soap dispenser and other smaller things next to the wash-basin.",
  material:
    "Basematerial/ Top panel:<br>Fibreboard, Pigmented polyester powder coating<br>Drawer sides/ Drawer back:<br>Solid pine, Clear acrylic lacquer<br>Drawer bottom:<br>Particleboard, Melamine foil, Melamine foil, ABS plastic<br>Filling:<br>Particleboard, Melamine foil, Acrylic paint, Melamine foil",
};
const cabinet3 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Enhet",
  price: 450.0,
  dimension: "L64 x W43 x H65",
  description:
    "A base cabinet for wash-basin with shelf that is perfect for hiding towels and hygiene products that often create clutter. Plenty of storage space and a perfect fit in smaller bathrooms since the base cabinet is only 60 cm wide. Smooth, durable and easy-to-clean ceramic wash-basin with space for toothbrushes, soap dispenser and other smaller things on the wide back edge. You save water and energy every time you lift the lever of the mixer tap thanks to the aerator device that prevents unnecessary use of water.",
  material:
    "Basematerial:<br>Particleboard<br>Front side/ Backside:<br>Plastic foil<br>Edge:<br>Plastic edging<br>Handle<br>Aluminium, Epoxy/polyester powder coating",
};
const shelf1 = {
  mainimage: "../asset/shelf/1.1.png",
  secimage: "../asset/shelf/4.png",
  thirdimage: "../asset/shelf/5.png",
  fourthimage: "../asset/shelf/6.png",
  productname: "Hejneo",
  price: 230.0,
  dimension: "L50 x W78 x H171",
  description:
    "You can easily expand your combination if you need more storage by adding on sections and shelves. Untreated solid wood is a durable natural material which is even more hardwearing and easy to look after if you oil or wax the surface. You can personalise the furniture even more by staining or painting it your favourite colour.",
  material:
    "Post/ shelf<br> Solid pine, Solid spruce<br> Cross-brace<br> Steel, Galvanized",
};
const shelf2 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Hyllis",
  price: 237.0,
  dimension: "L180 x W27 x H74",
  description:
    "This storage unit is perfect for plant pots and plants ⎼ and can easily be transformed into a greenhouse if you complete with HYLLIS cover. Can be used both indoors and outdoors, and is just as suitable on the balcony as in the kitchen, hallway or bathroom. With HYLLIS cover you protect your things from rain and dust, sold separately. The cover is easy to put on and remove.",
  material:
    "Basematerial:<br>Galvanized steel<br>Foot:<br>Polyamide plastic<br>Cover<br>100% polyethylene",
};
const shelf3 = {
  mainimage: "../asset/chair/1.png",
  secimage: "../asset/chair/chairdetail2.png",
  thirdimage: "../asset/chair/chairdetail3.png",
  fourthimage: "../asset/chair/chairdetail4.png",
  productname: "Bergshult",
  price: 145.0,
  dimension: "L120 x W30 ",
  description:
    "The wall shelf has one bevelled and one smooth edge on the long side, so you can choose the side you want facing the room depending on which of the two different styles you like the most.",
  material:
    "Shelf<br>Particleboard, Paper foil, Plastic edging, Plastic edging<br>Bracket<br>Fibreboard, Acrylic paint",
};

const productName = new URLSearchParams(window.location.search).get("product");
const productDetail = document.querySelector(".product");

if (productName === "chair1") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${chair1.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${chair1.mainimage}" 
      alt="" 
      onclick="changeMainImage('${chair1.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${chair1.secimage} 
      alt=""
      onclick="changeMainImage('${chair1.secimage}')">
      <img 
      class="img-bot"
      src=${chair1.thirdimage}
      alt=""
      onclick="changeMainImage('${chair1.thirdimage}')">
      <img 
      class="img-bot"
      src=${chair1.fourthimage}
      alt=""
      onclick="changeMainImage('${chair1.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${chair1.productname}
      <br><p class="harga">MYR ${chair1.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${chair1.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${chair1.description}</p>
        <p class="material-detail" style="display: none;">${chair1.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${chair1.mainimage}','${chair1.productname}','${chair1.dimension}','${chair1.price}')" ><span class="cart">Add to Cart</span><span class="price">RM100.00</span></button>
      </div>
    </div>`;
} else if (productName === "chair2") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${chair2.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${chair2.mainimage}" 
      alt="" 
      onclick="changeMainImage('${chair2.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${chair2.secimage} 
      alt=""
      onclick="changeMainImage('${chair2.secimage}')">
      <img 
      class="img-bot"
      src=${chair2.thirdimage}
      alt=""
      onclick="changeMainImage('${chair1.thirdimage}')">
      <img 
      class="img-bot"
      src=${chair2.fourthimage}
      alt=""
      onclick="changeMainImage('${chair2.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${chair2.productname}
      <br><p class="harga">MYR ${chair2.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${chair2.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${chair2.description}</p>
        <p class="material-detail" style="display: none;">${chair2.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${chair2.mainimage}','${chair2.productname}','${chair2.dimension}','${chair2.price}')"><span class="cart">Add to Cart</span><span class="price">RM200.00</span></button>
      </div>
    </div>`;
} else if (productName === "chair3") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${chair3.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${chair3.mainimage}" 
      alt="" 
      onclick="changeMainImage('${chair3.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${chair3.secimage} 
      alt=""
      onclick="changeMainImage('${chair3.secimage}')">
      <img 
      class="img-bot"
      src=${chair3.thirdimage}
      alt=""
      onclick="changeMainImage('${chair3.thirdimage}')">
      <img 
      class="img-bot"
      src=${chair3.fourthimage}
      alt=""
      onclick="changeMainImage('${chair3.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${chair3.productname}
      <br><p class="harga">MYR ${chair3.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${chair3.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${chair3.description}</p>
        <p class="material-detail" style="display: none;">${chair3.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${chair3.mainimage}','${chair3.productname}','${chair3.dimension}','${chair3.price}')"><span class="cart">Add to Cart</span><span class="price">RM300.00</span></button>
      </div>
    </div>`;
} else if (productName === "table1") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${table1.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${table1.mainimage}" 
      alt="" 
      onclick="changeMainImage('${table1.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${table1.secimage} 
      alt=""
      onclick="changeMainImage('${table1.secimage}')">
      <img 
      class="img-bot"
      src=${table1.thirdimage}
      alt=""
      onclick="changeMainImage('${table1.thirdimage}')">
      <img 
      class="img-bot"
      src=${table1.fourthimage}
      alt=""
      onclick="changeMainImage('${table1.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${table1.productname}
      <br><p class="harga">MYR ${table1.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${table1.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${table1.description}</p>
        <p class="material-detail" style="display: none;">${table1.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${table1.mainimage}','${table1.productname}','${table1.dimension}','${table1.price}')"><span class="cart">Add to Cart</span><span class="price">RM500.00</span></button>
      </div>
    </div>`;
} else if (productName === "table2") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${table2.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${table2.mainimage}" 
      alt="" 
      onclick="changeMainImage('${table2.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${table2.secimage} 
      alt=""
      onclick="changeMainImage('${table2.secimage}')">
      <img 
      class="img-bot"
      src=${table2.thirdimage}
      alt=""
      onclick="changeMainImage('${table2.thirdimage}')">
      <img 
      class="img-bot"
      src=${table2.fourthimage}
      alt=""
      onclick="changeMainImage('${table2.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${table2.productname}
      <br><p class="harga">MYR ${table2.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${table2.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${table2.description}</p>
        <p class="material-detail" style="display: none;">${table2.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${table2.mainimage}','${table2.productname}','${table2.dimension}','${table2.price}')"><span class="cart">Add to Cart</span><span class="price">RM600.00</span></button>
      </div>
    </div>`;
} else if (productName === "table3") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${table3.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${table3.mainimage}" 
      alt="" 
      onclick="changeMainImage('${table3.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${table3.secimage} 
      alt=""
      onclick="changeMainImage('${table3.secimage}')">
      <img 
      class="img-bot"
      src=${table3.thirdimage}
      alt=""
      onclick="changeMainImage('${table3.thirdimage}')">
      <img 
      class="img-bot"
      src=${table3.fourthimage}
      alt=""
      onclick="changeMainImage('${table3.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${table3.productname}
      <br><p class="harga">MYR ${table3.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${table3.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${table3.description}</p>
        <p class="material-detail" style="display: none;">${table3.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${table3.mainimage}','${table3.productname}','${table3.dimension}','${table3.price}')"><span class="cart">Add to Cart</span><span class="price">RM400.00</span></button>
      </div>
    </div>`;
} else if (productName === "wardrobe1") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${wardrobe1.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${wardrobe1.mainimage}" 
      alt="" 
      onclick="changeMainImage('${wardrobe1.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${wardrobe1.secimage} 
      alt=""
      onclick="changeMainImage('${wardrobe1.secimage}')">
      <img 
      class="img-bot"
      src=${wardrobe1.thirdimage}
      alt=""
      onclick="changeMainImage('${wardrobe1.thirdimage}')">
      <img 
      class="img-bot"
      src=${wardrobe1.fourthimage}
      alt=""
      onclick="changeMainImage('${wardrobe1.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${wardrobe1.productname}
      <br><p class="harga">MYR ${wardrobe1.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${wardrobe1.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${wardrobe1.description}</p>
        <p class="material-detail" style="display: none;">${wardrobe1.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart "onclick="addToCart('${wardrobe1.mainimage}','${wardrobe1.productname}','${wardrobe1.dimension}','${wardrobe1.price}')"><span class="cart">Add to Cart</span><span class="price">RM679.00</span></button>
      </div>
    </div>`;
} else if (productName === "wardrobe2") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${wardrobe2.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${wardrobe2.mainimage}" 
      alt="" 
      onclick="changeMainImage('${wardrobe2.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${wardrobe2.secimage} 
      alt=""
      onclick="changeMainImage('${wardrobe2.secimage}')">
      <img 
      class="img-bot"
      src=${wardrobe2.thirdimage}
      alt=""
      onclick="changeMainImage('${wardrobe2.thirdimage}')">
      <img 
      class="img-bot"
      src=${wardrobe2.fourthimage}
      alt=""
      onclick="changeMainImage('${wardrobe2.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${wardrobe2.productname}
      <br><p class="harga">MYR ${wardrobe2.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${wardrobe2.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${wardrobe2.description}</p>
        <p class="material-detail" style="display: none;">${wardrobe2.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${wardrobe2.mainimage}','${wardrobe2.productname}','${wardrobe2.dimension}','${wardrobe2.price}')"><span class="cart">Add to Cart</span><span class="price">RM65.00</span></button>
      </div>
    </div>`;
} else if (productName === "wardrobe3") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${wardrobe3.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${wardrobe3.mainimage}" 
      alt="" 
      onclick="changeMainImage('${wardrobe3.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${wardrobe3.secimage} 
      alt=""
      onclick="changeMainImage('${wardrobe3.secimage}')">
      <img 
      class="img-bot"
      src=${wardrobe3.thirdimage}
      alt=""
      onclick="changeMainImage('${wardrobe3.thirdimage}')">
      <img 
      class="img-bot"
      src=${wardrobe3.fourthimage}
      alt=""
      onclick="changeMainImage('${wardrobe3.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${wardrobe3.productname}
      <br><p class="harga">MYR ${wardrobe3.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${wardrobe3.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${wardrobe3.description}</p>
        <p class="material-detail" style="display: none;">${wardrobe3.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${wardrobe3.mainimage}','${wardrobe3.productname}','${wardrobe3.dimension}','${wardrobe3.price}')"><span class="cart">Add to Cart</span><span class="price">RM1699.00</span></button>
      </div>
    </div>`;
} else if (productName === "mattress1") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${mattress1.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${mattress1.mainimage}" 
      alt="" 
      onclick="changeMainImage('${mattress1.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${mattress1.secimage} 
      alt=""
      onclick="changeMainImage('${mattress1.secimage}')">
      <img 
      class="img-bot"
      src=${mattress1.thirdimage}
      alt=""
      onclick="changeMainImage('${mattress1.thirdimage}')">
      <img 
      class="img-bot"
      src=${mattress1.fourthimage}
      alt=""
      onclick="changeMainImage('${mattress1.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${mattress1.productname}
      <br><p class="harga">MYR ${mattress1.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${mattress1.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${mattress1.description}</p>
        <p class="material-detail" style="display: none;">${mattress1.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${mattress1.mainimage}','${mattress1.productname}','${mattress1.dimension}','${mattress1.price}')"><span class="cart">Add to Cart</span><span class="price">RM1599.00</span></button>
      </div>
    </div>`;
} else if (productName === "mattress2") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${mattress2.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${mattress2.mainimage}" 
      alt="" 
      onclick="changeMainImage('${mattress2.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${mattress2.secimage} 
      alt=""
      onclick="changeMainImage('${mattress2.secimage}')">
      <img 
      class="img-bot"
      src=${mattress2.thirdimage}
      alt=""
      onclick="changeMainImage('${mattress2.thirdimage}')">
      <img 
      class="img-bot"
      src=${mattress2.fourthimage}
      alt=""
      onclick="changeMainImage('${mattress2.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${mattress2.productname}
      <br><p class="harga">MYR ${mattress2.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${mattress2.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${mattress2.description}</p>
        <p class="material-detail" style="display: none;">${mattress2.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${mattress2.mainimage}','${mattress2.productname}','${mattress2.dimension}','${mattress2.price}')"><span class="cart">Add to Cart</span><span class="price">RM299.00</span></button>
      </div>
    </div>`;
} else if (productName === "mattress3") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${mattress3.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${mattress3.mainimage}" 
      alt="" 
      onclick="changeMainImage('${mattress3.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${mattress3.secimage} 
      alt=""
      onclick="changeMainImage('${mattress3.secimage}')">
      <img 
      class="img-bot"
      src=${mattress3.thirdimage}
      alt=""
      onclick="changeMainImage('${mattress3.thirdimage}')">
      <img 
      class="img-bot"
      src=${mattress3.fourthimage}
      alt=""
      onclick="changeMainImage('${mattress3.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${mattress3.productname}
      <br><p class="harga">MYR ${mattress3.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${mattress3.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${mattress3.description}</p>
        <p class="material-detail" style="display: none;">${mattress3.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${mattress3.mainimage}','${mattress3.productname}','${mattress3.dimension}','${mattress3.price}')"><span class="cart">Add to Cart</span><span class="price">RM3499.00</span></button>
      </div>
    </div>`;
} else if (productName === "cabinet1") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${cabinet1.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${cabinet1.mainimage}" 
      alt="" 
      onclick="changeMainImage('${cabinet1.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${cabinet1.secimage} 
      alt=""
      onclick="changeMainImage('${cabinet1.secimage}')">
      <img 
      class="img-bot"
      src=${cabinet1.thirdimage}
      alt=""
      onclick="changeMainImage('${cabinet1.thirdimage}')">
      <img 
      class="img-bot"
      src=${cabinet1.fourthimage}
      alt=""
      onclick="changeMainImage('${cabinet1.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${cabinet1.productname}
      <br><p class="harga">MYR ${cabinet1.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${cabinet1.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${cabinet1.description}</p>
        <p class="material-detail" style="display: none;">${cabinet1.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${cabinet1.mainimage}','${cabinet1.productname}','${cabinet1.dimension}','${cabinet1.price}')"><span class="cart">Add to Cart</span><span class="price">RM650.00</span></button>
      </div>
    </div>`;
} else if (productName === "cabinet2") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${cabinet2.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${cabinet2.mainimage}" 
      alt="" 
      onclick="changeMainImage('${cabinet2.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${cabinet2.secimage} 
      alt=""
      onclick="changeMainImage('${cabinet2.secimage}')">
      <img 
      class="img-bot"
      src=${cabinet2.thirdimage}
      alt=""
      onclick="changeMainImage('${cabinet2.thirdimage}')">
      <img 
      class="img-bot"
      src=${cabinet2.fourthimage}
      alt=""
      onclick="changeMainImage('${cabinet2.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${cabinet2.productname}
      <br><p class="harga">MYR ${cabinet2.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${cabinet2.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${cabinet2.description}</p>
        <p class="material-detail" style="display: none;">${cabinet2.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${cabinet2.mainimage}','${cabinet2.productname}','${cabinet2.dimension}','${cabinet2.price}')"><span class="cart">Add to Cart</span><span class="price">RM550.00</span></button>
      </div>
    </div>`;
} else if (productName === "cabinet3") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${cabinet3.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${cabinet3.mainimage}" 
      alt="" 
      onclick="changeMainImage('${cabinet3.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${cabinet3.secimage} 
      alt=""
      onclick="changeMainImage('${cabinet3.secimage}')">
      <img 
      class="img-bot"
      src=${cabinet3.thirdimage}
      alt=""
      onclick="changeMainImage('${cabinet3.thirdimage}')">
      <img 
      class="img-bot"
      src=${cabinet3.fourthimage}
      alt=""
      onclick="changeMainImage('${cabinet3.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${cabinet3.productname}
      <br><p class="harga">MYR ${cabinet3.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${cabinet3.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${cabinet3.description}</p>
        <p class="material-detail" style="display: none;">${cabinet3.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${cabinet3.mainimage}','${cabinet3.productname}','${cabinet3.dimension}','${cabinet3.price}')"><span class="cart">Add to Cart</span><span class="price">RM450.00</span></button>
      </div>
    </div>`;
} else if (productName === "shelf1") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${shelf1.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${shelf1.mainimage}" 
      alt="" 
      onclick="changeMainImage('${shelf1.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${shelf1.secimage} 
      alt=""
      onclick="changeMainImage('${shelf1.secimage}')">
      <img 
      class="img-bot"
      src=${shelf1.thirdimage}
      alt=""
      onclick="changeMainImage('${shelf1.thirdimage}')">
      <img 
      class="img-bot"
      src=${shelf1.fourthimage}
      alt=""
      onclick="changeMainImage('${shelf1.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${shelf1.productname}
      <br><p class="harga">MYR ${shelf1.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${shelf1.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${shelf1.description}</p>
        <p class="material-detail" style="display: none;">${shelf1.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${shelf1.mainimage}','${shelf1.productname}','${shelf1.dimension}','${shelf1.price}')"><span class="cart">Add to Cart</span><span class="price">RM230.00</span></button>
      </div>
    </div>`;
} else if (productName === "shelf2") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${shelf2.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${shelf2.mainimage}" 
      alt="" 
      onclick="changeMainImage('${shelf2.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${shelf2.secimage} 
      alt=""
      onclick="changeMainImage('${shelf2.secimage}')">
      <img 
      class="img-bot"
      src=${shelf2.thirdimage}
      alt=""
      onclick="changeMainImage('${shelf2.thirdimage}')">
      <img 
      class="img-bot"
      src=${shelf2.fourthimage}
      alt=""
      onclick="changeMainImage('${shelf2.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${shelf2.productname}
      <br><p class="harga">MYR ${shelf2.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${shelf2.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${shelf2.description}</p>
        <p class="material-detail" style="display: none;">${shelf2.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${shelf2.mainimage}','${shelf2.productname}','${shelf2.dimension}','${shelf2.price}')"><span class="cart">Add to Cart</span><span class="price">RM237.00</span></button>
      </div>
    </div>`;
} else if (productName === "shelf3") {
  productDetail.innerHTML = `<div class="left">
    <img class="img-main" src=${shelf3.mainimage} alt="" />
    <br>
    <div class="chair-detail">
      <img 
      class="img-bot" 
      src="${shelf3.mainimage}" 
      alt="" 
      onclick="changeMainImage('${shelf3.mainimage}')"
      >
      <img 
      class="img-bot"
      src=${shelf3.secimage} 
      alt=""
      onclick="changeMainImage('${shelf3.secimage}')">
      <img 
      class="img-bot"
      src=${shelf3.thirdimage}
      alt=""
      onclick="changeMainImage('${shelf3.thirdimage}')">
      <img 
      class="img-bot"
      src=${shelf3.fourthimage}
      alt=""
      onclick="changeMainImage('${shelf3.fourthimage}')">
      
    </div>
  </div>
  <div class="item6">
    <p class="veneto">
      ${shelf3.productname}
      <br><p class="harga">MYR ${shelf3.price}</p> 
    </p>
    <p class="dimension">
        Dimensions (CM)
      </p>
      <p class="lwh">
      ${shelf3.dimension}
      </p>
      <button class="button-desc" onclick="opendetail()">Description</button>
      <button class="button-material" onclick="openmaterial()">Materials</button>
      <div class="item-description">
        <br>
        <p class="description-detail">${shelf3.description}</p>
        <p class="material-detail" style="display: none;">${shelf3.material}</p>
      </div>
      <div class="cart-button"><button class="add-to-cart" onclick="addToCart('${shelf3.mainimage}','${shelf3.productname}','${shelf3.dimension}','${shelf3.price}')"><span class="cart">Add to Cart</span><span class="price">RM145.00</span></button>
      </div>
    </div>`;
}

function refreshCartCount() {
  let list = JSON.parse(localStorage.getItem("list"));

  if (list) {
    document.getElementById("count").innerHTML = list.length;
  }
}

refreshCartCount();
