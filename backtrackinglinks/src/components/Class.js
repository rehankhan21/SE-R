import React, { Component } from 'react'

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        // similar to connectedCallBack or RenderedCallBack
        this.setState({ 
            items: [{id:0, name: 'yo'} ]
        })
    }

    addItem() {
        this.props.history.push("/addItem");
    }

    deleteItem(event) {
        
    }

    render() {
        return (
            <div>
                <h2>Item List</h2>
                <div>
                    <p></p>
                </div>
                <div>
                <table className="table">
            <thead>
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Price</th>
                <th scope="col">Item Description</th>
                <th scope="col">Item Category</th>
                <th scope="col">Item Duration</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.duration} days</td>
                  <td> <button type="submit" className="button btn btn-danger col-12" id={item.id} onClick={this.deleteItem}> Delete</button></td>
                </tr>
              ))}
                    </tbody>
                </table>
                </div>

            </div> 
        )
    }
}

export default ItemList
