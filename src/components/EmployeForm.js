import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'


function EmployeForm(props) {
    let history = useHistory();

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [mobile, setMobile] = useState(null)
    const [gender, setGender] = useState(null)
    const [addedby, setAddedBy] = useState(null)
    const [dob, setDob] = useState(null)
    const [doj, setDoj] = useState(null)
    const [department, setDepartment] = useState(null)
    const [position, setPosition] = useState(null)
    const [workType, setWorkType] = useState(null)
    const [salary, setSalary] = useState(null)
    const [accountNo, setAccountNo] = useState(null)
    const [iFSCCode, setIFSCCode] = useState(null)
    const [aadharNo, setAadharNo] = useState(null)
    const [pANNo, setPANNo] = useState(null)
    const [referredBy, setReferredBy] = useState(null)
    const [address, setAddress] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)

    const create = () => {
        
        fetch("http://localhost:3000/zafar", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, mobile, gender, addedby, dob, doj, department, position, workType, salary, accountNo
                , iFSCCode, aadharNo, pANNo, referredBy, address, city, state
            })
        }).then((result) => {
            result.json().then((res) => {
                console.warn(res);
                // alert("Your Account is Successfully Added")
                history.push('/message')
            })
        })




    }
const handle=()=>{
    history.push('/organization')

}



    console.log("Your page rndered")
    return (
        <div>
            <div className=" items-center flex flex-col max-width-72 ">



                <div className=" m-12 ">

                    <div className=" flex flex-col border-2 border-primary p-14 space-y-2 " >
                        <div className=" text-white p-2 rounded bg-primary mb-6 w-24 font-bold outline-none flex justify-center">
                            <button  onClick={handle}>Back</button>
                        </div>
                        <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">Name:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text"
                                onChange={(event) => setName(event.target.value)}
                            /></span>
                        <p>{name}</p>
                        <span className=" flex  flex-row ">
                            <label for="email" className=" w-36">Email:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text"
                                onChange={(event) => setEmail(event.target.value)} /></span>
                        <span className="flex  flex-row ">
                            <label for="mobile" className=" w-36"> Mobile No:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text"
                                onChange={(event) => setMobile(event.target.value)}
                            /></span>
                        <span className="flex  flex-row ">
                            <label for="gender" className=" w-36">  Gender:</label>

                            <select id="country" name="country" className=" outline-none border-2 rounded border-primary pl-1"
                                onChange={(event) => setGender(event.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select></span>


                        <span className="flex  flex-row ">
                            <label for="added" className=" w-36"> Added By:</label>

                            <select id="country" name="country" className=" outline-none  border-2 rounded border-primary pl-1"
                                onChange={(event) => setAddedBy(event.target.value)}>
                                <option value="Admin">Admin</option>
                                <option value="Addmin" >Addmin</option>
                                <option value="Ardminf" >Ardminf</option>
                            </select></span>

                        <span className="flex  flex-row ">
                            <label for="birthday" className=" w-36">DOB:</label>


                            <input type="date" id="birthday" name="birthday" className=" outline-none pl-1 border-2 rounded border-primary"
                                onChange={(event) => setDob(event.target.value)}
                            /></span>
                        <span className="flex  flex-row ">
                            <label for="birthday" className=" w-36">DOJ:</label>


                            <input type="date" id="birthday" name="birthday" className=" outline-none pl-1 border-2 rounded border-primary"
                                onChange={(event) => setDoj(event.target.value)} /></span>
                        <span className="flex  flex-row ">
                            <label for="gender" className=" w-36">Department:</label>

                            <select id="country" name="country" className=" outline-none border-2 rounded border-primary pl-1"
                                onChange={(event) => setDepartment(event.target.value)}>
                                <option value="Remote">Remote</option>
                                <option value="Office">Office</option>
                                <option value="Flexible">Flexible</option>
                                <option value="Freelencer">Freelencer</option>

                            </select></span>
                        <span className="flex  flex-row ">
                            <label for="gender" className=" w-36">Position:</label>

                            <select id="country" name="country" className=" outline-none border-2 rounded border-primary pl-1"
                                onChange={(event) => setPosition(event.target.value)}>
                                <option value="Front-end Developer">Front-end Developer</option>
                                <option value="Backend Developer">Backend Developer</option>
                                <option value="Full-stack Developer">Full-stack Developer</option>
                                <option value="Desktop Developer">Desktop Developer</option>
                                <option value="Mobile Developer">Mobile Developer</option>
                                <option value="Graphics Developer">Graphics Developer</option>
                            </select></span>
                        <span className="flex  flex-row ">
                            <label for="gender" className=" w-36">Work Type:</label>

                            <select id="country" name="country" className=" outline-none border-2 rounded border-primary pl-1"
                                onChange={(event) => setWorkType(event.target.value)}>
                                <option value="Remote">Remote</option>
                                <option value="Office">Office</option>
                                <option value="Flexible">Flexible</option>
                                <option value="Freelencer">Freelencer</option>

                            </select></span>
                        <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">Salary:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="number"
                                onChange={(event) => setSalary(event.target.value)} /></span>
                        <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">Account No:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="number"
                                onChange={(event) => setAccountNo(event.target.value)}
                            /></span>
                        <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">IFSC Code:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text"
                                onChange={(event) => setIFSCCode(event.target.value)} /></span>
                        <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">Aadhar No:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="number"
                                onChange={(event) => setAadharNo(event.target.value)} /></span>
                        <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">PAN No:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text"
                                onChange={(event) => setPANNo(event.target.value)}
                            /></span>
                        <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">Referred By:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text"
                                onChange={(event) => setReferredBy(event.target.value)} /></span>
                        <span className="flex  flex-row ">

                            <label for="address" className=" w-36">Adress:</label>

                            <input className="outline-none border-2 w-72 rounded border-primary pl-1" type="text"
                                onChange={(event) => setAddress(event.target.value)} /></span>
                        <span className="flex  flex-row ">
                            <label for="city" className="w-36">  City:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text"
                                onChange={(event) => setCity(event.target.value)}
                            /></span>
                        <span className="flex  flex-row ">
                            <label for="state" className=" w-36 ">State:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text"
                                onChange={(event) => setState(event.target.value)} /></span>
                        <div className="  mt-10 ">
                            <button className="border-0 text-white float-right p-2 bg-primary text-lg rounded w-18"
                                onClick={create} >Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeForm;




































































