# Configuring Internal Fading

Module: GSM Signaling
Source: 7531047841d6478c.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Internal Fading
Configuring Internal Fading
// *****************************************************************************
// Select a standard cell scenario with internal fading.
// *****************************************************************************
ROUTe:GSM:SIGN:SCENario:SCFading:FLEXible:INTernal SUU1,RF2C,RX1,RF2C,TX1,FAD1
// *****************************************************************************
// Configure the fading simulator: enable it, select a fading profile,
// start fading automatically, set start seed and calculate insertion
// loss automatically. Query the insertion loss. Alternatively set
// the insertion loss manually.
// *****************************************************************************
CONFigure:GSM:SIGN:FADing:FSIMulator:ENABle ON
CONFigure:GSM:SIGN:FADing:FSIMulator:STANdard T3
CONFigure:GSM:SIGN:FADing:FSIMulator:RESTart:MODE AUTO
CONFigure:GSM:SIGN:FADing:FSIMulator:GLOBal:SEED 0
CONFigure:GSM:SIGN:FADing:FSIMulator:ILOSs:MODE NORMal
CONFigure:GSM:SIGN:FADing:FSIMulator:ILOSs:NORMal?
CONFigure:GSM:SIGN:FADing:FSIMulator:ILOSs:MODE USER
CONFigure:GSM:SIGN:FADing:FSIMulator:ILOSs 15
// *****************************************************************************
// Configure AWGN insertion:
// Enable AWGN, set min noise/system BW ratio, set signal to noise ratio,
// query calculated noise power and clipped samples.
// *****************************************************************************
CONFigure:GSM:SIGN:FADing:AWGN:ENABle ON
CONFigure:GSM:SIGN:FADing:AWGN:BWIDth:RATio 1
CONFigure:GSM:SIGN:FADing:AWGN:SNRatio 1
CONFigure:GSM:SIGN:FADing:POWer:NOISe?
CONFigure:GSM:SIGN:FADing:FSIMulator:ILOSs:CSAMples?
CONFigure:GSM:SIGN:FADing:FSIMulator:DSHift:MODE NORM
CONFigure:GSM:SIGN:FADing:FSIMulator:DSHift?
Top