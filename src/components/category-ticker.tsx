'use client';

const categories = [
  'ACCESSORIES',
  'CUSTOM CLOTHING',
  'WOMEN',
  'KIDS',
  'MEN',
  'FOOTWEAR',
  'COLLECTION',
  'RUNNING FITNESS',
  'SPORTS',
];

export function CategoryTicker() {
  const extendedCategories = [...categories, ...categories, ...categories];

  return (
    <section className="bg-black text-black py-8 overflow-hidden">
      <div className="relative transform -rotate-2">
        <div className="bg-white py-4">
          <div className="flex animate-marquee-slow">
            {extendedCategories.map((category, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
                <span className="mx-4 text-2xl font-serif tracking-widest">{category}</span>
                {index < extendedCategories.length -1 && <span className="text-2xl">◆</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
