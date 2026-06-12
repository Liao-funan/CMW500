# SENSeGSMSIGNiRREPortNSRQamModOrderCBEPRANGe

Module: GSM Signaling
Source: d35e21331.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
PS Measurement Reports
 > 
SENSe:GSM:SIGN<i>:RREPort:NSRQam<ModOrder>:CBEP:RANGe?
SENSe:GSM:SIGN<i>:RREPort:NSRQam<ModOrder>:CBEP:RANGe? 
Returns the CV BEP range, corresponding to the "CV BEP" index reported by the MS for a 16-QAM or 32-QAM modulated DL signal with normal symbol rate (NSR).
Suffix: 
<ModOrder>
16,32
Selects the modulation scheme: 16-QAM or 32-QAM
Return values: 
<Lower>
Range: 
0  to  1.75
<Upper>
Range: 
0.25  to  2
Example: 
See 
"Retrieving PS Receiver Reports"
Usage: 
Query only
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"CV BEP (PS, TBF level 
≠
 GPRS)"
Top