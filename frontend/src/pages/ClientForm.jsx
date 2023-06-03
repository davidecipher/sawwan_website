import { useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function ClientForm() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [error, setError] = useState("");
    const [childOneName, setChildOneName] = useState('');
    const [childOneID, setChildOneID] = useState('');
    const [childOneHeadStart, setChildOneHeadStart] = useState(false);
    const [childOneForsterChild, setChildOneFosterChild] = useState(false);
    const [childOneRunaway, setChildOneRunaway] = useState(false);
    const [childOneHomeless, setChildOneHomeless] = useState(false);
    const [childOneAge, setChildOneAge] = useState('');

    const [childTwoName, setChildTwoName] = useState('');
    const [childTwoID, setChildTwoID] = useState('');
    const [childTwoHeadStart, setChildTwoHeadStart] = useState(false);
    const [childTwoForsterChild, setChildTwoFosterChild] = useState(false);
    const [childTwoRunaway, setChildTwoRunaway] = useState(false);
    const [childTwoHomeless, setChildTwoHomeless] = useState(false);
    const [childTwoAge, setChildTwoAge] = useState('');

    const [childThreeName, setChildThreeName] = useState('');
    const [childThreeID, setChildThreeID] = useState('');
    const [childThreeHeadStart, setChildThreeHeadStart] = useState(false);
    const [childThreeForsterChild, setChildThreeFosterChild] = useState(false);
    const [childThreeRunaway, setChildThreeRunaway] = useState(false);
    const [childThreeHomeless, setChildThreeHomeless] = useState(false);
    const [childThreeAge, setChildThreeAge] = useState('');

    const [childFourName, setChildFourName] = useState('');
    const [childFourID, setChildFourID] = useState('');
    const [childFourHeadStart, setChildFourHeadStart] = useState(false);
    const [childFourForsterChild, setChildFourFosterChild] = useState(false);
    const [childFourRunaway, setChildFourRunaway] = useState(false);
    const [childFourHomeless, setChildFourHomeless] = useState(false);
    const [childFourAge, setChildFourAge] = useState('');

    const [childFiveName, setChildFiveName] = useState('');
    const [childFiveID, setChildFiveID] = useState('');
    const [childFiveHeadStart, setChildFiveHeadStart] = useState(false);
    const [childFiveForsterChild, setChildFiveFosterChild] = useState(false);
    const [childFiveRunaway, setChildFiveRunaway] = useState(false);
    const [childFiveHomeless, setChildFiveHomeless] = useState(false);
    const [childFiveAge, setChildFiveAge] = useState('');

    const [childSixName, setChildSixName] = useState('');
    const [childSixID, setChildSixID] = useState('');
    const [childSixHeadStart, setChildSixHeadStart] = useState(false);
    const [childSixForsterChild, setChildSixFosterChild] = useState(false);
    const [childSixRunaway, setChildSixRunaway] = useState(false);
    const [childSixHomeless, setChildSixHomeless] = useState(false);
    const [childSixAge, setChildSixAge] = useState('');

    const [childIncome, setChildIncome] = useState('');
    const [childIncomeFreq, setChildIncomeFreq] = useState('Weekly');

    const [HouseholdMemberOneName, setHouseholdMemberOneName] = useState('')
    const [HouseholdMemberOneWorkEarnings, setHouseholdMemberOneEarnings] = useState('');
    const [HouseholdMemberOneWelfare_Alimony_CS, setHouseholdMemberOneWelfare_Alimony_CS] = useState('');
    const [HouseholdMemberOneSSPR, setHouseholdMemberOneSSPR] = useState('');
    const [HouseholdMemberOneOther, setHouseholdMemberOneOther] = useState('');

    
    const [HouseholdMemberTwoName, setHouseholdMemberTwoName] = useState('')
    const [HouseholdMemberTwoWorkEarnings, setHouseholdMemberTwoEarnings] = useState('');
    const [HouseholdMemberTwoWelfare_Alimony_CS, setHouseholdMemberTwoWelfare_Alimony_CS] = useState('');
    const [HouseholdMemberTwoSSPR, setHouseholdMemberTwoSSPR] = useState('');
    const [HouseholdMemberTwoOther, setHouseholdMemberTwoOther] = useState('');

    const [HouseholdMemberThreeName, setHouseholdMemberThreeName] = useState('')
    const [HouseholdMemberThreeWorkEarnings, setHouseholdMemberThreeEarnings] = useState('');
    const [HouseholdMemberThreeWelfare_Alimony_CS, setHouseholdMemberThreeWelfare_Alimony_CS] = useState('');
    const [HouseholdMemberThreeSSPR, setHouseholdMemberThreeSSPR] = useState('');
    const [HouseholdMemberThreeOther, setHouseholdMemberThreeOther] = useState('');

    const [HouseholdMemberFourName, setHouseholdMemberFourName] = useState('')
    const [HouseholdMemberFourWorkEarnings, setHouseholdMemberFourEarnings] = useState('');
    const [HouseholdMemberFourWelfare_Alimony_CS, setHouseholdMemberFourWelfare_Alimony_CS] = useState('');
    const [HouseholdMemberFourSSPR, setHouseholdMemberFourSSPR] = useState('');
    const [HouseholdMemberFourOther, setHouseholdMemberFourOther] = useState('');

    const [HouseholdMemberFiveName, setHouseholdMemberFiveName] = useState('')
    const [HouseholdMemberFiveWorkEarnings, setHouseholdMemberFiveEarnings] = useState('');
    const [HouseholdMemberFiveWelfare_Alimony_CS, setHouseholdMemberFiveWelfare_Alimony_CS] = useState('');
    const [HouseholdMemberFiveSSPR, setHouseholdMemberFiveSSPR] = useState('');
    const [HouseholdMemberFiveOther, setHouseholdMemberFiveOther] = useState('');

    const [HouseholdMemberSixName, setHouseholdMemberSixName] = useState('')
    const [HouseholdMemberSixWorkEarnings, setHouseholdMemberSixWorkEarnings] = useState('');
    const [HouseholdMemberSixWelfare_Alimony_CS, setHouseholdMemberSixWelfare_Alimony_CS] = useState('');
    const [HouseholdMemberSixSSPR, setHouseholdMemberSixSSPR] = useState('');
    const [HouseholdMemberSixOther, setHouseholdMemberSixOther] = useState('');

    const [totalHouseHoldMembers, setTotalHouseHoldMembers] = useState('')
    const [totalHouseHoldIncome, setTotalHouseHoldIncome] = useState(0);

    const [ssn, setSsn] = useState('');
    const [noSsn, setNoSsn] = useState(false);

    const [timeFrom, setTimeFrom] = useState(1);
    const [timeFromHour, setTimeFromHour] = useState('AM')
    const [timeTo, setTimeTo] = useState(1);
    const [timeToHour, setTimeToHour] = useState('AM')

    const [beforeAfterCare, setBeforeAfterCare] = useState(false);

    const [dayCenterSunday, setDayCenterSunday] = useState(false);
    const [dayCenterMonday, setDayCenterMonday] = useState(false);
    const [dayCenterTuesday, setDayCenterTuesday] = useState(false);
    const [dayCenterWednesday, setDayCenterWednesday] = useState(false);
    const [dayCenterThursday, setDayCenterThursday] = useState(false);
    const [dayCenterFriday, setDayCenterFriday] = useState(false);
    const [dayCenterSaturday, setDayCenterSaturday] = useState(false);

    const [breakFast, setBreakFast] = useState(false);
    const [snackLunch, setSnackLunch] = useState(false);
    const [snackPM, setSnackPM] = useState(false);
    const [supper, setSupper] = useState(false);
    const [snack, setSnack] = useState(false);

    const [signature, setSignature] = useState('');
    const [printName, setPrintName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [state, setState] = useState('');

    const [latino, setLatino] = useState(false);
    const [nonLatino, setNonLatino] = useState(false);

    const [asian, setAsian] = useState(false);
    const [black, setBlack] = useState(false);
    const [white, setWhite] = useState(false);
    const [indian, setIndian] = useState(false);
    const [hawaiian, setHawaiian] = useState(false);

    const [free, setFree] = useState(null);
    const [reduced, setReduced] = useState(null);

    const [sign, setSign] = useState();
    const [signDate, setSignDate] = useState('')
    const [image, setImage] = useState();
    
    const [offSign, setOffSign] = useState();
    const [offImage, setOffImage] = useState();
    const [offSignature, setOffSignature] = useState();
    const [offSignDate, setOffSignDate] = useState('')

    const [memberOneIncomeFreq, setMemberOneIncomeFreq] = useState('Weekly');
    const [memberTwoIncomeFreq, setMemberTwoIncomeFreq] = useState('Weekly');
    const [memberThreeIncomeFreq, setMemberThreeIncomeFreq] = useState('Weekly');
    const [memberFourIncomeFreq, setMemberFourIncomeFreq] = useState('Weekly');
    const [memberFiveIncomeFreq, setMemberFiveIncomeFreq] = useState('Weekly');
    const [memberSixIncomeFreq, setMemberSixIncomeFreq] = useState('Weekly');
    
    const [errorArr, setErrorArr] = useState([]);
    
    
    const ssnFunc = () => {
      setSsn(noSsn ? '' : ssn);
      setNoSsn(!noSsn)
    }
    
    const checkInput = (str, label) => {
      const output = `Please enter a valid character at ${label}` 
      if(str[0] == ' '){
        setErrorArr([output, ...errorArr])
         
      }
    }
    
    const combineCheckInputs = () => {
      checkInput(childOneName, 'Child One Name')
      checkInput(childOneID, 'Child One ID')
      checkInput(childOneAge, 'Child One Age')
      checkInput(childTwoName, 'Child Two Name')
      checkInput(childTwoID, 'Child Two ID')
      checkInput(childTwoAge, 'Child Two Age')
      checkInput(childThreeName, 'Child Three Name')
      checkInput(childThreeID, 'Child Three ID')
      checkInput(childThreeAge, 'Child Three Age')
      checkInput(childFourName, 'Child Four Name')
      checkInput(childFourID, 'Child Four ID')
      checkInput(childFourAge, 'Child Four Age')
      checkInput(childFiveName, 'Child Five Name')
      checkInput(childFiveID, 'Child Five ID')
      checkInput(childFiveAge, 'Child Five Age')
      checkInput(childSixName, 'Child Six Name')
      checkInput(childSixID, 'Child Six ID')
      checkInput(childSixAge, 'Child Six Age')
      checkInput(childIncome, 'Child Income')
      checkInput(HouseholdMemberOneName, 'Household Member One Name')
      checkInput(HouseholdMemberOneWorkEarnings, 'Household Member One Work Earnings')
      checkInput(HouseholdMemberOneWelfare_Alimony_CS, 'Household Member One Welfare Alimony CS')
      checkInput(HouseholdMemberOneOther, 'Household Member One Other')
      checkInput(HouseholdMemberTwoName, 'Household Member Two Name')
      checkInput(HouseholdMemberTwoWorkEarnings, 'Household Member Two Work Earnings')
      checkInput(HouseholdMemberTwoWelfare_Alimony_CS, 'Household Member Two Welfare Alimony CS')
      checkInput(HouseholdMemberTwoOther, 'Household Member Two Other')
      checkInput(HouseholdMemberThreeName, 'Household Member Three Name')
      checkInput(HouseholdMemberThreeWorkEarnings, 'Household Member Three Work Earnings')
      checkInput(HouseholdMemberThreeWelfare_Alimony_CS, 'Household Member Three Welfare Alimony CS') 
      checkInput(HouseholdMemberThreeOther, 'Household Member Three Other')
      checkInput(HouseholdMemberFourName, 'Household Member Four Name')
      checkInput(HouseholdMemberFourWorkEarnings, 'Household Member Four Work Earnings')
      checkInput(HouseholdMemberFourWelfare_Alimony_CS, 'Household Member Four Welfare Alimony CS')
      checkInput(HouseholdMemberFourOther, 'Household Member Four Other')
      checkInput(HouseholdMemberFiveName, 'Household Member Five Name')
      checkInput(HouseholdMemberFiveWorkEarnings, 'Household Member Five Work Earnings')
      checkInput(HouseholdMemberFiveWelfare_Alimony_CS, 'Household Member Five Welfare Alimony CS')
      checkInput(HouseholdMemberFiveOther, 'Household Member Five Other')
      checkInput(HouseholdMemberSixName, 'Household Member Six Name')
      checkInput(HouseholdMemberSixWorkEarnings, 'Household Member Six Work Earnings')
      checkInput(HouseholdMemberSixWelfare_Alimony_CS, 'Household Member Six Welfare Alimony CS')
      checkInput(HouseholdMemberSixOther, 'Household Member Six Other')
      checkInput(totalHouseHoldMembers, 'Total Household Members')
      checkInput(totalHouseHoldIncome, 'Total Household Income')
      checkInput(ssn, 'SSN')
      checkInput(printName, 'Print Name')
      checkInput(address, 'Address')
      checkInput(city, 'City')
      checkInput(phoneNumber, 'Phone Number')
      checkInput(zipCode, 'ZIP Code')
      checkInput(state, 'State')
       
    }
    

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    

    const handleClear = () => {
        sign.clear();
        setImage('');
        setSignature('');
    }

    const handleSave = () => {
        const saved = sign.getTrimmedCanvas().toDataURL('image/png');

        if(saved){
            setImage(saved);
            sign.clear();

            setSignature(saved);
        }

    }   
    const handleOffClear = () => {
        sign.clear();
        setOffImage('');
        setOffSignature('');
    }

    const handleOffSave = () => {
        const saved = offSign.getTrimmedCanvas().toDataURL('image/png');

        if(saved){
            setOffImage(saved);
            offSign.clear();

            setOffSignature(saved);
        }

    }   


    // const getFreeMeal = async () => {
    //     const response = await fetch(`https://mbp-server.onrender.com/api/freemeals/${user.branch}`);
    //     const json = await response.json();
    //     setFree(json[0]);
    // }

    const getFreeMeal = async () => {
        const response = await fetch(`http://localhost:3001/api/freemeals/${user.branch}`);
        const json = await response.json();
        setFree(json[0]);
    }

    // const getReducedMeal = async () => {
    //     const response = await fetch(`https://mbp-server.onrender.com/api/reducedmeals/${user.branch}`);
    //     const json = await response.json();
    //     setReduced(json[0]);
    // }

    const getReducedMeal = async () => {
        const response = await fetch(`http://localhost:3001/api/reducedmeals/${user.branch}`);
        const json = await response.json();
        setReduced(json[0]);
    }

    const determineEligibility = (number, income) => {
        
        if(number == 1 && income <= free.houseHoldOne){
            return 'Free Meal'
        } else if(number == 1 && income <= reduced.houseHoldOne){
            return 'Reduced Meal'
        } else if(number == 2 && income <= free.houseHoldTwo){
            return 'Free Meal'
        } else if(number == 2 && income <= reduced.houseHoldTwo){
            return 'Reduced Meal'
        } else if(number == 3 && income <= free.houseHoldThree){
            return 'Free Meal'
        } else if(number == 3 && income <= reduced.houseHoldThree){
            return 'Reduced Meal'
        } else if(number == 4 && income <= free.houseHoldFour){
            return 'Free Meal'
        } else if(number == 4 && income <= reduced.houseHoldFour){
            return 'Reduced Meal'
        } else if(number == 5 && income <= free.houseHoldFive){
            return 'Free Meal'
        } else if(number == 5 && income <= reduced.houseHoldFive){
            return 'Reduced Meal'
        } else if(number == 6 && income <= free.houseHoldSix){
            return 'Free Meal'
        } else if(number == 6 && income <= reduced.houseHoldSix){
            return 'Reduced Meal'
        } else if(number == 7 && income <= free.houseHoldSeven){
            return 'Free Meal'
        } else if(number == 7 && income <= reduced.houseHoldSeven){
            return 'Reduced Meal'
        } else if(number == 8 && income <= free.houseHoldEight){
            return 'Free Meal'
        } else if(number == 8 && income <= reduced.houseHoldEight){
            return 'Reduced Meal'
        } else {
            return 'Paid'
        }
    }

    const [signErr, setSignErr] = useState(false);
    const [OffSignErr, setOffSignErr] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const branch = user.branch;
        const day = new Date();
        const date = day.toLocaleDateString();
        setErrorArr([]);
        combineCheckInputs();
        
        if(errorArr.length > 0){
          scrollToTop()
          return;
        }
        
        if(!signature && !offSignature){
            setSignErr(true); 
            setOffSignErr(true);

            setTimeout(() => {
                setSignErr(false); 
                setOffSignErr(false);
            }, 1400)
            return;
        }

        if(!signature){
            setSignErr(true);
            return;
        }
    
        if(!offSignature){
            setSignErr(true);
            return;
        }
       
        const oneEarnings = isNaN(parseInt(HouseholdMemberOneWorkEarnings)) ? 0 : parseInt(HouseholdMemberOneWorkEarnings);
        const oneWelfare = isNaN(parseInt(HouseholdMemberOneWelfare_Alimony_CS)) ? 0 : parseInt(HouseholdMemberOneWelfare_Alimony_CS);
        const oneSSPR = isNaN(parseInt(HouseholdMemberOneSSPR)) ? 0 : parseInt(HouseholdMemberOneSSPR);
        const oneOther= isNaN(parseInt(HouseholdMemberOneOther)) ? 0 : parseInt(HouseholdMemberOneOther);

        let oneTotal = oneEarnings + oneWelfare + oneSSPR + oneOther;

        const twoEarnings = isNaN(parseInt(HouseholdMemberTwoWorkEarnings)) ? 0 : parseInt(HouseholdMemberTwoWorkEarnings);
        const twoWelfare = isNaN(parseInt(HouseholdMemberTwoWelfare_Alimony_CS)) ? 0 : parseInt(HouseholdMemberTwoWelfare_Alimony_CS);
        const twoSSPR = isNaN(parseInt(HouseholdMemberTwoSSPR)) ? 0 : parseInt(HouseholdMemberTwoSSPR);
        const twoOther= isNaN(parseInt(HouseholdMemberTwoOther)) ? 0 : parseInt(HouseholdMemberTwoOther);

        let twoTotal = twoEarnings + twoWelfare + twoSSPR + twoOther;
       
        const threeEarnings = isNaN(parseInt(HouseholdMemberThreeWorkEarnings)) ? 0 : parseInt(HouseholdMemberThreeWorkEarnings);
        const threeWelfare = isNaN(parseInt(HouseholdMemberThreeWelfare_Alimony_CS)) ? 0 : parseInt(HouseholdMemberThreeWelfare_Alimony_CS);
        const threeSSPR = isNaN(parseInt(HouseholdMemberThreeSSPR)) ? 0 : parseInt(HouseholdMemberThreeSSPR);
        const threeOther= isNaN(parseInt(HouseholdMemberThreeOther)) ? 0 : parseInt(HouseholdMemberThreeOther);

        let threeTotal = threeEarnings + threeWelfare + threeSSPR + threeOther;

        const fourEarnings = isNaN(parseInt(HouseholdMemberFourWorkEarnings)) ? 0 : parseInt(HouseholdMemberFourWorkEarnings);
        const fourWelfare = isNaN(parseInt(HouseholdMemberFourWelfare_Alimony_CS)) ? 0 : parseInt(HouseholdMemberFourWelfare_Alimony_CS);
        const fourSSPR = isNaN(parseInt(HouseholdMemberFourSSPR)) ? 0 : parseInt(HouseholdMemberFourSSPR);
        const fourOther= isNaN(parseInt(HouseholdMemberFourOther)) ? 0 : parseInt(HouseholdMemberFourOther);

        let fourTotal = fourEarnings + fourWelfare + fourSSPR + fourOther;

        const fiveEarnings = isNaN(parseInt(HouseholdMemberFiveWorkEarnings)) ? 0 : parseInt(HouseholdMemberFiveWorkEarnings);
        const fiveWelfare = isNaN(parseInt(HouseholdMemberFiveWelfare_Alimony_CS)) ? 0 : parseInt(HouseholdMemberFiveWelfare_Alimony_CS);
        const fiveSSPR = isNaN(parseInt(HouseholdMemberFiveSSPR)) ? 0 : parseInt(HouseholdMemberFiveSSPR);
        const fiveOther= isNaN(parseInt(HouseholdMemberFiveOther)) ? 0 : parseInt(HouseholdMemberFiveOther);

        let fiveTotal = fiveEarnings + fiveWelfare + fiveSSPR + fiveOther;

        const sixEarnings = isNaN(parseInt(HouseholdMemberSixWorkEarnings)) ? 0 : parseInt(HouseholdMemberSixWorkEarnings);
        const sixWelfare = isNaN(parseInt(HouseholdMemberSixWelfare_Alimony_CS)) ? 0 : parseInt(HouseholdMemberSixWelfare_Alimony_CS);
        const sixSSPR = isNaN(parseInt(HouseholdMemberSixSSPR)) ? 0 : parseInt(HouseholdMemberSixSSPR);
        const sixOther= isNaN(parseInt(HouseholdMemberSixOther)) ? 0 : parseInt(HouseholdMemberSixOther);

        let sixTotal = sixEarnings + sixWelfare + sixSSPR + sixOther;

        const determineFreq = () => {
            // One
            if(memberOneIncomeFreq == 'Weekly'){
                oneTotal = oneTotal * 52
            }

            if(memberOneIncomeFreq == 'Bi-Weekly'){
                oneTotal = oneTotal * 26
            }
            if(memberOneIncomeFreq == 'Monthly'){
                oneTotal = oneTotal * 12
            }

            if(memberOneIncomeFreq == 'Annually'){
                oneTotal = oneTotal * 1
            }

            // Two
            
            if(memberTwoIncomeFreq == 'Weekly'){
                twoTotal = twoTotal * 52
            }
            if(memberTwoIncomeFreq == 'Bi-Weekly'){
                twoTotal = twoTotal * 26
            }

            if(memberTwoIncomeFreq == 'Monthly'){
                twoTotal = twoTotal * 12
            }

            if(memberTwoIncomeFreq == 'Annually'){
                twoTotal = twoTotal * 1
            }

            // Three
            if(memberThreeIncomeFreq == 'Weekly'){
                threeTotal = threeTotal * 52
            }

            if(memberThreeIncomeFreq == 'Bi-Weekly'){
                threeTotal = threeTotal * 26
            }
            if(memberThreeIncomeFreq == 'Monthly'){
                threeTotal = threeTotal * 12
            }

            if(memberThreeIncomeFreq == 'Annually'){
                threeTotal = threeTotal * 1
            }

            // Four 

            if(memberFourIncomeFreq == 'Weekly'){
                fourTotal = fourTotal * 52
            }

            if(memberFourIncomeFreq == 'Bi-Weekly'){
                fourTotal = fourTotal * 26
            }
            if(memberFourIncomeFreq == 'Monthly'){
                fourTotal = fourTotal * 12
            }

            if(memberFourIncomeFreq == 'Annually'){
                fourTotal = fourTotal * 1
            }

            // Five

            if(memberFiveIncomeFreq == 'Weekly'){
                fiveTotal = fiveTotal * 52
            }

            if(memberFiveIncomeFreq == 'Bi-Weekly'){
                fiveTotal = fiveTotal * 26
            }
            if(memberFiveIncomeFreq == 'Monthly'){
                fiveTotal = fiveTotal * 12
            }

            if(memberFiveIncomeFreq == 'Annually'){
                fiveTotal = fiveTotal * 1
            }

            // Two

            if(memberSixIncomeFreq == 'Weekly'){
                sixTotal = sixTotal * 52
            }

            if(memberSixIncomeFreq == 'Bi-Weekly'){
                sixTotal = sixTotal * 26
            }
            if(memberSixIncomeFreq == 'Monthly'){
                sixTotal = sixTotal * 12
            }

            if(memberSixIncomeFreq == 'Annually'){
                sixTotal = sixTotal * 1
            }

        }
        determineFreq();

        const finalTotal = oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal + sixTotal;


        const arg = parseInt(totalHouseHoldMembers);
        const eligibility = determineEligibility(arg, finalTotal);

        const createRoster = async (childName, childAge) => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            const date = new Date();

            if(childName != ''){
                const form = {
                    branch,
                    month: months[date.getMonth()],
                    name: childName,
                    age: childAge,
                    title_xx: 'N/A',
                    date: new Date().toLocaleDateString(),
                    date_exited: 'N/A',
                    ieg_enrolledment_on_file: 'Y',
                    date_ieg_signed: new Date().toLocaleDateString(),
                    eligibility: eligibility
                }

                const response = await fetch('http://localhost:3001/api/children', {
                    method: 'POST',
                    body: JSON.stringify(form),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const json = await response.json();

               
            }
        };

        createRoster(childOneName, childOneAge);
        createRoster(childTwoName, childTwoAge);
        createRoster(childThreeName, childThreeAge);
        createRoster(childFourName, childFourAge);
        createRoster(childFiveName, childFiveAge);
        createRoster(childSixName, childSixAge);
         
        if(noSsn){
         setSsn('')
        }

        const form = {
            branch,
            eligibility,
            childOneName,
            childOneID, 
            childOneHeadStart,
            childOneForsterChild,
            childOneRunaway,
            childOneHomeless,
            childOneAge,
            childTwoName,
            childTwoID,
            childTwoHeadStart,
            childTwoForsterChild,
            childTwoRunaway,
            childTwoHomeless,
            childTwoAge,
            childThreeName,
            childThreeID,
            childThreeHeadStart,
            childThreeForsterChild,
            childThreeRunaway,
            childThreeHomeless,
            childThreeAge,
            childFourName,
            childFourID,
            childFourHeadStart,
            childFourForsterChild,
            childFourRunaway,
            childFourHomeless,
            childFourAge,
            childFiveName,
            childFiveID,
            childFiveHeadStart,
            childFiveForsterChild,
            childFiveRunaway,
            childFiveHomeless,
            childFiveAge,
            childSixName,
            childSixID,
            childSixHeadStart,
            childSixForsterChild,
            childSixRunaway,
            childSixHomeless,
            childSixAge,
            childIncome,
            childIncomeFreq,
            HouseholdMemberOneName,
            HouseholdMemberOneWorkEarnings,
            HouseholdMemberOneWelfare_Alimony_CS,
            HouseholdMemberOneOther,
            HouseholdMemberTwoName,
            HouseholdMemberTwoWorkEarnings,
            HouseholdMemberTwoWelfare_Alimony_CS,
            HouseholdMemberTwoOther,
            HouseholdMemberThreeName,
            HouseholdMemberThreeWorkEarnings,
            HouseholdMemberThreeWelfare_Alimony_CS,
            HouseholdMemberThreeOther,
            HouseholdMemberFourName,
            HouseholdMemberFourWorkEarnings,
            HouseholdMemberFourWelfare_Alimony_CS,
            HouseholdMemberFourOther,
            HouseholdMemberFiveName,
            HouseholdMemberFiveWorkEarnings,
            HouseholdMemberFiveWelfare_Alimony_CS,
            HouseholdMemberFiveOther,
            HouseholdMemberSixName,
            HouseholdMemberSixWorkEarnings,
            HouseholdMemberSixWelfare_Alimony_CS,
            HouseholdMemberSixOther,
            totalHouseHoldMembers,
            totalHouseHoldIncome,
            ssn,
            timeFrom,
            timeFromHour,
            timeTo,
            timeToHour,
            beforeAfterCare,
            dayCenterSunday,
            dayCenterMonday,
            dayCenterTuesday,
            dayCenterWednesday,
            dayCenterThursday,
            dayCenterFriday,
            dayCenterSaturday,
            breakFast,
            snackLunch,
            snackPM,
            supper,
            snack,
            signature,
            signDate,
            offSignDate,
            offSignature,
            printName,
            address,
            date,
            city,
            phoneNumber,
            zipCode,
            state,
            latino,
            nonLatino,
            asian,
            white,
            black,
            indian,
            hawaiian,
            memberOneIncomeFreq,
            memberTwoIncomeFreq,
            memberThreeIncomeFreq,
            memberFourIncomeFreq,
            memberFiveIncomeFreq,
            memberSixIncomeFreq
        };

        try{

            // const response = await fetch('https://mbp-server.onrender.com/api/clients', {
            //     method: 'POST',
            //     body: JSON.stringify(form),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });

            const response = await fetch('http://localhost:3001/api/clients', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            
            window.location.assign('/');

            if(response.ok){
                setSign('');
                setSignature('');
                setChildOneName('');
                setChildOneID('');
                setChildTwoName('');
                setChildTwoID('');
                setChildThreeName('');
                setChildThreeID('');
                setChildFourName('');
                setChildFourID('');
                setChildFiveName('');
                setChildFiveID('');
                setChildSixName('');
                setChildSixID('');
                setChildIncome('');
                setChildIncomeFreq('');
                setHouseholdMemberOneName('');
                setHouseholdMemberOneEarnings('');
                setHouseholdMemberOneSSPR('');
                setHouseholdMemberOneOther('');
                setHouseholdMemberTwoName('');
                setHouseholdMemberTwoEarnings('');
                setHouseholdMemberTwoWelfare_Alimony_CS('');
                setHouseholdMemberTwoSSPR('');
                setHouseholdMemberTwoOther('');
                setHouseholdMemberThreeName('');
                setHouseholdMemberThreeEarnings('');
                setHouseholdMemberThreeWelfare_Alimony_CS('');
                setHouseholdMemberThreeSSPR('');
                setHouseholdMemberThreeOther('');
                setHouseholdMemberFourName('');
                setHouseholdMemberFourEarnings('');
                setHouseholdMemberFourWelfare_Alimony_CS('');
                setHouseholdMemberFourSSPR('');
                setHouseholdMemberFourOther('');
                setHouseholdMemberFiveName('');
                setHouseholdMemberFiveEarnings('');
                setHouseholdMemberFiveWelfare_Alimony_CS('');
                setHouseholdMemberFiveSSPR('');
                setHouseholdMemberFiveOther('');
                setHouseholdMemberSixName('');
                setHouseholdMemberSixWorkEarnings('');
                setHouseholdMemberSixWelfare_Alimony_CS('');
                setHouseholdMemberSixSSPR('');
                setHouseholdMemberSixOther('');
                setTotalHouseHoldMembers('')
                setTotalHouseHoldIncome('');
                setSsn('');
                setSignature('');
                setImage(false);
                setAddress(' ')
                setPrintName('');
                setCity('');
                setAddress('');
                setZipCode('');
                setPhoneNumber('');
                setState('');
                setChildOneHeadStart(false);
                setChildOneFosterChild(false);
                setChildOneRunaway(false);
                setChildOneHomeless(false);
                setChildTwoHeadStart(false);
                setChildTwoFosterChild(false);
                setChildTwoRunaway(false);
                setChildTwoHomeless(false);
                setChildThreeHeadStart(false);
                setChildThreeFosterChild(false);
                setChildThreeRunaway(false);
                setChildThreeHomeless(false);
                setChildFourHeadStart(false);
                setChildFourFosterChild(false);
                setChildFourRunaway(false);
                setChildFourHomeless(false);
                setChildFiveHeadStart(false);
                setChildFiveFosterChild(false);
                setChildFiveRunaway(false);
                setChildFiveHomeless(false);
                setChildSixHeadStart(false);
                setChildSixFosterChild(false);
                setChildSixRunaway(false);
                setChildSixHomeless(false);
                setBeforeAfterCare(false);
                setDayCenterSunday(false);
                setDayCenterMonday(false);
                setDayCenterTuesday(false);
                setDayCenterWednesday(false);
                setDayCenterThursday(false);
                setDayCenterFriday(false);
                setDayCenterSaturday(false);
                setBreakFast(false);
                setSnackLunch(false);
                setSnackPM(false);
                setSupper(false);
                setSnack(false);
                setLatino(false);
                setNonLatino(false);
                setAsian(false);
                setBlack(false);
                setWhite(false);
                setIndian(false);
                setHawaiian(false);

                if(!response.ok){
                    setError(json.error);
                }
                
            }
        } catch(error) {
            console.log(error.message)
        }

       
    }

    

    useEffect(() => {
        getFreeMeal();
        getReducedMeal(); 
    }, [])

    
    return(
        <>
        <h2 className='heading'>CACFP Meal Benefit Income Eligibility Statement</h2>
        {error && 
        <div className='error_indicator'>
            <p>{ error }</p>
        </div>}

        { errorArr.length > 0 && <div className='error_indicator' style={{width: '100%'}}>
            <p>Please enter a valid input</p>
        </div> }
         <div style={{ padding: '10px', background: 'black', marginBlock:' 0.5rem' }}>
           <h5 style={{ color: 'white' }}>PART I: Child(ren) or Adult enrolled to receive day care</h5>
         </div>  
        <div className="labels">
            <div className="blocks block"></div>
            <p className='label first_label'>
                SNAP, TNAF, FDPIR, case number, or 
                Client ID number for children only. All the above, or 
                SSI or Medicaid case number for Adults.
                Note: Do not use EBT numbers. 
                Write case number and proceed to Part III.
            </p>
            <p className='label'>
                Children in Head Start, foster care and
                children who meet the definition of migrant,
                runaway, or homeless are eligible for free
                meals. Check ( ) all that apply.
            </p>
        </div>
        
        <form onSubmit={handleSubmit}>
            
            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' placeholder="  Child Name" className="first_field" value={childOneName} onChange={(e) => setChildOneName(e.target.value)} required/>
                    <input type='text' placeholder='Age' className='age_input' value={childOneAge} onChange={(e) => setChildOneAge(e.target.value)} required/>
                    <input type='text' className="last_field" value={childOneID} onChange={(e) => setChildOneID(e.target.value)} required/>
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={childOneHeadStart}
                        onChange={() => setChildOneHeadStart(!childOneHeadStart)}
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={childOneForsterChild}
                        onChange={() => setChildOneFosterChild(!childOneForsterChild)}
                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={childOneRunaway}
                        onChange={() => setChildOneRunaway(!childOneRunaway)}
                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={childOneHomeless}
                        onChange={() => setChildOneHomeless(!childOneHomeless)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" placeholder="  Child Name" value={childTwoName} onChange={(e) => setChildTwoName(e.target.value)}/>
                    <input type='text' placeholder='Age' className='age_input'  value={childTwoAge} onChange={(e) => setChildTwoAge(e.target.value)}/>
                    <input type='text' className="last_field" value={childTwoID} onChange={(e) => setChildTwoID(e.target.value)}/>
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={childTwoHeadStart}
                        onChange={() => setChildTwoHeadStart(!childTwoHeadStart)}
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={childTwoForsterChild}
                        onChange={() => setChildTwoFosterChild(!childTwoForsterChild)}
                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={childTwoRunaway}
                        onChange={() => setChildTwoRunaway(!childTwoRunaway)}
                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={childTwoHomeless}
                        onChange={() => setChildTwoHomeless(!childTwoHomeless)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" placeholder="  Child Name" value={childThreeName} onChange={(e) => setChildThreeName(e.target.value)}/>
                    <input type='text' placeholder='Age' className='age_input' value={childThreeAge} onChange={(e) => setChildThreeAge(e.target.value)}/>
                    <input type='text' className="last_field" value={childThreeID} onChange={(e) => setChildThreeID(e.target.value)}/>
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={childThreeHeadStart}
                        onChange={() => setChildThreeHeadStart(!childThreeHeadStart)}
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={childThreeForsterChild}
                        onChange={() => setChildThreeFosterChild(!childThreeForsterChild)}
                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={childThreeRunaway}
                        onChange={() => setChildThreeRunaway(!childThreeRunaway)}
                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={childThreeHomeless}
                        onChange={() => setChildThreeHomeless(!childThreeHomeless)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" value={childFourName} placeholder="  Child Name" onChange={(e) => setChildFourName(e.target.value)}/>
                    <input type='text' placeholder='Age' className='age_input' value={childFourAge} onChange={(e) => setChildFourAge(e.target.value)}/>
                    <input type='text' className="last_field" value={childFourID} onChange={(e) => setChildFourID(e.target.value)}/>
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={childFourHeadStart}
                        onChange={() => setChildFourHeadStart(!childFourHeadStart)}
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={childFourForsterChild}
                        onChange={() => setChildFourFosterChild(!childFourForsterChild)}
                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={childFourRunaway}
                        onChange={() => setChildFourRunaway(!childFourRunaway)}
                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={childFourHomeless}
                        onChange={() => setChildFourHomeless(!childFourHomeless)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" placeholder="  Child Name" value={childFiveName} onChange={(e) => setChildFiveName(e.target.value)}/>
                    <input type='text' placeholder='Age' className='age_input' value={childFiveAge} onChange={(e) => setChildFiveAge(e.target.value)}/>
                    <input type='text' className="last_field" value={childFiveID} onChange={(e) => setChildFiveID(e.target.value)}/>
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={childFiveHeadStart}
                        onChange={() => setChildFiveHeadStart(!childFiveHeadStart)}
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={childFiveForsterChild}
                        onChange={() => setChildFiveFosterChild(!childFiveForsterChild)}
                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={childFiveRunaway}
                        onChange={() => setChildFiveRunaway(!childFiveRunaway)}
                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={childFiveHomeless}
                        onChange={() => setChildFiveHomeless(!childFiveHomeless)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className="input_field"> 
                    <input type='text' className="first_field" placeholder="  Child Name" value={childSixName} onChange={(e) => setChildSixName(e.target.value)}/>
                    <input type='text' placeholder='Age' className='age_input' value={childSixAge} onChange={(e) => setChildSixAge(e.target.value)}/>
                    <input type='text' className="last_field" value={childSixID} onChange={(e) => setChildSixID(e.target.value)}/>
                </div>
                
                <div className="checkboxes">

                    <div className="check">
                        <label>Head Start:</label>
                        <input type='checkbox' checked={childSixHeadStart}
                        onChange={() => setChildSixHeadStart(!childSixHeadStart)}
                        />
                    </div>

                    <div className="check">
                        <label>Foster Child:</label>
                        <input type='checkbox' checked={childSixForsterChild}
                        onChange={() => setChildSixFosterChild(!childSixForsterChild)}
                        />
                    </div>

                    <div className="check">
                        <label>Runaway:</label>
                        <input type='checkbox' checked={childSixRunaway}
                        onChange={() => setChildSixRunaway(!childSixRunaway)}
                        />
                    </div>

                    <div className="check">
                        <label>Homeless:</label>
                        <input type='checkbox' checked={childSixHomeless}
                        onChange={() => setChildSixHomeless(!childSixHomeless)}
                        />
                    </div>
                </div>
            </div>



          <div style={{ padding: '10px', background: 'black', marginBlock: '0.5rem' }}>
            <h5 style={{ color: 'white' }}>PART II: Report income for ALL Household Members (Skip this step if participant is categorically eligible as documented in Part I.)</h5>
          </div>
  
            <div className='part_a'>
                <p className="part_a_title">
                    <strong>A.</strong> Child Income - Sometimes children in the household earn and receive income.
                    Please indicate the TOTAL income received by child household members listed in 
                    PART I here.
                </p>
                <label>Child Monthly Income</label>
                <input type='number' value={childIncome} onChange={(e) => setChildIncome(e.target.value)}/>
                    <label>How Often?</label>
                    <select style={{height: '1.3rem', fontSize: '1rem;'}} onChange={(e) => setChildIncomeFreq(e.target.value)}>
                        <option>Weekly</option>
                        <option>Bi-Weekly</option>
                        <option>Monthly</option>
                        <option>Yearly</option>
                    </select>
                {/* <label>How often?</label>
                <input type='text' value={childIncomeFreq} onChange={(e) => setChildIncomeFreq(e.target.value)}/> */}
            </div>

            <div className="part_b">
                <p className="part_b_title">
                    <strong>B.</strong> Other Household Members 1. List all household members (including yourself) not 
                    listed in Part I even if they do not receive income. For each Household Member 
                    listed, if they do not receive income, report total gross income (before taxes) for each 
                    source in whole dollars (no cents) only. If they do not receive income from any 
                    source, write '0'. If you enter "0" or leave any field blank you are certifying
                    (promising) there is not income to report.
                </p>

                <div className="form_list">
                    <div className="form_line">
                        {/* <div className='bottom'>
                            <i>Please enter estimated monthly income</i>
                        </div> */}

                        <h4>Member</h4>
                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={HouseholdMemberOneName} onChange={(e) => setHouseholdMemberOneName(e.target.value)} required/>
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberOneWorkEarnings} onChange={(e) => setHouseholdMemberOneEarnings(e.target.value)}/>
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberOneWelfare_Alimony_CS} onChange={(e) => setHouseholdMemberOneWelfare_Alimony_CS(e.target.value)}/>
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberOneSSPR} onChange={(e) => setHouseholdMemberOneSSPR(e.target.value)}/>
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberOneOther} onChange={(e) => setHouseholdMemberOneOther(e.target.value)}/>
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <select style={{height: '1.3rem', fontSize: '1rem;'}} onChange={(e) => {setMemberOneIncomeFreq(e.target.value)}}>
                            <option>Weekly</option>
                            <option>Bi-Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>

                    
                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={HouseholdMemberTwoName} onChange={(e) => setHouseholdMemberTwoName(e.target.value)}/>
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberTwoWorkEarnings} onChange={(e) => setHouseholdMemberTwoEarnings(e.target.value)}/>
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberTwoWelfare_Alimony_CS} onChange={(e) => setHouseholdMemberTwoWelfare_Alimony_CS(e.target.value)}/>
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberTwoSSPR} onChange={(e) => setHouseholdMemberTwoSSPR(e.target.value)}/>
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberTwoOther} onChange={(e) => setHouseholdMemberTwoOther(e.target.value)}/>
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <select style={{height: '1.3rem', fontSize: '1rem;'}} onChange={(e) => {setMemberTwoIncomeFreq(e.target.value)}}>
                            <option>Weekly</option>
                            <option>Bi-Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>

                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={HouseholdMemberThreeName} onChange={(e) => setHouseholdMemberThreeName(e.target.value)}/>
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberThreeWorkEarnings} onChange={(e) => setHouseholdMemberThreeEarnings(e.target.value)}/>
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberThreeWelfare_Alimony_CS} onChange={(e) => setHouseholdMemberThreeWelfare_Alimony_CS(e.target.value)}/>
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberThreeSSPR} onChange={(e) => setHouseholdMemberThreeSSPR(e.target.value)}/>
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberThreeOther} onChange={(e) => setHouseholdMemberThreeOther(e.target.value)}/>
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <select style={{height: '1.3rem', fontSize: '1rem;'}} onChange={(e) => {setMemberThreeIncomeFreq(e.target.value)}}>
                            <option>Weekly</option>
                            <option>Bi-Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>

                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={HouseholdMemberFourName} onChange={(e) => setHouseholdMemberFourName(e.target.value)}/>
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberFourWorkEarnings} onChange={(e) => setHouseholdMemberFourEarnings(e.target.value)}/>
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberFourWelfare_Alimony_CS} onChange={(e) => setHouseholdMemberFourWelfare_Alimony_CS(e.target.value)}/>
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberFourSSPR} onChange={(e) => setHouseholdMemberFourSSPR(e.target.value)}/>
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberFourOther} onChange={(e) => setHouseholdMemberFourOther(e.target.value)}/>
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <select style={{height: '1.3rem', fontSize: '1rem;'}} onChange={(e) => {setMemberFourIncomeFreq(e.target.value)}}>
                            <option>Weekly</option>
                            <option>Bi-Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>

                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={HouseholdMemberFiveName} onChange={(e) => setHouseholdMemberFiveName(e.target.value)}/>
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberFiveWorkEarnings} onChange={(e) => setHouseholdMemberFiveEarnings(e.target.value)}/>
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberFiveWelfare_Alimony_CS} onChange={(e) => setHouseholdMemberFiveWelfare_Alimony_CS(e.target.value)}/>
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberFiveSSPR} onChange={(e) => setHouseholdMemberFiveSSPR(e.target.value)}/>
                        <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberFiveOther} onChange={(e) => setHouseholdMemberFiveOther(e.target.value)}/>
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <select style={{height: '1.3rem', fontSize: '1rem;'}} onChange={(e) => {setMemberFiveIncomeFreq(e.target.value)}}>
                            <option>Weekly</option>
                            <option>Bi-Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    
                    <div className="form_line">
                        <h4>Member</h4>

                        <label>Name of Other Household Member: </label>
                        <input type='text' className="part_b_main_field" value={HouseholdMemberSixName} onChange={(e) => setHouseholdMemberSixName(e.target.value)}/>
                        <label>Earnings from work before deductions: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberSixWorkEarnings} onChange={(e) => setHouseholdMemberSixWorkEarnings(e.target.value)}/>
                        <label>Welfare, child support, alimony: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberSixWelfare_Alimony_CS} onChange={(e) => setHouseholdMemberSixWelfare_Alimony_CS(e.target.value)}/>
                        <label>Social Security, pensions, retirement: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberSixSSPR} onChange={(e) => setHouseholdMemberSixSSPR(e.target.value)}/>
                         <label>All other income: </label>
                        <input type='number' placeholder="$" className="part_b_field_1" value={HouseholdMemberSixOther} onChange={(e) => setHouseholdMemberSixOther(e.target.value)}/>
                        <label style={{ marginRight: '0.3rem'}}>Income Frequency:</label>
                        <select style={{height: '1.3rem', fontSize: '1rem;'}} onChange={(e) => {setMemberSixIncomeFreq(e.target.value)}}>
                            <option>Weekly</option>
                            <option>Bi-Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>

                </div>

                
                
            </div>

            <div className="part_c">
                <p>C. Total Household Members (Adults & Children) listed in Part I and Part II</p>
                <input type='number' value={totalHouseHoldMembers} required onChange={(e) => setTotalHouseHoldMembers(e.target.value)}/>
            </div>
            {/* <div className="part_c">
                <p>Total Household Income (Adults & Children) listed in Part I and Part II</p>
                <input type='number' value={totalHouseHoldIncome} onChange={(e) => setTotalHouseHoldIncome(e.target.value)}/>
            </div> */}

            <div>
                <p className="social block">
                    <strong>Social Security Number.</strong> If income is listed or completed in Part II, the adult
                    completing the form must also the list the last four digits of his or her Social Security 
                    Number or check the "I don't have a Social Security Number" box below. (See 
                    Privacy Act Statement on the Next Page). <span className="red">Failure to complete this section, if income
                    is listed below, will result in denial of free or reduced eligibility.  </span>
                </p>

                <div className={ noSsn ? 'hide' : "flex align block"}>
                    <p className="right">Last four Digits of Social Security Number XXX-XX</p>
                    <input type='number' className="input_width" disabled={noSsn} value={ssn} onChange={(e) => setSsn(e.target.value)}/>
                    
                </div>

             <div style={{marginBlock: '0.5rem'}}>
      <label htmlFor="noSsnCheckbox" style={{marginRight: '2rem', fontSize: '1rem'}}>
        <input
          type="checkbox"
          id="noSsnCheckbox"
          checked={noSsn}
          onChange={ssnFunc}
        />
        I dont have an SSN
      </label>
    </div>

            </div>
              <div style={{ padding: '10px', background: 'black' }}>
                <h5 style={{ color: 'white' }}>PART III: Enrollment Information</h5>
              </div>
  
            <div className="block">
                <p>
                    My child is normally in attendance at the facility between the hours of 
                    <select className='form_time' value={timeFrom} onChange={(e) => setTimeFrom(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                    
                    <select className='form_time' value={timeFromHour} onChange={(e) => setTimeFromHour(e.target.value)}>
                        <option value='AM'>AM</option>
                        <option value='PM'>PM</option>    
                    </select >to
                    <select className='form_time' value={timeTo} onChange={(e) => setTimeTo(e.target.value)}>
                        <option>1</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                    
                    <select className='form_time' value={timeToHour} onChange={(e) => setTimeToHour(e.target.value)}>
                        <option value='AM'>AM</option>
                        <option value='PM'>PM</option> 
                        
                    </select>
                </p>
                <p> <input type='checkbox' checked={beforeAfterCare} onChange={() => setBeforeAfterCare(!beforeAfterCare)}/> Check here if only before/after school
                    care is provided.</p>
            </div>
            <div className="flex">
                <p>Check ( ) the days your child will normally attend the center:</p>
                <div className="flex align days">
                    <p>Sunday <input type='checkbox' checked={dayCenterSunday} onChange={() => setDayCenterSunday(!dayCenterSunday)}/></p>
                    <p>Monday <input type='checkbox' checked={dayCenterMonday} onChange={() => setDayCenterMonday(!dayCenterMonday)}/></p>
                    <p>Tuesday <input type='checkbox' checked={dayCenterTuesday} onChange={() => setDayCenterTuesday(!dayCenterTuesday)}/></p>
                    <p>Wednesday <input type='checkbox' checked={dayCenterWednesday} onChange={() => setDayCenterWednesday(!dayCenterWednesday)}/></p>
                    <p>Thursday <input type='checkbox' checked={dayCenterThursday} onChange={() => setDayCenterThursday(!dayCenterThursday)}/></p>
                    <p>Friday <input type='checkbox' checked={dayCenterFriday} onChange={() => setDayCenterFriday(!dayCenterFriday)}/></p>
                    <p>Saturday <input type='checkbox' checked={dayCenterSaturday} onChange={() => setDayCenterSaturday(!dayCenterSaturday)}/></p>
                    
                </div>
            </div>

            <div className="flex days">
                <p>Check ( ) the meals your child will normally receive while in care:</p>
                <div className="flex align">
                    <p>Breakfast AM <input type='checkbox' checked={breakFast} onChange={() => setBreakFast(!breakFast)}/></p>
                    <p>Snack Lunch <input type='checkbox' checked={snackLunch} onChange={() => setSnackLunch(!snackLunch)}/></p>
                    <p>PM Snack <input type='checkbox' checked={snackPM} onChange={() => setSnackPM(!snackPM)}/></p>
                    <p>Supper Evening <input type='checkbox' checked={supper} onChange={() => setSupper(!supper)}/></p>
                    <p>Snack<input type='checkbox' checked={snack} onChange={() => setSnack(!snack)}/></p>
                </div>
            </div>

            <div className="certify">
                <p>
                    I certify that all information on this form is true and that all income is reported. I
                    understand that the center or day care home will get Federal funds based on the 
                    information I give. I understand that CACFP officials may verify the information. I 
                    understand that if I purposefully give false information, the participant receiving
                    meals may lose the meal benefits, and I may be procecuted. <span className="red italic">This signature also
                    acknowledges that he child(ren) or adult listed on the form in Part I are enrolled
                    for care. If not completed fully and signed, the participant will be placed on Paid category.</span>
                </p>
            </div>

            <div className="info">

            <div style={{ maxWidth: '6rem'}}>
                <label>Print Name</label>
                <input type='text'  className="right bottom" value={printName} onChange={(e) => setPrintName(e.target.value)} required/>
                
                {/* <label>Date</label>
                <input type='date' className="right bottom" value={date} onChange={(e) => setDate(e.target.value)} /> */}

                <label>Address</label>
                <input type='text' className="right bottom" value={address} onChange={(e) => setAddress(e.target.value)}/>
                
                <label>City</label>
                <input type='text' className="right bottom" value={city} onChange={(e) => setCity(e.target.value)}/>

                <label>State</label>
                <input type='text' className="right bottom" value={state} onChange={(e) => setState(e.target.value)}/>
                
                <label>Zip Code</label>
                <input type='number' className="right bottom" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>

                <label>Phone Number</label>
                <input type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
                  <div style={{ padding: '10px', background: 'black', marginBlock: '0.75rem' }}>
                    <h5 style={{ color: 'white' }}>PART IV: Signature</h5>
                  </div>
                <div>
                   { signErr && <h6 style={{color: 'red'}}>Please Input Signature</h6> }
                    <label>Signature</label>
                    <div style={{border: '2px solid black', width: '12rem', height: '96px'}} className='sign_pad'>    
                        <SignatureCanvas 
                            ref={data => setSign(data)}
                            canvasProps={{width: 287, height: 92, className: 'sigCanvas'}}
                        />

                        { image && <div className='sign_preview'>
                            <img src={image} alt='signature' />
                        </div> }
                    </div>
                    <div className='sign_buttons'>
                        <button className='button' type='button' onClick={handleSave}>Save</button>
                        <button className='button' type='button' onClick={handleClear}>Clear</button>
                    </div>
                </div>
                         
              
                 <br />
                 <div className='flex align' style={{margin: '0'}}>
                   <label>
                     Date:
                   <input type="date" value={signDate} onChange={(e) => setSignDate(e.target.value)} />
                   </label>
                 </div>

    
                            
                {/*   <div className='flex align>            
                            
                  <label>
                    Date:
                    <input type="date" value={signDate} onChange={(e) => setSignDate(e.target.value)} />
                  </label>
        
                </div>
               */}

                <p className="disclaimer red bottom">
                    *This application is a revision of USDA's newly released meal benefit prototype and meets all 
                    legal requirements and reflect design best practices identified by USDA through focus testing and 
                    other research.
                </p>
            </div>
              <div style={{ padding: '10px', background: 'black' }}>
                <h5 style={{ color: 'white' }}>PART V: Participant’s Ethnic and Racial Identities (optional)</h5>
             </div>
            <div className="ethnicity block flex space_between">
                <div className="ethnicity_title">
                    <p>Check ( ) one ethnic identity:</p>
                    <div>
                        <label className="half_right">Hispanic/Latino</label>
                        <input type='checkbox' className="right" checked={latino} onChange={() => setLatino(!latino)} 
                        disabled={nonLatino}
                        />  
                        <label className="half_right">Hispanic/Non-Latino</label>
                        <input type='checkbox' checked={nonLatino} onChange={() => setNonLatino(!nonLatino)}
                        disabled={latino}
                        />
                    </div>
                </div>
                <div className="ethnicity_title">
                    <p>Check ( ) one ethnic identity:</p>
                    <div>
                        <label className="half_right">Asian</label>
                        <input type='checkbox' className="right" checked={asian}  onChange={() => setAsian(!asian)}
                        disabled={hawaiian || white || black || indian}/>
                        <label className="half_right">White</label>
                        <input type='checkbox' className="right" checked={white} onChange={() => setWhite(!white)}
                        disabled={asian || hawaiian || black || indian}/>
                        <label className="half_right">Black-African</label>
                        <input type='checkbox' className="right" checked={black} onChange={() => setBlack(!black)}
                        disabled={asian || white || hawaiian || indian}/>
                        <label className="half_right">Indian or Alaskan Native</label>
                        <input type='checkbox' className="right" checked={indian} onChange={() => setIndian(!indian)}
                        disabled={asian || white || black || hawaiian }/>
                        <label className="half_right">Hawaiian or Other Pacific Islander</label>
                        <input type='checkbox' checked={hawaiian} onChange={() => setHawaiian(!hawaiian)} disabled={asian || white || black || indian}/>
                    </div>
                </div>

            </div>
                <div>
                    { OffSignErr && <h6 style={{color: 'red'}}>Please Input Signature</h6> }
                    <label>Official Signature</label>
                    <div style={{border: '2px solid black', width: '12rem', height: '96px'}} className='sign_pad'>    
                        <SignatureCanvas 
                            ref={data => setOffSign(data)}
                            canvasProps={{width: 287, height: 92, className: 'sigCanvas'}}
                        />

                        { offImage && <div className='sign_preview'>
                            <img src={offImage} alt='signature' />
                        </div> }
                    </div>
                    <div className='sign_buttons'>
                        <button className='button' type='button' onClick={handleOffSave}>Save</button>
                        <button className='button' type='button' onClick={handleOffClear}>Clear</button>
                    </div>
                </div>  
                     <br />
           <div className='flex align block1x'>
              <label>
                Date:
                <input type="date" value={offSignDate} onChange={(e) => setOffSignDate(e.target.value)} />
              </label>
           </div>

            <button className='button radius block padding'>Submit</button>

           
        </form>
        </>
    )
}
