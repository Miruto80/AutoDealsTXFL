import React, { useState, useEffect, useRef } from 'react';
import './assets/css/carinfo.css';
import { useSearch } from './SearchContext';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';


export const cars = [
  {
    id: 1,
    brand: 'CADILLAC',
    title: '2020 CADILLAC ESCALADE PREMIUM',
    year: 2020,
    price: '$28,576',
    downPayment: '$4,000',
    location: 'Fort Lauderdale, FL',
    miles: '108,550',
    images: [
      '/imagenes/Luxury/2020 CADILLAC ESCALADE  (1).webp',
      '/imagenes/Luxury/2020 CADILLAC ESCALADE  (2).webp',
      '/imagenes/Luxury/2020 CADILLAC ESCALADE  (3).webp',
      '/imagenes/Luxury/2020 CADILLAC ESCALADE  (4).webp',
      '/imagenes/Luxury/2020 CADILLAC ESCALADE  (5).webp',
      '/imagenes/Luxury/2020 CADILLAC ESCALADE  (6).webp',
      '/imagenes/Luxury/2020 CADILLAC ESCALADE  (7).webp',
      '/imagenes/Luxury/2020 CADILLAC ESCALADE  (8).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 2,
    brand: 'CADILLAC',
    title: '2023 CADILLAC XT4 ',
    year: 2023,
    price: '$21,485 ',
    downPayment: '$3,000',
    location: 'Fort Lauderdale, FL',
    miles: '16,100',
    images: [
      '/imagenes/Luxury/2023 CADILLAC XT4 (1).webp',
      '/imagenes/Luxury/2023 CADILLAC XT4 (2).webp',
      '/imagenes/Luxury/2023 CADILLAC XT4 (3).webp',
      '/imagenes/Luxury/2023 CADILLAC XT4 (4).webp',
      '/imagenes/Luxury/2023 CADILLAC XT4 (5).webp',
      '/imagenes/Luxury/2023 CADILLAC XT4 (6).webp',
      '/imagenes/Luxury/2023 CADILLAC XT4 (7).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 3,
    brand: 'TOYOTA',
    title: '2019 TOYOTA TACOMA',
    year: 2019,
    price: '$27,646',
    downPayment: '3,500',
    location: 'Fort Lauderdale, FL',
    miles: '98,611',
    images: [
      '/imagenes/Trucks/2019 TOYOTA TACOMA  (1).webp',
      '/imagenes/Trucks/2019 TOYOTA TACOMA  (2).webp',
      '/imagenes/Trucks/2019 TOYOTA TACOMA  (3).webp',
      '/imagenes/Trucks/2019 TOYOTA TACOMA  (4).webp',
      '/imagenes/Trucks/2019 TOYOTA TACOMA  (5).webp',
      '/imagenes/Trucks/2019 TOYOTA TACOMA  (6).webp',
      '/imagenes/Trucks/2019 TOYOTA TACOMA  (7).webp',
      '/imagenes/Trucks/2019 TOYOTA TACOMA  (8).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 4,
    brand: 'CHEVROLET',
    title: '2016 CHEVROLET SILVERADO',
    year: 2016,
    price: '$20,335',
    downPayment: '2,500',
    location: 'Fort Lauderdale, FL',
    miles: '63,150',
    images: [
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (7).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (1).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (2).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (3).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (4).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (5).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (6).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (8).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (9).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (10).webp',
      '/imagenes/Trucks/2016 CHEVROLET SILVERADO (11).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 5,
    brand: 'FORD',
    title: '2018 FORD F150',
    year: 2018,
    price: '$24,667',
    downPayment: '3,500',
    location: 'Fort Lauderdale, FL',
    miles: '105,460',
    images: [
      '/imagenes/Trucks/2018 FORD F150 (3).webp',
      '/imagenes/Trucks/2018 FORD F150 (1).webp',
      '/imagenes/Trucks/2018 FORD F150 (2).webp',
      '/imagenes/Trucks/2018 FORD F150 (4).webp',
      '/imagenes/Trucks/2018 FORD F150 (5).webp',
      '/imagenes/Trucks/2018 FORD F150 (6).webp',
      '/imagenes/Trucks/2018 FORD F150 (7).webp',
      '/imagenes/Trucks/2018 FORD F150 (8).webp',
      '/imagenes/Trucks/2018 FORD F150 (9).webp',
      '/imagenes/Trucks/2018 FORD F150 (10).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 6,
    brand: 'FORD',
    title: '2015 FORD MUSTANG',
    year: 2015,
    price: '$14,675',
    downPayment: '2,000',
    location: 'Fort Lauderdale, FL',
    miles: '49,150',
    images: [
      '/imagenes/Luxury/2015 FORD MUSTANG (1).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (2).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (3).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (4).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (5).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (6).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (7).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (8).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (9).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (10).webp',
      '/imagenes/Luxury/2015 FORD MUSTANG (11).webp',
    ],
    type: 'Coupe',
  },
  {
    id: 7,
    brand: 'MERCEDES',
    title: '2017 Mercedes-Benz C-class',
    year: 2017,
    price: '$16,216',
    downPayment: '2,500',
    location: 'Fort Lauderdale, FL',
    miles: '54,850',
    images: [
      '/imagenes/Luxury/2017 Mercedes-Benz (1).webp',
      '/imagenes/Luxury/2017 Mercedes-Benz (2).webp',
      '/imagenes/Luxury/2017 Mercedes-Benz (3).webp',
      '/imagenes/Luxury/2017 Mercedes-Benz (4).webp',
      '/imagenes/Luxury/2017 Mercedes-Benz (5).webp',
      '/imagenes/Luxury/2017 Mercedes-Benz (6).webp',
      '/imagenes/Luxury/2017 Mercedes-Benz (7).webp'
    ],
    type: 'Coupe',
  },
  {
    id: 8,
    brand: 'FORD',
    title: '2019 FORD MUSTANG',
    year: 2019,
    price: '$17,125',
    downPayment: '$2,500',
    location: 'Fort Lauderdale, FL',
    miles: '61,600',
    images: [
      '/imagenes/Luxury/2019 FORD MUSTANG (1).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (2).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (3).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (4).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (5).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (6).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (7).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (8).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (9).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (10).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (11).webp',
    ],
    type: 'Coupe',
  },
  {
    id: 9,
    brand: 'FORD',
    title: '2019 FORD MUSTANG',
    year: 2019,
    price: '$15,240',
    downPayment: '$2,000',
    location: 'Fort Lauderdale, FL',
    miles: '31,860',
    images: [
      '/imagenes/Luxury/2019 FORD MUSTANG (13).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (14).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (15).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (16).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (17).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (18).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (19).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (20).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (21).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (22).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG (23).webp',
    ],
    type: 'Coupe',
  },
  {
    id: 10,
    brand: 'FORD',
    title: '2019 FORD MUSTANG GT',
    year: 2019,
    price: '$22,900',
    downPayment: '$4,000',
    location: 'Fort Lauderdale, FL',
    miles: '33,896',
    images: [
      '/imagenes/Luxury/2019 FORD MUSTANG GT (1).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG GT (2).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG GT (3).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG GT (4).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG GT (5).webp',
      '/imagenes/Luxury/2019 FORD MUSTANG GT (6).webp',
    ],
    type: 'Coupe',
  },
  {
    id: 11,
    brand: 'GENESIS',
    title: '2019 GENESIS G70',
    year: 2019,
    price: '$15,920',
    downPayment: '$2,000',
    location: 'Fort Lauderdale, FL',
    miles: '32,338',
    images: [
      '/imagenes/Luxury/2019 GENESIS G70 (1).webp',
      '/imagenes/Luxury/2019 GENESIS G70 (2).webp',
      '/imagenes/Luxury/2019 GENESIS G70 (3).webp',
      '/imagenes/Luxury/2019 GENESIS G70 (4).webp',
      '/imagenes/Luxury/2019 GENESIS G70 (5).webp',
      '/imagenes/Luxury/2019 GENESIS G70 (6).webp',
      '/imagenes/Luxury/2019 GENESIS G70 (7).webp',
      '/imagenes/Luxury/2019 GENESIS G70 (8).webp',
      '/imagenes/Luxury/2019 GENESIS G70 (9).webp',
      '/imagenes/Luxury/2019 GENESIS G70 (10).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 12,
    brand: 'LEXUS',
    title: '2019 LEXUS RC',
    year: 2019,
    price: '$24,587',
    downPayment: '$3,500',
    location: 'Fort Lauderdale, FL',
    miles: '85,909',
    images: [
      '/imagenes/Luxury/2019 LEXUS (1).webp',
      '/imagenes/Luxury/2019 LEXUS (2).webp',
      '/imagenes/Luxury/2019 LEXUS (3).webp',
      '/imagenes/Luxury/2019 LEXUS (4).webp',
      '/imagenes/Luxury/2019 LEXUS (5).webp',
      '/imagenes/Luxury/2019 LEXUS (6).webp',
      '/imagenes/Luxury/2019 LEXUS (7).webp',
      '/imagenes/Luxury/2019 LEXUS (8).webp',
      '/imagenes/Luxury/2019 LEXUS (9).webp',
      '/imagenes/Luxury/2019 LEXUS (10).webp',
      '/imagenes/Luxury/2019 LEXUS (11).webp',
      '/imagenes/Luxury/2019 LEXUS (12).webp',
      '/imagenes/Luxury/2019 LEXUS (13).webp',
      '/imagenes/Luxury/2019 LEXUS (14).webp',
      '/imagenes/Luxury/2019 LEXUS (15).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 13,
    brand: 'LEXUS',
    title: '2019 LEXUS NX',
    year: 2019,
    price: '$22,002',
    downPayment: '$3,000',
    location: 'Fort Lauderdale, FL',
    miles: '28,000',
    images: [
      '/imagenes/Luxury/2019 LEXUS NX (1).webp',
      '/imagenes/Luxury/2019 LEXUS NX (2).webp',
      '/imagenes/Luxury/2019 LEXUS NX (3).webp',
      '/imagenes/Luxury/2019 LEXUS NX (4).webp',
      '/imagenes/Luxury/2019 LEXUS NX (5).webp',
      '/imagenes/Luxury/2019 LEXUS NX (6).webp',
      '/imagenes/Luxury/2019 LEXUS NX (7).webp',
      '/imagenes/Luxury/2019 LEXUS NX (8).webp',
      '/imagenes/Luxury/2019 LEXUS NX (9).webp',
      '/imagenes/Luxury/2019 LEXUS NX (10).webp',
      '/imagenes/Luxury/2019 LEXUS NX (11).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 14,
    brand: 'FORD',
    title: '2020 FORD MUSTANG',
    year: 2020,
    price: '$28,772',
    downPayment: '$4,000',
    location: 'Fort Lauderdale, FL',
    miles: '65,150',
    images: [
      '/imagenes/Luxury/2020 FORD MUSTANG (1).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (2).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (3).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (4).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (5).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (6).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (7).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (8).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (9).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (10).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (11).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (12).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (13).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (15).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (16).webp',
    ],
    type: 'Coupe',
  },
  {
    id: 15,
    brand: 'FORD',
    title: '2020 FORD MUSTANG',
    year: 2020,
    price: '$15,892',
    downPayment: '$2,000',
    location: 'Fort Lauderdale, FL',
    miles: '62,188',
    images: [
      '/imagenes/Luxury/2020 FORD MUSTANG (17).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (18).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (19).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (20).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (21).webp',
      '/imagenes/Luxury/2020 FORD MUSTANG (22).webp',
    ],
    type: 'Coupe',
  },
  {
    id: 16,
    brand: 'CHEVROLET',
    title: '2021 Chevrolet Camaro',
    year: 2021,
    price: '$28,754',
    downPayment: '$4,000',
    location: 'Fort Lauderdale, FL',
    miles: '64,555',
    images: [
      '/imagenes/Luxury/2021 Chevrolet Camaro  (1).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro  (2).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro  (3).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro  (4).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro  (5).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro  (6).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro  (7).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro  (8).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro  (9).webp',
    ],
    type: 'Coupe',
  },
  {
    id: 17,
    brand: 'CHEVROLET',
    title: '2021 CHEVROLET CAMARO',
    year: 2021,
    price: '$25,947',
    downPayment: '$3,500',
    location: 'Fort Lauderdale, FL',
    miles: '93,200',
    images: [
      '/imagenes/Luxury/2021 CHEVROLET CAMARO (1).webp',
      '/imagenes/Luxury/2021 CHEVROLET CAMARO (2).webp',
      '/imagenes/Luxury/2021 CHEVROLET CAMARO (3).webp',
      '/imagenes/Luxury/2021 CHEVROLET CAMARO (4).webp',
      '/imagenes/Luxury/2021 CHEVROLET CAMARO (5).webp',
    ],
    type: 'Coupe',
  },
  {
    id: 18,
    brand: 'JEEP',
    title: '2014 JEEP WRANGLER',
    year: 2014,
    price: '$14,957',
    downPayment: '$1,800',
    location: 'Fort Lauderdale, FL',
    miles: '94,600',
    images: [
      '/imagenes/Suvs/2014 JEEP WRANGLER (1).webp',
      '/imagenes/Suvs/2014 JEEP WRANGLER (2).webp',
      '/imagenes/Suvs/2014 JEEP WRANGLER (3).webp',
      '/imagenes/Suvs/2014 JEEP WRANGLER (4).webp',
      '/imagenes/Suvs/2014 JEEP WRANGLER (5).webp',
      '/imagenes/Suvs/2014 JEEP WRANGLER (6).webp',
      '/imagenes/Suvs/2014 JEEP WRANGLER (7).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 19,
    brand: 'HONDA',
    title: '2020 HONDA CR-V',
    year: 2020,
    price: '$15,335',
    downPayment: '$1,500',
    location: 'Fort Lauderdale, FL',
    miles: '93,000',
    images: [
      '/imagenes/Suvs/2020 HONDA CR-V (2).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (1).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (3).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (4).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (5).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (6).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (7).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (8).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (9).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (10).webp',
      '/imagenes/Suvs/2020 HONDA CR-V (11).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 20,
    brand: 'JEEP',
    title: '2020 JEEP GRAND CHEROKEE',
    year: 2020,
    price: '$16,339',
    downPayment: '$2,500',
    location: 'Fort Lauderdale, FL',
    miles: '105,670',
    images: [
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (1).webp',
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (2).webp',
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (3).webp',
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (4).webp',
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (5).webp',
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (6).webp',
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (7).webp',
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (8).webp',
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (9).webp',
      '/imagenes/Suvs/2020 JEEP GRAND CHEROKEE (10).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 21,
    brand: 'HYUNDAI',
    title: '2023 HYUNDAI SANTA FE',
    year: 2023,
    price: '$21,355',
    downPayment: '$2,500',
    location: 'Fort Lauderdale, FL',
    miles: '19,344',
    images: [
      '/imagenes/Suvs/2023 HYUNDAI SANTA FE (1).webp',
      '/imagenes/Suvs/2023 HYUNDAI SANTA FE (2).webp',
      '/imagenes/Suvs/2023 HYUNDAI SANTA FE (3).webp',
      '/imagenes/Suvs/2023 HYUNDAI SANTA FE (4).webp',
      '/imagenes/Suvs/2023 HYUNDAI SANTA FE (5).webp',
      '/imagenes/Suvs/2023 HYUNDAI SANTA FE (6).webp',
      '/imagenes/Suvs/2023 HYUNDAI SANTA FE (7).webp',
      '/imagenes/Suvs/2023 HYUNDAI SANTA FE (8).webp',
      '/imagenes/Suvs/2023 HYUNDAI SANTA FE (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 22,
    brand: 'VOLKSWAGEN',
    title: '2018 VOLKSWAGEN GOLF GTI',
    year: 2018,
    price: '$11,193',
    downPayment: '$1,500',
    location: 'Fort Lauderdale, FL',
    miles: '121,535',
    images: [
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (1).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (2).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (3).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (4).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (5).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (6).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (7).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (8).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (9).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (10).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (11).webp',
      '/imagenes/Sedan/2018 VOLKSWAGEN GOLF GTI (12).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 23,
    brand: 'DODGE',
    title: '2020 DODGE CHALLENGER',
    year: 2020,
    price: '$18,759',
    downPayment: '$2,500',
    location: 'Fort Lauderdale, FL',
    miles: '50,258',
    images: [
      '/imagenes/Sedan/2020 DODGE CHALLENGER (1).webp',
      '/imagenes/Sedan/2020 DODGE CHALLENGER (2).webp',
      '/imagenes/Sedan/2020 DODGE CHALLENGER (3).webp',
      '/imagenes/Sedan/2020 DODGE CHALLENGER (4).webp',
      '/imagenes/Sedan/2020 DODGE CHALLENGER (5).webp',
      '/imagenes/Sedan/2020 DODGE CHALLENGER (6).webp',
      '/imagenes/Sedan/2020 DODGE CHALLENGER (7).webp',
      '/imagenes/Sedan/2020 DODGE CHALLENGER (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 24,
    brand: 'INFINITI',
    title: '2019 INFINITI Q50',
    year: 2019,
    price: '$20,112',
    downPayment: '$2,500',
    location: 'Fort Lauderdale, FL',
    miles: '49,490',
    images: [
      '/imagenes/Sedan/2019 INFINITI Q50 (1).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (2).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (3).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (4).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (5).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (6).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (7).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (9).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (10).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (11).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 (12).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 25,
    brand: 'INFINITI',
    title: '2019 INFINITI Q60',
    year: 2019,
    price: '$24,788',
    downPayment: '$3,500',
    location: 'Fort Lauderdale, FL',
    miles: '34,833',
    images: [
      '/imagenes/Sedan/2019 INFINITI Q60 (1).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (2).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (3).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (4).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (5).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (6).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (7).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (9).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (10).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (11).webp',
      '/imagenes/Sedan/2019 INFINITI Q60 (12).webp',
    ],
    type: 'Coupe',
  },
  {
    id: 26,
    brand: 'HONDA',
    title: '2020 Honda Civic Sport',
    year: 2020,
    price: '$15,599',
    downPayment: '$1,800',
    location: 'Fort Lauderdale, FL',
    miles: '49,750',
    images: [
      '/imagenes/Sedan/2020 Honda Civic Sport (1).webp',
      '/imagenes/Sedan/2020 Honda Civic Sport (2).webp',
      '/imagenes/Sedan/2020 Honda Civic Sport (3).webp',
      '/imagenes/Sedan/2020 Honda Civic Sport (4).webp',
      '/imagenes/Sedan/2020 Honda Civic Sport (5).webp',
      '/imagenes/Sedan/2020 Honda Civic Sport (6).webp',
      '/imagenes/Sedan/2020 Honda Civic Sport (7).webp',
      '/imagenes/Sedan/2020 Honda Civic Sport (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 27,
    brand: 'TOYOTA',
    title: '2020 TOYOTA COROLLA',
    year: 2020,
    price: '$15,882',
    downPayment: '$1,800',
    location: 'Fort Lauderdale, FL',
    miles: '50,077',
    images: [
      '/imagenes/Sedan/2020 TOYOTA COROLLA (1).webp',
      '/imagenes/Sedan/2020 TOYOTA COROLLA (2).webp',
      '/imagenes/Sedan/2020 TOYOTA COROLLA (3).webp',
      '/imagenes/Sedan/2020 TOYOTA COROLLA (4).webp',
      '/imagenes/Sedan/2020 TOYOTA COROLLA (5).webp',
      '/imagenes/Sedan/2020 TOYOTA COROLLA (6).webp',
      '/imagenes/Sedan/2020 TOYOTA COROLLA (7).webp',
      '/imagenes/Sedan/2020 TOYOTA COROLLA (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 28,
    brand: 'INFINITI',
    title: '2021 INFINITI Q50',
    year: 2021,
    price: '$24,523',
    downPayment: '$3,500',
    location: 'Fort Lauderdale, FL',
    miles: '78,200',
    images: [
      '/imagenes/Sedan/2021 INFINITI Q50 (1).webp',
      '/imagenes/Sedan/2021 INFINITI Q50 (2).webp',
      '/imagenes/Sedan/2021 INFINITI Q50 (3).webp',
      '/imagenes/Sedan/2021 INFINITI Q50 (4).webp',
      '/imagenes/Sedan/2021 INFINITI Q50 (5).webp',
      '/imagenes/Sedan/2021 INFINITI Q50 (6).webp',
      '/imagenes/Sedan/2021 INFINITI Q50 (7).webp',
      '/imagenes/Sedan/2021 INFINITI Q50 (8).webp',
      '/imagenes/Sedan/2021 INFINITI Q50 (9).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 29,
    brand: 'DODGE',
    title: '2022 DODGE CHALLENGER',
    year: 2022,
    price: '$29,745',
    downPayment: '$4,000',
    location: 'Fort Lauderdale, FL',
    miles: '42,200',
    images: [
      '/imagenes/Sedan/2022 DODGE CHALLENGER (1).webp',
      '/imagenes/Sedan/2022 DODGE CHALLENGER (2).webp',
      '/imagenes/Sedan/2022 DODGE CHALLENGER (3).webp',
      '/imagenes/Sedan/2022 DODGE CHALLENGER (4).webp',
      '/imagenes/Sedan/2022 DODGE CHALLENGER (5).webp',
      '/imagenes/Sedan/2022 DODGE CHALLENGER (6).webp',
      '/imagenes/Sedan/2022 DODGE CHALLENGER (7).webp',
      '/imagenes/Sedan/2022 DODGE CHALLENGER (8).webp',
      '/imagenes/Sedan/2022 DODGE CHALLENGER (9).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 30,
    brand: 'HONDA',
    title: '2022 HONDA CIVIC',
    year: 2022,
    price: '$18,650',
    downPayment: '$2,000',
    location: 'Fort Lauderdale, FL',
    miles: '44,000',
    images: [
      '/imagenes/Sedan/2022 HONDA CIVIC (1).webp',
      '/imagenes/Sedan/2022 HONDA CIVIC (2).webp',
      '/imagenes/Sedan/2022 HONDA CIVIC (3).webp',
      '/imagenes/Sedan/2022 HONDA CIVIC (4).webp',
      '/imagenes/Sedan/2022 HONDA CIVIC (5).webp',
      '/imagenes/Sedan/2022 HONDA CIVIC (6).webp',
      '/imagenes/Sedan/2022 HONDA CIVIC (7).webp',
      '/imagenes/Sedan/2022 HONDA CIVIC (8).webp',
      '/imagenes/Sedan/2022 HONDA CIVIC (9).webp',
      '/imagenes/Sedan/2022 HONDA CIVIC (10).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 31,
    brand: 'KIA',
    title: '2022 KIA K5',
    year: 2022,
    price: '$16,538',
    downPayment: '$1,800',
    location: 'Fort Lauderdale, FL',
    miles: '44,000',
    images: [
      '/imagenes/Sedan/2022 KIA K5 (2).webp',
      '/imagenes/Sedan/2022 KIA K5 (1).webp',
      '/imagenes/Sedan/2022 KIA K5 (3).webp',
      '/imagenes/Sedan/2022 KIA K5 (4).webp',
      '/imagenes/Sedan/2022 KIA K5 (5).webp',
      '/imagenes/Sedan/2022 KIA K5 (6).webp',
      '/imagenes/Sedan/2022 KIA K5 (7).webp',
      '/imagenes/Sedan/2022 KIA K5 (8).webp',
      '/imagenes/Sedan/2022 KIA K5 (9).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 32,
    brand: 'HONDA',
    title: '2023 HONDA CIVIC',
    year: 2023,
    price: '$22,553',
    downPayment: '$2,800',
    location: 'Fort Lauderdale, FL',
    miles: '19,200',
    images: [
      '/imagenes/Sedan/2023 HONDA CIVIC (1).webp',
      '/imagenes/Sedan/2023 HONDA CIVIC (2).webp',
      '/imagenes/Sedan/2023 HONDA CIVIC (3).webp',
      '/imagenes/Sedan/2023 HONDA CIVIC (4).webp',
      '/imagenes/Sedan/2023 HONDA CIVIC (5).webp',
      '/imagenes/Sedan/2023 HONDA CIVIC (6).webp',
      '/imagenes/Sedan/2023 HONDA CIVIC (7).webp',
      '/imagenes/Sedan/2023 HONDA CIVIC (8).webp',
      '/imagenes/Sedan/2023 HONDA CIVIC (9).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 33,
    brand: 'RAM',
    title: '2019 RAM 1500',
    year: 2019,
    price: '$20,166',
    downPayment: '$3,500',
    location: 'Fort Lauderdale, FL',
    miles: '105,442',
    images: [
      '/imagenes/Trucks/2019 RAM 1500 (1).webp',
      '/imagenes/Trucks/2019 RAM 1500 (2).webp',
      '/imagenes/Trucks/2019 RAM 1500 (3).webp',
      '/imagenes/Trucks/2019 RAM 1500 (4).webp',
      '/imagenes/Trucks/2019 RAM 1500 (5).webp',
      '/imagenes/Trucks/2019 RAM 1500 (6).webp',
      '/imagenes/Trucks/2019 RAM 1500 (7).webp',
      '/imagenes/Trucks/2019 RAM 1500 (8).webp',
      '/imagenes/Trucks/2019 RAM 1500 (9).webp',
      '/imagenes/Trucks/2019 RAM 1500 (10).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 34,
    brand: 'RAM',
    title: '2020 RAM 1500',
    year: 2020,
    price: '$19,839',
    downPayment: '$4,000',
    location: 'Fort Lauderdale, FL',
    miles: '80,360',
    images: [
      '/imagenes/Trucks/2020 RAM 1500 (2).webp',
      '/imagenes/Trucks/2020 RAM 1500 (3).webp',
      '/imagenes/Trucks/2020 RAM 1500 (4).webp',
      '/imagenes/Trucks/2020 RAM 1500 (5).webp',
      '/imagenes/Trucks/2020 RAM 1500 (6).webp',
      '/imagenes/Trucks/2020 RAM 1500 (7).webp',
      '/imagenes/Trucks/2020 RAM 1500 (1).webp',
      '/imagenes/Trucks/2020 RAM 1500 (8).webp',
      '/imagenes/Trucks/2020 RAM 1500 (9).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 35,
    brand: 'FORD',
    title: '2019 FORD F150',
    year: 2019,
    price: '$18,155',
    downPayment: '$3,000',
    location: 'Fort Lauderdale, FL',
    miles: '121,900',
    images: [
      '/imagenes/Trucks/2019 FORD F150 (1).webp',
      '/imagenes/Trucks/2019 FORD F150 (2).webp',
      '/imagenes/Trucks/2019 FORD F150 (3).webp',
      '/imagenes/Trucks/2019 FORD F150 (4).webp',
      '/imagenes/Trucks/2019 FORD F150 (5).webp',
      '/imagenes/Trucks/2019 FORD F150 (6).webp',
      '/imagenes/Trucks/2019 FORD F150 (7).webp',
      '/imagenes/Trucks/2019 FORD F150 (8).webp',
      '/imagenes/Trucks/2019 FORD F150 (9).webp',
      '/imagenes/Trucks/2019 FORD F150 (10).webp',
      '/imagenes/Trucks/2019 FORD F150 (11).webp',
      '/imagenes/Trucks/2019 FORD F150 (12).webp',
      '/imagenes/Trucks/2019 FORD F150 (13).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 36,
    brand: 'FORD',
    title: '2021 FORD F250',
    year: 2021,
    price: '$32,957',
    downPayment: '$4,300',
    location: 'Fort Lauderdale, FL',
    miles: '75,970',
    images: [
      '/imagenes/Trucks/2021 FORD F250 (1).webp',
      '/imagenes/Trucks/2021 FORD F250 (2).webp',
      '/imagenes/Trucks/2021 FORD F250 (3).webp',
      '/imagenes/Trucks/2021 FORD F250 (4).webp',
      '/imagenes/Trucks/2021 FORD F250 (5).webp',
      '/imagenes/Trucks/2021 FORD F250 (6).webp',
      '/imagenes/Trucks/2021 FORD F250 (7).webp',
      '/imagenes/Trucks/2021 FORD F250 (8).webp',
      '/imagenes/Trucks/2021 FORD F250 (9).webp',
    ],
    type: 'Trucks',
  },
   {
    id: 37,
    brand: 'JEEP',
    title: '2017 JEEP WRANGLER',
    year: 2017,
    price: '$18,143',
    downPayment: '$3,000',
    location: 'Fort Lauderdale, FL',
    miles: '123,711',
    images: [
      '/imagenes/Suvs/2017 JEEP WRANGLER (1).webp',
      '/imagenes/Suvs/2017 JEEP WRANGLER (2).webp',
      '/imagenes/Suvs/2017 JEEP WRANGLER (3).webp',
      '/imagenes/Suvs/2017 JEEP WRANGLER (4).webp',
      '/imagenes/Suvs/2017 JEEP WRANGLER (5).webp',
      '/imagenes/Suvs/2017 JEEP WRANGLER (6).webp',
      '/imagenes/Suvs/2017 JEEP WRANGLER (7).webp',
      '/imagenes/Suvs/2017 JEEP WRANGLER (8).webp',
      '/imagenes/Suvs/2017 JEEP WRANGLER (9).webp',
    ],
    type: 'JEEP',
  },
   {
    id: 38,
    brand: 'TOYOTA',
    title: '2022 TOYOTA 4RUNNER',
    year: 2022,
    price: '$40,042',
    downPayment: '$5,500',
    location: 'Fort Lauderdale, FL',
    miles: '33,300',
    images: [
      '/imagenes/Suvs/2022 TOYOTA 4RUNNER (1).webp',
      '/imagenes/Suvs/2022 TOYOTA 4RUNNER (2).webp',
      '/imagenes/Suvs/2022 TOYOTA 4RUNNER (3).webp',
      '/imagenes/Suvs/2022 TOYOTA 4RUNNER (4).webp',
      '/imagenes/Suvs/2022 TOYOTA 4RUNNER (5).webp',
      '/imagenes/Suvs/2022 TOYOTA 4RUNNER (6).webp',
      '/imagenes/Suvs/2022 TOYOTA 4RUNNER (7).webp',
    ],
    type: 'JEEP',
  },
  {
    id: 39,
    brand: 'DODGE',
    title: '2023 DODGE CHARGER',
    year: 2023,
    price: '$42,548',
    downPayment: '$7,500',
    location: 'Fort Lauderdale, FL',
    miles: '7,220',
    images: [
      '/imagenes/Sedan/2023 DODGE CHARGER (1).webp',
      '/imagenes/Sedan/2023 DODGE CHARGER (2).webp',
      '/imagenes/Sedan/2023 DODGE CHARGER (3).webp',
      '/imagenes/Sedan/2023 DODGE CHARGER (4).webp',
      '/imagenes/Sedan/2023 DODGE CHARGER (5).webp',
      '/imagenes/Sedan/2023 DODGE CHARGER (6).webp',
      '/imagenes/Sedan/2023 DODGE CHARGER (7).webp',
      '/imagenes/Sedan/2023 DODGE CHARGER (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 40,
    brand: 'INFINITI',
    title: '2019 INFINITI Q50',
    year: 2019,
    price: '$13,456',
    downPayment: '$2,000',
    location: 'Fort Lauderdale, FL',
    miles: '78,000',
    images: [
      '/imagenes/Luxury/2019 INFINITI Q50 (1).webp',
      '/imagenes/Luxury/2019 INFINITI Q50 (2).webp',
      '/imagenes/Luxury/2019 INFINITI Q50 (3).webp',
      '/imagenes/Luxury/2019 INFINITI Q50 (4).webp',
      '/imagenes/Luxury/2019 INFINITI Q50 (5).webp',
      '/imagenes/Luxury/2019 INFINITI Q50 (6).webp',
      '/imagenes/Luxury/2019 INFINITI Q50 (7).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 41,
    brand: 'MERCEDES',
    title: '2020 Mercedes-AMG',
    year: 2020,
    price: '$31,663',
    downPayment: '$4,500',
    location: 'Fort Lauderdale, FL',
    miles: '75,114',
    images: [
      '/imagenes/Luxury/2020 Mercedes-AMG (1).webp',
      '/imagenes/Luxury/2020 Mercedes-AMG (2).webp',
      '/imagenes/Luxury/2020 Mercedes-AMG (3).webp',
      '/imagenes/Luxury/2020 Mercedes-AMG (4).webp',
      '/imagenes/Luxury/2020 Mercedes-AMG (5).webp',
      '/imagenes/Luxury/2020 Mercedes-AMG (6).webp',
      '/imagenes/Luxury/2020 Mercedes-AMG (7).webp',
      '/imagenes/Luxury/2020 Mercedes-AMG (8).webp',
      '/imagenes/Luxury/2020 Mercedes-AMG (9).webp',
      '/imagenes/Luxury/2020 Mercedes-AMG (10).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 42,
    brand: 'CHEVROLET',
    title: '2015 Chevrolet Camaro SS',
    year: 2015,
    price: '$25,000',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '27,853',
    images: [
      '/imagenes/Luxury/2015 Chevrolet Camaro SS (3).webp',
      '/imagenes/Luxury/2015 Chevrolet Camaro SS (4).webp',
      '/imagenes/Luxury/2015 Chevrolet Camaro SS (5).webp',
      '/imagenes/Luxury/2015 Chevrolet Camaro SS (6).webp',
      '/imagenes/Luxury/2015 Chevrolet Camaro SS (2).webp',
      '/imagenes/Luxury/2015 Chevrolet Camaro SS (1).webp',
      '/imagenes/Luxury/2015 Chevrolet Camaro SS (7).webp',
      '/imagenes/Luxury/2015 Chevrolet Camaro SS (8).webp',
      '/imagenes/Luxury/2015 Chevrolet Camaro SS (9).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 43,
    brand: 'CHEVROLET',
    title: '2021 Chevrolet Camaro SS',
    year: 2021,
    price: '$42,000',
    downPayment: '$5,500',
    location: 'Miami, FL',
    miles: '29,642',
    images: [
      '/imagenes/Luxury/2021 Chevrolet Camaro SS (4).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro SS (8).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro SS (3).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro SS (1).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro SS (2).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro SS (5).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro SS (6).webp',
      '/imagenes/Luxury/2021 Chevrolet Camaro SS (7).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 44,
    brand: 'CHEVROLET',
    title: '2014 Chevrolet Cruze',
    year: 2014,
    price: '$10,500',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '104,975',
    images: [
      '/imagenes/Sedan/2014 Chevrolet Cruze 1LT (1).webp',
      '/imagenes/Sedan/2014 Chevrolet Cruze 1LT (2).webp',
      '/imagenes/Sedan/2014 Chevrolet Cruze 1LT (3).webp',
      '/imagenes/Sedan/2014 Chevrolet Cruze 1LT (4).webp',
      '/imagenes/Sedan/2014 Chevrolet Cruze 1LT (5).webp',
      '/imagenes/Sedan/2014 Chevrolet Cruze 1LT (6).webp',
      '/imagenes/Sedan/2014 Chevrolet Cruze 1LT (7).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 45,
    brand: 'HYUNDAI',
    title: '2017 HYUNDAI SONATA ECO',
    year: 2017,
    price: '$13,000',
    downPayment: '$1,500',
    location: 'Miami, FL',
    miles: '51,434',
    images: [
      '/imagenes/Sedan/2017 HYUNDAI SONATA ECO (3).webp',
      '/imagenes/Sedan/2017 HYUNDAI SONATA ECO (4).webp',
      '/imagenes/Sedan/2017 HYUNDAI SONATA ECO (1).webp',
      '/imagenes/Sedan/2017 HYUNDAI SONATA ECO (2).webp',
      '/imagenes/Sedan/2017 HYUNDAI SONATA ECO (5).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 46,
    brand: 'KIA',
    title: '2019 Kia Optima LX',
    year: 2019,
    price: '$15,500',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '35,349',
    images: [
      '/imagenes/Sedan/2019 Kia Optima LX (3).webp',
      '/imagenes/Sedan/2019 Kia Optima LX (4).webp',
      '/imagenes/Sedan/2019 Kia Optima LX (1).webp',
      '/imagenes/Sedan/2019 Kia Optima LX (2).webp',
      '/imagenes/Sedan/2019 Kia Optima LX (5).webp',
      '/imagenes/Sedan/2019 Kia Optima LX (6).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 47,
    brand: 'TOYOTA',
    title: '2022 Toyota Camry LE',
    year: 2022,
    price: '$21,000',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '42,202',
    images: [
      '/imagenes/Sedan/2022 Toyota Camry LE (2).webp',
      '/imagenes/Sedan/2022 Toyota Camry LE (1).webp',
      '/imagenes/Sedan/2022 Toyota Camry LE (5).webp',
      '/imagenes/Sedan/2022 Toyota Camry LE (3).webp',
      '/imagenes/Sedan/2022 Toyota Camry LE (4).webp',
      '/imagenes/Sedan/2022 Toyota Camry LE (6).webp',
      '/imagenes/Sedan/2022 Toyota Camry LE (7).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 48,
    brand: 'TOYOTA',
    title: '2022 Toyota Corolla Cross',
    year: 2022,
    price: '$28,000',
    downPayment: '$3,000',
    location: 'Miami, FL',
    miles: '55,177',
    images: [
      '/imagenes/Sedan/2022 Toyota Corolla Cross (5).webp',
      '/imagenes/Sedan/2022 Toyota Corolla Cross (1).webp',
      '/imagenes/Sedan/2022 Toyota Corolla Cross (2).webp',
      '/imagenes/Sedan/2022 Toyota Corolla Cross (3).webp',
      '/imagenes/Sedan/2022 Toyota Corolla Cross (4).webp',
      '/imagenes/Sedan/2022 Toyota Corolla Cross (6).webp',
      '/imagenes/Sedan/2022 Toyota Corolla Cross (7).webp',
      '/imagenes/Sedan/2022 Toyota Corolla Cross (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 49,
    brand: 'CHEVROLET',
    title: '2024 Chevrolet Malibu 1LT',
    year: 2024,
    price: '$25,000',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '13,123',
    images: [
      '/imagenes/Sedan/2024 Chevrolet Malibu 1LT (5).webp',
      '/imagenes/Sedan/2024 Chevrolet Malibu 1LT (1).webp',
      '/imagenes/Sedan/2024 Chevrolet Malibu 1LT (2).webp',
      '/imagenes/Sedan/2024 Chevrolet Malibu 1LT (3).webp',
      '/imagenes/Sedan/2024 Chevrolet Malibu 1LT (4).webp',
      '/imagenes/Sedan/2024 Chevrolet Malibu 1LT (6).webp',
      '/imagenes/Sedan/2024 Chevrolet Malibu 1LT (7).webp',
      '/imagenes/Sedan/2024 Chevrolet Malibu 1LT (8).webp',
      '/imagenes/Sedan/2024 Chevrolet Malibu 1LT (9).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 50,
    brand: 'HONDA',
    title: '2024 Honda Civic Sport',
    year: 2024,
    price: '$25,000',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '15,744',
    images: [
      '/imagenes/Sedan/2024 Honda Civic Sport (1).webp',
      '/imagenes/Sedan/2024 Honda Civic Sport (2).webp',
      '/imagenes/Sedan/2024 Honda Civic Sport (3).webp',
      '/imagenes/Sedan/2024 Honda Civic Sport (4).webp',
      '/imagenes/Sedan/2024 Honda Civic Sport (6).webp',
      '/imagenes/Sedan/2024 Honda Civic Sport (7).webp',
      '/imagenes/Sedan/2024 Honda Civic Sport (5).webp',
      '/imagenes/Sedan/2024 Honda Civic Sport (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 51,
    brand: 'HYUNDAI',
    title: '2024 Hyundai Elantra SEL',
    year: 2024,
    price: '$20,000',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '16,103',
    images: [
      '/imagenes/Sedan/2024 Hyundai Elantra SEL (1).webp',
      '/imagenes/Sedan/2024 Hyundai Elantra SEL (2).webp',
      '/imagenes/Sedan/2024 Hyundai Elantra SEL (3).webp',
      '/imagenes/Sedan/2024 Hyundai Elantra SEL (4).webp',
      '/imagenes/Sedan/2024 Hyundai Elantra SEL (6).webp',
      '/imagenes/Sedan/2024 Hyundai Elantra SEL (7).webp',
      '/imagenes/Sedan/2024 Hyundai Elantra SEL (5).webp',
      '/imagenes/Sedan/2024 Hyundai Elantra SEL (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 52,
    brand: 'NISSAN',
    title: '2025 Nissan Versa SV',
    year: 2025,
    price: '$22,500',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '200,310',
    images: [
      '/imagenes/Sedan/2025 Nissan Versa SV (2).webp',
      '/imagenes/Sedan/2025 Nissan Versa SV (3).webp',
      '/imagenes/Sedan/2025 Nissan Versa SV (4).webp',
      '/imagenes/Sedan/2025 Nissan Versa SV (5).webp',
      '/imagenes/Sedan/2025 Nissan Versa SV (1).webp',
      '/imagenes/Sedan/2025 Nissan Versa SV (6).webp',
      '/imagenes/Sedan/2025 Nissan Versa SV (7).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 53,
    brand: 'TOYOTA',
    title: '2025 Toyota Camry SE',
    year: 2025,
    price: '$22,500',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '200,310',
    images: [
      '/imagenes/Sedan/2025 Toyota Camry SE (2).webp',
      '/imagenes/Sedan/2025 Toyota Camry SE (3).webp',
      '/imagenes/Sedan/2025 Toyota Camry SE (4).webp',
      '/imagenes/Sedan/2025 Toyota Camry SE (5).webp',
      '/imagenes/Sedan/2025 Toyota Camry SE (1).webp',
      '/imagenes/Sedan/2025 Toyota Camry SE (6).webp',
      '/imagenes/Sedan/2025 Toyota Camry SE (7).webp',
      '/imagenes/Sedan/2025 Toyota Camry SE (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 54,
    brand: 'TOYOTA',
    title: '2015 Toyota 4Runner',
    year: 2015,
    price: '$24,000',
    downPayment: '$2,400',
    location: 'Miami, FL',
    miles: '84,131',
    images: [
      '/imagenes/Suvs/2015 Toyota 4Runner (2).webp',
      '/imagenes/Suvs/2015 Toyota 4Runner (1).webp',
      '/imagenes/Suvs/2015 Toyota 4Runner (3).webp',
      '/imagenes/Suvs/2015 Toyota 4Runner (4).webp',
      '/imagenes/Suvs/2015 Toyota 4Runner (5).webp',
      '/imagenes/Suvs/2015 Toyota 4Runner (6).webp',
      '/imagenes/Suvs/2015 Toyota 4Runner (7).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 55,
    brand: 'DODGE',
    title: '2019 Dodge Grand Caravan',
    year: 2019,
    price: '$15,000',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '88,922',
    images: [
      '/imagenes/Suvs/2019 Dodge Grand Caravan (3).webp',
      '/imagenes/Suvs/2019 Dodge Grand Caravan (1).webp',
      '/imagenes/Suvs/2019 Dodge Grand Caravan (2).webp',
      '/imagenes/Suvs/2019 Dodge Grand Caravan (4).webp',
      '/imagenes/Suvs/2019 Dodge Grand Caravan (5).webp',
      '/imagenes/Suvs/2019 Dodge Grand Caravan (6).webp',
      '/imagenes/Suvs/2019 Dodge Grand Caravan (7).webp',
    ],
    type: 'VAN',
  },
  {
    id: 56,
    brand: 'CHEVROLET',
    title: '2021 Chevrolet Equinox LS',
    year: 2021,
    price: '$17,000',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '63,741',
    images: [
      '/imagenes/Suvs/2021 Chevrolet Equinox LS (3).webp',
      '/imagenes/Suvs/2021 Chevrolet Equinox LS (2).webp',
      '/imagenes/Suvs/2021 Chevrolet Equinox LS (1).webp',
      '/imagenes/Suvs/2021 Chevrolet Equinox LS (4).webp',
      '/imagenes/Suvs/2021 Chevrolet Equinox LS (5).webp',
      '/imagenes/Suvs/2021 Chevrolet Equinox LS (6).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 57,
    brand: 'CHEVROLET',
    title: '2022 Chevrolet Suburban',
    year: 2022,
    price: '$51,000',
    downPayment: '$6,500',
    location: 'Miami, FL',
    miles: '68,741',
    images: [
      '/imagenes/Suvs/2022 Chevrolet Suburban (2).webp',
      '/imagenes/Suvs/2022 Chevrolet Suburban (1).webp',
      '/imagenes/Suvs/2022 Chevrolet Suburban (3).webp',
      '/imagenes/Suvs/2022 Chevrolet Suburban (4).webp',
      '/imagenes/Suvs/2022 Chevrolet Suburban (5).webp',
      '/imagenes/Suvs/2022 Chevrolet Suburban (6).webp',
      '/imagenes/Suvs/2022 Chevrolet Suburban (7).webp',
      '/imagenes/Suvs/2022 Chevrolet Suburban (8).webp',
      '/imagenes/Suvs/2022 Chevrolet Suburban (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 58,
    brand: 'TOYOTA',
    title: '2022 Toyota 4Runner SR5',
    year: 2022,
    price: '$35,000',
    downPayment: '$3,500',
    location: 'Miami, FL',
    miles: '41,831',
    images: [
      '/imagenes/Suvs/2022 Toyota 4Runner SR5 (3).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner SR5 (2).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner SR5 (1).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner SR5 (4).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner SR5 (5).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner SR5 (6).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 59,
    brand: 'TOYOTA',
    title: '2022 Toyota Highlander XLE',
    year: 2022,
    price: '$34,000',
    downPayment: '$3,500',
    location: 'Miami, FL',
    miles: '24,788',
    images: [
      '/imagenes/Suvs/2022 Toyota Highlander XLE (2).webp',
      '/imagenes/Suvs/2022 Toyota Highlander XLE (1).webp',
      '/imagenes/Suvs/2022 Toyota Highlander XLE (3).webp',
      '/imagenes/Suvs/2022 Toyota Highlander XLE (4).webp',
      '/imagenes/Suvs/2022 Toyota Highlander XLE (5).webp',
      '/imagenes/Suvs/2022 Toyota Highlander XLE (6).webp',
      '/imagenes/Suvs/2022 Toyota Highlander XLE (7).webp',
      '/imagenes/Suvs/2022 Toyota Highlander XLE (8).webp',
      '/imagenes/Suvs/2022 Toyota Highlander XLE (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 60,
    brand: 'TOYOTA',
    title: '2022 Toyota Sequoia SR5',
    year: 2022,
    price: '$38,000',
    downPayment: '$4,000',
    location: 'Miami, FL',
    miles: '57,149',
    images: [
      '/imagenes/Suvs/2022 Toyota Sequoia SR5 (2).webp',
      '/imagenes/Suvs/2022 Toyota Sequoia SR5 (1).webp',
      '/imagenes/Suvs/2022 Toyota Sequoia SR5 (3).webp',
      '/imagenes/Suvs/2022 Toyota Sequoia SR5 (4).webp',
      '/imagenes/Suvs/2022 Toyota Sequoia SR5 (5).webp',
      '/imagenes/Suvs/2022 Toyota Sequoia SR5 (6).webp',
      '/imagenes/Suvs/2022 Toyota Sequoia SR5 (7).webp',
      '/imagenes/Suvs/2022 Toyota Sequoia SR5 (8).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 61,
    brand: 'TOYOTA',
    title: '2023 Ford Expedition MAX',
    year: 2023,
    price: '$56,000',
    downPayment: '$5,500',
    location: 'Miami, FL',
    miles: '7,267',
    images: [
      '/imagenes/Suvs/2023 Ford Expedition MAX (3).webp',
      '/imagenes/Suvs/2023 Ford Expedition MAX (1).webp',
      '/imagenes/Suvs/2023 Ford Expedition MAX (2).webp',
      '/imagenes/Suvs/2023 Ford Expedition MAX (4).webp',
      '/imagenes/Suvs/2023 Ford Expedition MAX (5).webp',
      '/imagenes/Suvs/2023 Ford Expedition MAX (6).webp',
      '/imagenes/Suvs/2023 Ford Expedition MAX (7).webp',
      '/imagenes/Suvs/2023 Ford Expedition MAX (8).webp',
      '/imagenes/Suvs/2023 Ford Expedition MAX (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 62,
    brand: 'GMC',
    title: '2023 GMC Terrain SLT',
    year: 2023,
    price: '$26,000',
    downPayment: '$3,000',
    location: 'Miami, FL',
    miles: '15,351',
    images: [
      '/imagenes/Suvs/2023 GMC Terrain SLT (2).webp',
      '/imagenes/Suvs/2023 GMC Terrain SLT (1).webp',
      '/imagenes/Suvs/2023 GMC Terrain SLT (3).webp',
      '/imagenes/Suvs/2023 GMC Terrain SLT (4).webp',
      '/imagenes/Suvs/2023 GMC Terrain SLT (5).webp',
      '/imagenes/Suvs/2023 GMC Terrain SLT (6).webp',
      '/imagenes/Suvs/2023 GMC Terrain SLT (7).webp',
      '/imagenes/Suvs/2023 GMC Terrain SLT (8).webp',
      '/imagenes/Suvs/2023 GMC Terrain SLT (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 63,
    brand: 'GMC',
    title: '2023 Lincoln Navigator',
    year: 2023,
    price: '$65,000',
    downPayment: '$6,500',
    location: 'Miami, FL',
    miles: '13,087',
    images: [
      '/imagenes/Suvs/2023 Lincoln Navigator (1).webp',
      '/imagenes/Suvs/2023 Lincoln Navigator (3).webp',
      '/imagenes/Suvs/2023 Lincoln Navigator (4).webp',
      '/imagenes/Suvs/2023 Lincoln Navigator (5).webp',
      '/imagenes/Suvs/2023 Lincoln Navigator (6).webp',
      '/imagenes/Suvs/2023 Lincoln Navigator (2).webp',
      '/imagenes/Suvs/2023 Lincoln Navigator (7).webp',
      '/imagenes/Suvs/2023 Lincoln Navigator (8).webp',
      '/imagenes/Suvs/2023 Lincoln Navigator (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 64,
    brand: 'BMW',
    title: '2024 BMW X3',
    year: 2023,
    price: '$44,000',
    downPayment: '$4,500',
    location: 'Miami, FL',
    miles: '17,636',
    images: [
      '/imagenes/Suvs/2024 BMW X3 (1).webp',
      '/imagenes/Suvs/2024 BMW X3 (2).webp',
      '/imagenes/Suvs/2024 BMW X3 (3).webp',
      '/imagenes/Suvs/2024 BMW X3 (4).webp',
      '/imagenes/Suvs/2024 BMW X3 (5).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 65,
    brand: 'CHEVROLET',
    title: '2024 Chevrolet Equinox LT',
    year: 2024,
    price: '$26,500',
    downPayment: '$3,000',
    location: 'Miami, FL',
    miles: '36,580',
    images: [
      '/imagenes/Suvs/2024 Chevrolet Equinox LT (1).webp',
      '/imagenes/Suvs/2024 Chevrolet Equinox LT (2).webp',
      '/imagenes/Suvs/2024 Chevrolet Equinox LT (3).webp',
      '/imagenes/Suvs/2024 Chevrolet Equinox LT (4).webp',
      '/imagenes/Suvs/2024 Chevrolet Equinox LT (5).webp',
      '/imagenes/Suvs/2024 Chevrolet Equinox LT (6).webp',
      '/imagenes/Suvs/2024 Chevrolet Equinox LT (7).webp',
      '/imagenes/Suvs/2024 Chevrolet Equinox LT (8).webp',
      '/imagenes/Suvs/2024 Chevrolet Equinox LT (9).webp',
    ],
    type: 'Suvs',
   },
  {
    id: 66,
    brand: 'HYUNDAI',
    title: '2024 Hyundai Tucson SE',
    year: 2024,
    price: '$26,000',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '32,327',
    images: [
      '/imagenes/Suvs/2024 Hyundai Tucson SE (2).webp',
      '/imagenes/Suvs/2024 Hyundai Tucson SE (3).webp',
      '/imagenes/Suvs/2024 Hyundai Tucson SE (4).webp',
      '/imagenes/Suvs/2024 Hyundai Tucson SE (5).webp',
      '/imagenes/Suvs/2024 Hyundai Tucson SE (6).webp',
      '/imagenes/Suvs/2024 Hyundai Tucson SE (7).webp',
      '/imagenes/Suvs/2024 Hyundai Tucson SE (1).webp',
      '/imagenes/Suvs/2024 Hyundai Tucson SE (8).webp',
      '/imagenes/Suvs/2024 Hyundai Tucson SE (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 67,
    brand: 'HYUNDAI',
    title: '2024 Toyota 4Runner',
    year: 2024,
    price: '$47,000',
    downPayment: '$5,000',
    location: 'Miami, FL',
    miles: '2,035',
    images: [
      '/imagenes/Suvs/2024 Toyota 4Runner (5).webp',
      '/imagenes/Suvs/2024 Toyota 4Runner (1).webp',
      '/imagenes/Suvs/2024 Toyota 4Runner (2).webp',
      '/imagenes/Suvs/2024 Toyota 4Runner (3).webp',
      '/imagenes/Suvs/2024 Toyota 4Runner (4).webp',
      '/imagenes/Suvs/2024 Toyota 4Runner (6).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 68,
    brand: 'FORD',
    title: '2019 Ford F-150',
    year: 2019,
    price: '$39,000',
    downPayment: '$4,000',
    location: 'Miami, FL',
    miles: '76,880',
    images: [
      '/imagenes/Trucks/2019 Ford F-150 (1).webp',
      '/imagenes/Trucks/2019 Ford F-150 (2).webp',
      '/imagenes/Trucks/2019 Ford F-150 (3).webp',
      '/imagenes/Trucks/2019 Ford F-150 (4).webp',
      '/imagenes/Trucks/2019 Ford F-150 (5).webp',
      '/imagenes/Trucks/2019 Ford F-150 (6).webp',
      '/imagenes/Trucks/2019 Ford F-150 (7).webp',
      '/imagenes/Trucks/2019 Ford F-150 (8).webp',
      '/imagenes/Trucks/2019 Ford F-150 (9).webp',
      '/imagenes/Trucks/2019 Ford F-150 (10).webp',
      '/imagenes/Trucks/2019 Ford F-150 (11).webp',
      '/imagenes/Trucks/2019 Ford F-150 (12).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 69,
    brand: 'FORD',
    title: '2020 Ford F-150 Raptor',
    year: 2020,
    price: '$56,000',
    downPayment: '$5,500',
    location: 'Miami, FL',
    miles: '13,851',
    images: [
      '/imagenes/Trucks/2020 Ford F-150 Raptor (6).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (7).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (8).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (9).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (5).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (1).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (2).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (3).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (4).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (10).webp',
      '/imagenes/Trucks/2020 Ford F-150 Raptor (11).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 70,
    brand: 'FORD',
    title: '2022 Ford F150 SuperCrew',
    year: 2022,
    price: '$42,000',
    downPayment: '$4,000',
    location: 'Miami, FL',
    miles: '34,253',
    images: [
      '/imagenes/Trucks/2022 Ford F150 SuperCrew (5).webp',
      '/imagenes/Trucks/2022 Ford F150 SuperCrew (4).webp',
      '/imagenes/Trucks/2022 Ford F150 SuperCrew (1).webp',
      '/imagenes/Trucks/2022 Ford F150 SuperCrew (2).webp',
      '/imagenes/Trucks/2022 Ford F150 SuperCrew (3).webp',
      '/imagenes/Trucks/2022 Ford F150 SuperCrew (6).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 71,
    brand: 'FORD',
    title: '2024 Ford F150 SuperCrew',
    year: 2024,
    price: '$44,000',
    downPayment: '$4,500',
    location: 'Miami, FL',
    miles: '4,603',
    images: [
      '/imagenes/Trucks/2024 Ford F150 SuperCrew (3).webp',
      '/imagenes/Trucks/2024 Ford F150 SuperCrew (4).webp',
      '/imagenes/Trucks/2024 Ford F150 SuperCrew (5).webp',
      '/imagenes/Trucks/2024 Ford F150 SuperCrew (6).webp',
      '/imagenes/Trucks/2024 Ford F150 SuperCrew (1).webp',
      '/imagenes/Trucks/2024 Ford F150 SuperCrew (2).webp',
      '/imagenes/Trucks/2024 Ford F150 SuperCrew (7).webp',
      '/imagenes/Trucks/2024 Ford F150 SuperCrew (8).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 72,
    brand: 'FORD',
    title: '2024 Ford Mustang EcoBoost',
    year: 2024,
    price: '$30,000',
    downPayment: '$3,000',
    location: 'Miami, FL',
    miles: '20,090',
    images: [
      '/imagenes/Luxury/2024 Ford Mustang EcoBoost (1).webp',
      '/imagenes/Luxury/2024 Ford Mustang EcoBoost (3).webp',
      '/imagenes/Luxury/2024 Ford Mustang EcoBoost (4).webp',
      '/imagenes/Luxury/2024 Ford Mustang EcoBoost (5).webp',
      '/imagenes/Luxury/2024 Ford Mustang EcoBoost (6).webp',
      '/imagenes/Luxury/2024 Ford Mustang EcoBoost (2).webp',
      '/imagenes/Luxury/2024 Ford Mustang EcoBoost (7).webp',
      '/imagenes/Luxury/2024 Ford Mustang EcoBoost (8).webp',
    ],
    type: 'Luxury',
  },
  {
    id: 73,
    brand: 'TOYOTA',
    title: '2019 Toyota Corolla LE',
    year: 2019,
    price: '$16,000',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '69,779',
    images: [
      '/imagenes/Sedan/2019 Toyota Corolla LE (1).webp',
      '/imagenes/Sedan/2019 Toyota Corolla LE (2).webp',
      '/imagenes/Sedan/2019 Toyota Corolla LE (3).webp',
      '/imagenes/Sedan/2019 Toyota Corolla LE (4).webp',
      '/imagenes/Sedan/2019 Toyota Corolla LE (5).webp',
      '/imagenes/Sedan/2019 Toyota Corolla LE (6).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 74,
    brand: 'DODGE',
    title: '2023 Dodge Charger SXT',
    year: 2023,
    price: '$28,500',
    downPayment: '$3,000',
    location: 'Miami, FL',
    miles: '44,003',
    images: [
      '/imagenes/Sedan/2023 Dodge Charger SXT (1).webp',
      '/imagenes/Sedan/2023 Dodge Charger SXT (2).webp',
      '/imagenes/Sedan/2023 Dodge Charger SXT (3).webp',
      '/imagenes/Sedan/2023 Dodge Charger SXT (4).webp',
      '/imagenes/Sedan/2023 Dodge Charger SXT (5).webp',
      '/imagenes/Sedan/2023 Dodge Charger SXT (6).webp',
      '/imagenes/Sedan/2023 Dodge Charger SXT (7).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 75,
    brand: 'HONDA',
    title: '2023 Honda Civic Sport',
    year: 2023,
    price: '$24,500',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '25,875',
    images: [
      '/imagenes/Sedan/2023 Honda Civic Sport (1).webp',
      '/imagenes/Sedan/2023 Honda Civic Sport (2).webp',
      '/imagenes/Sedan/2023 Honda Civic Sport (3).webp',
      '/imagenes/Sedan/2023 Honda Civic Sport (4).webp',
      '/imagenes/Sedan/2023 Honda Civic Sport (5).webp',
      '/imagenes/Sedan/2023 Honda Civic Sport (6).webp',
      '/imagenes/Sedan/2023 Honda Civic Sport (7).webp',
      '/imagenes/Sedan/2023 Honda Civic Sport (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 76,
    brand: 'HONDA',
    title: '2014 Jeep Wrangler Unlimited Polar',
    year: 2023,
    price: '$22,000',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '667,053',
    images: [
      '/imagenes/Suvs/2014 Jeep Wrangler Unlimited Polar (1).webp',
      '/imagenes/Suvs/2014 Jeep Wrangler Unlimited Polar (2).webp',
      '/imagenes/Suvs/2014 Jeep Wrangler Unlimited Polar (3).webp',
      '/imagenes/Suvs/2014 Jeep Wrangler Unlimited Polar (4).webp',
      '/imagenes/Suvs/2014 Jeep Wrangler Unlimited Polar (5).webp',
      '/imagenes/Suvs/2014 Jeep Wrangler Unlimited Polar (6).webp',
      '/imagenes/Suvs/2014 Jeep Wrangler Unlimited Polar (7).webp',
      '/imagenes/Suvs/2014 Jeep Wrangler Unlimited Polar (8).webp',
    ],
    type: 'JEEP',
  },
  {
    id: 77,
    brand: 'CHEVROLET',
    title: '2019 Chevrolet Equinox Premier',
    year: 2019,
    price: '$20,000',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '42,587',
    images: [
      '/imagenes/Suvs/2019 Chevrolet Equinox Premier (1).webp',
      '/imagenes/Suvs/2019 Chevrolet Equinox Premier (2).webp',
      '/imagenes/Suvs/2019 Chevrolet Equinox Premier (3).webp',
      '/imagenes/Suvs/2019 Chevrolet Equinox Premier (4).webp',
      '/imagenes/Suvs/2019 Chevrolet Equinox Premier (5).webp',
      '/imagenes/Suvs/2019 Chevrolet Equinox Premier (6).webp',
      '/imagenes/Suvs/2019 Chevrolet Equinox Premier (7).webp',
      '/imagenes/Suvs/2019 Chevrolet Equinox Premier (8).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 78,
    brand: 'HYUNDAI',
    title: '2020 Hyundai Kona',
    year: 2019,
    price: '$19,500',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '22,847',
    images: [
      '/imagenes/Suvs/2020 Hyundai Kona (1).webp',
      '/imagenes/Suvs/2020 Hyundai Kona (2).webp',
      '/imagenes/Suvs/2020 Hyundai Kona (3).webp',
      '/imagenes/Suvs/2020 Hyundai Kona (4).webp',
      '/imagenes/Suvs/2020 Hyundai Kona (5).webp',
      '/imagenes/Suvs/2020 Hyundai Kona (6).webp',
      '/imagenes/Suvs/2020 Hyundai Kona (7).webp',
      '/imagenes/Suvs/2020 Hyundai Kona (8).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 79,
    brand: 'VOLKSWAGEN',
    title: '2021 Volkswagen Golf',
    year: 2021,
    price: '$19,500',
    downPayment: '$2,000',
    location: 'Miami, FL',
    miles: '53,047',
    images: [
      '/imagenes/Suvs/2021 Volkswagen Golf (1).webp',
      '/imagenes/Suvs/2021 Volkswagen Golf (2).webp',
      '/imagenes/Suvs/2021 Volkswagen Golf (3).webp',
      '/imagenes/Suvs/2021 Volkswagen Golf (4).webp',
      '/imagenes/Suvs/2021 Volkswagen Golf (5).webp',
      '/imagenes/Suvs/2021 Volkswagen Golf (6).webp',
      '/imagenes/Suvs/2021 Volkswagen Golf (7).webp',
      '/imagenes/Suvs/2021 Volkswagen Golf (8).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 80,
    brand: 'CHEVROLET',
    title: '2022 Chevrolet Traverse LT',
    year: 2022,
    price: '$26,000',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '33,544',
    images: [
      '/imagenes/Suvs/2022 Chevrolet Traverse LT (1).webp',
      '/imagenes/Suvs/2022 Chevrolet Traverse LT (2).webp',
      '/imagenes/Suvs/2022 Chevrolet Traverse LT (3).webp',
      '/imagenes/Suvs/2022 Chevrolet Traverse LT (4).webp',
      '/imagenes/Suvs/2022 Chevrolet Traverse LT (5).webp',
      '/imagenes/Suvs/2022 Chevrolet Traverse LT (6).webp',
      '/imagenes/Suvs/2022 Chevrolet Traverse LT (7).webp',
      '/imagenes/Suvs/2022 Chevrolet Traverse LT (8).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 81,
    brand: 'TOYOTA',
    title: '2022 Toyota 4Runner Limited',
    year: 2022,
    price: '$45,000',
    downPayment: '$4,000',
    location: 'Miami, FL',
    miles: '28,036',
    images: [
      '/imagenes/Suvs/2022 Toyota 4Runner Limited (1).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner Limited (2).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner Limited (3).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner Limited (4).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner Limited (5).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner Limited (6).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner Limited (7).webp',
      '/imagenes/Suvs/2022 Toyota 4Runner Limited (8).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 82,
    brand: 'CHEVROLET',
    title: '2023 Chevrolet Equinox RS',
    year: 2023,
    price: '$26,000',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '6,564',
    images: [
      '/imagenes/Suvs/2023 Chevrolet Equinox RS (1).webp',
      '/imagenes/Suvs/2023 Chevrolet Equinox RS (2).webp',
      '/imagenes/Suvs/2023 Chevrolet Equinox RS (3).webp',
      '/imagenes/Suvs/2023 Chevrolet Equinox RS (4).webp',
      '/imagenes/Suvs/2023 Chevrolet Equinox RS (5).webp',
      '/imagenes/Suvs/2023 Chevrolet Equinox RS (6).webp',
      '/imagenes/Suvs/2023 Chevrolet Equinox RS (7).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 83,
    brand: 'KIA',
    title: '2023 Kia Sportage',
    year: 2023,
    price: '$35,000',
    downPayment: '$4,000',
    location: 'Miami, FL',
    miles: '38,906',
    images: [
      '/imagenes/Suvs/2023 Kia Sportage (1).webp',
      '/imagenes/Suvs/2023 Kia Sportage (2).webp',
      '/imagenes/Suvs/2023 Kia Sportage (3).webp',
      '/imagenes/Suvs/2023 Kia Sportage (4).webp',
      '/imagenes/Suvs/2023 Kia Sportage (5).webp',
      '/imagenes/Suvs/2023 Kia Sportage (6).webp',
      '/imagenes/Suvs/2023 Kia Sportage (7).webp',
      '/imagenes/Suvs/2023 Kia Sportage (8).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 84,
    brand: 'KIA',
    title: '2024 Kia Sorento S',
    year: 2024,
    price: '$32,500',
    downPayment: '$3,500',
    location: 'Miami, FL',
    miles: '16,479',
    images: [
      '/imagenes/Suvs/2024 Kia Sorento S (1).webp',
      '/imagenes/Suvs/2024 Kia Sorento S (2).webp',
      '/imagenes/Suvs/2024 Kia Sorento S (3).webp',
      '/imagenes/Suvs/2024 Kia Sorento S (4).webp',
      '/imagenes/Suvs/2024 Kia Sorento S (5).webp',
      '/imagenes/Suvs/2024 Kia Sorento S (6).webp',
      '/imagenes/Suvs/2024 Kia Sorento S (7).webp',
      '/imagenes/Suvs/2024 Kia Sorento S (8).webp',
      '/imagenes/Suvs/2024 Kia Sorento S (9).webp',
      '/imagenes/Suvs/2024 Kia Sorento S (10).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 85,
    brand: 'KIA',
    title: '2024 Mitsubishi Outlander',
    year: 2024,
    price: '$29,500',
    downPayment: '$3,000',
    location: 'Miami, FL',
    miles: '14,770',
    images: [
      '/imagenes/Suvs/2024 Mitsubishi Outlander (1).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (2).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (3).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (4).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (5).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (6).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (7).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (8).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (9).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (10).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (11).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 86,
    brand: 'KIA',
    title: '2024 Mitsubishi Outlander',
    year: 2024,
    price: '$29,000',
    downPayment: '$3,000',
    location: 'Miami, FL',
    miles: '24,027',
    images: [
      '/imagenes/Suvs/2024 Mitsubishi Outlander (12).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (13).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (14).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (15).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (16).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (17).webp',
      '/imagenes/Suvs/2024 Mitsubishi Outlander (18).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 87,
    brand: 'HYUNDAI',
    title: '2025 Hyundai Kona SEL',
    year: 2025,
    price: '$26,500',
    downPayment: '$2,500',
    location: 'Miami, FL',
    miles: '17,180',
    images: [
      '/imagenes/Suvs/2025 Hyundai Kona SEL (1).webp',
      '/imagenes/Suvs/2025 Hyundai Kona SEL (2).webp',
      '/imagenes/Suvs/2025 Hyundai Kona SEL (3).webp',
      '/imagenes/Suvs/2025 Hyundai Kona SEL (4).webp',
      '/imagenes/Suvs/2025 Hyundai Kona SEL (5).webp',
      '/imagenes/Suvs/2025 Hyundai Kona SEL (6).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 88,
    brand: 'TOYOTA',
    title: '2016 Toyota Tundra',
    year: 2016,
    price: '$22,000',
    downPayment: '$1,500',
    location: 'Miami, FL',
    miles: '141,784',
    images: [
      '/imagenes/Trucks/2016 Toyota Tundra (1).webp',
      '/imagenes/Trucks/2016 Toyota Tundra (2).webp',
      '/imagenes/Trucks/2016 Toyota Tundra (3).webp',
      '/imagenes/Trucks/2016 Toyota Tundra (4).webp',
      '/imagenes/Trucks/2016 Toyota Tundra (5).webp',
      '/imagenes/Trucks/2016 Toyota Tundra (6).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 89,
    brand: 'FORD',
    title: '2020 Ford F250 Super Duty',
    year: 2020,
    price: '$41,000',
    downPayment: '$5,000',
    location: 'Miami, FL',
    miles: '78,377',
    images: [
      '/imagenes/Trucks/2020 Ford F250 Super Duty (1).webp',
      '/imagenes/Trucks/2020 Ford F250 Super Duty (2).webp',
      '/imagenes/Trucks/2020 Ford F250 Super Duty (3).webp',
      '/imagenes/Trucks/2020 Ford F250 Super Duty (4).webp',
      '/imagenes/Trucks/2020 Ford F250 Super Duty (5).webp',
      '/imagenes/Trucks/2020 Ford F250 Super Duty (6).webp',
      '/imagenes/Trucks/2020 Ford F250 Super Duty (7).webp',
      '/imagenes/Trucks/2020 Ford F250 Super Duty (8).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 90,
    brand: 'CHEVROLET',
    title: '2022 Chevrolet Silverado',
    year: 2022,
    price: '$31,000',
    downPayment: '$3,000',
    location: 'Miami, FL',
    miles: '30,909',
    images: [
      '/imagenes/Trucks/2022 Chevrolet Silverado (1).webp',
      '/imagenes/Trucks/2022 Chevrolet Silverado (2).webp',
      '/imagenes/Trucks/2022 Chevrolet Silverado (3).webp',
      '/imagenes/Trucks/2022 Chevrolet Silverado (4).webp',
      '/imagenes/Trucks/2022 Chevrolet Silverado (5).webp',
      '/imagenes/Trucks/2022 Chevrolet Silverado (6).webp',
      '/imagenes/Trucks/2022 Chevrolet Silverado (7).webp',
      '/imagenes/Trucks/2022 Chevrolet Silverado (8).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 91,
    brand: 'INFINITI',
    title: '2021 Infiniti Q50 Sensory',
    year: 2021,
    price: '',
    downPayment: '$3,500',
    location: 'Arlington, TX',
    miles: '84,464',
    images: [
      '/imagenes/Sedan/2021 Infiniti Q50 Sensory (1).webp',
      '/imagenes/Sedan/2021 Infiniti Q50 Sensory (2).webp',
      '/imagenes/Sedan/2021 Infiniti Q50 Sensory (3).webp',
      '/imagenes/Sedan/2021 Infiniti Q50 Sensory (4).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 92,
    brand: 'NISSAN',
    title: '2022 Nissan Altima SR',
    year: 2021,
    price: '',
    downPayment: '$3,000',
    location: 'Arlington, TX',
    miles: '61,727',
    images: [
      '/imagenes/Sedan/2022 Nissan Altima SR (2).webp',
      '/imagenes/Sedan/2022 Nissan Altima SR (1).webp',
      '/imagenes/Sedan/2022 Nissan Altima SR (3).webp',
      '/imagenes/Sedan/2022 Nissan Altima SR (4).webp',
      '/imagenes/Sedan/2022 Nissan Altima SR (5).webp',
      '/imagenes/Sedan/2022 Nissan Altima SR (6).webp',
      '/imagenes/Sedan/2022 Nissan Altima SR (7).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 93,
    brand: 'CHEVROLET',
    title: '2023 Chevrolet Malibu',
    year: 2023,
    price: '',
    downPayment: '$3,000',
    location: 'Arlington, TX',
    miles: '60,692',
    images: [
      '/imagenes/Sedan/2023 Chevrolet Malibu (1).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu (2).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu (3).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu (4).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu (5).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu (6).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu (7).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 94,
    brand: 'CHEVROLET',
    title: '2023 Chevrolet Malibu 1LT',
    year: 2023,
    price: '',
    downPayment: '$3,000',
    location: 'Arlington, TX',
    miles: '57,939',
    images: [
      '/imagenes/Sedan/2023 Chevrolet Malibu 1LT (1).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu 1LT (2).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu 1LT (3).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu 1LT (4).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu 1LT (5).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu 1LT (6).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu 1LT (7).webp',
      '/imagenes/Sedan/2023 Chevrolet Malibu 1LT (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 95,
    brand: 'NISSAN',
    title: '2023 Nissan Altima SR',
    year: 2023,
    price: '',
    downPayment: '$3,000',
    location: 'Arlington, TX',
    miles: '52,774',
    images: [
      '/imagenes/Sedan/2023 Nissan Altima SR (1).webp',
      '/imagenes/Sedan/2023 Nissan Altima SR (2).webp',
      '/imagenes/Sedan/2023 Nissan Altima SR (3).webp',
      '/imagenes/Sedan/2023 Nissan Altima SR (4).webp',
      '/imagenes/Sedan/2023 Nissan Altima SR (5).webp',
      '/imagenes/Sedan/2023 Nissan Altima SR (6).webp',
      '/imagenes/Sedan/2023 Nissan Altima SR (7).webp',
      '/imagenes/Sedan/2023 Nissan Altima SR (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 96,
    brand: 'CADILLAC',
    title: '2017 Cadillac Escalade Premium',
    year: 2017,
    price: '',
    downPayment: '$5,000',
    location: 'Arlington, TX',
    miles: '120,500',
    images: [
      '/imagenes/Suvs/2017 Cadillac Escalade Premium (1).webp',
      '/imagenes/Suvs/2017 Cadillac Escalade Premium (2).webp',
      '/imagenes/Suvs/2017 Cadillac Escalade Premium (3).webp',
      '/imagenes/Suvs/2017 Cadillac Escalade Premium (4).webp',
      '/imagenes/Suvs/2017 Cadillac Escalade Premium (5).webp',
      '/imagenes/Suvs/2017 Cadillac Escalade Premium (6).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 97,
    brand: 'CADILLAC',
    title: '2015 Cadillac Escalade ESV',
    year: 2015,
    price: '',
    downPayment: '$4,000',
    location: 'Arlington, TX',
    miles: '94,531',
    images: [
      '/imagenes/Suvs/2015 Cadillac Escalade ESV (1).webp',
      '/imagenes/Suvs/2015 Cadillac Escalade ESV (2).webp',
      '/imagenes/Suvs/2015 Cadillac Escalade ESV (3).webp',
      '/imagenes/Suvs/2015 Cadillac Escalade ESV (4).webp',
      '/imagenes/Suvs/2015 Cadillac Escalade ESV (5).webp',
      '/imagenes/Suvs/2015 Cadillac Escalade ESV (6).webp',
      '/imagenes/Suvs/2015 Cadillac Escalade ESV (7).webp',
      '/imagenes/Suvs/2015 Cadillac Escalade ESV (8).webp',
      '/imagenes/Suvs/2015 Cadillac Escalade ESV (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 98,
    brand: 'CHEVROLET',
    title: '2017 Chevrolet Tahoe LT',
    year: 2017,
    price: '',
    downPayment: '$5,000',
    location: 'Arlington, TX',
    miles: '70,215',
    images: [
      '/imagenes/Suvs/2017 Chevrolet Tahoe LT (1).webp',
      '/imagenes/Suvs/2017 Chevrolet Tahoe LT (2).webp',
      '/imagenes/Suvs/2017 Chevrolet Tahoe LT (3).webp',
      '/imagenes/Suvs/2017 Chevrolet Tahoe LT (4).webp',
      '/imagenes/Suvs/2017 Chevrolet Tahoe LT (5).webp',
      '/imagenes/Suvs/2017 Chevrolet Tahoe LT (6).webp',
      '/imagenes/Suvs/2017 Chevrolet Tahoe LT (7).webp',
      '/imagenes/Suvs/2017 Chevrolet Tahoe LT (8).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 99,
    brand: 'GMC',
    title: '2018 GMC Yukon Denali',
    year: 2018,
    price: '',
    downPayment: '$5,500',
    location: 'Arlington, TX',
    miles: '98,578',
    images: [
      '/imagenes/Suvs/2018 GMC Yukon Denali (1).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (2).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (3).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (4).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (5).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (6).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (7).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (8).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (9).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (10).webp',
      '/imagenes/Suvs/2018 GMC Yukon Denali (11).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 100,
    brand: 'CHEVROLET',
    title: '2019 Chevrolet Tahoe LT',
    year: 2019,
    price: '',
    downPayment: '$4,500',
    location: 'Arlington, TX',
    miles: '111,549',
    images: [
      '/imagenes/Suvs/2019 Chevrolet Tahoe LT (1).webp',
      '/imagenes/Suvs/2019 Chevrolet Tahoe LT (2).webp',
      '/imagenes/Suvs/2019 Chevrolet Tahoe LT (3).webp',
      '/imagenes/Suvs/2019 Chevrolet Tahoe LT (4).webp',
      '/imagenes/Suvs/2019 Chevrolet Tahoe LT (5).webp',
      '/imagenes/Suvs/2019 Chevrolet Tahoe LT (6).webp',
      '/imagenes/Suvs/2019 Chevrolet Tahoe LT (7).webp',
      '/imagenes/Suvs/2019 Chevrolet Tahoe LT (8).webp',
      '/imagenes/Suvs/2019 Chevrolet Tahoe LT (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 101,
    brand: 'GMC',
    title: '2019 GMC Yukon XL Denali',
    year: 2019,
    price: '',
    downPayment: '$5,300',
    location: 'Arlington, TX',
    miles: '107,200',
    images: [
      '/imagenes/Suvs/2019 GMC Yukon XL (1).webp',
      '/imagenes/Suvs/2019 GMC Yukon XL (2).webp',
      '/imagenes/Suvs/2019 GMC Yukon XL (3).webp',
      '/imagenes/Suvs/2019 GMC Yukon XL (4).webp',
      '/imagenes/Suvs/2019 GMC Yukon XL (5).webp',
      '/imagenes/Suvs/2019 GMC Yukon XL (6).webp',
      '/imagenes/Suvs/2019 GMC Yukon XL (7).webp',
      '/imagenes/Suvs/2019 GMC Yukon XL (8).webp',
      '/imagenes/Suvs/2019 GMC Yukon XL (9).webp',
      '/imagenes/Suvs/2019 GMC Yukon XL (10).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 102,
    brand: 'CHEVROLET',
    title: '2020 Chevrolet Suburban LT',
    year: 2020,
    price: '',
    downPayment: '$3,800',
    location: 'Arlington, TX',
    miles: '100,000',
    images: [
      '/imagenes/Suvs/2020 Chevrolet Suburban LT (1).webp',
      '/imagenes/Suvs/2020 Chevrolet Suburban LT (2).webp',
      '/imagenes/Suvs/2020 Chevrolet Suburban LT (3).webp',
      '/imagenes/Suvs/2020 Chevrolet Suburban LT (4).webp',
      '/imagenes/Suvs/2020 Chevrolet Suburban LT (5).webp',
      '/imagenes/Suvs/2020 Chevrolet Suburban LT (6).webp',
      '/imagenes/Suvs/2020 Chevrolet Suburban LT (7).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 103,
    brand: 'CHEVROLET',
    title: '2020 Chevrolet Tahoe Premier',
    year: 2020,
    price: '',
    downPayment: '$5,000',
    location: 'Arlington, TX',
    miles: '111,233',
    images: [
      '/imagenes/Suvs/2020 Chevrolet Tahoe Premier (2).webp',
      '/imagenes/Suvs/2020 Chevrolet Tahoe Premier (1).webp',
      '/imagenes/Suvs/2020 Chevrolet Tahoe Premier (3).webp',
      '/imagenes/Suvs/2020 Chevrolet Tahoe Premier (4).webp',
      '/imagenes/Suvs/2020 Chevrolet Tahoe Premier (5).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 104,
    brand: 'DODGE',
    title: '2022 Dodge Durango GT',
    year: 2022,
    price: '',
    downPayment: '$5,000',
    location: 'Arlington, TX',
    miles: '111,233',
    images: [
      '/imagenes/Suvs/2022 Dodge Durango GT (1).webp',
      '/imagenes/Suvs/2022 Dodge Durango GT (2).webp',
      '/imagenes/Suvs/2022 Dodge Durango GT (3).webp',
      '/imagenes/Suvs/2022 Dodge Durango GT (4).webp',
      '/imagenes/Suvs/2022 Dodge Durango GT (5).webp',
      '/imagenes/Suvs/2022 Dodge Durango GT (6).webp',
      '/imagenes/Suvs/2022 Dodge Durango GT (7).webp',
      '/imagenes/Suvs/2022 Dodge Durango GT (8).webp',
      '/imagenes/Suvs/2022 Dodge Durango GT (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 105,
    brand: 'TOYOTA',
    title: '2017 Toyota tundra TRD',
    year: 2017,
    price: '',
    downPayment: '$4,500',
    location: 'Arlington, TX',
    miles: '118,000',
    images: [
      '/imagenes/Trucks/2017 Toyota tundra TRD (1).webp',
      '/imagenes/Trucks/2017 Toyota tundra TRD (2).webp',
      '/imagenes/Trucks/2017 Toyota tundra TRD (3).webp',
      '/imagenes/Trucks/2017 Toyota tundra TRD (4).webp',
      '/imagenes/Trucks/2017 Toyota tundra TRD (5).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 106,
    brand: 'FORD',
    title: '2018 Ford F-150 Lariat',
    year: 2018,
    price: '',
    downPayment: '$5,000',
    location: 'Arlington, TX',
    miles: '118,942',
    images: [
      '/imagenes/Trucks/2018 Ford F-150 Lariat (1).webp',
      '/imagenes/Trucks/2018 Ford F-150 Lariat (2).webp',
      '/imagenes/Trucks/2018 Ford F-150 Lariat (3).webp',
      '/imagenes/Trucks/2018 Ford F-150 Lariat (4).webp',
      '/imagenes/Trucks/2018 Ford F-150 Lariat (5).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 107,
    brand: 'FORD',
    title: '2019 Ford F-150 Limited',
    year: 2019,
    price: '',
    downPayment: '$5,000',
    location: 'Arlington, TX',
    miles: '111,469',
    images: [
      '/imagenes/Trucks/2019 Ford F-150 Limited (1).webp',
      '/imagenes/Trucks/2019 Ford F-150 Limited (2).webp',
      '/imagenes/Trucks/2019 Ford F-150 Limited (3).webp',
      '/imagenes/Trucks/2019 Ford F-150 Limited (4).webp',
      '/imagenes/Trucks/2019 Ford F-150 Limited (5).webp',
      '/imagenes/Trucks/2019 Ford F-150 Limited (6).webp',
      '/imagenes/Trucks/2019 Ford F-150 Limited (7).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 108,
    brand: 'RAM',
    title: '2019 RAM 1500 big horn',
    year: 2019,
    price: '',
    downPayment: '$3,700',
    location: 'Arlington, TX',
    miles: '86,700',
    images: [
      '/imagenes/Trucks/2019 ram 1500 big horn (1).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (2).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (3).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (4).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (5).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (6).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 109,
    brand: 'RAM',
    title: '2019 RAM 1500 big horn',
    year: 2019,
    price: '',
    downPayment: '$5,000',
    location: 'Arlington, TX',
    miles: '111,469',
    images: [
      '/imagenes/Trucks/2019 ram 1500 big horn (1).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (2).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (3).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (4).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (5).webp',
      '/imagenes/Trucks/2019 ram 1500 big horn (6).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 110,
    brand: 'RAM',
    title: '2019 RAM 2500 tradesman',
    year: 2019,
    price: '',
    downPayment: '$4,500',
    location: 'Arlington, TX',
    miles: '128,000',
    images: [
      '/imagenes/Trucks/2019 ram 2500 tradesman (1).webp',
      '/imagenes/Trucks/2019 ram 2500 tradesman (2).webp',
      '/imagenes/Trucks/2019 ram 2500 tradesman (3).webp',
      '/imagenes/Trucks/2019 ram 2500 tradesman (4).webp',
      '/imagenes/Trucks/2019 ram 2500 tradesman (5).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 111,
    brand: 'GMC',
    title: '2020 GMC SIERRA',
    year: 2020,
    price: '',
    downPayment: '$6,500',
    location: 'Arlington, TX',
    miles: '115,000',
    images: [
      '/imagenes/Trucks/2020 GMC SIERRA (1).webp',
      '/imagenes/Trucks/2020 GMC SIERRA (2).webp',
      '/imagenes/Trucks/2020 GMC SIERRA (3).webp',
      '/imagenes/Trucks/2020 GMC SIERRA (4).webp',
      '/imagenes/Trucks/2020 GMC SIERRA (5).webp',
      '/imagenes/Trucks/2020 GMC SIERRA (6).webp',
      '/imagenes/Trucks/2020 GMC SIERRA (7).webp',
      '/imagenes/Trucks/2020 GMC SIERRA (8).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 112,
    brand: 'CHEVROLET',
    title: '2021 Chevrolet Silverado',
    year: 2021,
    price: '',
    downPayment: '$4,500',
    location: 'Arlington, TX',
    miles: '100,000',
    images: [
      '/imagenes/Trucks/2021 Chevrolet Silverado (1).webp',
      '/imagenes/Trucks/2021 Chevrolet Silverado (2).webp',
      '/imagenes/Trucks/2021 Chevrolet Silverado (3).webp',
      '/imagenes/Trucks/2021 Chevrolet Silverado (4).webp',
      '/imagenes/Trucks/2021 Chevrolet Silverado (5).webp',
      '/imagenes/Trucks/2021 Chevrolet Silverado (6).webp',
      '/imagenes/Trucks/2021 Chevrolet Silverado (7).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 113,
    brand: 'FORD',
    title: 'Ford Platinum 2017',
    year: 2017,
    price: '',
    downPayment: '$4,000',
    location: 'Arlington, TX',
    miles: '114,000',
    images: [
      '/imagenes/Trucks/Ford platinum 2017 (1).webp',
      '/imagenes/Trucks/Ford platinum 2017 (2).webp',
      '/imagenes/Trucks/Ford platinum 2017 (3).webp',
      '/imagenes/Trucks/Ford platinum 2017 (4).webp',
      '/imagenes/Trucks/Ford platinum 2017 (5).webp',
      '/imagenes/Trucks/Ford platinum 2017 (6).webp',
    ],
    type: 'Trucks',
  },
  {
    id: 114,
    brand: 'MERCEDES',
    title: '2025 Mercedes-Benz CLA 250',
    year: 2025,
    price: '42.000',
    downPayment: '$4,500',
    location: 'Miami, FL',
    miles: '20,495',
    images: [
      '/imagenes/Sedan/2025 Mercedes-Benz CLA 250 (1).webp',
      '/imagenes/Sedan/2025 Mercedes-Benz CLA 250 (2).webp',
      '/imagenes/Sedan/2025 Mercedes-Benz CLA 250 (3).webp',
      '/imagenes/Sedan/2025 Mercedes-Benz CLA 250 (4).webp',
      '/imagenes/Sedan/2025 Mercedes-Benz CLA 250 (5).webp',
      '/imagenes/Sedan/2025 Mercedes-Benz CLA 250 (6).webp',
      '/imagenes/Sedan/2025 Mercedes-Benz CLA 250 (7).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 115,
    brand: 'MERCEDES',
    title: '2021 Mercedes-Benz GLC 300',
    year: 2021,
    price: '30.000',
    downPayment: '$3,500',
    location: 'Miami, FL',
    miles: '40,501',
    images: [
      '/imagenes/Suvs/2021 Mercedes-Benz GLC 300 (1).webp',
      '/imagenes/Suvs/2021 Mercedes-Benz GLC 300 (2).webp',
      '/imagenes/Suvs/2021 Mercedes-Benz GLC 300 (3).webp',
      '/imagenes/Suvs/2021 Mercedes-Benz GLC 300 (4).webp',
      '/imagenes/Suvs/2021 Mercedes-Benz GLC 300 (5).webp',
      '/imagenes/Suvs/2021 Mercedes-Benz GLC 300 (6).webp',
      '/imagenes/Suvs/2021 Mercedes-Benz GLC 300 (7).webp',
      '/imagenes/Suvs/2021 Mercedes-Benz GLC 300 (8).webp',
      '/imagenes/Suvs/2021 Mercedes-Benz GLC 300 (9).webp',
    ],
    type: 'Suvs',
  },
  {
    id: 116,
    brand: 'INFINITI',
    title: '2019 INFINITI Q50',
    year: 2019,
    price: '19.122',
    downPayment: '$2,000',
    location: 'Fort Lauderdale, FL',
    miles: '90,221',
    images: [
      '/imagenes/Sedan/2019 INFINITI Q50 blue (1).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 blue (2).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 blue (3).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 blue (4).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 blue (5).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 blue (6).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 blue (7).webp',
      '/imagenes/Sedan/2019 INFINITI Q50 blue (8).webp',
    ],
    type: 'Sedan',
  },
  {
    id: 117,
    brand: 'TOYOTA',
    title: '2021 Toyota RAV4 XLE',
    year: 2021,
    price: '$29.500',
    downPayment: '$3,000',
    location: 'Miami, FL',
    miles: '57.163',
    images: [
      '/imagenes/Suvs/2021 Toyota RAV4 XLE (1).webp',
      '/imagenes/Suvs/2021 Toyota RAV4 XLE (2).webp',
      '/imagenes/Suvs/2021 Toyota RAV4 XLE (3).webp',
      '/imagenes/Suvs/2021 Toyota RAV4 XLE (4).webp',
      '/imagenes/Suvs/2021 Toyota RAV4 XLE (5).webp',
      '/imagenes/Suvs/2021 Toyota RAV4 XLE (6).webp',
      '/imagenes/Suvs/2021 Toyota RAV4 XLE (7).webp',
      '/imagenes/Suvs/2021 Toyota RAV4 XLE (8).webp',
    ],
    type: 'Suvs',
  },

];


const carTypes = [...new Set(cars.map(car => car.type))];
const carBrands = [...new Set(cars.map(car => car.brand))];
const carYears = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a);
const carLocations = [...new Set(cars.map(car => car.location))];

export default function Inventory() {
  const { search: globalSearch } = useSearch();
  const [selectedType, setSelectedType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [modalCar, setModalCar] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 12;
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoCar, setInfoCar] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [state, handleSubmit] = useForm("xrbklnrr");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const phoneRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  const search = globalSearch;

  const filteredCars = cars.filter(car => {
    const matchesType = selectedType ? car.type === selectedType : true;
    const matchesBrand = selectedBrand ? car.brand === selectedBrand : true;
    const matchesYear = selectedYear ? car.year === Number(selectedYear) : true;
    const matchesLocation = selectedLocation ? car.location === selectedLocation : true;
    const matchesSearch = `${car.brand} ${car.title}`.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesBrand && matchesYear && matchesLocation && matchesSearch;
  });

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const paginatedCars = filteredCars.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage);
  const goToPage = (page) => setCurrentPage(page);

  const openModal = (car) => {
    setModalCar(car);
    setSliderIndex(0);
  };
  const closeModal = () => setModalCar(null);
  const nextSlide = () => {
    setSliderIndex((prev) => {
      const nextIdx = (prev + 1) % modalCar.images.length;
      setTimeout(() => {
        const thumbnails = window.thumbnailsDiv?.children;
        if (thumbnails && thumbnails[nextIdx]) {
          thumbnails[nextIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }, 50);
      return nextIdx;
    });
  };
  const prevSlide = () => {
    setSliderIndex((prev) => {
      const prevIdx = (prev - 1 + modalCar.images.length) % modalCar.images.length;
      setTimeout(() => {
        const thumbnails = window.thumbnailsDiv?.children;
        if (thumbnails && thumbnails[prevIdx]) {
          thumbnails[prevIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }, 50);
      return prevIdx;
    });
  };

  // Validaciones tipo jQuery pero en React
  function validateKeyPress(er, e) {
    const key = e.keyCode || e.which;
    const tecla = String.fromCharCode(key);
    if (!er.test(tecla)) {
      e.preventDefault();
    }
  }
  function validateKeyUp(er, value, field, message) {
    if (er.test(value)) {
      setErrors(prev => ({ ...prev, [field]: '' }));
      return true;
    } else {
      setErrors(prev => ({ ...prev, [field]: message }));
      return false;
    }
  }
  function validateForm() {
    const validPhone = validateKeyUp(/^[0-9]{10,11}$/, phoneRef.current.value, 'phone', 'The format must be between 10 to 11 digits');
    const validEmail = validateKeyUp(/^[A-Za-z_0-9\u00f1\u00d1\u00E0-\u00FC-]{3,20}[@]{1}[A-Za-z0-9]{3,8}[.]{1}[A-Za-z]{3}$/, emailRef.current.value, 'email', 'The format must be like name@server.com');
    const validName = validateKeyUp(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, nameRef.current.value, 'name', 'Only letters between 3 and 30 characters');
    if (!validPhone) {
      Swal.fire({ icon: 'error', title: 'Invalid phone', text: 'The format must be between 10 to 11 digits' });
    } else if (!validEmail) {
      Swal.fire({ icon: 'error', title: 'Invalid email', text: 'The format must be like name@server.com' });
    } else if (!validName) {
      Swal.fire({ icon: 'error', title: 'Invalid name', text: 'Only letters between 3 and 30 characters' });
    }
    return validPhone && validEmail && validName;
  }

  return (
    <div className="container-fluid mt-5" style={{width: '100vw', maxWidth: '100vw', paddingLeft: 0, paddingRight: 0}}>
      {/* Toggle filtro mobile SIEMPRE visible en esquina inferior izquierda */}
      <button
        className="btn btn-primary d-md-none position-fixed"
        style={{left: 16, bottom: 16, zIndex: 1050, borderRadius: '50%', width: 56, height: 56, boxShadow: '0 2px 8px rgba(0,0,0,0.2)'}}
        onClick={() => setShowMobileFilter(true)}
        aria-label="Mostrar filtros"
      >
        <i className="fa-solid fa-filter"></i>
      </button>
      {/* Offcanvas Bootstrap para filtro mobile */}
      <div className={`offcanvas offcanvas-start d-md-none${showMobileFilter ? ' show' : ''}`}
      tabIndex="-1"
      style={{visibility: showMobileFilter ? 'visible' : 'hidden', background: 'rgba(255,255,255,0.98)', zIndex: 2000, width: '85vw', maxWidth: 340}}
      aria-labelledby="offcanvasMobileFilterLabel"
    >
      <div className="offcanvas-header d-flex justify-content-between align-items-center">
        <h5 className="offcanvas-title text-dark fw-bold" id="offcanvasMobileFilterLabel">Filters</h5>
        <button type="button" className="btn-close text-reset ms-2" onClick={() => setShowMobileFilter(false)} aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <label className="form-label mt-2">Type</label>
        <select className="form-select mb-2" value={selectedType} onChange={e => setSelectedType(e.target.value)}>
          <option value="">All types</option>
          {carTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <label className="form-label mt-2">Brand</label>
        <select className="form-select mb-2" value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
          <option value="">All brands</option>
          {carBrands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <label className="form-label mt-2">Year</label>
        <select className="form-select mb-2" value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
          <option value="">All years</option>
          {carYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <label className="form-label mt-2">Location</label>
        <select className="form-select mb-3" value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
          <option value="">All locations</option>
          {carLocations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
        <button className="btn btn-secondary w-100 mt-3" onClick={() => setShowMobileFilter(false)}>
          Close filters
        </button>
      </div>
    </div>
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 px-3 px-md-5" style={{width: '100%', justifyContent: 'space-between'}}>
        <h2 className="text-white mb-3 mb-md-0">Car Inventory</h2>
        <div className="d-flex align-items-center gap-3">
          <nav className="d-flex justify-content-end align-items-center" style={{width: 'auto'}}>
            <ul className="pagination mb-0" style={{marginRight: '0.5rem'}}>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`page-item${currentPage === i + 1 ? ' active' : ''}`}>
                  <button className="page-link" onClick={() => goToPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="row">
        {/* Filtro desktop y mobile */}
        <div className={`col-12 col-md-3 mb-3 d-none d-md-block`}>
          <div className="bg-light p-4 rounded shadow-sm" style={{minWidth: '260px', maxWidth: '350px'}}>
            <h5 className="mb-3 text-dark">Filters</h5>
            <label className="form-label mt-2 text-dark">Type</label>
            <select className="form-select mb-2" value={selectedType} onChange={e => setSelectedType(e.target.value)}>
              <option value="">All types</option>
              {carTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <label className="form-label mt-2 text-dark">Brand</label>
            <select className="form-select mb-2" value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
              <option value="">All brands</option>
              {carBrands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <label className="form-label mt-2 text-dark">Year</label>
            <select className="form-select mb-2" value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
              <option value="">All years</option>
              {carYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <label className="form-label mt-2 text-dark">Location</label>
            <select className="form-select mb-3" value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
              <option value="">All locations</option>
              {carLocations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="col-12 col-md-9">
          <div className="row g-3 flex-column">
            {paginatedCars.map(car => (
              <div className="col-12" key={car.id}>
                <div className="card p-4 shadow-lg" style={{marginRight: '1.5rem', borderRadius: '18px', fontSize: '1.2rem', minHeight: 0, height: 'auto', boxSizing: 'border-box'}}>
                  <div className="d-flex flex-column flex-md-row align-items-stretch w-100" style={{gap: '15px', minHeight: 0, height: 'auto'}}>
                    <div style={{flex: '3', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0}}>
                      <img 
                        src={car.images[0]} 
                        style={{width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '340px', objectFit: 'cover', borderRadius: '12px'}} 
                        className="car-img-hover" 
                        alt={`${car.brand} ${car.title}`} 
                        onError={e => e.target.style.display='none'} 
                        onClick={() => openModal(car)}
                        loading="lazy"
                      />
                    </div>
                    <div className="car-info-box ms-4 d-flex flex-column justify-content-center" style={{flex: '2', background: 'rgba(255,255,255,0.97)', borderRadius: '12px', padding: '24px', minHeight: 0, height: 'auto', maxHeight: 'none', overflow: 'hidden'}}>
                      <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                        <h2 className="text-center text-md-start mb-0" style={{wordBreak: 'break-word', whiteSpace: 'normal'}}>{car.title}</h2>
                        <div className="fw-bold text-success" style={{fontSize: '1.5rem'}}>{car.price || ""}</div>
                      </div>
                      <hr className="my-2" />
                      <div className="d-flex flex-row gap-5 align-items-center w-100">
                        <div className="d-flex flex-column gap-2">
                          <div className="d-flex flex-row flex-wrap gap-2 align-items-center">
                           <span className="badge bg-primary">{car.type}</span>
                           <span className="badge bg-secondary">{car.year}</span>
                           <span className="badge bg-success text-white">Down: {car.downPayment || 'N/A'}</span>
                           <span className="badge bg-info text-white">Miles: {car.miles}</span>
                            </div>
                          <div className="car-location text-secondary" style={{fontSize: '1.1rem', wordBreak: 'break-word', whiteSpace: 'normal'}}>
                            <i className="fa-solid fa-location-dot me-2" style={{color: '#0782fa'}}></i>
                            {car.location || 'Location not available'}
                          </div>
                        </div>
                      </div>
                        <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-4">
                          <button
                            className="btn btn-success btn-lg px-5 py-2 fw-bold"
                            style={{fontSize: '1.1rem', borderRadius: '2rem', height: '60px'}}
                            onClick={() => { setInfoCar(car); setShowInfoModal(true); }}
                          >
                            Request information
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {paginatedCars.length === 0 && (
              <div className="col-12">
                <div className="alert alert-warning">No cars found.</div>
              </div>
            )}
          </div>
          {/* Paginación abajo */}
          <nav className="pagination-bottom">
            <ul className="pagination mb-0">
              <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                <button className="page-link" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>&laquo;</button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`page-item${currentPage === i + 1 ? ' active' : ''}`}>
                  <button className="page-link" onClick={() => goToPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
                <button className="page-link" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>&raquo;</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Modal con slider y thumbnails */}
      {modalCar && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{background:'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-xl modal-dialog-centered" role="document" style={{maxWidth: '90vw', width: '850px', minWidth: '320px', margin: '0 auto'}}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalCar.title}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-3 position-relative" style={{width: '100%'}}>
                  <button className="btn btn-secondary me-2 position-absolute start-0 top-50 translate-middle-y" style={{zIndex:2, left: 0, minWidth: 36, minHeight: 36, maxWidth: '44px'}} onClick={prevSlide}>&lt;</button>
                  <a href={modalCar.images[sliderIndex]} target="_blank" rel="noopener noreferrer">
                  <img 
                  src={modalCar.images[sliderIndex]}
                  style={{ width:'100%', maxWidth:'640px', height:'auto', maxHeight:'60vw', minHeight:'180px', objectFit:'cover', borderRadius:'12px' }}
                  alt="Car slider"
                  className="rounded"
                  />
                  </a>
                  <button className="btn btn-secondary ms-2 position-absolute end-0 top-50 translate-middle-y" style={{zIndex:2, right: 0, minWidth: 36, minHeight: 36, maxWidth: '44px'}} onClick={nextSlide}>&gt;</button>
                </div>
                {/* Thumbnails */}
                <div className="d-flex justify-content-start gap-2 mb-3 thumbnails-scroll" style={{overflowX: 'auto', padding: '0 10px', scrollBehavior: 'smooth'}} ref={el => window.thumbnailsDiv = el}>
                  {modalCar.images.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`} 
                      onClick={() => {
                        setSliderIndex(idx);
                        // Desplaza la miniatura seleccionada al centro
                        setTimeout(() => {
                          const thumbnails = window.thumbnailsDiv?.children;
                          if (thumbnails && thumbnails[idx]) {
                            thumbnails[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                          }
                        }, 50);
                      }} 
                      style={{
                        width: '90px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        border: sliderIndex === idx ? '3px solid #ffc107' : '2px solid transparent',
                        transition: 'border-color 0.3s ease',
                      }}
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-4">
                          <button
                            className="btn btn-success btn-lg px-5 py-2 fw-bold"
                            style={{fontSize: '1.1rem', borderRadius: '2rem', height: '60px'}}
                            onClick={() => {
                      setInfoCar(modalCar);
                      setShowInfoModal(true);
                    }}
                          >
                            Request information
                          </button>
                        </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de requerir info */}
      {showInfoModal && infoCar && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{background:'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Request Information:{infoCar.title}</h5>
                <button type="button" className="btn-close" onClick={() => { setShowInfoModal(false); setFormSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}></button>
              </div>
              <div className="modal-body">
                {formSent ? (
                  <div className="alert alert-success">Thank you! We will contact you soon.</div>
                ) : (
                  <form onSubmit={e => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }
    handleSubmit(e);
  }}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        ref={nameRef}
                        onKeyPress={e => validateKeyPress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/, e)}
                        onKeyUp={e => validateKeyUp(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, e.target.value, 'name', 'Only letters between 3 and 30 characters')}
                      />
                      <div className="text-danger small" id="sname">{errors.name}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        ref={emailRef}
                        onKeyPress={e => validateKeyPress(/^[A-Za-z@_.0-9\b\u00f1\u00d1\u00E0-\u00FC-]*$/, e)}
                        onKeyUp={e => validateKeyUp(/^[A-Za-z_0-9\u00f1\u00d1\u00E0-\u00FC-]{3,20}[@]{1}[A-Za-z0-9]{3,8}[.]{1}[A-Za-z]{3}$/, e.target.value, 'email', 'The format must be like name@server.com')}
                      />
                      <div className="text-danger small" id="semail">{errors.email}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        ref={phoneRef}
                        onKeyPress={e => validateKeyPress(/^[0-9-\b]*$/, e)}
                        onKeyUp={e => validateKeyUp(/^[0-9]{10,11}$/, e.target.value, 'phone', 'The format must be between 10 to 11 digits')}
                      />
                      <div className="text-danger small" id="sphone">{errors.phone}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Car of Interest</label>
                      <input type="text" className="form-control" name="car" value={infoCar?.title || ''} readOnly />
                    </div>
                    <button type="submit" className="btn btn-success w-100" disabled={state.submitting}>
                      Send Request
                    </button>
                    {state.succeeded && <p className="text-success mt-2">Thank you! We will contact you soon.</p>}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}