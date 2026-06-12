# Version 2.0.10 (Compared to V1.0.15.21)

Module: GSM Measurements
Source: fa445de947134cfb.htm

## 原始指令文档说明
GSM Measurements
 > 
What's New in This Version
 > 
Version 2.0.10 (Compared to V1.0.15.21)
Version 2.0.10 (Compared to V1.0.15.21)
New features:
List mode: New parameters, used to retrigger segments and define an evaluation offset at the beginning of each segment; see 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
SETup
.
Measurement control: The PCL of the measured signal can be either estimated or specified explicitly (see 
"PCL Mode"
).
Measurement control: The R&S
 
CMW can distinguish GSM uplink signals with a VAMOS TSC set 1 or 2 (see 
"GSM TSC Set (VAMOS)"
).
"RF Routing": selection of RF 3 and RF 4 connectors modified, RX module selectable (see 
ROUTe:
​
GSM:
​
MEAS<i>:
​
SCENario:
​
SALone
). New remote commands 
ROUTe:
​
GSM:
​
MEAS<i>?
 and 
ROUTe:
​
GSM:
​
MEAS<i>:
​
SCENario?
.
Alias 
ROUTe:GSM:MEAS<i>:RFSettings:CONNector
 no longer supported
Remote control: New command 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
TOUT
, defines a timeout value for the measurement.
Remote control: New commands 
FETCh:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
PVTime:
​
BTYPe?
, 
FETCh:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
PVTime:
​
RSTiming?
, 
FETCh:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
PVTime:
​
TSC?
, query the detected burst type, relative slot timing and burst type/training sequence code.
Top