import { ProductButtons, ProductCard, ProductImage, ProductITitle } from "../components"


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard product={ product }>
              <ProductCard.Image />
              <ProductCard.Title title={"Taza Programador"} />
              <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={ product }>
              <ProductImage />
              <ProductITitle />
              <ProductButtons />
            </ProductCard>
            
            <ProductCard product={ product }>
              <ProductImage />
              <ProductITitle title="Taza de Cafe" />
              <ProductButtons />
            </ProductCard>
        </div>
    </div>
  )
}
