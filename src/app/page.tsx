import { redirect } from 'next/navigation';

export default function Home() {
  // This automatically sends the user to the dashboard page
  redirect('/dashboard');
}

