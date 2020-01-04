import React from 'react';
import Hero from '../components/Hero';
import HeroProject from '../components/HeroProject';
import HeroHeading from '../components/HeroHeading';
import HeroContent from '../components/HeroContent';
import HeroSubHeading from '../components/HeroSubHeading';
import HeroSmallHeading from '../components/HeroSmallHeading';
import Text from '../components/Text';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MicrodotBanner from '../assets/microdotprofilebanner.png';
import MicrodotFlow from '../assets/MicrodotPageResources/userflowmicrodot.jpg';
import AmazonScreenshot from '../assets/MicrodotPageResources/amazonscreenshot.jpg';
import Template from '../assets/MicrodotPageResources/lowfiamazon.png';
import KickSite from '../assets/MicrodotPageResources/kickstartersite.png';
import KickMock from '../assets/MicrodotPageResources/kickstarter.png';
import Venmo from '../assets/MicrodotPageResources/vemo.png';
import Login from '../assets/MicrodotPageResources/Log-in Page.jpg';
import SignUp from '../assets/MicrodotPageResources/Sign-up Page.jpg';
import HomePage from '../assets/MicrodotPageResources/home.png';
import Market from '../assets/MicrodotPageResources/marketplace.png';
import Profile from '../assets/MicrodotPageResources/marketitem.png';
import Wallet from '../assets/MicrodotPageResources/walletbanner.png';
import Final from '../assets/MicrodotPageResources/finalban1.png';

function Microdot(props){
    return(
        <div>
            <HeroProject/>
            <div className="text-center">
                <img className="img-fluid" alt="Responsive image"src={MicrodotBanner}/>
            </div>
            <div className="mt-5">
                <HeroHeading>The Problem</HeroHeading>
            </div>
            <div className="ml-5 text-wrap">
                <HeroContent>
                    In numerous economies, people make loans with a high interest rate. They find themselves unable to pay back these loans and thus fall increasingly into debt, causing inflation to soar.
                    This is caused by three problems: Money has a positive interest rate that accumulates over time, Debt easily accumulates over time, Central banks feel the need to artificially adjust interest rates.
                </HeroContent>
            </div>
            <div className="mt-2">
                <HeroHeading>The Solution</HeroHeading>
            </div>
            <div className="ml-5 text-wrap">
                <HeroContent>
                    <p>
                        To solve this problem, we created MicroDot: a digital currency that decays over time. With a negative interest rate and a currency that loses value, people would be incentivized to spend money faster and thus stimulate the economy.
                    </p>
                </HeroContent>
            </div>
            <div className="mt-2">
                <HeroHeading> Research </HeroHeading>
            </div>
            <div className="ml-5 text-wrap">
                <HeroSubHeading> Functional-Related </HeroSubHeading>
                <div className="ml-5 text-wrap">
                    <HeroContent>
                        <p>
                            We explored several other functional solutions that attempted to address our problems, mostly revolving around digital currencies. However, we found that they often had their own problems, which included:
                        </p>
                    </HeroContent>
                    <HeroSmallHeading> Instability of Values </HeroSmallHeading>
                    <Text>
                        <p>
                            The value of Bitcoin has gone from zero to nearly $20,000 for one Bitcoin in December 2017. However, in July 2018 it was valued at only $6K a Bitcoin which is a lot lower than what it used to be. Its value probably would keep on dropping. These wild changes in value increase the risk of using cryptocurrency since there could be huge loss involved.
                        </p>
                    </Text>
                    <HeroSmallHeading> Lack of Acceptance </HeroSmallHeading>
                    <Text>
                        <p>
                            Businesses fear the constant changes in value that cryptocurrency has and are reluctant to accept it as a form of payment. Cryptocurrency is also not legal tender in the US, so businesses are less likely to accept it. Foreign countries also share the same sentiment.
                        </p>
                    </Text>
                    <HeroSmallHeading> Transaction Errors </HeroSmallHeading>
                    <Text>
                        <p>
                            Humans have a tendency to make mistakes by recording numbers wrong, mistakes that are not necessarily always caught. A wrong number can be detrimental to someone's personal data.
                        </p>
                    </Text>
                    <HeroSmallHeading> Theft </HeroSmallHeading>
                    <Text>
                        <p>
                            Despite encryption to protect cryptocurrency transactions, there have been hacks resulting in substantial losses. Passwords can be stolen or hacked, hardware corrupted or taken, and security breaches with other businesses. Thus there could be losses here as well.
                        </p>
                    </Text>
                </div>
            </div>
            <div className="ml-5 text-wrap">
                <HeroSubHeading> Design-Related </HeroSubHeading>
                <div className="ml-5 text-wrap">
                    <HeroContent>
                        <p>
                            We also wanted to include aspects of both Venmo transactions as well as an Amazon marketplace. To do this, we evaluated the pain points of people who use these apps. Pain points of Venmo:
                        </p>
                    </HeroContent>
                    <Text>
                        <p> 1% fee for immediate transfer to bank account </p>
                        <p> Charging or clearing multiple requests at once </p>
                        <p> Easy to mix up Send and Request buttons </p>
                    </Text>
                </div>
            </div>
            <div className="ml-5 text-wrap">
                <HeroSubHeading> Target Audience </HeroSubHeading>
                <div className="ml-5 text-wrap">
                    <HeroContent>
                        <p>
                            We also evaluated our target audience: We realized that most of our target audience was people in lagging economies who still had access to decently advanced technology, since their economies suffered from runaway inflation and high debt rates but their countries weren't necessarily poor.
                        </p>

                        <p>
                            We reached out to the Puerto Rican government as one of our target members: We also contacted a small town in West Virginia.
                        </p>
                    </HeroContent>
                </div>
            </div>
            <div className="mt-2">
                <HeroHeading> Exploration </HeroHeading>
                <div className="ml-5 text-wrap">
                    <HeroContent>
                        <p>
                            Before sketching out designs, I created a user flow for the user's expected journey through the prototype to encourage the user to access these pages in this particular manner.
                        </p>
                    </HeroContent>
                </div>
            </div>
            <div className="text-center">
                <img className="img-fluid" alt="Responsive image"src={MicrodotFlow}/>
            </div>
            <div className="ml-5 text-wrap">
                <HeroSubHeading> The Marketplace for Products in Amazon </HeroSubHeading>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={AmazonScreenshot}/>
                </div>
                <HeroSubHeading> Low-fi Modeled After Amazon </HeroSubHeading>
                <HeroContent>
                    We liked the search bar on top for looking for products of interest, as well as the bar on the left side for more details about a user's search results. We also liked the list of cards describing each product.
                </HeroContent>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={Template}/>
                </div>
                <HeroSubHeading> The Marketplace for Companies in Kickstarter </HeroSubHeading>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={KickSite}/>
                </div>
                <HeroSubHeading> LowFi Modeled After KickStarter </HeroSubHeading>
                <HeroContent>  We adopted the list of cards idea for our design. </HeroContent>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={KickMock}/>
                </div>
                <HeroSubHeading> Transactions in Venmo </HeroSubHeading>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={Venmo}/>
                </div>
            </div>
            <div className="mt-2">
                <HeroHeading> Design </HeroHeading>
                <div className="ml-5 text-wrap">
                    <HeroContent> We started with the first interfaces and information that users would see: </HeroContent>
                    <HeroSubHeading> Part I: Login Page </HeroSubHeading>
                </div>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={Login}/>
                </div>
                <div className="ml-5 text-wrap">
                    <HeroSubHeading> Part II: Sign Up Page </HeroSubHeading>
                </div>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={SignUp}/>
                </div>
                <div className="ml-5 text-wrap">
                    <HeroSubHeading> Part III: Home Page </HeroSubHeading>
                </div>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={HomePage}/>
                </div>
                <div className="ml-5 text-wrap">
                    <HeroSubHeading> Part IV: MarketPlace Page </HeroSubHeading>
                </div>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={Market}/>
                </div>
                <div className="ml-5 text-wrap">
                    <HeroSubHeading> Part V: Item Profile </HeroSubHeading>
                </div>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={Profile}/>
                </div>
                <div className="ml-5 text-wrap">
                    <HeroSubHeading> Part VI: My Wallet </HeroSubHeading>
                </div>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={Wallet}/>
                </div>
                <div className="ml-5 text-wrap">
                    <HeroSubHeading>Final Result </HeroSubHeading>
                    <HeroContent> Using HTML and CSS, we coded up the website on VS Code. We did our best to stick with our design:</HeroContent>
                </div>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={Final}/>
                </div>
            </div>
            <div className="mt-2">
                <HeroHeading> Reflection </HeroHeading>
                <div className="ml-5, text-wrap">
                    <Text>
                        This was my first time using Figma, so it was interesting learning the ropes on how to design. I thought my co-intern and I did a good job designing and coding up the website but I wish we got farther along with website content and started working on the back-end of the marketplace. On the product design side, I wish we played a bigger role in cold calling and contacting customers for their pain points instead of rushing into the design early on. I also wish we explored more explorations in low, med, and high-fidelity and done more user testing to visualize the user flow of customers.
                    </Text>

                    <Text>
                        Along the way, I had my first experience working throughout business hours with a team of people. I appreciate how close I grew to my coworkers and the friendships I formed. Overall, I am grateful for both the teamwork experience I gained and the introduction to product design. I look forward to gaining more experience in the future!
                    </Text>
                </div>
            </div>
        </div>
    );
}
export default Microdot;
