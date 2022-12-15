import CONFIG from '../../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (restaurant) => `
<article class="resto-detail">
    <img class="resto-detail-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" width="100%" height="250" alt="${restaurant.name}">
    <div class="resto-detail-content">
        <h1 class="resto-detail-name"> ${restaurant.name}</h1>
        <br>
        <p class="resto-detail-city">Kota: ${restaurant.city}</p>
        <h1 class="resto-detail-link"><a class = "a-name" href="${`/#/detail/${restaurant.id}`}">Details..</a></h1>
        <p class="resto-detail-rate">Rating: ${restaurant.rating}/5</p>
    </div>
</article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<article class="resto-detail">
    <img class="resto-detail-img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="resto-detail-content">
        <h1 class="resto-detail-name">${restaurant.name}</h1>
        <br>
        <p class="resto-detail-city">Kota: <strong>${restaurant.city}</strong>,  ${restaurant.address}</p> 
        <h4>Deskripsi: </h4>
        <p class="resto-detail-desc">${restaurant.description}</p>
        <br>
        <h4>Makanan: </h4>
        <p class="resto-detail-desc">${restaurant.menus.foods.map((food) => food.name).join(' , ')}</p>
        <br>
        <h4>Minuman: </h4>
        <p class="resto-detail-desc">${restaurant.menus.drinks.map((drink) => drink.name).join(' , ')}</p>
        <br>
        <h4>Beberapa Kata Dari Reviewer Kami: </h4>
        <br>
        ${restaurant.customerReviews.map((review) => `
                <p>Nama: ${review.name}</p> 
                <p>Tanggal: ${review.date}</p> 
                <p>Review: ${review.review}</p>`).join('-')}
    </div>
</article> 
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
