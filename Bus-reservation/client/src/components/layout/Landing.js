import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchBuses } from '../../actions/profile'

const Landing = () => {
    const [user, exp1] = useState('Tickets here')
    const [data,setData]=useState([
        {name:"volvo",
    company:"tata",
    from:"ongole",
    to:"hyderabad",
    _id:"jdeihn3n34n"

    },
    {name:"JBT",
    company:"JBT TRAVELS",
    from:"ongole",
    to:"hyderabad",
    _id:"jdeihn3n34n"

    },
    {name:"volvo",
    company:"tata",
    from:"guntur",
    to:"hyderabad",
    _id:"jdeihn3n34n"

    }
    ])
    const [final,setfinalData]=useState([])
    const [from,setFrom]=useState("")
    const [to,setTo]=useState("")
    const [formData, setFormData] = useState({
        start: '',
        end: '',
        date: ''

    });
    const { start, end, date } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleToCity = e => {
        e.preventDefault()
        setTo(e.target.value)
      
     
        localStorage.setItem("destination", e.target.value)
    }
    const handleFromCity = e => {
        e.preventDefault()
       
        setFrom(e.target.value)
        localStorage.setItem("start", e.target.value)
        // console.log(startCity)
    }
    const handleDate = e => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        //    console.log(e.target.value)
        localStorage.setItem("date", e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(from)
        const filtered=data.filter(each=>(
            
            each.from===from && each.to===to
        ))
        console.log(filtered)
      
        const handleSubmit = bId => {
            
            
            localStorage.setItem("selectedBusId", bId)
        }
        searchBuses({ start, end }).then((busData) => {
            // const func1 = (item) => {
            //     console.log(item)
            //     // exp1(<p>Hello jiii yaraaa</p>)
            // }
            // user.forEach(func1)
      
            exp1(<div className="profile-exp bg-white p-2">
                <h2 className="text-primary">Buses</h2>
                <ul>
    {data && data.length > 0 ? (
        <Fragment>
            {data.map(bus => (
                (bus.from === from && bus.to === to) ? (
                    <li key={bus._id}>
                        <div className="container1">
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h2>01</h2>
                                        <h3>{bus.name}</h3>
                                        <h3>{bus.company}</h3>
                                        <span><h1>Stops:- </h1><strong> [{bus.from},{bus.to}] </strong></span>
                                        <span><h1>Bus Id:- </h1>{bus._id}</span>
                                        <Link to="/book/menu1" className="btn btn-primary" onClick={(bId) => { handleSubmit(bus._id) }}>Book Bus</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ) : null // Rendering null if condition is not met
            ))}
            {data.every(bus => !(bus.from === from && bus.to === to)) && (
                <h4>No Buses Found.</h4>
            )}
        </Fragment>
    ) : (
        <h4>No Buses Found.</h4>
    )}
</ul>


            </div>)
            // console.log(busData.length)


            // console.log(user)
            // return (
            //     <div>h</div>
            // )
        })
    }


    return (
        <div>

            <div className="landing-inner">
                <h1 className="large">WELCOME TO MODERN BUS TRAVELS</h1>


            </div>
            {/* <p className="lead">
                <strong>" Tomorrow's destination arrive today "</strong>
            </p> */}

            <div className="rdc">
                <div className="main-container">
                    <form className="form-inline" onSubmit={e => onSubmit(e)}>
                        <input type="text" placeholder="From" required name="start" data-style="btn-new" className="selectpicker" value={from} onChange={e => { handleFromCity(e) }} />

                        <input type="text" name="end" required placeholder="Destination" data-style="btn-new" className="selectpicker" value={to} onChange={e => { handleToCity(e) }} />

                        <input type="date" name="date" required value={date} onChange={e => { handleDate(e) }} />
                        <input type="submit" className=" btn btn-success" value="Search" />
                    </form>
                    <div className="temp1">
                        Are you a New User ?
                        <Link to="/register"> Sign-In</Link>
                    </div>

               
                </div>
            </div>
            <div className="tickets">{user}</div>
        </div>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
    searchBuses: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { searchBuses })(Landing)
