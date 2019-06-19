/*
*   MIT License
*
*   Copyright (c) 2019 DSC Institute Of Technical Education & Research (ITER)
*
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*   of this software and associated documentation files (the "Software"), to deal
*   in the Software without restriction, including without limitation the rights
*   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*   copies of the Software, and to permit persons to whom the Software is
*   furnished to do so, subject to the following conditions:
*
*   The above copyright notice and this permission notice shall be included in all
*   copies or substantial portions of the Software.
*
*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*   SOFTWARE.
*/

var config = {
    apiKey: "AIzaSyBiIXkExpo3utaiXTgs2bIz689H38bBfeE",
    authDomain: "dsc-iter.firebaseapp.com",
    databaseURL: "https://dsc-iter.firebaseio.com",
    projectId: "dsc-iter",
    storageBucket: "dsc-iter.appspot.com",
    messagingSenderId: "323880464555"
};

_NBSettings = {
    rejectedMessage: "Invalid Email!",
    apiKey: 'public_ca0d48e0215c7fff4b028498cd364701'
};

var isValid;
var field = document.querySelector('#email');
field.addEventListener('nb:result', function(e) {
    if (e.detail.result.is(_nb.settings.getAcceptedStatusCodes())) {
	console.log("Good Email");
	isValid = true;
    }
    else {
	console.log("Bad Email");
	isValid = false;
    }
});

firebase.initializeApp(config);
var _0x3c00=['toString','enc','Utf8','then','log','U2FsdGVkX18rmkEfZDNcHWDtQ3qOaGN3zY7tTPx3TqBEKMxQG3Wb3NdDuhI8K9Ex','thisishakuna','AES','decrypt','U2FsdGVkX18jsN7Yuvpn+swdH7DLgUO02z4jLr1BtU6Eev74y91Nyf/mDRihNifzx6X+i1k1t06MQyetB226ag==','thisismatata','auth','signInWithEmailAndPassword'];(function(_0x573a31,_0x55a601){var _0x310f69=function(_0xbdaeee){while(--_0xbdaeee){_0x573a31['push'](_0x573a31['shift']());}};_0x310f69(++_0x55a601);}(_0x3c00,0xe2));var _0x256c=function(_0x521811,_0x43153e){_0x521811=_0x521811-0x0;var _0x17fa1e=_0x3c00[_0x521811];return _0x17fa1e;};
var hakuna=CryptoJS['AES']['decrypt'](_0x256c('0x0'),_0x256c('0x1'));
var matana=CryptoJS[_0x256c('0x2')][_0x256c('0x3')](_0x256c('0x4'),_0x256c('0x5'));firebase[_0x256c('0x6')]()[_0x256c('0x7')](hakuna[_0x256c('0x8')](CryptoJS[_0x256c('0x9')]['Utf8']),matana[_0x256c('0x8')](CryptoJS[_0x256c('0x9')][_0x256c('0xa')]))[_0x256c('0xb')](function(){})['catch'](function(_0x2921a6){console[_0x256c('0xc')](_0x2921a6);});
document.getElementById("mailform").addEventListener("submit", submitForm);
let messagesRef = firebase.database().ref("mailinglist");

function submitForm(e) {
    e.preventDefault();
    let email = getInputVal("email");
    if(isValid) {
        messagesRef.orderByChild("email").equalTo(email).once("value", snapshot => {
            let userData = snapshot.val();
            if (userData) {
                console.log("Email already exists.");
                document.getElementById("erroralert").style.display = "block";
                setTimeout(function() {
                    document.getElementById("erroralert").style.display = "none";
                }, 5000);
                document.getElementById("mailform").reset();
            } else {
                saveMessage(email);
                console.log("Done!");
                document.getElementById("successalert").style.display = "block";
                setTimeout(function() {
                    document.getElementById("successalert").style.display = "none";
                }, 5000);
                document.getElementById("mailform").reset();
            }
        });
    }
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

this.onunload = function() {
    nukeSession(this);
    return 0;
};

function nukeSesssion(win) {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
    });
}

function saveMessage(email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email
    });
}
