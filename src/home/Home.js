import classes from './home.module.css';
import {
    Link,
  } from "react-router-dom";
function Home() {
    return (
      <div className={classes.home}>
        <div className={classes.homeScreen}>
            <div className={classes.menuBar}>
                <div className={classes.menu}>
                    <img src='https://github.com/abhishekdangi006/image/assets/76874880/3eca27ff-2390-41a2-90c5-caa51f6a2370' alt='menulogo'/>
                </div>
                <div className={classes.user}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHs9V3lH51z25jNGKzWpRsLkctnFNriqnNYw&usqp=CAU' alt=''/>
                </div>
            </div>
            <div className={classes.title}>
                <div className={classes.t1}>Welcome,</div>
                <div className={classes.t2}>Our Fashion App</div>
            </div>
            <div className={classes.search}>
                <div className={classes.searchBar}>
                    <img src='https://cdn-icons-png.flaticon.com/128/3031/3031293.png' alt=''/>
                    <input type="text" placeholder="Search..."></input>
                </div>
                <div className={classes.filter}>
                    <img src='https://github.com/abhishekdangi006/image/assets/76874880/add17b02-38cf-4f27-a1de-bea0c4373157' alt=''/>
                    </div>
            </div>
            
            <div className={classes.offerContainer}>
                <div className={classes.offer}>
                    <div className={classes.discount}>50% off</div>
                    <div className={classes.valid}>On everything today</div>
                    <div className={classes.code}>With code:FSDRGDFETYGF</div>
                    <button className={classes.discountBtn}>Get Now</button>
                </div>
                <div className={classes.offer}>
                    <div className={classes.discount}>50% off</div>
                    <div className={classes.valid}>On everything today</div>
                    <div className={classes.code}>With code:FSDRGDFETYGF</div>
                    <button className={classes.discountBtn}>Get Now</button>
                </div>
            </div>
            <div className={classes.allPro}>
                <div className={classes.arrival}>New Arrival</div>
                <div className={classes.all}>View All</div>
            </div>
            <Link style={{ textDecoration: 'none' }} to={"/product"}>
            <div className={classes.products}>
                <div className={classes.product}>
                    <div className={classes.imgCon}>
                    <div className={classes.cart}><img src='https://github.com/abhishekdangi006/image/assets/76874880/2697097e-130f-411e-8550-76303bd9c02f' alt=''/></div>
                    </div>
                    <div className={classes.details}>
                        <div className={classes.proName}>The Marc Jacobs</div>
                        <div className={classes.brand}>Traveler Tole</div>
                        <div className={classes.price}>$195.00</div>
                    </div>
                </div>
                
                <div className={classes.product}>
                    <div className={classes.imgCon2}>
                        <div className={classes.cart}><img src='https://github.com/abhishekdangi006/image/assets/76874880/2697097e-130f-411e-8550-76303bd9c02f' alt='#'/></div>
                    </div>
                    <div className={classes.details}>
                        <div className={classes.proName}>Axel Arigato</div>
                        <div className={classes.brand}>Clean 90 Triple Sneakers</div>
                        <div className={classes.price}>$245.00</div>
                    </div>
                </div>
            </div>
            </Link>
            <div className={classes.page}>
                <div className={classes.home}>
                    <div className={classes.homeLogo}><img src='https://github.com/abhishekdangi006/image/assets/76874880/8c08ac9a-7329-4fa6-90ce-2b1643c717aa' alt='logo'/></div>
                    <div className={classes.homeTitle}>Home</div>                </div>
                <div className={classes.cartPage}> <img src='https://cdn-icons-png.flaticon.com/128/3514/3514491.png' alt='logo'/></div>
                <div className={classes.cartPage}> <img src='https://cdn-icons-png.flaticon.com/128/2645/2645890.png' alt='logo'/></div>
                <div className={classes.cartPage}>
                    <img src='https://cdn-icons-png.flaticon.com/128/1077/1077114.png' alt='logo'/>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;