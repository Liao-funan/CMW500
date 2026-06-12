# CONFigureGSMSIGNiDUALbandCOMBinedCS

Module: GSM Signaling
Source: b218b5d2a3a34148.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
General Handover Settings
 > 
CONFigure:GSM:SIGN<i>:DUALband:COMBined:CS
CONFigure:GSM:SIGN<i>:DUALband:COMBined:CS 
<Band>, <Channel>, <Level>, <PCL>, <Timeslot>
Selects parameters of a handover destination and initiates a dual band GSM handover. This command executes handover even if the handover dialog is opened.
Parameters:
<Band>
G085 |
 
 G09 |
 
 G18 |
 
 G19
Handover destination band/network used for TCH/PDCH:
GSM 850, GSM 900, GSM 1800, GSM 1900
*RST:
G18
<Channel>
TCH/PDCH channel in the destination GSM band
The range of values depends on the selected band ; for an overview see 
"GSM Bands and Channels"
. The values below are for GSM 900.
Range: 
512 to 885
*RST:
711
<Level>
Absolute TCH/PDCH level in the destination GSM band
Range: 
Depends on RF connector (-130 dBm to 0 dBm for RFx COM); please also notice the ranges quoted in the data sheet.
Increment: 
0.01 dB
*RST:
-80 dBm
Default unit: 
dBm
<PCL>
PCL of the MS in the destination GSM band
Range: 
0  to  31
*RST:
10
<Timeslot>
Timeslot for the circuit switched connection the destination GSM band
Range: 
1  to  7
*RST:
3
Example: 
See 
"Performing an Inter-RAT CS Handover"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Destination Parameters"
Top