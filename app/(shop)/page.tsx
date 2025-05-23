import { ProductCard } from "@/components/product-card";
import { ColorSelector } from "@/components/color-selector";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6 pt-12">
          <div className="text-sm text-muted-foreground">Music is Classic</div>
          <h1 className="text-5xl font-bold">Sequoia Inspiring Musico.</h1>
          <p className="text-xl text-muted-foreground">
            Making your dream music come true stay with Sequioa Sounds!
          </p>
          <Button className="bg-black text-white hover:bg-gray-800">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
            alt="Featured Headphones"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popular Colors</h2>
          <ColorSelector />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          title="Premium Headphones"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          price={299.99}
          rating={4.8}
        />
        <ProductCard
          title="Wireless Earbuds"
          image="https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          price={159.99}
          rating={4.5}
        />
        <ProductCard
          title="Studio Monitors"
          image="https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          price={499.99}
          rating={4.9}
        />
      </section>
    </div>
  );
}