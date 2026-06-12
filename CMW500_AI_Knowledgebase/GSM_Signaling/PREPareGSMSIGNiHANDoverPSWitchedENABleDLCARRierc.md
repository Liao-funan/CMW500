# PREPareGSMSIGNiHANDoverPSWitchedENABleDLCARRierc

Module: GSM Signaling
Source: 0779292b8a514531.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
Intra-GSM Handover Settings
 > 
PREPare:GSM:SIGN<i>:HANDover:PSWitched:ENABle:DL:CARRier<c>
PREPare:GSM:SIGN<i>:HANDover:PSWitched:ENABle:DL:CARRier<c> 
<Enable>(8)
Specifies the downlink timeslots the mobile has to use in a packet switched connection in the destination GSM band.
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
"Performing an Intra-GSM PS Handover"
Firmware/Software: 
V3.0.10
Options: 
R&S CMW-KS201 for carrier 2
Manual operation: 
See 
"PS: Destination Parameters"
Top