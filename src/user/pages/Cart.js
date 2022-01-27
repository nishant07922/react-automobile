import React,{useState} from "react";

const DUMMY_CART = [
    {
        C_id: '1',
        P_id:'1',
        name: 'Suspensions (shock absorbers pair with highend coil)',
        filename:'https://graphicriver.img.customer.envatousercontent.com/files/277219361/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=c763ea0cfd13c121cc0e697ebbf8bb1e',
        
        price: '2010',
        quant: '10'
    },
    {
        C_id: '2',
        P_id:'2',
        name: 'Ventilated Discs',
        filename:'https://media.istockphoto.com/photos/car-brake-disc-and-red-caliper-isolated-picture-id976970898?k=20&m=976970898&s=612x612&w=0&h=DbJcxU2GJi1oVG2kOgdOBuzqYVXSey_3Vk2Y40uGQm8=',
        price: '20010',
        quant: '15'
    },
];

const Cart = () => {
    const [cartIsEmpty , setCartIsEmpty] = useState(false);

    if(DUMMY_CART.length == 0){
        setCartIsEmpty(true);
    }
   const  removecartbutton =()=>{
       setCartIsEmpty(true);
   }
    if(cartIsEmpty){
        return(<h1>Your Cart Is Empty</h1>);
    }
    var allitemtotal = 0;
   

    for(let i=0 ;i< DUMMY_CART.length ;i++){
        var randomitemtotal = DUMMY_CART[i].price * DUMMY_CART[i].quant;
        allitemtotal = randomitemtotal + allitemtotal;
    }
    console.log(allitemtotal); 
    return(
        
    <div className="cart">
	
<table className="table">
<tbody>
<tr>
<td>ITEM PICTURE</td>
<td>ITEM NAME</td>
<td>REMOVE</td>
<td>QUANTITY</td>
<td>UNIT PRICE</td>
<td>ITEMS TOTAL</td>
</tr>	
{Object.keys(DUMMY_CART).map(function(key, i){
        return ( <tr>
    <td><img src= {DUMMY_CART[i].filename} style={{height:"50px",width:"50px"}}></img> </td>
    <td>
    {DUMMY_CART[i].name}
    
    </td>
    <td><form method='post' action=''>
    
    <input type='hidden' name='action' value="" />
    <button type='submit' class='remove'>Remove Item</button>
    </form></td>
    <td>
    
    {DUMMY_CART[i].quant}
    
    </td>
    <td>{DUMMY_CART[i].price}</td>
    <td>{DUMMY_CART[i].quant * DUMMY_CART[i].price}</td>
    </tr>);
    })}

<tr>
<td colspan="6" align="right">
<strong>TOTAL: {allitemtotal}</strong>
</td>
</tr>
<tr>
<td colspan="6" align="right">
  <button value ="Remove Cart" onClick={removecartbutton}>Remove Cart</button>
</td>
</tr>
</tbody>
</table>		
<div>
<form action="" method ="post" align="center">
<input type="submit" value ="Checkout" className="btn btn-primary text-center" name ="checkout"></input>
</form>
</div>  


<div ></div>

<div class="message_box" >

</div>
</div>

    )};

export default Cart;