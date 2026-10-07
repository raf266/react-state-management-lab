import { useState } from "react"

function App() {

  const availableItems = [
  {
    id: 1,
    name: "Black T shirt",
    price: 5
  },
  {
    id: 2,
    name: "Hanger Set",
    price: 8
  },
  {
    id: 3,
    name: "Thoub",
    price: 12
  },
  {
    id: 4,
    name: "Computer Bag",
    price: 20
  },
  {
    id: 5,
    name: "Couch",
    price: 50
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 70
  }
]

  const shoppingCart = []
  const availableBalance = 100   
  const [price, setPrice] = useState(availableBalance)

  const [items, setItems] = useState(availableItems)
  const [shoppingCarts, setCart] = useState([])
  const [deletedItems, setDeletedItems] = useState([])
  const [warningMessage, setWarningMessage] = useState("")

  function handleAddToCart(item){
    console.log(item)

    if (price >= item.price) {
       const filteredItems = items.filter((oneItem)=>{
      return oneItem.id !== item.id
  })
    setItems(filteredItems)
    setDeletedItems([...deletedItems, item])

    setPrice(price - item.price)
    }

    else {
      setWarningMessage("Insufficient funds. Your balance is too low to purchase this item!")
    }
}

function handleRemoveFromCart(item) {
  const filteredCart = deletedItems.filter((oneItem) =>{
    return oneItem.id !== item.id
  })

  setDeletedItems(filteredCart)
  setItems([...items, item])
  setPrice(price + item.price)

}

  return (
    <>

    <h1>Sayed Hameds Closet</h1>

    <h2>Your Balance: {price}</h2>
    <p>{warningMessage}</p>

    <h2>Available Items</h2>
    {items.map((oneItem)=>
    <div key={oneItem.name}>
      <p>Name: {oneItem.name}</p>
      <p>Price: {oneItem.price}</p>

      <button onClick={()=> handleAddToCart(oneItem)}>Add to Cart</button>
    </div>
    )}

    <h2>Shopping Cart</h2>
    {deletedItems.map((oneItem)=>
    <div key={oneItem.name}>
      <p>Name: {oneItem.name}</p>
      <p>Price: {oneItem.price}</p>

      <button onClick={()=> handleRemoveFromCart(oneItem)}>Remove from Cart</button>
    </div>
  )}

    </>
  )
}
export default App