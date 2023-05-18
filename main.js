function showInstructions() {

    let showInstructions = '<a href="javascript:void(0)" onClick="hideInstructions()"><row><i class="bi bi-caret-up-fill black"></i><h3><i class="bi bi-cash-coin"></i>Instructions</h3><h3 class="urdu">ضروری ہدا یات<i class="bi bi-calculator"></i></h3></row><row><p>First, determine the date on which zakat became farz upon you according to the lunar calendar. As per market value on the above date, determine [and put in the below calculator] the value of all assets which you own on the date set above, and on which Zakah will be calculated. Necessary assets on whose value Zakah is to be calculated are given below.</p><p class="urdu">سب سے پہلے زکٰوۃواجب ہونے کی قمری تاریخ کا تعین کرلیں ۔زکٰوۃواجب ہونے کی قمری /اسلامی تاریخ اِس تاریخ کو ملکیت میں موجود قابل زکٰوۃاثاثوں کی مارکیٹ ریٹ کے مطابق مالیت کا تَعَیُّن درج ذیل طریقے سے کیجئے،ضروری اموالِ زکوۃ کیلکولیٹر میں شامل کردئے گئے ہیں۔</p></row></a>'



    document.querySelector('.instructions').innerHTML = showInstructions

}

function hideInstructions() {

    let hideInstructions = '<a href="javascript:void(0)" onClick="showInstructions()"><row><i class="bi bi-caret-down-fill black"></i><h3><i class="bi bi-cash-coin"></i>Instructions</h3><h3 class="urdu">ضروری ہدا یات<i class="bi bi-calculator"></i></h3></row></a>'



    document.querySelector('.instructions').innerHTML = hideInstructions

}