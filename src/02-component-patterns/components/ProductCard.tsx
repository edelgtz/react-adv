import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// interface ProductButtonsProps {
//     increaseBy: (value: number) => void;
//     counter: Number
// }

export const ProductCard = ({ children, product, className, style }: ProductCardProps) => {   
    const {counter, increaseBy} = useProduct(0);

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${ styles.productCard } ${ className }`} style={ style }>
                {children}
            </div>
        </Provider>
    )
}
