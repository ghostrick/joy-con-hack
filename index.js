const HID = require('node-hid')
const devices = HID.devices()

let JoyCon = []
devices.some(device => { if((resp = device.product.match(/Joy-Con \(([^\]]*)\)/)) && resp[1]) JoyCon[resp[1]] = device})

// if not found controller, process.exit()
if(!('R' in JoyCon)) console.log('Not found Joy-Con (R)') || process.exit()

// Open device(Joy-Con (R))
let JoyConR = new HID.HID(JoyCon['R'].vendorId, JoyCon['R'].productId)

// Registering event handler
JoyConR.on('data', data => { console.log(data.toString('hex', 0, data.length)) })
