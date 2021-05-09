import React, { Component } from 'react'

export default class List extends Component {

    state = {
        data: [      
            {
            id: 1,
            name:"Rahul",
            age: 20
            },
             {
            id: 1,
            name:"Raju",
            age: 20
             }
      ]
    };

    render() {
        return (
            <div>
                <ul>

                  {  this.state.data.map((value, index) => <li key={value.id}>{value.id} - {value.name} - {value.age}</li>) }
                </ul>
                
            </div>
        )
    }
}
