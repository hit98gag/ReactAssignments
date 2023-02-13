const heading = React.createElement("h1",{
    className:"Heading"
},"About Us")

const para1 = React.createElement("p",{
    className:"para1"
},"At Zappos.com, our purpose is simple :to live and deliver WOW." )

const para2 = React.createElement("p",{
    className:"para2"
},'Twenty years ago, we began as a small online retallier that only sold shoes. Today, We still sell shoes-- as well as clothing, handbags, accessories, and more. "that" is providing the very best customer service, customer experience, and company culture. We aim to inspire the world by showing its possible to simultaneously deliver happiness to customers, employees, vendors, shareholders, and the community in a long-term, sustainable way.'  )


const para3 = React.createElement("p",{
    className:"para3"
},"We hope that in the future people won't even realize we started selling shoes online. Instead, they'll know Zappos as a service company that just happens to sell___" )

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render([heading,para1,para2, para3])