const ProductList = () => {
    const products =[
        {id: 1, name: 'Haiwaiin Cappuccino',  price: 29.99, availabe: true},
        {id: 2, name: 'Pizza Margherita', price: 49.99, availabe: false},
        {id: 3, name: 'Marinated Salmon', price: 19.99, available: true}
    ]
    
  return (
    <div style={{border: '2px solid red', padding: '50px', background: 'violet',}}>
      <img src="" alt=""/>
     <ul>
        
        {products.map((product, id) => (
         <li key={product.id}>{product.name} {product.price}</li>
        ))}
     </ul>
    </div>
  )
}
export default ProductList