import { Card, CardContent, CardFooter } from "./ui/card";
import { Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  rating: number;
}

export function ProductCard({ title, image, price, rating }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
      </CardContent>
      <CardFooter className="p-4 flex flex-col items-start gap-2">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-muted-foreground">{rating}</span>
        </div>
        <div className="font-bold">${price}</div>
      </CardFooter>
    </Card>
  );
}