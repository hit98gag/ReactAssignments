const heading = React.createElement("h1",{
    className:"Heading"
},"The Evolution of Airbnb's Frontend")

const para1 = React.createElement("p",{
    className:"para1"
},"@spikebrehm" )



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render([heading, para1])