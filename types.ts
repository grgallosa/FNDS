export interface Plan {
  id: string;
  name: string;
  speed: string;
  price: string;
  features: string[];
  cta: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}