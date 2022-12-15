import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `        
    <section class="content">
        <div class="daftar">
            <h1 class="judul">Daftar Restoran</h1>
            <div class="resto"></div>
        </div>
    </section>`;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.ListRestaurant();
    const restaurantContainer = document.querySelector('.resto');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Home;
