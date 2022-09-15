// all variables --- 
// newregime
// residence
// age
// incomeDetails (list of 8 elements)
// totalIncome
// metroCity
// ehra
// rent
// elta
// eothers
// totalExemption
// ATCList --- list of 11 elements
// totalDeductions
// ATDList --- list of 2 elements
// OtherDeductions --- list of 4 elements
// sEmployeed --- self emplymemt variable
// ParentAge
// Dependent
// Disability
// nps
// DnErent
// otherDnE
// totalDnE

// all functions ---
// changereg
// checkRegime
// changeInputWindow
// inputBasicDetails
// expand
// inputIncomeDetails
// changeCityType
// calculateTax
// inputExemptions
// changeDeductionPanels
// employeeStatus
// checkParentAge
// checkDependency
// changeDependentdiv
// checkDisability
// checkDisability
// inputDeductions
// inputDnE
// displayInfoButtons
// toggleRegime



var newregime = 0; // for old regime newregime = 0 and for new regime newregime= 1
function changereg(){ // function to account for changed regime choice
    if(document.getElementById("newregime").checked){
        newregime = 1;
        // console.log("new regime is selected");
    }
    else{
        newregime = 0;
        // console.log("old regime is selected");
    }
    checkRegime();
}

let p = 0; // panel number
let listOld = ["basicdiv", "incomediv", "deductiondiv", "exemptiondiv"]; // panel names for old regime
let listNew = ["basicdiv", "incomediv", "DeductionsnExemptionsdiv"]; // panel names for new regime
function checkRegime(){ // function to change site content according to the regime selected
    if (newregime == 1) {
        changeInputWindow(0);
        document.getElementById("button4").style.display = "none";
        document.getElementById("button5").style.display = "none";
        document.getElementById("button6").style.display = "block";
    }
    else{
        changeInputWindow(0);
        document.getElementById("button4").style.display = "block";
        document.getElementById("button5").style.display = "block";
        document.getElementById("button6").style.display = "none";
    }
}
checkRegime();



// write the diffrent tax slab(brackets) for residents and age groups --->>>
// newregime = [];
// oldregime = [];



function changeInputWindow(choice){ // to change the panels accourding to the desired panel choice
    document.getElementById("basicdiv").style.display = "none";
    document.getElementById("incomediv").style.display = "none";
    document.getElementById("deductiondiv").style.display = "none";
    document.getElementById("exemptiondiv").style.display = "none";
    document.getElementById("DeductionsnExemptionsdiv").style.display = "none";

    if (newregime == 0) {
        if (choice == -1) {
            if (p!=0) {
                p = p-1;
            }
            else{
                p = 3;
            }
        }
        else if (choice == 4) {
            p = (p+1)%4;
        }
        else{
            p = choice;
        }
        document.getElementById(listOld[p]).style.display = "block";
    }
    else{
        if (choice == -1) {
            if (p!=0) {
                p = p-1;
            }
            else{
                p = 2;
            }
        }
        else if (choice == 4) {
            p = (p+1)%3;
        }
        else{
            p = choice;
        }
        document.getElementById(listNew[p]).style.display = "block";
    }
}
changeInputWindow(0); // to make the site load onto the first panel only



let residence = "r"; // residence variable (r,o,n) --- possible values
let age = 1; // age variable (1,2,3) --- possible values

function inputBasicDetails(){
    residence = document.getElementById("residence").value;
    age = document.getElementById("age").value;
    // console.log(residence+" "+age);
    changeInputWindow(1);
}

function expand(n){ // for income details pannel
    if (n == 1) {
        if (document.getElementById("field"+n).style.display == "none") {
            document.getElementsByClassName("expandp")[0].innerHTML = "Main Income Source (/month) &#8593";
            document.getElementById("field"+n).style.display = "block";
        }
        else{
            document.getElementsByClassName("expandp")[0].innerHTML = "Main Income Source (/month) &#8595";
            document.getElementById("field"+n).style.display = "none";
        }
    }
    else{
        if (document.getElementById("field"+n).style.display == "none") {
            document.getElementsByClassName("expandp")[1].innerHTML = "Other Income Source &#8593";
            document.getElementById("field"+n).style.display = "block";
        }
        else{
            document.getElementsByClassName("expandp")[1].innerHTML = "Other Income Source &#8595";
            document.getElementById("field"+n).style.display = "none";
        }
    }
}
expand(1);
expand(2);

let incomeDetails = [0,0,0,0,0,0,0,0]; // income details listOld
let totalIncome = 0;

function inputIncomeDetails(){
    if (document.getElementById("salary").value == 0) {
        alert("*** Please Enter Your Salary Details ***");
        changeInputWindow(1);
        expand(1);
        return 0;
    }
    else{
        incomeDetails[0] = 12*Number(document.getElementById("salary").value);
        incomeDetails[1] = 12*Number(document.getElementById("hra").value);
        incomeDetails[2] = 12*Number(document.getElementById("lta").value);
        incomeDetails[3] = 12*Number(document.getElementById("otherAllowances").value);
        incomeDetails[4] = Number(document.getElementById("ltcg").value);
        incomeDetails[5] = Number(document.getElementById("bussinessprofits").value);
        incomeDetails[6] = Number(document.getElementById("interest").value);
        incomeDetails[7] = Number(document.getElementById("otherIncome").value);
        totalIncome = 0
        for (let i = 0; i < incomeDetails.length; i++) {
            totalIncome = totalIncome + incomeDetails[i];
        }
        // console.log(totalIncome);
        
        changeInputWindow(2);
        return 1;
    }
}



function changeDeductionPanels(m){ // to toggle deductions internal pannels
    if (m == 1) {
        if (document.getElementById("ATC").style.display == "none") {
            document.getElementsByClassName("deductionField1")[0].innerHTML = "<strong>80C &#8593</strong>";
            document.getElementById("ATC").style.display = "block";
        }
        else{
            document.getElementsByClassName("deductionField1")[0].innerHTML = "<strong>80C &#8595</strong>";
            document.getElementById("ATC").style.display = "none";
        }
    }
    else if(m == 2){
        if (document.getElementById("ATD").style.display == "none") {
            document.getElementsByClassName("deductionField2")[0].innerHTML = "<strong>80D &#8593</strong>";
            document.getElementById("ATD").style.display = "block";
        }
        else{
            document.getElementsByClassName("deductionField2")[0].innerHTML = "<strong>80D &#8595</strong>";
            document.getElementById("ATD").style.display = "none";
        }
    }
    else{
        if (document.getElementById("OtherDeductions").style.display == "none") {
            document.getElementsByClassName("deductionField3")[0].innerHTML = "<strong>OtherDeductions &#8593</strong>";
            document.getElementById("OtherDeductions").style.display = "block";
        }
        else{
            document.getElementsByClassName("deductionField3")[0].innerHTML = "<strong>OtherDeductions &#8595</strong>";
            document.getElementById("OtherDeductions").style.display = "none";
        }
    }
}
changeDeductionPanels(1);
changeDeductionPanels(2);
changeDeductionPanels(3);



let metroCity = 1; // 1 for metro and 0 for non metro
let ehra = 0;
let rent = 0;
let elta = 0;
let eothers = 0;
let totalExemption = 0; // standard deduction (only for old regime)

function changeCityType(){
    if (document.getElementById("nmetro").checked) {
        metroCity = 0;
        // console.log(metroCity);
    }
    else{
        metroCity = 1;
        // console.log(metroCity);
    }
}

let sEmployeed = 0; // 1 for self employeed
function employeeStatus(){
    if (document.getElementById("semployees").checked) {
        sEmployeed = 1;
        // alert(sEmployeed);
    }
    else{
        sEmployeed = 0;
        // alert(sEmployeed);
    }
}

let ParentAge = 0; // 0 is for not applicable 1 for under 60 and 2 for above 60
function checkParentAge(){
    if (document.getElementById("lt60").checked) {
        ParentAge = 1;
    }
    else if(document.getElementById("gt60").checked) {
        ParentAge = 2;
    }
    else{
        ParentAge = 0;
    }
}

let Dependent = 0; // 0 is for not having any dependent member
function checkDependency(){
    if (document.getElementById("yesD").checked) {
        Dependent = 1;
        changeDependentdiv();
    }
    else{
        Dependent = 0;
        changeDependentdiv();
    }
}

function changeDependentdiv(){
    if (Dependent == 1) {
        document.getElementById("dependentDiv").style.display = "block";
    }
    else{
        document.getElementById("dependentDiv").style.display = "none";
    }
}
changeDependentdiv();

let Disability = 1; // 1 is for less than 40%-80% disability
// 2 for greater than 80 
// 0 for parents
function checkDisability(){
    if (document.getElementById("fttAt").checked) {
        Disability = 1;
    }
    else if(document.getElementById("gt80").checked) {
        Disability = 2;
    }
    else{
        if (ParentAge == 0 ) {

            alert("*** Enter Parents Age ***");
            ParentAge = 1;
            // alert(ParentAge);
            document.getElementById("lt60").checked = 1;
        }

        Disability = 0;
    }
    // parent
}



function inputExemptions(){
    let maxExemption = 0;
    if (age == 1) {
        maxExemption = 250000;
    }
    else if (age == 2) {
        maxExemption = 300000;
    }
    else{
        maxExemption = 500000;
    }
    ehra = 0;
    rent = 0;
    elta = 0;
    eothers = 0;
    totalExemption = 0;
    rent = 12*Number(document.getElementById("rent").value);
    elta = Number(document.getElementById("elta").value);

    if (elta > incomeDetails[2]) {
        alert("Your Entered Lta Amount is More than Your Lta Allowance.");
        return;
    }

    eothers = Number(document.getElementById("eothers").value);
    
    totalExemption = eothers + elta;
    
    let actualHRA = incomeDetails[1];
    let temp = (incomeDetails[0]*metroCity*0.5) + (incomeDetails[0]*(!metroCity)*0.4);
    ehra = Math.min(temp, actualHRA);
    
    temp = Math.abs(rent - (0.1*incomeDetails[0]));
    ehra = Math.min(temp, ehra);
    
    totalExemption = totalExemption + ehra;
    if (totalExemption > maxExemption) {
        totalExemption = maxExemption;
    }
    // alert("total Exemption"+totalExemption);

    changeInputWindow(3);
}



let ATCList = [0,0,0,0,0,0,0,0,0,0,0]; // to store ATC Elements
let totalDeductions = 0;

let ATDList = [0,0]; // to store ATD Elements

let OtherDeductions = [0,0,0,0]; // to store other deduction Elements

function inputDeductions(){
    ATCList = [0,0,0,0,0,0,0,0,0,0,0];
    totalDeductions = 0;
    ATDList = [0,0];
    OtherDeductions = [0,0,0,0];

    // ATC
    ATCList[0] = Number(document.getElementById("ppf").value);
    ATCList[1] = Number(document.getElementById("nsc").value);
    ATCList[2] = Number(document.getElementById("nps").value);
    ATCList[3] = Number(document.getElementById("epf").value);
    ATCList[4] = Number(document.getElementById("lip").value);
    ATCList[5] = Number(document.getElementById("pobd").value);
    ATCList[6] = Number(document.getElementById("elss").value);
    ATCList[7] = Number(document.getElementById("ssy").value);
    ATCList[8] = Number(document.getElementById("scss").value);
    ATCList[9] = Number(document.getElementById("ap").value);
    ATCList[10] = Number(document.getElementById("oi").value);
    
    totalDeductions = ATCList[0] + ATCList[1] + ATCList[2] + ATCList[3] + ATCList[4] + ATCList[5] + ATCList[6] + ATCList[7] + ATCList[8] + ATCList[9] + ATCList[10] ;
    
    // alert(totalDeductions);
    if (totalDeductions > 150000) {
        totalDeductions = 150000;
    }
    
    if (ATCList[2] > 0) {
        totalDeductions = Number(totalDeductions) + Number(50000);
    }
    if(ATCList[2] > 0){
        if (sEmployeed == 1) {
            totalDeductions = Number(totalDeductions) + (incomeDetails[0]*0.2);
        }
        else{
            totalDeductions = Number(totalDeductions) + (incomeDetails[0]*0.1);
        }
    }

    // alert(totalDeductions);
    
    // ATD
    // let atdTemp1 = 0, atdTemp2 = 0;
    ATDList[0] = Number(document.getElementById("hip").value);
    ATDList[1] = Number(document.getElementById("mtd").value);
    
    // atdTemp1 = ATDList[0];
    // atdTemp2 = ATDList[1];

    let maxAtd = 0;
    if (age == 1 && ParentAge == 0) {
        maxAtd = 25000;
    }
    else if(age == 1 && ParentAge == 1){
        maxAtd = 25000;
    }
    else if(age == 1 && ParentAge == 2){
        maxAtd = 50000;
    }
    else if((age == 2 || age == 3) && ParentAge == 0){
        maxAtd = 50000;
    }
    else if((age == 2 || age == 3) && ParentAge == 1){
        alert("Parents age is Wrong");
        document.getElementById("gt60").checked = "True";
        ParentAge = 2;
        changeInputWindow(2);
        return;
    }
    else if((age == 2 || age == 3) && ParentAge == 2){
        maxAtd = 100000;
    }

    if (ATDList[0] > maxAtd) {
        ATDList[0] = maxAtd;
    }
    totalDeductions = Number(totalDeductions) + ATDList[0];

    if (Disability == 1) {
        if (ATDList[1] < 75000) {
            totalDeductions = Number(totalDeductions) + ATDList[1];
        }
        else{
            totalDeductions = Number(totalDeductions) + Number(75000);
        }
    }
    else if (Disability == 2) {
        if (ATDList[1] < 125000) {
            totalDeductions = Number(totalDeductions) + ATDList[1];
        }
        else{
            totalDeductions = Number(totalDeductions) + Number(125000);
        }
    }
    else{
        if (ParentAge == 1) {
            if (ATDList[1] < 40000) {
                totalDeductions = Number(totalDeductions) + ATDList[1];
            }
            else{
                totalDeductions = Number(totalDeductions) + Number(40000);
            }
        }
        else if (ParentAge == 2) {
            if (ATDList[1] < 100000) {
                totalDeductions = Number(totalDeductions) + ATDList[1];
            }
            else{
                totalDeductions = Number(totalDeductions) + Number(100000);
            }
        }
        else{
            alert("*** Enter Parents Age ***");
            ParentAge = 1;
            document.getElementById("lt60").checked = 1;
        }
    }
    
    // maxAtd = 0;
    // if (Disability == 0) {
    //     if (ParentAge == 1) {
    //         maxAtd = 40000;
    //     }
    //     else if (ParentAge == 2) {
    //         maxAtd = 100000;
    //     }
    // }
    // else if (Disability == 1) {
    //     maxAtd = 75000;
    // }
    // else if (Disability == 2) {
    //     maxAtd = 1250000;
    // }
    
    // above code is redundant

    // OD
    OtherDeductions[0] = Number(document.getElementById("ipel").value);
    OtherDeductions[1] = Number(document.getElementById("iphl").value);
    OtherDeductions[2] = Number(document.getElementById("cc").value);
    OtherDeductions[3] = Number(document.getElementById("od").value);
    
    totalDeductions = Number(totalDeductions) + Number(OtherDeductions[0]);
    
    if (OtherDeductions[1] > 50000) {
        totalDeductions = Number(totalDeductions) + Number(50000);
    }
    else{
        totalDeductions = Number(totalDeductions) + Number(OtherDeductions[1]);
    }
    
    totalDeductions = Number(totalDeductions) + Number(OtherDeductions[2]);
    totalDeductions = Number(totalDeductions) + Number(OtherDeductions[3]);
    
    // can also account for 80GG too
    if (incomeDetails[6] > 10000) {
        totalDeductions = Number(totalDeductions) + Number(10000);
    }
    else{
        totalDeductions = Number(totalDeductions) + Number(incomeDetails[6]);
    }
    // alert("total Deduction"+totalDeductions);
    changeInputWindow(3);
}

let nps = 0;
let DnErent = 0;
let otherDnE = 0;
let totalDnE = 0;
function inputDnE(){
    nps = 0;
    DnErent = 0;
    otherDnE = 0;
    totalDnE = 0;
    nps = Number(document.getElementById("nps").value);
    if (nps != 0) {
        nps = Number(50000+nps);
    }
    DnErent = 12*Number(document.getElementById("DnErent").value);
    otherDnE = Number(document.getElementById("otherDnE").value);
    totalDnE = nps + (DnErent*0.3) + otherDnE;
    if (totalDnE > 150000) {
        // alert("Total cant be greater than 1.5 l");
        totalDnE = Number(150000);
    }

    changeInputWindow(2);
}



function calculateTax(){
    inputBasicDetails();
    if (!inputIncomeDetails()) {
        return;
    }
    if (newregime == 0) {
        inputDeductions();
        inputExemptions();
    }
    else{
        inputDnE();
    }
    if (newregime == 0) {
        totalExemption = Number(totalExemption) + 50000;
    }

    // alert(totalDeductions);
    // alert(totalExemption);

    if (totalIncome < 250000) {
        alert("You Do not come under any Tax Bracket");
        document.getElementById("totalIncome").value = 0;
        document.getElementById("taxableIncome").value = 0;
        document.getElementById("savings").value = 0;
        document.getElementById("taxAmount").value = 0;
        document.getElementById("netIncome").value = 0;
        return;
    }

    if(newregime == 1){
        document.getElementById("totalIncome").value = totalIncome;

        let taxableIncome = totalIncome - totalDnE;
        document.getElementById("taxableIncome").value = taxableIncome;

        document.getElementById("savings").value = totalDnE;

        let totalTax = 0;

        if (taxableIncome > 250000) {
            if(age == 1){
                if (taxableIncome >= 500000) {
                    totalTax = totalTax + 12500;
                }
                else{
                    totalTax = totalTax + (taxableIncome-250000)*0.05;
                }
            }
            else if ((age == 2) && (taxableIncome > 300000)) {
                if (taxableIncome >= 500000) {
                    totalTax = totalTax + 10000;
                }
                else{
                    totalTax = totalTax + (taxableIncome-250000)*0.05;
                }
            }
            else{
                totalTax = 0;
            }
        }
        if (taxableIncome > 500000) {
            if (taxableIncome >= 750000) {
                totalTax = totalTax + 25000;
            }
            else{
                totalTax = totalTax + (taxableIncome-500000)*0.1;
            }
        }
        if (taxableIncome > 750000) {
            if (taxableIncome >= 1000000) {
                totalTax = totalTax + 37500;
            }
            else{
                totalTax = totalTax + (taxableIncome-750000)*0.15;
            }
        }
        if (taxableIncome > 1000000) {
            if (taxableIncome >= 1250000) {
                totalTax = totalTax + 50000;
            }
            else{
                totalTax = totalTax + (taxableIncome-1000000)*0.2;
            }
        }
        if (taxableIncome > 1250000) {
            if (taxableIncome >= 1500000) {
                totalTax = totalTax + 62500;
            }
            else{
                totalTax = totalTax + (taxableIncome-1250000)*0.25;
            }
        }
        if (taxableIncome > 1500000) {
            totalTax = totalTax + (taxableIncome-1500000)*0.30;
        }
        
        // cess calculation
        let cess = totalTax*0.04; // --- cess amount

        // surcharge
        if (taxableIncome > 50000000) {
            totalTax = totalTax + (totalTax*0.37);
        }
        else if (taxableIncome > 20000000) {
            totalTax = totalTax + (totalTax*0.25);
        }
        else if (taxableIncome > 10000000) {
            totalTax = totalTax + (totalTax*0.15);
        }
        else if (taxableIncome > 5000000) {
            totalTax = totalTax + (totalTax*0.1);
        }

        totalTax = totalTax + cess;

        document.getElementById("taxAmount").value = totalTax;
        document.getElementById("netIncome").value = totalIncome - totalTax;
        // tax slabs acc to residence and age calculation area
    }
    else{
        document.getElementById("totalIncome").value = totalIncome;

        let totalSavings = totalDeductions + totalExemption;
        let taxableIncome = totalIncome - totalSavings;        
        document.getElementById("taxableIncome").value = taxableIncome;

        document.getElementById("savings").value = totalSavings;

        let totalTax = 0;
        // if (taxableIncome <= 250000) {
        //     totalTax = 0;
        // }
        if (taxableIncome > 250000) {
            if (taxableIncome >= 500000) {
                totalTax = totalTax + 12500;
            }
            else{
                totalTax = totalTax + (taxableIncome-250000)*0.05;
            }
        }
        if (taxableIncome > 500000) {
            if (taxableIncome >= 1000000) {
                totalTax = totalTax + 100000;
            }
            else{
                totalTax = totalTax + (taxableIncome-500000)*0.2;
            }
        }
        if (taxableIncome > 1000000) {
            totalTax = totalTax + (taxableIncome-1000000)*0.3;
        }

        // cess tax
        let cess = totalTax*0.04; // --- cess amount

        // surcharge
        if (taxableIncome > 10000000) {
            totalTax = totalTax + (totalTax*0.15);
        }
        else if (taxableIncome > 5000000) {
            totalTax = totalTax + (totalTax*0.1);
        }

        totalTax = totalTax + cess;

        document.getElementById("taxAmount").value = totalTax;
        document.getElementById("netIncome").value = totalIncome - totalTax;

        // tax slabs acc to residence and age calculation area
    }
}



// testing area



// }

// function toggleRegime(){
//     if (document.getElementById("head_option").style.display == "none") {
//         document.getElementById("head_option").style.display = "flex";
//         document.getElementById("head_option").style.flexDirection = "column";
//         document.getElementById("reg").innerHTML = "<strong>Regime&#8593</strong>";
//     }
//     else{
//         document.getElementById("head_option").style.display = "none";
//         document.getElementById("reg").innerHTML = "<strong>Regime&#8595</strong>";
//     }
// }
// if(window.innerWidth < "650px"){
//     toggleRegime();
//     alert("hey");
// }
// setInterval(inputIncomeDetails(),1000); 
// make something out of it





if (window.innerWidth < "650") {
    
    document.getElementById("infobuttons").style.display = "none";

    document.getElementById("maillink").innerHTML = "Developer's Mail Link: <a href=\"mailto:neesharm24@gmail\">Neeraj Sharma</a>";


    document.getElementById("top_head").innerHTML = "<u>Do My Taxes</u>";
    document.getElementById("reg_head").innerHTML = "<b>Select Regime<b>";
}
else{
    document.getElementById("panelButton").style.display = "none";
}

function displayPanels(){

    if (document.getElementById("infobuttons").style.display == "none") {
        document.getElementById("infobuttons").style.display = "flex";
    }
    else{
        document.getElementById("infobuttons").style.display = "none";
    }
}
