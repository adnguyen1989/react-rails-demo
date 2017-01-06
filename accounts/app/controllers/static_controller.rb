class StaticController < ApplicationController
  def products
    @products = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ]
  end

  def hunts
    @hunts = [
      {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: 23,
        submitter_avatar_url: 'images/avatars/daniel.jpg',
        product_image_url: 'images/products/image-aqua.png'
      },
      {
        id: 2,
        title: 'Red Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: 2,
        submitter_avatar_url: 'images/avatars/daniel.jpg',
        product_image_url: 'images/products/image-aqua.png'
      },
      {
        id: 3,
        title: 'Red Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: 0,
        submitter_avatar_url: 'images/avatars/daniel.jpg',
        product_image_url: 'images/products/image-aqua.png'
      },
      {
        id: 4,
        title: 'Red Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: -1,
        submitter_avatar_url: 'images/avatars/daniel.jpg',
        product_image_url: 'images/products/image-aqua.png'
      }
    ]
  end
end
