import React from "react";
import './Home.css'
import cost_control2 from '../Assets/cost_contol2.png'
import Navbar from './Navbar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="section1">
                <div className="two_part">
                    <div className="first_part ">
                        <img src={cost_control2} alt="image"></img>
                    </div>
                    <div className="second_part" >
                        <p> KeepTrack of Your Income & Expense</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;

