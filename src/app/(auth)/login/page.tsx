import type { Metadata } from 'next';
import Login from '@/components/Login';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Effortlessly create an account through our intuitive sign-up process.',
};

const LoginPage = () => <Login/>

export default LoginPage;
