"use client";

import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  slug: string;
  name: string;
  subtitle: string;
  thumbnail: string;
  lastOne?: boolean;
  onClick?: () => void;
}

export default function MenuItem(product: MenuItemProps) {
  return (
    <Link key={product.slug} href={`/products/${product.slug}`} onClick={product.onClick}>
      <div className={`group/item flex gap-4 p-3 border-b border-gray-200 ${product.lastOne ? 'border-b-0' : ''}`}>
        <div className="relative h-[50px] w-[50px] overflow-hidden rounded-[3px] bg-gray-100">
          <Image
            src={product?.thumbnail}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h4 className="text-[13px] font-semibold text-[#000000] transition group-hover/item:text-[#0145a7]">
            {product.name}
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {product.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}
