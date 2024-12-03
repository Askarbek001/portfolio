import React from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './index.css'
import Items from "./Components/Items";
import Categories from "./Components/Categories";
import ShowFullItems from "./Components/ShowFullItems";

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img:"stul-vrashchayushchijsya-mans-seryj_Gray__2__i2g8-zs-1.webp",
          desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          category: "chairs",
          price:"49,99"
        },
        {
          id: 2,
          title: "Стол",
          img:"c83640484c5b99e13fb836efaacd8de7.jpg",
          desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          category: "tables",
          price:"149.00"
        },
        {
          id: 3,
          title: "Диван",
          img:"4173473.jpg",
          desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          category: "sofas",
          price:"549.99"
        },
        {
          id: 4,
          title: "Лампа",
          img:"modern-photorealistic-lamp-design_23-2151038963.avif",
          desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          category: "lights",
          price:"25.00"
        },
        {
          id: 5,
          title: "Стул белый",
          img:"photo_00__0000070636_status-desert-bezhevyy_stul-velyur.jpg",
          desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          category: "chairs",
          price:"49.99"
        },
        {
          id: 6,
          title: "Зеркало",
          img:"zerkalo-f016-1000x1000-1000x1000.jpg",
          desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          category: "mirrors",
          price:"39.99"
        },
      ],
      showFullItems: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItems = this.onShowItems.bind(this);
  }

  render () {
    return (
      <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItems={this.onShowItems} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItems && <ShowFullItems onShowItems={this.onShowItems} onAdd={this.addToOrder} item={this.state.fullItem}/>}
      <Footer/>
      </div>
    );
  }
  
  onShowItems(item){
    this.setState({fullItem: item})
    this.setState({showFullItems: !this.state.showFullItems})
  }

    chooseCategory(category) {
      if(category === 'all') {
        this.setState({currentItems: this.state.items})
        return
      }
      this.setState(
        {currentItems: this.state.items.filter(el => el.category === category)}
      )
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) 
        isInArray = true
    })
    if (!isInArray)
    this.setState({
      orders: [...this.state.orders, item]
    })
  }
}
export default App;
