export type EventType = 
  | 'Hotel Stay'
  | 'Wedding'
  | 'Reception'
  | 'Engagement'
  | 'Birthday'
  | 'Meeting'
  | 'Conference'
  | 'Other';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  capacity: string;
  bedType: string;
  amenities: string[];
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hotel' | 'Rooms' | 'Marriage Hall' | 'Events' | 'Meeting Hall' | 'Food' | 'Property';
  image: string;
  caption: string;
}

export interface EventStep {
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: EventType;
  preferredDate: string;
  numberOfGuests: string;
  message: string;
  createdAt?: string;
}

export interface PropertyConfig {
  name: string;
  tagline: string;
  category: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  googleRating: number;
  totalReviews: number;
  officialPhone: string;
  officialPhoneDisplay: string;
  whatsappNumber: string;
  officialEmail: string;
  googleMapsDirectionsUrl: string;
  embedMapUrl: string;
}
