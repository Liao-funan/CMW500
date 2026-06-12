# Querying MS Info

Module: GSM Signaling
Source: 022b8917cef149cc.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Querying MS Info
Querying MS Info
// ***************************************************************************** 
// Ask for the IMEI and IMSI of the MS.
// ***************************************************************************** 
SENSe:GSM:SIGN:MSSinfo:IMEI?
SENSe:GSM:SIGN:MSSinfo:IMSI?
// ***************************************************************************** 
// During emergency call query the service category.
// ***************************************************************************** 
SENSe:GSM:SIGN:MSSinfo:SCATegory?
// ***************************************************************************** 
// Query the dialed number and RX power.
// ***************************************************************************** 
WAITKEY >Initiate a mobile originating call at the MS<
SENSe:GSM:SIGN:MSSinfo:DNUMber?
SENSe:GSM:SIGN:MSSinfo:RXPower?
Top