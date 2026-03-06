import { Button } from "@/components/ui/button";

export default function Products() {
  return (
    <div>
        <h1>Products</h1>
        <p>Products are listed here</p>
        <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            <Button variant="outline" className="mt-4 bg-blue-500 text-white">Add Product</Button>
        </ul>
    </div>
  )
} 