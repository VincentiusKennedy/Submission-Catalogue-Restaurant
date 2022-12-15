/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing no liked restaurant', ({ I }) => {
  I.dontSeeElement('.resto-detail');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.dontSeeElement('.resto-detail');

  I.amOnPage('/');

  I.waitForElement('.resto-detail');
  I.seeElement('.resto-detail-link a');

  const firstRestaurant = locate('.resto-detail-link a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-detail');
  const likedRestaurantTitle = await I.grabTextFrom('.resto-detail-link a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.dontSeeElement('.resto-detail');
  I.amOnPage('/');
  I.waitForElement('.resto-detail');
  I.seeElement('.resto-detail-link a');

  const firstRestaurant = locate('.resto-detail-link a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-detail');
  I.seeElement('.resto-detail');
  const unlikedRestaurantsTitles = await I.grabTextFrom('.resto-detail-link a');

  assert.strictEqual(firstRestaurantTitle, unlikedRestaurantsTitles);

  I.seeElement('.resto-detail-link a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.resto-detail');
});
