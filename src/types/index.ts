export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isBestseller?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  location: string;
}

export interface Address {
  fullName: string;
  phone: string;
  street: string;
  area: string;
  city: string;
  pincode: string;
  landmark?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}
