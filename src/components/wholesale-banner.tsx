import Link from 'next/link';

export function WholesaleBanner() {
  return (
    <Link href="/wholesale">
      <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50">
        <div className="bg-black text-white px-2 py-4 rounded-l-md shadow-lg cursor-pointer">
          <p
            className="text-center font-semibold tracking-wider"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            GET 40% OFF ON WHOLESALE
          </p>
        </div>
      </div>
    </Link>
  );
}
