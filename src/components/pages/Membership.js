
import background from './pictures/memb.jpg';

function Membership(){
    return (
    <div className="Membership" style={{backgroundImage:`url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    width:"100%",
    height:"610px",

    }}>
<div className="MembershipText2">
<h4 className='MembSign2'>Our Premium Spa Membership</h4>
<p>Welcome to the distinguished Premium Spa Membership section of The Harmony Day Spa, your ultimate retreat for indulgence and relaxation.</p>
<p> Here, we are excited to offer an array of exclusive spa memberships designed to cater to every wellness need.</p>
<p>From facials to massages, and somadome sessions to all, each has been meticulously curated to enhance your journey towards holistic well-being.</p>
<div className='MembBtn'>
<button className='Btn1'>Book An Appoitment</button>
<button className='Btn2'>      Call Now</button>
</div>
</div>
</div>
)}
export default Membership;