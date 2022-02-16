import { Component } from 'react'

const styles = {
    layout: {
        backgroundColor: "#fff",
        color:"#fff",
        display:"flex",
        alignItems:"center",
        flexDirection:"column"
    },
    container: {
        width: "60%",
        margin:"20px"
    }
}
export class Layout extends Component{
    render(){
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}