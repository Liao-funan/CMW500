# Performing an Inter-RAT Handover to GSM

Module: GSM Signaling
Source: 3bd2fb32ed4a4859.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Performing an Inter-RAT Handover to GSM
Performing an Inter-RAT Handover to GSM
// *****************************************************************************
// Before handover from another signaling application set routing, channel,
// maximum MS output power and power level of GSM signaling application.
//
// Destination parameters like operating band or channel can be changed using
// commands provided by the GSM signaling application. Adjust these
// parameters before executing the following commands.
//
// Initiate the handover. GSM signaling indicates state incoming HO.
// Wait until the MS is connected with GSM signaling application.
//
// *****************************************************************************
ROUTe:GSM:SIGN:SCENario:SCELl:FLEXible SUU1,RF3C,RX2,RF3C,TX2
CONFigure:GSM:SIGN:BAND:BCCH G09
CONFigure:GSM:SIGN:RFSettings:CHANnel:BCCH 20
CONFigure:GSM:SIGN:RFSettings:PMAX:BCCH 5
CONFigure:GSM:SIGN:RFSettings:LEVel:BCCH -80
PREPare:WCDMa:SIGN:HANDover:DESTination 'GSM Sig1'
CALL:WCDMa:SIGN:CSWitched:ACTion HANDover
WHILE FETCh:GSM:SIGN:CSWitched:STATe? == "IHAN"
WHILE FETCh:GSM:SIGN:CSWitched:STATe? <> "CEST"
Top