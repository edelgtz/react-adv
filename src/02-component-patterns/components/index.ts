import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductITitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductITitle } from './ProductTitle';
// export { ProductCard } from './ProductCard';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductITitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;
