# CONFigureGSMSIGNiRFSettingsCHCCombinedTCHCSWitched

Module: GSM Signaling
Source: 0f285ec313e247e1.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:GSM:SIGN<i>:RFSettings:CHCCombined:TCH:CSWitched
CONFigure:GSM:SIGN<i>:RFSettings:CHCCombined:TCH:CSWitched 
<Channel>, <Timeslot>, <PCL>
Sets/changes the GSM channel number, timeslot, and PCL. All parameters can be changed during a connection.
This command combines the following three commands:
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
CHANnel:
​
TCH[:
​
CARRier<c>]
 for carrier 1
CONFigure:
​
GSM:
​
SIGN<i>:
​
CONNection:
​
CSWitched:
​
TSLot
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
PCL:
​
TCH:
​
CSWitched
The range of channel numbers depends on the selected band, for an overview see 
"GSM Bands and Channels"
.
Parameters:
<Channel>
Range: 
0 to 124, 940 to 1023
*RST:
62
<Timeslot>
Range: 
1  to  7
*RST:
3
<PCL>
Range: 
0  to  31
*RST:
10
Example: 
See 
"Configuring BCCH, TCH and PDCH"
Firmware/Software: 
V1.0.15.0
V2.0.10: added timeslots 1 and 7
Manual operation: 
See 
"Channel / Frequency"
Top