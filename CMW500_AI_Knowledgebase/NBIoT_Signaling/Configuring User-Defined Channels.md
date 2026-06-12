# Configuring User-Defined Channels

Module: NBIoT Signaling
Source: 593b9e95bbc542d4.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring User-Defined Channels
Configuring User-Defined Channels
// *****************************************************************************
// Select the scheduling type. Select the grant pattern.
// Configure the UL and DL channels.
// Query the resulting MCS indices and transport block sizes.
// *****************************************************************************
CONFigure:NIOT:SIGN:CONNection:STYPe UDEF
CONFigure:NIOT:SIGN:CONNection:UDEFined:UDPattern DLUL
CONFigure:NIOT:SIGN:CONNection:UDEFined:UL SC12, 0, MI5, NRU01, NR1
CONFigure:NIOT:SIGN:CONNection:UDEFined:DL SC12, 0, MI6, NSF03, NR1
CONFigure:NIOT:SIGN:CONNection:UDEFined:UL:MCSindex?
CONFigure:NIOT:SIGN:CONNection:UDEFined:DL:MCSindex?
Top