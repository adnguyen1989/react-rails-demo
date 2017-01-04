import React from 'react';
import ReactDOM from 'react-dom';

global.React = React
global.ReactDOM = ReactDOM

global.FilterableProductTable = require( 'components/filterable_product_table.es6.jsx' ).default;
global.ProductCategoryRow = require( 'components/product_category_row.es6.jsx' ).default;
global.ProductRow = require( 'components/product_row.es6.jsx' ).default;
global.ProductTable = require( 'components/product_table.es6.jsx' ).default;
global.SearchBar = require( 'components/search_bar.es6.jsx' ).default;
