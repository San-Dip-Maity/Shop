import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import firebaseAppConfig from '../util/firebase-config'
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(firebaseAppConfig)

const Layout = ({children})=>{
    const [open, setOpen] = useState(false)
    const [session, setSession] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user)
            {
                setSession(user)
            }
            else {
                setSession(null)
            }
        })
    },[])

    const menus = [
        {
            label: "Home",
            href: '/'
        },
        {
            label: "Products",
            href: '/products'
        },
        {
            label: "Category",
            href: '/category'
        },
        {
            label: "Contact us",
            href: '/contact-us'
        }
    ]

    const mobileLink = (href)=>{
        navigate(href)
        setOpen(false)
    }

    return (
        <div>
            <nav className="sticky top-0 left-0 shadow-lg bg-white">
                <div className="w-10/12 mx-auto flex items-center justify-between">
                    <img 
                        src="/images/logo.png"
                        className="w-[8rem]"
                    />
                    
                    <button className="md:hidden" onClick={()=>setOpen(!open)}>
                        <i className="ri-menu-3-fill text-3xl"></i>
                    </button>

                    <ul className="md:flex gap-6 items-center hidden">
                        {
                            menus.map((item, index)=>(
                                <li key={index}>
                                    <Link 
                                        to={item.href}
                                        className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                                    >{item.label}</Link>
                                </li>
                            ))
                        }
                        {
                            !session && 
                            <>
                                <Link 
                                    className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                                    to="/login"
                                >Login</Link>

                                <Link 
                                    className="bg-blue-600 py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white"
                                    to="/signup"
                                >Signup</Link>
                            </>
                        }

                        {
                            session && 
                            <h1>Hi User</h1>
                        }
                    </ul>
                </div>
            </nav>
            <div>
                {children}
            </div>
            <footer className="bg-blue-900 py-16">
                <div className="w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8">
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Website Links</h1>
                        <ul className="space-y-2 text-slate-50">
                            {
                                menus.map((item, index)=>(
                                    <li key={index}>
                                        <Link to={item.href} className="hover:underline ">{item.label}</Link>
                                    </li>
                                ))
                            }
                            <li><Link to="/login" className="hover:underline ">Login</Link></li>
                            <li><Link to="/signup" className="hover:underline ">Signup</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Follow us</h1>
                        <ul className="space-y-2 text-slate-50">
                            <li><i class="ri-facebook-circle-fill"></i><Link to="/" className="hover:underline ml-1">Facebook</Link></li>
                            <li><i class="ri-youtube-fill"></i><Link to="/" className="hover:underline ml-1">Youtube</Link></li>
                            <li><i class="ri-twitter-fill"></i><Link to="/" className="hover:underline ml-1">Twitter</Link></li>
                            <li><i class="ri-linkedin-box-fill"></i><Link to="/" className="hover:underline ml-1">Linkedin</Link></li>
                            <li><i class="ri-instagram-fill"></i><Link to="/" className="hover:underline ml-1">Instagram</Link></li>
                        </ul>
                    </div>
                    <div className="pr-9">
                        <h1 className="text-white font-semibold text-2xl mb-3">Brand Details</h1>
                        <p className="text-slate-50 mb-6 ">Discover quality products at competitive prices with seamless shopping and top-notch customer service at your one-stop online destination.</p>
                        <img 
                            src="/images/logo.png"
                            className="w-[100px] rounded-full"
                        />
                    </div>
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Contact us</h1>
                        <form className="space-y-4">
                            <input 
                                required
                                name="fullname"
                                className="bg-white w-full rounded p-3"
                                placeholder="Your name"
                            />

                            <input 
                                required
                                type="email"
                                name="email"
                                className="bg-white w-full rounded p-3"
                                placeholder="Enter email id"
                            />

                            <textarea 
                                required
                                name="message"
                                className="bg-white w-full rounded p-3"
                                placeholder="Message"
                                rows={3}
                            />

                            <button className="bg-black font-semibold text-white py-3 px-6 rounded hover:bg-gray-400 hover:text-black transition duration-300 ease-in-out">Submit</button>
                        </form>
                    </div>
                </div>
            </footer>

           
            <aside 
                className="overflow-hidden md:hidden bg-slate-900 shadow-lg fixed top-0 left-0 h-full z-50"
                style={{
                    width: open ? 250 : 0,
                    transition: '0.3s'
                }}
            >
                <div className="flex flex-col p-8 gap-6">
                    {
                        menus.map((item, index)=>(
                            <button onClick={()=>mobileLink(item.href)} key={index} className="text-white">
                                {item.label}
                            </button>
                        ))
                    }
                </div>
            </aside>
        </div>
    )
}

export default Layout