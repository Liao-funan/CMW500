# CONFigureLTESIGNiRFSettings[PCC]UDEFinedFREQuencyDLMINimum

Module: LTE Signaling
Source: 15d084b56792423d.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
User-Defined Band
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UDEFined:FREQuency:DL:MINimum
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UDEFined:FREQuency:DL:MINimum 
<Frequency>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:UDEFined:FREQuency:DL:MINimum 
<Frequency>
Configures the carrier center frequency corresponding to the minimum downlink channel number for the user-defined band.
The other frequencies are calculated from the settings as follows:
FREQ:DL:MAX = FREQ:DL:MIN + (CHAN:DL:MAX - CHAN:DL:MIN) * 100 kHz
FREQ:UL:MIN = FREQ:DL:MIN - UDSeparation
FREQ:UL:MAX = FREQ:DL:MIN - UDSeparation + (CHAN:DL:MAX - CHAN:DL:MIN) * 100 kHz
Suffix: 
<c>
1..4
Parameters:
<Frequency>
The allowed range depends on the remaining user-defined band settings. All frequencies resulting from the calculations stated above must be located within the following frequency range.
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
2110E+6 Hz
Default unit: 
Hz
Example: 
See 
"Configuring Operating Bands and Channels"
Firmware/Software: 
V2.1.30, SCC command V3.2.50
Options: 
R&S CMW-KS525
Manual operation: 
See 
"DL Channel, Frequency"
Top