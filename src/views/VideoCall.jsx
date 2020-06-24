
componentWillUnmount(){
    api.dispose();
}
const domain = 'meet.jit.si';
const options = {
    roomName: 'JitsiMeetAPIExample',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet'),
    devices: {
        audioInput: '<deviceLabel>',
        audioOutput: '<deviceLabel>',
        videoInput: '<deviceLabel>'
    },
    userInfo: {
        email: 'email@jitsiexamplemail.com',
        displayName: 'John Doe'
    }
};
const api = new JitsiMeetExternalAPI(domain, options);