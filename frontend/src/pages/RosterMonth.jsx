import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Back from "../components/Back";
import * as XLSX from 'xlsx';

export default function RosterMonth() {
    const { str } = useParams();
    const [id, month] = str.split('-');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [data, setData] = useState('');
    const [array, setArray] = useState([]);
    const year = new Date().getFullYear();
    const [res, setRes] = useState(0);
    const [freeMeals, setFreeMeals] = useState(0);
    const [reducedMeals, setReducedMeals] = useState(0);
    const [paidMeals, setPaidMeals] = useState(0);
    const [filtered, setFiltered] = useState(false);
    const [keys, setKeys] = useState(['_id', 'branch', 'month', 'createdAt', 'updatedAt', '__v', 'status', 'user']);
    const [branchName, setBranchName] = useState('');

    
    const user = JSON.parse(localStorage.getItem('user'));

    const getClients = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/children/${id}`);
        // const response = await fetch(`http://localhost:3001/api/children/${id}`);
        const json = await response.json();

        const result = json.filter((child) => child.month == months[month - 1]);
              const filteredData = result.filter(item => item.status === 'Approved');

        const freeMeal = filteredData.filter((child) => child.eligibility == 'Free');
        const reducedMeal = filteredData.filter((child) => child.eligibility == 'Reduced');
        const paidMeal = filteredData.filter((child) => child.eligibility == 'Paid');

        setFreeMeals(freeMeal.length);
        setPaidMeals(paidMeal.length);
        setReducedMeals(reducedMeal.length);
        
               


        setData(filteredData);
        
        const date = new Date();
        
        filteredData.forEach(obj => {
          keys.forEach(key => {
            delete obj[key];
           });
        });
        
        setFiltered(filteredData)
   
    
    }

    const getBranchName = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/branches/${user.branch}`);
        // const response = await fetch(`http://localhost:3001/api/branches/${user.branch}`);
        const json = await response.json();
        setBranchName(json.name); 
    }


 
    
    

    const submit = () => {
        var wb = XLSX.utils.book_new(),
        ws = XLSX.utils.json_to_sheet(filtered);
    
        XLSX.utils.book_append_sheet(wb, ws, 'Roster');
    
        XLSX.writeFile(wb, `${branchName}-Branch-${months[month - 1]}.xlsx`)
      }


    useEffect(() => {
        getClients();
        getBranchName();
        
 
    }, []);

    return(
        <div className="guideline_container">
            <Back />
            <h3 className='guide_confirm_title'>Roster Month: { months[month - 1] } { year }</h3>
            <h6>Free Meals: { freeMeals}</h6>
            <h6>Reduced Meals: { reducedMeals }</h6>
            <h6>Paid: { paidMeals }</h6>
            { data !='' && <button className="button roster block radius" onClick={submit}>Generate Roster</button> }

           { data != '' ? <table className="roster_table block">
                <thead>
                    <tr>
                        <th>Name of Child</th>
                        <th>Age of Child</th>
                        <th>Title XX</th>
                        <th>Date of Entrance</th>
                        <th>Date Exited</th>
                        <th>IES/ Enrollment on file Y/N</th>
                        <th>Date Income Eligibility Signed</th>
                        <th>Category of Meal Eligibility</th>
                    </tr>
                </thead>

                <tbody>
                    {data && data.map((child) => (
                        <tr key={child._id}>
                            <td>{ child.name }</td>
                            <td>{ child.age }</td>
                            <td>{ child.title_xx }</td>
                            <td>{ child.date }</td>
                            <td>{ child.date_exited }</td>
                            <td>Y</td>
                            <td>{ child.date }</td>
                            <td>{ child.eligibility }</td>
                        </tr>
                    ))}
                </tbody>
            </table> : <h3 className="guide_confirm_title no_form" >No IEG forms filed for this month</h3> }
        </div>
    )
}
