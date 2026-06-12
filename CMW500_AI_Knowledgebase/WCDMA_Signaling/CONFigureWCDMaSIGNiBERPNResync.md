# CONFigureWCDMaSIGNiBERPNResync

Module: WCDMA Signaling
Source: b3a0d0f894744296.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
BER Measurement
 > 
Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:BER:PNResync
CONFigure:WCDMa:SIGN<i>:BER:PNResync 
<Enable>
Activates or deactivates a correction (reordering) mechanism for transports blocks looped back in wrong order.
Parameters:
<Enable>
OFF |
 
 ON
ON
: correction mechanism active, BER measurement result based on corrected block sequence, number of corrected blocks available as result PN discontinuity
OFF
: correction mechanism inactive, no PN discontinuity result
*RST:
ON
Example: 
See 
"Configuring the BER Measurement"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"PN Resync"
Top