# Configuring Network and MS Identities

Module: GSM Signaling
Source: 055fdb089b9741a6.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Network and MS Identities
Configuring Network and MS Identities
// *****************************************************************************
// Query the cell identity.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:IDENtity?
// *****************************************************************************
// Identify the cell's PLMN:
// - set the mobile country code to 1
// - set the mobile network code length to 2 and the value to 1
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:MCC 1
CONFigure:GSM:SIGN:CELL:MNC:DIGits TWO
CONFigure:GSM:SIGN:CELL:MNC 1
// *****************************************************************************
// Identify the cell's area within the PLMN:
// - set the location area code to 1
// - set the routing area code to 0
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:LAC 1
CONFigure:GSM:SIGN:CELL:RAC 0
// *****************************************************************************
// Configure the Base Station Identity Code (BSIC):
// - set the network color code to 0
// - set the BS colour code to 0
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:NCC 0
CONFigure:GSM:SIGN:CELL:BCC 0
// *****************************************************************************
// Configure the default IMSI. Disable IMSI filter.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:IMSI 1,1,1000000095
CONFigure:GSM:SIGN:CELL:IMSI:FILTer OFF
// *****************************************************************************
// Synchronize the signaling application to zone 1.
// Apply an offset of 30 µs.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:SYNC:ZONE Z1
CONFigure:GSM:SIGN:CELL:SYNC:OFFSet 30E-6
Top