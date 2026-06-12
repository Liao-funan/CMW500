# Configuring Operating Bands and Channels

Module: LTE Signaling
Source: 83b91b1ff96e4761.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Operating Bands and Channels
Configuring Operating Bands and Channels
// *****************************************************************************
// Specify PCC operating band plus DL channel number and query the 
// automatically calculated UL channel number and the UL frequency in Hz.
// Configure PCC frequency offsets for DL and UL.
// Configure the SCC1.
// *****************************************************************************
CONFigure:LTE:SIGN:PCC:BAND OB7
CONFigure:LTE:SIGN:RFSettings:PCC:CHANnel:DL 3000 ;UL?
CONFigure:LTE:SIGN:RFSettings:PCC:CHANnel:UL? Hz
CONFigure:LTE:SIGN:RFSettings:PCC:FOFFset:DL 100
CONFigure:LTE:SIGN:RFSettings:PCC:FOFFset:UL -200
CONFigure:LTE:SIGN:SCC:BAND OB7
CONFigure:LTE:SIGN:RFSettings:SCC:CHANnel:DL 3100 ;UL?
CONFigure:LTE:SIGN:RFSettings:SCC:CHANnel:UL? Hz
CONFigure:LTE:SIGN:RFSettings:PCC:FOFFset:DL:UCSPecific ON
CONFigure:LTE:SIGN:RFSettings:SCC:FOFFset:DL 200
CONFigure:LTE:SIGN:RFSettings:PCC:FOFFset:UL:UCSPecific ON
CONFigure:LTE:SIGN:RFSettings:SCC:FOFFset:UL -100
// *****************************************************************************
// Configure the PCC user-defined band: UL/DL separation, band indicator,
// minimum DL frequency and channel numbers. Query resulting calculated settings.
// Configure the SCC1 user-defined band.
// *****************************************************************************
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:UDSeparation 200E+6
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:BINDicator 3
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:FREQuency:DL:MINimum 1E+9
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:CHANnel:DL:MINimum 100
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:CHANnel:DL:MAXimum 999
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:CHANnel:UL:MINimum 18000
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:CHANnel:UL:MAXimum?
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:FREQuency:DL:MAXimum?
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:FREQuency:UL:MINimum?
CONFigure:LTE:SIGN:RFSettings:PCC:UDEFined:FREQuency:UL:MAXimum?
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:UDSeparation 200E+6
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:BINDicator 4
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:FREQuency:DL:MINimum 3E+9
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:CHANnel:DL:MINimum 100
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:CHANnel:DL:MAXimum 999
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:CHANnel:UL:MINimum 18000
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:CHANnel:UL:MAXimum?
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:FREQuency:DL:MAXimum?
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:FREQuency:UL:MINimum?
CONFigure:LTE:SIGN:RFSettings:SCC:UDEFined:FREQuency:UL:MAXimum?
Top