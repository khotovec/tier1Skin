/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function shippingID() {
    "use strict";
    var labelForPO = document.getElementById('ctl00_cphMainContent_ctlClearingUserData10000_lblPurchaseOrder'),
        textForPO = document.getElementById('ctl00_cphMainContent_ctlClearingUserData10000_txtPurchaseOrder'),
        paymentElement = document.getElementsByClassName("ClearingConfigCell"),
        checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_btnCheckout'),
        newDiv1 = document.createElement('div');
    if (window.location.href.indexOf("CheckoutPaymentSubmission.aspx") > -1) {
        labelForPO.style.display = 'none';
        textForPO.style.display = 'none';
        checkoutBtn.style.display = 'none';
        paymentElement[0].appendChild(newDiv1);
        newDiv1.setAttribute("id", "shippingSection");
        newDiv1.innerHTML = ('<br><label style="padding-right: 3px;" id="shippingLbl">Select your shipping account:</label><select id="myShippingMethod" onclick="checkoutReveal();"><option value="none"></option><option value="Tier1 - 294379649">Tier1 - 294379649</option><option value="Nivo1 - 800846404">Nivo1 - 800846404</option></select>');
    }
});

function checkoutReveal() {
    "use strict";
    var shippingMethod = document.getElementById('myShippingMethod'),
        checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_btnCheckout'),
        shippingHighlight = document.getElementById('shippingLbl');
    if (shippingMethod.value === "Tier1 - 294379649") {
        checkoutBtn.style.display = 'block';
        $('#ctl00_cphMainContent_ctlClearingUserData10000_txtPurchaseOrder').val($('#ctl00_cphMainContent_ctlClearingUserData10000_txtPurchaseOrder')).val(shippingMethod.value);
    } else if (shippingMethod.value === "Nivo1 - 800846404") {
        checkoutBtn.style.display = 'block';
        $('#ctl00_cphMainContent_ctlClearingUserData10000_txtPurchaseOrder').val($('#ctl00_cphMainContent_ctlClearingUserData10000_txtPurchaseOrder')).val(shippingMethod.value);
    } else if (shippingMethod.value === "none") {
        checkoutBtn.style.display = 'none';
    }
}

function valueTest() {
    "use strict";
    var textForPO = document.getElementById('ctl00_cphMainContent_ctlClearingUserData10000_txtPurchaseOrder'),
        textValue = textForPO.value;
    alert(textValue);
}

/*

Tier1 - 294379649
Nivo1 - 800846404

$('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter').val($('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter')).val(result2.value);
            if (result2.value.length === 0) {
            
            
function f1() {
    "use strict";
    var newLbl = document.getElementById('newLbl')
        , mycc1 = document.getElementById('mycc1')
        , newDiv2 = document.getElementById('newDiv2')
        , checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_btnCheckout');
    if (window.location.href.indexOf("CheckoutPaymentSubmission.aspx") > -1) {
        checkoutBtn.style.display = 'none';
        if (mycc1.value == "Other") {
            newDiv2.style.display = 'block';
        }
        else if (mycc1.value != "Other") {
            newDiv2.style.display = 'none';
        }
    }
}

$(document).ready(function costCenterDropdown() {
    "use strict";
    var costCenterTxt = document.getElementById('ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter')
        , costCenterLbl = document.getElementById('ctl00_cphMainContent_ctlClearingUserData10005_lblCostCenter')
        , checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_btnCheckout')
        , paymentDiv = document.getElementsByClassName("ClearingConfigCell")
        , newDiv1 = document.createElement('div')
        , newDiv2 = document.createElement('div')
        , newDiv3 = document.createElement('div');
    if (window.location.href.indexOf("CheckoutPaymentSubmission.aspx") > -1) {
        newDiv1.setAttribute("id", "newDiv1");
        newDiv2.setAttribute("id", "newDiv2");
        newDiv3.setAttribute("id", "newDiv3");
        costCenterLbl.style.display = 'none';
        costCenterTxt.style.display = 'none';
        newDiv1.innerHTML = ('<br><label style="padding-right:3px;" id="newLbl">Select Your Cost Center:</label><select id="mycc1" onchange="f1();"><option value="0"></option><option value="DEB Marketing - 4700055115">DEB Marketing - 4700055115</option><option value="Other">Other</option></select>');
        newDiv2.innerHTML = ('<br><label id="txtLbl">Please Enter your Cost Center: </label><input type="text" id="mycc2">');
        newDiv3.innerHTML = ('<br><a id="newbtnKH" onclick="END();">Confirm Cost Center</a>');
        paymentDiv[0].appendChild(newDiv1);
        paymentDiv[0].appendChild(newDiv2);
        paymentDiv[0].appendChild(newDiv3);
        newDiv2.style.display = 'none';
        checkoutBtn.style.display = 'none';
    }
});
*/

/* 
   Purchase Order Label: ctl00_cphMainContent_ctlClearingUserData10000_lblPurchaseOrder
   Purchase Order Input:  ctl00_cphMainContent_ctlClearingUserData10000_txtPurchaseOrder
   Checkout Button: ctl00_cphMainContentFooter_btnCheckout
*/
