import React from 'react';

function Organazation(props) {
    console.log("Your page rndered")
    return (
        <div>
            <div className=" items-center flex flex-col max-width-72 ">



                <div className=" m-2">
                    <div className=" flex flex-col border-2 border-primary p-14 space-y-2 " >
                        <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">Name:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text" /></span>
                        <span className=" flex  flex-row ">
                            <label for="email" className=" w-36">Email:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text" /></span>
                        <span className="flex  flex-row ">
                            <label for="mobile" className=" w-36"> Mobile No:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text" /></span>
                        <span className="flex  flex-row ">
                            <label for="gender" className=" w-36">  Gender:</label>

                            <select id="country" name="country" className=" outline-none border-2 rounded border-primary pl-1">
                                <option value="australia">Male</option>
                                <option value="canada">Female</option>

                            </select></span>


                        <span className="flex  flex-row ">
                            <label for="added" className=" w-36"> Added By:</label>

                            <select id="country" name="country" className=" outline-none  border-2 rounded border-primary pl-1">
                                <option value="Admin" className=" bg-primmary">Admin</option>
                                <option value="Admin">Admin</option>
                                <option value="Admin">Admin</option>
                            </select></span>

                        <span className="flex  flex-row ">
                            <label for="birthday" className=" w-36">DOB:</label>


                            <input type="date" id="birthday" name="birthday" className=" outline-none pl-1 border-2 rounded border-primary" /></span>
                            <span className="flex  flex-row ">
                            <label for="birthday" className=" w-36">DOJ:</label>


                            <input type="date" id="birthday" name="birthday" className=" outline-none pl-1 border-2 rounded border-primary" /></span>
                            <span className="flex  flex-row ">
                            <label for="gender" className=" w-36">Department:</label>

                            <select id="country" name="country" className=" outline-none border-2 rounded border-primary pl-1">
                                <option value="australia">Remote</option>
                                <option value="australia">Office</option>
                                <option value="australia">Flexible</option>
                                <option value="australia">Freelencer</option>

                            </select></span>
                        <span className="flex  flex-row ">
                            <label for="gender" className=" w-36">Position:</label>

                            <select id="country" name="country" className=" outline-none border-2 rounded border-primary pl-1">
                                <option value="australia">Front-end Developer</option>
                                <option value="australia">Backend Developer</option>
                                <option value="australia">Full-stack Developer</option>
                                <option value="australia">Desktop Developer</option>
                                <option value="canada">Mobile Developer</option>
                                <option value="canada">Graphics Developer</option>
                            </select></span>
                        <span className="flex  flex-row ">
                            <label for="gender" className=" w-36">Work Type:</label>

                            <select id="country" name="country" className=" outline-none border-2 rounded border-primary pl-1">
                                <option value="australia">Remote</option>
                                <option value="australia">Office</option>
                                <option value="australia">Flexible</option>
                                <option value="australia">Freelencer</option>

                            </select></span>
                            <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">Salary:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="number" /></span>
                            <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">Account No:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="number" /></span>
                            <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">IFSC Code:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text" /></span>
                            <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">Aadhar No:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="number" /></span>
                            <span className="flex  flex-row  ">
                            <label for="birthday" className=" w-36  ">PAN No:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text" /></span>
                        <span className="flex  flex-row ">

                            <label for="address" className=" w-36">Adress:</label>

                            <input className="outline-none border-2 w-72 rounded border-primary pl-1" type="text" /></span>
                        <span className="flex  flex-row ">
                            <label for="city" className="w-36">  City:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text" /></span>
                        <span className="flex  flex-row ">
                            <label for="state" className=" w-36 ">State:</label>

                            <input className=" outline-none border-2 w-72 rounded border-primary pl-1" type="text" /></span>
                        <div className="  mt-10 ">
                            <button className="
                    
                    border-0
                    text-white
                    float-right
                   p-2
                   bg-primary
                   text-lg
                    rounded
                    w-18
                    

                       
                        ">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Organazation;