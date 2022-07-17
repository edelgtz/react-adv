import { ProductButtons, ProductCard, ProductImage, ProductITitle } from "../components"
import '../styles/custom-styles.css'


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
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title title={"Taza Programador"} className="text-bold" />
              <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={ product }>
              <ProductImage />
              <ProductITitle />
              <ProductButtons />
            </ProductCard>
            
            <ProductCard 
              product={ product }
              className="bg-dark text-white"
            >
              <ProductImage img="./steelers-helmet.jpg" className="custom-image" style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'}} />
              <ProductITitle title="NFL Riddell Steelers tamaño completo réplica de casco " className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>

            <ProductCard 
              product={ product }
              style={{
                backgroundColor: '#70D1F8'
              }}
            >
              <ProductImage style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'}} />
              <ProductITitle style={{ fontWeight: 'bold' }} />
              <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
            </ProductCard>
        </div>
    </div>
  )
}
