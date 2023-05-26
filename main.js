function showInstructions() {
    let showInstructions =
        '<a href="javascript:void(0)" onClick="hideInstructions()"><row><i class="bi bi-caret-up-fill black"></i><h3><i class="bi bi-cash-coin"></i>Instructions</h3><h3 class="urdu">ضروری ہدا یات<i class="bi bi-calculator"></i></h3></row><row><p>First, determine the date on which zakat became farz upon you according to the lunar calendar. As per market value on the above date, determine [and put in the below calculator] the value of all assets which you own on the date set above, and on which Zakah will be calculated. Necessary assets on whose value Zakah is to be calculated are given below.</p><p class="urdu">سب سے پہلے زکٰوۃواجب ہونے کی قمری تاریخ کا تعین کرلیں ۔زکٰوۃواجب ہونے کی قمری /اسلامی تاریخ اِس تاریخ کو ملکیت میں موجود قابل زکٰوۃاثاثوں کی مارکیٹ ریٹ کے مطابق مالیت کا تَعَیُّن درج ذیل طریقے سے کیجئے،ضروری اموالِ زکوۃ کیلکولیٹر میں شامل کردئے گئے ہیں۔</p></row></a>';
    document.querySelector(".instructions").innerHTML = showInstructions;
}

function hideInstructions() {
    let hideInstructions =
        '<a href="javascript:void(0)" onClick="showInstructions()"><row><i class="bi bi-caret-down-fill black"></i><h3><i class="bi bi-cash-coin"></i>Instructions</h3><h3 class="urdu">ضروری ہدا یات<i class="bi bi-calculator"></i></h3></row></a>';
    document.querySelector(".instructions").innerHTML = hideInstructions;
}

function calculateZakah() {
    // VALUE OF ASSETS ON WHICH ZAKAH HAS TO BE CALCULATED
    let gold = document.getElementById("gold").value;
    gold = Number(gold);
    let silver = document.getElementById("silver").value;
    silver = Number(silver);
    let localCurrency = document.getElementById("local-currency").value;
    localCurrency = Number(localCurrency);
    let moneyDeposited = document.getElementById("money-deposited").value;
    moneyDeposited = Number(moneyDeposited);
    let prizeBonds = document.getElementById("prize-bonds").value;
    prizeBonds = Number(prizeBonds);
    let providentFund = document.getElementById("provident-fund").value;
    providentFund = Number(providentFund);
    let commitee = document.getElementById("commitee").value;
    commitee = Number(commitee);
    let rawMaterials = document.getElementById("raw-material").value;
    rawMaterials = Number(rawMaterials);
    let manufacturedGoods = document.getElementById("manufactured-goods").value;
    manufacturedGoods = Number(manufacturedGoods);
    let plots = document.getElementById("plots").value;
    plots = Number(plots);
    let others = document.getElementById("others").value;
    others = Number(others);

    // amount payable

    let amountPayable =
        gold +
        silver +
        localCurrency +
        moneyDeposited +
        prizeBonds +
        providentFund +
        commitee +
        rawMaterials +
        manufacturedGoods +
        plots +
        others;
    document.getElementById("amount-payable").innerText = amountPayable;

    //AMOUNT TO BE DEDUCTED FROM TOTAL ZAKAH-ABLE WEALTH (I.E. LIABILITIES)

    let loan = document.getElementById("loan").value;
    loan = Number(loan);
    let dues = document.getElementById("dues").value;
    dues = Number(dues);
    let remainingCommitee = document.getElementById("remaining-commitee").value;
    remainingCommitee = Number(remainingCommitee);
    let utilityBills = document.getElementById("utility-bills").value;
    utilityBills = Number(utilityBills);
    let dealers = document.getElementById("dealers").value;
    dealers = Number(dealers);
    let salaries = document.getElementById("salaries").value;
    salaries = Number(salaries);
    let unpaidZakah = document.getElementById("unpaid-zakah").value;
    unpaidZakah = Number(unpaidZakah);

    // amount to deducted

    let amountDeducted =
        loan +
        dues +
        remainingCommitee +
        utilityBills +
        dealers +
        salaries +
        unpaidZakah;

    document.getElementById("liabilities").innerText = amountDeducted;

    // total amount on which zakah to be calculated

    let amountOfZakah = amountPayable - amountDeducted;

    if (amountOfZakah <= 0) {
        document.getElementById("payable-amount-total").innerText = '0';

        document.getElementById("formula").innerText = `0 / 40`;

        let finalZakah = amountOfZakah / 40;
        document.getElementById("final-zakat").innerText = '0.00';

    } else {
        document.getElementById("payable-amount-total").innerText = amountOfZakah;

        document.getElementById("formula").innerText = `${amountOfZakah} / 40`;

        let finalZakah = amountOfZakah / 40;
        document.getElementById("final-zakat").innerText = finalZakah.toFixed(2);

    }
}