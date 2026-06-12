# SENSeGSMSIGNiBANDTCH

Module: GSM Measurements
Source: 42cb90dd85324beb.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Multi-Evaluation Measurement Settings
 > 
SENSe:GSM:SIGN<i>:BAND:TCH?
SENSe:GSM:SIGN<i>:BAND:TCH? 
Returns the current GSM band used for the traffic channel (TCH/PDCH). After a handover, this band can differ from the BCCH band configured via 
CONFigure:
​
GSM:
​
SIGN<i>:
​
BAND:
​
BCCH
.
Return values: 
<Band>
G085 |
 
 G09 |
 
 G18 |
 
 G19
GSM 850, GSM 900, GSM 1800, GSM 1900
*RST:
G09
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Band, Channel / Frequency"
Top