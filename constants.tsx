
import React from 'react';
import { Home, Wifi, Briefcase, Zap, CheckCircle, Smartphone, Monitor, Gamepad2 } from 'lucide-react';
import { Plan, Testimonial } from './types';

export const CONTENT = {
  nav: {
    services: 'Service',
    plans: 'Package',
    contact: 'Location',
    cta: 'Apply Now'
  },
  hero: {
    title: "Quality Internet for Homes & Businesses in Cuartero",
    subtitle: 'Affordable, fiber-fast internet for homes and small businesses in Cuartero.',
    offers: 'Our Offers',
    contact: 'Apply Now'
  },
  services: {
    title: "Connectivity That Powers Your Life"
  },
  contact: {
    title: 'Service Application',
    subtitle: 'Ready to join the network? Fill out the form below and our engineers will contact you for a site survey.',
    address: 'Mainit, Cuartero, Capiz, Philippines',
    whatsapp: '+63 912 345 6789',
    facebook: 'https://facebook.com/FNDSISP',
    facebookHandle: 'fb.com/FNDSISP',
    form: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      details: 'Additional Details (Optional)',
      submit: 'Submit Request'
    }
  },
  plans: {
    headerLabel: 'OUR INTERNET PLANS',
    title: 'Choose Your Internet Plan',
    description: 'Affordable, high-speed internet plans for homes and small businesses in Cuartero.',
    disclaimer: 'Speed may vary based on location and network conditions. Availability is limited to selected barangays in Cuartero.',
    items: [
      {
        id: '25',
        name: 'Up to 25 Mbps',
        speed: '25',
        price: '₱1,299/mo',
        features: [
          'Unlimited Internet',
          'Stable fiber connection',
          'Ideal for 2–10 connected devices'
        ],
        cta: 'Apply Now'
      },
      {
        id: '50',
        name: 'Up to 50 Mbps',
        speed: '50',
        price: '₱1,899/mo',
        features: [
          'Unlimited Internet',
          'Ultra-Stable connection',
          'Ideal for 5–15 connected devices'
        ],
        cta: 'Apply Now'
      },
      {
        id: '100',
        name: 'Up to 100 Mbps',
        speed: '100',
        price: '₱2,499/mo',
        features: [
          'Unlimited Internet',
          'Premium prioritization',
          'Ideal for 10–25 connected devices'
        ],
        cta: 'Apply Now'
      }
    ]
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria Santos",
    location: "Brgy. Carataya, Cuartero",
    text: "Ang bilis ng install! Smooth na ang Zoom classes ng mga anak ko.",
    rating: 5
  },
  {
    name: "Juan Dela Cruz",
    location: "Cuartero Poblacion",
    text: "Malaking tulong ang PisoWiFi business sa tindahan ko.",
    rating: 5
  }
];

export const ICONS = {
  home: <Home />,
  wifi: <Wifi />,
  briefcase: <Briefcase />,
  zap: <Zap />,
  check: <CheckCircle className="w-4 h-4 text-brand-yellow" />,
  phone: <Smartphone />,
  monitor: <Monitor />,
  gamepad: <Gamepad2 />
};
