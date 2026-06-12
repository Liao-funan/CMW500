# Configuring Internal Fading

Module: WCDMA Signaling
Source: 86097c00da774329.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring Internal Fading
Configuring Internal Fading
// *****************************************************************************
// Select a standard cell scenario with internal fading.
// *****************************************************************************
ROUTe:WCDMa:SIGN:SCENario:SCFading:FLEXible:INTernal SUW1,RF2C,RX1,RF2C,TX1
// *****************************************************************************
// Configure the fading simulator:
// Enable it, select a fading profile, start fading automatically,
// set start seed and calculate insertion loss automatically.
// Set Doppler freq. mode to normal and query maximum Doppler shift.
// *****************************************************************************
CONFigure:WCDMa:SIGN:FADing:FSIMulator:ENABle ON
CONFigure:WCDMa:SIGN:FADing:FSIMulator:STANdard C5
CONFigure:WCDMa:SIGN:FADing:FSIMulator:RESTart:MODE AUTO
CONFigure:WCDMa:SIGN:FADing:FSIMulator:GLOBal:SEED 0
CONFigure:WCDMa:SIGN:FADing:FSIMulator:ILOSs:MODE NORMal
SENSe:WCDMa:SIGN:FADing:CARRier:FSIMulator:ILOSs:CSAMples?
CONFigure:WCDMa:SIGN:FADing:FSIMulator:DSHift:MODE NORM
CONFigure:WCDMa:SIGN:FADing:FSIMulator:DSHift?
// *****************************************************************************
// Configure AWGN insertion for carrier 1:
// Enable AWGN and set noise level.
// Query signal to noise ratio and total power (signal + noise).
// *****************************************************************************
CONFigure:WCDMa:SIGN:FADing:CARRier:AWGN:ENABle ON
CONFigure:WCDMa:SIGN:FADing:CARRier:AWGN:NOISe -80
CONFigure:WCDMa:SIGN:FADing:CARRier:AWGN:SNRatio?
CONFigure:WCDMa:SIGN:FADing:CARRier:POWer:SUM?
Top