import type { Metadata } from 'next';
import Register from '@/components/Register';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Effortlessly create an account through our intuitive Register process.',
};

const RegisterPage = () => <Register/>

export default RegisterPage;
