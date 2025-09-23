import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-start text-white">
        <div className="absolute inset-0">
          <Image
            src={getImage('about_hero').url}
            alt="Group of people in fitness wear"
            data-ai-hint={getImage('about_hero').hint}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 40%, 70% 100%, 0 100%)',
              backgroundColor: 'rgba(0,0,0,0.2)',
            }}
          />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-5xl font-bold mb-2">About Us</h1>
          <p className="text-lg">Home / About Us</p>
          <p className="mt-4 max-w-lg">
            We are used to say that clothing are so beautiful when you wear them.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary tracking-tight">
                We Are The Leading Manufacturer And Supplier Of Top-Quality And Trendy Apparel
              </h2>
              <p className="text-muted-foreground">
                Alanic Clothing has earned a name as a famed clothing manufacturer and boutique as we understand the needs of our global clients with complete acuity. Join hands with us if you want your business to perform well, do great and earn high revenues in return. We do our best to make your store's collection the most talked-about one. We are all ears to your bulk stocking needs-connect today with your custom requirements!
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src={getImage('about_workout').url}
                alt="Woman doing crunches"
                data-ai-hint={getImage('about_workout').hint}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
