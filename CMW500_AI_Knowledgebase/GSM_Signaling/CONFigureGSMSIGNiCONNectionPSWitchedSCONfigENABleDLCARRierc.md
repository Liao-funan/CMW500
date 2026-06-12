# CONFigureGSMSIGNiCONNectionPSWitchedSCONfigENABleDLCARRierc

Module: GSM Signaling
Source: c7d182a2653f4cb9.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Slot Configuration and Resulting Throughput
 > 
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:ENABle:DL:CARRier<c>
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:ENABle:DL:CARRier<c> 
<Enable>(8)
Specifies the downlink timeslots the mobile has to use in a packet switched connection.
Timeslot 0 cannot be enabled (always OFF).
Suffix: 
<c>
1..2
Selects the carrier in dual carrier mode. For disabled dual carrier mode, the suffix must be omitted or set to 1.
Parameters:
<Enable>
OFF |
 
 ON
List of 8 values for timeslot 0 to 7
*RST:
OFF,OFF,OFF,ON,OFF,OFF,OFF,OFF
Example: 
See 
"Configuring PS Connection Settings"
Firmware/Software: 
V2.0.20
Options: 
R&S CMW-KS201 for carrier 2
Manual operation: 
See 
"Used"
Top