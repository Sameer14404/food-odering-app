import React from "react";

class Aboutus extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2,
        };
        
    }
    render() {
        const {count,count2}=this.state
        return(
            <div>
             <h1>
                MY name is {count}
             </h1>
             <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
             }}>clicked</button>
            </div>
        )
    }
}

export default Aboutus;