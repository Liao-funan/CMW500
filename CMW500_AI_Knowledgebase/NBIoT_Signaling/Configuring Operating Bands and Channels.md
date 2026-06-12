# Configuring Operating Bands and Channels

Module: NBIoT Signaling
Source: e9c7dbfad016457a.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Operating Bands and Channels
Configuring Operating Bands and Channels
// *****************************************************************************
// Specify operating band plus DL channel number and query the 
// automatically calculated UL channel number.
// Configure frequency offsets for DL and UL.
// *****************************************************************************
CONFigure:NIOT:SIGN:BAND OB8
CONFigure:NIOT:SIGN:RFSettings:CHANnel:DL 3500 ;UL?
CONFigure:NIOT:SIGN:RFSettings:FOFFset:DL 100
CONFigure:NIOT:SIGN:RFSettings:FOFFset:UL -200
Top