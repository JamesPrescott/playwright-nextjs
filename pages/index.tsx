import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='form-container'>
        <form className='calorie-form' aria-label='calorie-form'>
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
