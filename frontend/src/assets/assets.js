// assets.js
import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import profile_pic from './profile_pic.png'
import down_arrow from './down-arrow.png'
import group_profiles from './group_profiles.png'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'

// Speciality icons
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Pediatricians from './Pediatricians.svg'
import Neurologist from './Neurologist.svg'

// Doctors
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'

export const assets = {
  add_icon,
  admin_logo,
  appointment_icon,
  cancel_icon,
  doctor_icon,
  upload_area,
  home_icon,
  patients_icon,
  people_icon,
  list_icon,
  tick_icon,
  appointments_icon,
  earning_icon,
  profile_pic,
  down_arrow,
  group_profiles,
  arrow_icon,
  header_img,
  General_physician,
  Gynecologist,
  Pediatricians,
  Neurologist,
  doc1,
  doc2,
  doc3,
  doc4,
  doc5,
  doc6,
  doc7,
  doc8,
  doc9,
  doc10,
  doc11,
  doc12,
  doc13,
  doc14,
  doc15,
}

export const specialityData = [
  {
    speciality: 'General physician',
    image: General_physician,
  },
  {
    speciality: 'Gynecologist',
    image: Gynecologist,
  },
  {
    speciality: 'Pediatricians',
    image: Pediatricians,
  },
  {
    speciality: 'Neurologist',
    image: Neurologist,
  },
]

export const doctors = [
  {
    _id: 1,
    name: 'Dr. Sarah Johnson',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS, MD (Internal Medicine)',
    experience: '10 years',
    about: 'Experienced physician specializing in general health and preventive care.',
    fees: 50,
    address: {
		line1: '123 Main Street',
      line2: 'New York, USA',
    },
  },
  {
    _id: 2,
    name: 'Dr. Emily Carter',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS (Gynecology)',
    experience: '8 years',
    about: 'Expert in women’s health, pregnancy care, and reproductive health.',
    fees: 60,
    address: {
      line1: '45 Bloom Ave',
      line2: 'Los Angeles, USA',
    },
  },
  {
    _id: 3,
    name: 'Dr. James Anderson',
    image: doc3,
    speciality: 'Pediatricians',
    degree: 'MBBS, MD (Pediatrics)',
    experience: '12 years',
    about: 'Dedicated pediatrician providing care for infants, children, and adolescents.',
    fees: 55,
    address: {
      line1: '77 Greenway Rd',
      line2: 'Chicago, USA',
    },
  },
  {
    _id: 4,
    name: 'Dr. Michael Lee',
    image: doc4,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '15 years',
    about: 'Specialist in treating neurological disorders and brain-related conditions.',
    fees: 80,
    address: {
      line1: '21 Tech Park',
      line2: 'Boston, USA',
    },
  },
  {
    _id: 5,
    name: 'Dr. Olivia Martinez',
    image: doc5,
    speciality: 'General physician',
    degree: 'MBBS, MD',
    experience: '9 years',
    about: 'Passionate about family medicine and chronic disease management.',
    fees: 50,
    address: {
      line1: '89 Health Blvd',
      line2: 'Houston, USA',
    },
  },
  {
    _id: 6,
    name: 'Dr. William Harris',
    image: doc6,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS',
    experience: '11 years',
    about: 'Focused on gynecological surgeries and reproductive health.',
    fees: 65,
    address: {
      line1: '12 River St',
      line2: 'San Francisco, USA',
    },
  },
  {
    _id: 7,
    name: 'Dr. Sophia Brown',
    image: doc7,
    speciality: 'Pediatricians',
    degree: 'MBBS, MD',
    experience: '7 years',
    about: 'Loves working with children and promoting healthy growth.',
    fees: 55,
    address: {
      line1: '100 Kids Lane',
      line2: 'Miami, USA',
    },
  },
  {
    _id: 8,
    name: 'Dr. Daniel White',
    image: doc8,
    speciality: 'Neurologist',
    degree: 'MBBS, DM',
    experience: '13 years',
    about: 'Expert in diagnosing and treating neurological conditions.',
    fees: 85,
    address: {
      line1: '300 Neuro Ave',
      line2: 'Seattle, USA',
    },
  },
  {
    _id: 9,
    name: 'Dr. Isabella Taylor',
    image: doc9,
    speciality: 'General physician',
    degree: 'MBBS, MD',
    experience: '6 years',
    about: 'Focused on preventive medicine and patient wellness.',
    fees: 45,
    address: {
      line1: '222 Wellness St',
      line2: 'Denver, USA',
    },
  },
  {
    _id: 10,
    name: 'Dr. Ethan Wilson',
    image: doc10,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS',
    experience: '14 years',
    about: 'Specializes in maternal health and gynecological care.',
    fees: 70,
    address: {
      line1: '56 Care Center',
      line2: 'Dallas, USA',
    },
  },
  {
    _id: 11,
    name: 'Dr. Mia Robinson',
    image: doc11,
    speciality: 'Pediatricians',
    degree: 'MBBS, MD',
    experience: '9 years',
    about: 'Pediatrician passionate about child health and vaccination programs.',
    fees: 60,
    address: {
      line1: '101 Childcare Rd',
      line2: 'Atlanta, USA',
    },
  },
  {
    _id: 12,
    name: 'Dr. Henry Clark',
    image: doc12,
    speciality: 'Neurologist',
    degree: 'MBBS, DM',
    experience: '16 years',
    about: 'Experienced neurologist handling stroke and epilepsy cases.',
    fees: 90,
    address: {
      line1: '88 Brain Clinic',
      line2: 'Philadelphia, USA',
    },
  },
  {
    _id: 13,
    name: 'Dr. Grace Lewis',
    image: doc13,
    speciality: 'General physician',
    degree: 'MBBS, MD',
    experience: '10 years',
    about: 'Family physician focusing on preventive care and health education.',
    fees: 55,
    address: {
      line1: '17 Main Square',
      line2: 'Phoenix, USA',
    },
  },
  {
    _id: 14,
    name: 'Dr. Benjamin Walker',
    image: doc14,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS',
    experience: '12 years',
    about: 'Gynecologist with expertise in laparoscopic surgery and fertility care.',
    fees: 75,
    address: {
      line1: '67 Women’s Health St',
      line2: 'San Diego, USA',
    },
  },
  {
    _id: 15,
    name: 'Dr. Charlotte Hall',
    image: doc15,
    speciality: 'Pediatricians',
    degree: 'MBBS, MD',
    experience: '8 years',
    about: 'Pediatrician dedicated to newborn and child health.',
    fees: 50,
    address: {
      line1: '200 Pediatric Ave',
      line2: 'Orlando, USA',
    },
  },
]
