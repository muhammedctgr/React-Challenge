import type { NextPage } from 'next';
import { useEffect } from 'react';
import ShoppingCartCard from '../components/shoppingCartCard';
import OrderSummaryCard from '../components/orderSummaryCard';
import { useGlobalDispatch, useGlobalState } from '../store';
import productsCart from '../data/prodCart';
import { ShoppingType } from '../@types/shoppingCart';
import Header from '../components/header';

