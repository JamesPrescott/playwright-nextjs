import Image from "next/image";
import { Inter } from "next/font/google";
import { FormEvent, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    
    try {
      const formData = new FormData(event.currentTarget);

      if (!formData.get('name') || !formData.get('calories')) {
        throw new Error('Failed to submit data');
      }

      const response = await fetch('/api/hello', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      setSuccess('Calories record created successfully');
    } catch(error: any) {
      setError(error.message);
      console.error(error);
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='form-container'>
        <form className='calorie-form' onSubmit={onSubmit} aria-label="calorie-form">
          {error && <div className='flash-error'>{error}</div>}
          {success && <div className='flash-success'>{success}</div>}
          <label htmlFor='name'>Name</label>
          <input id='name' aria-label="name" name='name'/>
          <label htmlFor='calories'>Calories</label>
          <input id='calories' aria-label="calories" name='calories'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </main>
  );
}
