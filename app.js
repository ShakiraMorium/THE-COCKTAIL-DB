// // const loadAllDrinks = () => {
// //   fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
// //     .then((res) => res.json())
// //     .then((data) => displayDrinks(data));
// // };
 

// // // Call the function to load products
// // const displayDrinks = (drinks) => {
// //   const drinkContainer = document.getElementById("drink-container");
// //   drinks.forEach((drink) =>{
// //     console.log(drink);
// //     const div = document.createElement("div");
// //     div.classList.add("card");

// //     drinkContainer.className = "drink-container col-md-4 col-lg-3";
// //     div.innerHTML = `
// //                 <img class="card-img" src="${drink.image}" alt="{}">
// //                 <h3>${drink.title}</h3>
// //                 <p>${drink.description.slice(0, 100)}...</p>
               
// //                 <p>Price:$ ${drink.price}</p>
// //                 <p class="rating">Rating: ${drink.rating.rate}</p>
// //                 <button type="button" class="btn btn-info" onClick="singleProduct('${
// //                   drink.id
// //                 }')"> Details</button>
             
// //                 <button onClick="handleAddToCart('${drink.title.slice(
// //                   0,
// //                   19
// //                 )}',${drink.price})" type="button" class="btn btn-success"> Add to Cart</button>
// //             `;
// //     drinkContainer.appendChild(div);
            
// //   });

// // };
// // // Function to handle adding products to the cart
// // const handleAddToCart = (name, price) => {
// //   const cartCount = document.getElementById("count").innerText;
// //   let convertedCount = parseInt(cartCount);
// //   convertedCount = convertedCount + 1;
// //   console.log(convertedCount);
// //   document.getElementById("count").innerText = convertedCount;

// //   // Create a new div to display the cart item
// //   const container = document.getElementById("cart-container");
// //   console.log(price);

// //   const div = document.createElement("div");
// //   div.classList.add("cart-info");
// //   div.innerHTML = `
// //     <p>${name}</p>
// //     <h3 class="price"> ${price}</h3>
// //   `;
// //   container.appendChild(div);
// //   updateCartCount();
// // };

// // // Function to update the total price in the cart

// // const updateCartCount = () => {
// //   const allPrice = document.getElementsByClassName("price");
// //   let count = 0;
// //   for (const price of allPrice) {
   
// //     count = count + parseFloat(price.innerText);
// //   }
// //   document.getElementById("total").innerText = count;
// // };

// // const singleDrink = (id) => {
// //   // Fetching a single product by ID
// //   console.log(id);

// //   fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007/${id}`)
// //     .then((res) => res.json())
// //     .then((data) => console.log(data));
// // };

// // loadAllDrinks();



// let group = [];

// const fetchDefaultDrinks = () => {
//   fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
//     .then(res => res.json())
//     .then(data => displayDrinks(data.drinks.slice(0, 8)))
//     .catch(err => console.error("Failed to load default drinks:", err));
// };

// const searchDrink = () => {
//   const query = document.getElementById("searchInput").value.trim();
//   if (!query) return;

//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
//     .then(res => res.json())
//     .then(data => {
//       if (!data.drinks) {
//         document.getElementById("notFound").textContent = "No drink found!";
//         displayDrinks([]);
//       } else {
//         document.getElementById("notFound").textContent = "";
//         displayDrinks(data.drinks.slice(0, 8));
//       }
//     });
// };

// const displayDrinks = (drinks) => {
//   const container = document.getElementById("drinks");
//   container.innerHTML = "";

//   drinks.forEach(drink => {
//     const col = document.createElement("div");
//     col.className = "card mb-3";

//     col.innerHTML = `
//       <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
//       <div class="card-body">
//         <h5 class="card-title">${drink.strDrink}</h5>
//         <p class="card-text"><strong>Category:</strong> ${drink.strCategory || 'Unknown'}</p>
//         <p class="card-text"><strong>Instructions:</strong> ${drink.strInstructions?.slice(0, 15) || 'See details'}</p>
//         <button class="btn btn-success btn-sm" onclick="addToGroup('${drink.strDrink.replace(/'/g, "\\'")}')">Add to Group</button>
//         <button class="btn btn-info btn-sm" onclick="showDetails('${drink.idDrink}')">Details</button>
//       </div>
//     `;

//     container.appendChild(col);
//   });
// };

// const addToGroup = (name) => {
//   if (group.length >= 7) {
//     alert("You can't add more than 7 drinks!");
//     return;
//   }

//   if (!group.includes(name)) {
//     group.push(name);
//     const li = document.createElement("li");
//     li.className = "list-group-item";
//     li.textContent = name;
//     document.getElementById("groupList").appendChild(li);
//     document.getElementById("groupCount").textContent = group.length;
//   }
// };

// const showDetails = (id) => {
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
//     .then(res => res.json())
//     .then(data => {
//       const drink = data.drinks[0];
//       const modal = document.getElementById("modal");
//       const overlay = document.getElementById("overlay");

//       document.getElementById("modalContent").innerHTML = `
//         <h3>${drink.drinks}</h3>
//         <img src="${drink.strDrinkThumb}" class="img-fluid mb-2" alt="${drink.strDrinks}">
//         <p><strong>Category:</strong> ${drink.strCategory}</p>
//         <p><strong>Alcoholic:</strong> ${drink.strAlcoholic}</p>
//         <p><strong>Glass:</strong> ${drink.strGlass}</p>
//         <p><strong>Instructions:</strong> ${drink.strInstructions}</p>
//         <p>Price:$ ${drink.strPrice}</p>
//         <p><strong>Ingredients:</strong> ${getIngredients(drink)}</p>
//       `;

//       overlay.style.display = "block";
//       modal.style.display = "block";
//     });
// };

// const getIngredients = (drink) => {
//   let ingredients = [];
//   for (let i = 1; i <= 5; i++) {
//     const drinkIng = drink[`strIngredient${i}`];
//     if ( drinkIng) ingredients.push( drinkIng);
//   }
//   return ingredients.join(', ');
// };

// const closeModal = () => {
//   document.getElementById("modal").style.display = "none";
//   document.getElementById("overlay").style.display = "none";
// };

//  fetchDefaultDrinks();



let group = [];
let totalPrice = 0;


function fetchDefaultDrinks() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(res => res.json())
    .then(data => displayDrinks(data.drinks.slice(0, 8)))
    .catch(err => console.error("Failed to load drinks", err));
}


function searchDrink() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then(res => res.json())
    .then(data => {
      const notFound = document.getElementById("notFound");
      if (!data.drinks) {
        notFound.textContent = "No drink found!";
        displayDrinks([]);
      } else {
        notFound.textContent = "";
        displayDrinks(data.drinks.slice(0, 8));
      }
    });
}


function displayDrinks(drinks) {
  const container = document.getElementById("drinks");
  container.innerHTML = "";

  drinks.forEach(drink => {
    const div = document.createElement("div");
  div.className = "card mb-3";

    const price = (Math.random() * 10 + 5).toFixed(2); 

    div.innerHTML = `
      <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
      <div class="card-body">
        <h5 class="card-title">${drink.strDrink}</h5>
        <p class="card-text"><strong>Category:</strong> ${drink.strCategory || 'Unknown'}</p>
        <p class="card-text"><strong>Instructions:</strong> ${drink.strInstructions?.slice(0, 15) || 'See details'}</p>
        <p><strong>Price:</strong> $${price}</p>
        <button class="btn btn-success btn-sm me-1" onclick="addToGroup('${drink.strDrink.replace(/'/g, "\\'")}')">Add to Group</button>
        <button class="btn btn-warning btn-sm me-1" onclick="addToCart(${price})">Price</button>
        <button class="btn btn-info btn-sm" onclick="showDetails('${drink.idDrink}')">Details</button>
      </div>
    `;

    container.appendChild(div);
  });
}


function addToGroup(name) {
  if (group.length >= 7) {
    alert("You can't add more than 7 drinks!");
    return;
  }

  if (!group.includes(name)) {
    group.push(name);
    const list = document.createElement("lists");
    list.className = "list-group-item";
    list.textContent = name;
    document.getElementById("groupList").appendChild(list);
    document.getElementById("groupCount").textContent = group.length;
  }
}


function addToCart(price) {
  totalPrice += parseFloat(price);
  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}


function showDetails(id) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
      const drink = data.drinks[0];
      document.getElementById("modalContent").innerHTML = `
        <h3>${drink.strDrink}</h3>
        <img src="${drink.strDrinkThumb}" class="img-fluid mb-2" alt="${drink.strDrink}">
        <p><strong>Category:</strong> ${drink.strCategory}</p>
        <p><strong>Alcoholic:</strong> ${drink.strAlcoholic}</p>
        <p><strong>Glass:</strong> ${drink.strGlass}</p>
        <p><strong>Instructions:</strong> ${drink.strInstructions}</p>
        <p><strong>Ingredients:</strong> ${getIngredients(drink)}</p>
      `;
      document.getElementById("overlay").style.display = "block";
      document.getElementById("modal").style.display = "block";
    });
}


function getIngredients(drink) {
  let ingredients = [];
  for (let i = 1; i <= 5; i++) {
    const ingredient = drink[`strIngredient${i}`];
    if (ingredient) ingredients.push(ingredient);
  }
  return ingredients.join(', ');
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


fetchDefaultDrinks();
