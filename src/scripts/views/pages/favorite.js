import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `        
    <section class="content">
        <div class="daftar">
            <h1 class="judul">Favorite Restoran</h1>
            <div class="resto"></div>
        </div>
    </section>`;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.resto');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Favorite;
