console.log('Javascript is running');

// const vectorGraphic = document.querySelector('#newBadge');

let LocationIcon = document.querySelector('#LocationIcon');
let GlobeIcon = document.querySelector('#GlobeIcon');
let HouseIcon = document.querySelector('#HouseIcon');
let WallClockIcon = document.querySelector('#WallClockicon');
let EnvelopeIcon = document.querySelector('#Envelope');
let LocationArrowIcon = document.querySelector('#LocationArrowIcons');
let SmartphoneIcon = document.querySelector('#SmartphoneIcon');
let MagnifyingGlassIcon = document.querySelector('#MagnifyingGlassicon');
let PowerIcon = document.querySelector('#PowerIcon');
let CheckMarkIcon = document.querySelector('#CheckMarkIcon');

const vectorGraphic = document.querySelector('#newBadge');

function LocationIcon() {
    console.log("You have clicked the Location Icon");
}
function GlobeIcon() {
    console.log("You have clicked the Globe Icon");
}
function HouseIcon() {
    console.log("You have clicked the House Icon");
}
function WallClockIcon() {
    console.log("You have clicked the Wall Clock Icon");
}
function EnvelopeIcon() {
    console.log("You have clicked the Envelope Icon");
}
function LocationArrowIcon() {
    console.log("You have clicked the Location Arrow Icon");
}
function SmartphoneIcon() {
    console.log("You have clicked the Smartphone Icon");
}
function MagnifyingGlassIcon() {
    console.log("You have clicked the Magnifying Glass Icon");
}
function PowerIcon() {
    console.log("You have clicked the Power Icon");
}
function CheckMarkIcon() {
    console.log("You have clicked the Check Mark Icon");
}



LocationIcon.addEventListener('click' , logID);
GlobeIcon.addEventListener('click' , GlobeIcon);
HouseIcon.addEventListener('click' , HouseIcon);
WallClockIcon.addEventListener('click' , WallClockIcon);
EnvelopeIcon.addEventListener('click' , EnvelopeIcon);
LocationArrowIcon.addEventListener('click' , LocationArrowIcon);
SmartphoneIcon.addEventListener('click' , SmartphoneIcon);
MagnifyingGlassIcon.addEventListener('click' , MagnifyingGlassIcon);
PowerIcon.addEventListener('click' , PowerIcon);
CheckMarkIcon.addEventListener('click' , CheckMarkIcon);

