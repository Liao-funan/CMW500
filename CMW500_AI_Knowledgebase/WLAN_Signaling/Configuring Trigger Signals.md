# Configuring Trigger Signals

Module: WLAN Signaling
Source: 62dfb998315c4d04.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
Configuring Trigger Signals
Configuring Trigger Signals
// *****************************************************************************
// Configure the generated trigger signal (TX): slope, pulse length
// *****************************************************************************
TRIGger:WLAN:SIGN:TX:MACFrame:SLOPe REDGe
TRIGger:WLAN:SIGN:TX:MACFrame:PLENgth:MODE UDEFined
TRIGger:WLAN:SIGN:TX:MACFrame:PLENgth:VALue 0.001
// *****************************************************************************
// Configure the generated trigger signal (RX):
// burst types, bandwidth, rate, minimum length, slope, pulse length
// *****************************************************************************
TRIGger:WLAN:SIGN:RX:MACFrame:BTYPe HESBursts
TRIGger:WLAN:SIGN:RX:MACFrame:BW BW80
TRIGger:WLAN:SIGN:RX:MACFrame:RATE MCS10
TRIGger:WLAN:SIGN:RX:MACFrame:MLENgth UDEFined, 1
TRIGger:WLAN:SIGN:RX:MACFrame:SLOPe REDGe
TRIGger:WLAN:SIGN:RX:MACFrame:PLENgth:MODE UDEFined
TRIGger:WLAN:SIGN:RX:MACFrame:PLENgth:VALue 0.001
Top