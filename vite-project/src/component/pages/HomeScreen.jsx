import React from 'react'
import "./Screen.css"

const HomeScreen = () => {
    return (
        <>
            <div className="nav">
                <div className="nav1">
                    Registration
                </div>
            </div>
            <br /><br /><br />
            <div className="c">
                <p className="h1">Registration Form</p>
                <div className="c2">
                    <div>
                        <pre id="label">City<span>*</span>                                                                   Institute<span>*</span>                                                                        Course<span>*</span></pre>
                        <select name="" id="select">
                            <option value="">Select Option</option>
                            <option value="Karachi">Karachi</option>
                        </select>
                        <select name="" id="select1">
                            <option value="">Select Option</option>
                            <option value="SAIMS">SAIMS</option>
                        </select>
                        <select name="" id="select2">
                            <option value="">Select Option</option>
                            <option value="Web and Mobile Development">Web and Mobile Development</option>
                            <option value="Flutter App Development">Flutter App Development</option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="Graphics Designing">Graphics Designing</option>
                        </select><br /><br />
                        <pre id="label">Your Favourite Time<span>*</span>                                          Full Name<span>*</span>                                                                   Parents / Guardian Name<span>*</span></pre>
                        <select name="" id="select">
                            <option value="">Select Option</option>
                            <option value="Monday to Thursday">Monday to Thursday (6:30 to 9:30)</option>
                            <option value="Tuesday to Friday">Tuesday to Friday (6:30 to 9:30)</option>
                        </select>
                        <input type="text" name="" id="select1" />
                        <input type="text" name="" id="select2" />

                        <br /><br /><br />
                        <pre id="label">Email (Write email carefully)<span>*</span>                            Contact Number<span>*</span>                                                           Parents / Guardian Number<span>*</span></pre>
                        <input type="text" placeholder="abc123@gmail.com" name="" id="select" />
                        <input type="number" placeholder="03XXXXXXXXX" name="" id="select1" />
                        <input type="number" name="" placeholder="03XXXXXXXXX" id="select2" />

                        <br /><br /><br />
                        <pre id="label">CNIC / BForm<span>*</span>                                                  Gender<span>*</span>                                                                         Date of Birth<span>*</span></pre>
                        <input type="number" placeholder="4XXXXXXXXXXXXXX" name="" id="select" />
                        <select id="select1">
                            <option value="">Select Option</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <input type="date" id="select2" />

                        <br /><br /><br />
                        <pre id="label">Permanent Address<span>*</span>                                                                                                                               Last Qualifications<span>*</span></pre>
                        <input type="text" name="" id="select3" />
                        <select id="select4">
                            <option value="">Select Option</option>
                            <option value="Under-materic">Under-materic</option>
                            <option value="Materic">Materic</option>
                            <option value="Masters">Masters</option>
                            <option value="Gradute">Gradute</option>
                            <option value="PHD">PHD</option>
                        </select>

                        <br /><br /><br />
                        <pre id="label">Passport Size Profile Image (Face Front and Decent picture)</pre>
                        <input type="file" name="" id="select5" />

                        <br /><br /><br />
                        <center><button >Submit Form</button></center>
                    </div>
                </div>
            </div>


        </>

    )
}
export default HomeScreen
