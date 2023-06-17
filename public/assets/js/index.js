const joinMeetBtn = document.getElementById('join-meet-btn');
const newMeetBtn = document.getElementById('new-meet-btn');

const joinMeetingHandler = () => {
    let code = 'abc-defg-hij';
    let newUrl = `${window.location.origin}?mid=${code}`
    window.location.replace(newUrl);
}

const newMeetingHandler = () => {

}

joinMeetBtn.addEventListener('click', joinMeetingHandler);
newMeetBtn.addEventListener('click', newMeetingHandler);
