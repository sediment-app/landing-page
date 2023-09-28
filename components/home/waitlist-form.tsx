'use client';

import { BellDot } from 'lucide-react';

const WaitlistForm = () => {
  return (
    <form>
      <div className="flex items-center justify-center space-x-5">
        <input type="email" placeholder="Enter your email" />
        <button type="submit"
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
        >
          <span>Join the Waitlist</span>
          <BellDot />
        </button>
      </div>
    </form>
  )
}

export default WaitlistForm;