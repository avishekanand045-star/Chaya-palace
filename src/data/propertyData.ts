import { PropertyConfig, Room, GalleryItem, EventStep } from '../types';

// Standard generated images paths for Chhaya Palace
import heroImg from '../assets/images/chhaya_palace_hero_1786512270701.jpg';
import marriageHallImg from '../assets/images/chhaya_marriage_hall_1786512286692.jpg';
import deluxeRoomImg from '../assets/images/chhaya_deluxe_room_1786512298721.jpg';
import meetingHallImg from '../assets/images/chhaya_meeting_hall_1786512310484.jpg';
import royalSuiteImg from '../assets/images/chhaya_royal_suite_1786512323371.jpg';

export const PROPERTY_CONFIG: PropertyConfig = {
  name: "CHHAYA PALACE",
  tagline: "Where elegant stays meet unforgettable celebrations.",
  category: "Hotel • Marriage Hall • Meeting Hall",
  address: "Baba Mandir Road, Kumhar Para",
  landmark: "Near Baba Mandir",
  city: "Dumka",
  state: "Jharkhand",
  pincode: "814101",
  googleRating: 4.4,
  totalReviews: 128,
  officialPhone: "+919801234567",
  officialPhoneDisplay: "+91 98012 34567",
  whatsappNumber: "919801234567",
  officialEmail: "enquiry@chhayapalace.com",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=CHHAYA+PALACE+Baba+Mandir+Road+Kumhar+Para+Dumka+Jharkhand+814101",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.214812903123!2d87.247198!3d24.270912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0ca02d1a3c79d%3A0x8e8334bc8f04193!2sDumka%2C%20Jharkhand%20814101!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tagline: 'Refined Elegance & Modern Comfort',
    description: 'Thoughtfully designed room with premium bedding, climate control, ambient lighting, and sleek modern ensuite bathroom. Ideal for business travellers and short leisure stays in Dumka.',
    image: deluxeRoomImg,
    capacity: '2 Adults',
    bedType: 'King Size Bed',
    amenities: ['Air Conditioning', 'Free High-Speed Wi-Fi', 'Flat Screen TV', 'Hot & Cold Shower', 'Work Desk', 'Room Service', 'Power Backup'],
    featured: true
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    tagline: 'Spacious Luxury for Discerning Guests',
    description: 'An expansive suite featuring a dedicated seating lounge, plush king bed, elegant mood lighting, and curated room amenities tailored for families and corporate executives.',
    image: royalSuiteImg,
    capacity: '2 Adults + 1 Child',
    bedType: 'Super King Bed',
    amenities: ['Spacious Living Lounge', 'Air Conditioning', 'High-Speed Wi-Fi', '4K Smart TV', 'Luxury Toiletries', 'Tea & Coffee Maker', 'Daily Housekeeping', '24/7 Room Service'],
    featured: true
  },
  {
    id: 'family-royal-suite',
    name: 'Family Royal Suite',
    tagline: 'Grand Comfort for Celebration Guests',
    description: 'Designed specifically for wedding families and group travellers. Offers flexible double-bedding layouts, ample dressing area, wardrobe storage, and premium room service.',
    image: heroImg,
    capacity: '4 Guests',
    bedType: '2 Double Beds',
    amenities: ['Twin Large Beds', 'Dressing Table & Mirror', 'Air Conditioning', 'Flat Screen TV', 'Complimentary Bottled Water', 'Luggage Storage', 'Express Laundry'],
    featured: false
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Chhaya Palace Grand Facade',
    category: 'Property',
    image: heroImg,
    caption: 'Illuminated exterior at dusk along Baba Mandir Road, Dumka.'
  },
  {
    id: 'g2',
    title: 'Grand Marriage Banquet Hall',
    category: 'Marriage Hall',
    image: marriageHallImg,
    caption: 'Crystal chandeliers and regal stage arrangements for grand weddings.'
  },
  {
    id: 'g3',
    title: 'Deluxe Suite Accommodation',
    category: 'Rooms',
    image: deluxeRoomImg,
    caption: 'Warm ambiance, plush king bedding, and serene comfort.'
  },
  {
    id: 'g4',
    title: 'Corporate Conference & Meeting Setup',
    category: 'Meeting Hall',
    image: meetingHallImg,
    caption: 'Professional corporate meeting space equipped for seminars and workshops.'
  },
  {
    id: 'g5',
    title: 'Presidential Lounge & Royal Interiors',
    category: 'Hotel',
    image: royalSuiteImg,
    caption: 'Luxury interior lounge featuring golden champagne drapery and fine aesthetics.'
  },
  {
    id: 'g6',
    title: 'Wedding Stage Floral Decoration',
    category: 'Events',
    image: marriageHallImg,
    caption: 'Exquisite mandap and stage floral decorations customized for couples.'
  },
  {
    id: 'g7',
    title: 'Dining & Catering Banquet Area',
    category: 'Food',
    image: marriageHallImg,
    caption: 'Hygienic, spacious dining facilities for wedding feasts and royal banquets.'
  },
  {
    id: 'g8',
    title: 'Night View & Lighting Ambience',
    category: 'Property',
    image: heroImg,
    caption: 'Stunning evening ambiance welcoming guests to Dumka premier destination.'
  }
];

export const EVENT_STEPS: EventStep[] = [
  {
    number: '01',
    title: 'Tell Us Your Event',
    description: 'Share your event details, preferred date, guest count, and occasion type with our dedicated event managers.',
    detail: 'Whether hosting a grand wedding, reception, engagement, or corporate conference, we customize every detail to match your vision.',
    icon: 'MessageSquare'
  },
  {
    number: '02',
    title: 'Choose Your Space',
    description: 'Select between our grand Marriage Hall, versatile Meeting Hall, or luxury stay rooms for guest lodging.',
    detail: 'Explore spatial layouts, seating capacities, and stage configurations designed for seamless guest flow.',
    icon: 'LayoutGrid'
  },
  {
    number: '03',
    title: 'Plan the Setup',
    description: 'Finalize decoration themes, lighting ambience, sound setups, and hospitality services.',
    detail: 'Our team coordinates stage designs, Mandap lighting, seating arrangements, and catering logistics.',
    icon: 'Sparkles'
  },
  {
    number: '04',
    title: 'Celebrate the Moment',
    description: 'Relax and enjoy your special day while our attentive team handles execution flawless from start to finish.',
    detail: 'Experience memorable hospitality, seamless coordination, and unforgettable moments at Chhaya Palace.',
    icon: 'PartyPopper'
  }
];

export const WEDDING_CATEGORIES = [
  {
    id: 'weddings',
    title: 'Weddings & Receptions',
    description: 'Grand marriage ceremonies, vibrant sangeets, and unforgettable wedding receptions with majestic stage setups.',
    image: marriageHallImg,
    highlights: ['Grand Marriage Hall', 'Mandap & Stage Decor', 'Catering Area', 'Bridal Dressing Room']
  },
  {
    id: 'engagements',
    title: 'Engagements & Ring Ceremonies',
    description: 'Intimate and elegant ring ceremony setups with customized floral backdrops and ambient lighting.',
    image: royalSuiteImg,
    highlights: ['Customized Floral Decor', 'Family Seating Layouts', 'Audio/Visual Setup', 'Welcome Drinks Area']
  },
  {
    id: 'birthdays',
    title: 'Birthdays & Anniversaries',
    description: 'Vibrant family gatherings, milestone birthday bashes, and golden anniversary celebrations.',
    image: heroImg,
    highlights: ['Theme Lighting', 'Cake Cutting Stage', 'Music & DJ Console Space', 'Buffet Catering']
  },
  {
    id: 'social',
    title: 'Cultural & Social Gatherings',
    description: 'Community functions, festival celebrations, and social get-togethers in Dumka.',
    image: meetingHallImg,
    highlights: ['Flexible Seating', 'Stage Platform', 'Spacious Guest Corridor', 'Power Backup']
  }
];
