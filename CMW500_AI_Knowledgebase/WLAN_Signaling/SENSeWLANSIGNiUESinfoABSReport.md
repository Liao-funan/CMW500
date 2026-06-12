# SENSeWLANSIGNiUESinfoABSReport

Module: WLAN Signaling
Source: 25db86c1c1ff42d5.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
SENSe:WLAN:SIGN<i>:UESinfo:ABSReport?
SENSe:WLAN:SIGN<i>:UESinfo:ABSReport? 
Indicates reported buffered data for a UE supporting a HE buffer status report (BSR) control field.
Return values: 
<Total>
Maximum of all reports received in preceding interval
Range: 
0 bits  to  4.145152E+6 bits
<BufferedData_TID>
Maximum of all QoS control reports
Range: 
0 bits  to  4.145152E+6 bits
<TIDx>
TID0 |
 
 TID1 |
 
 TID2 |
 
 TID3 |
 
 TID4 |
 
 TID5 |
 
 TID6 |
 
 TID7
Indication of TID, for which the buffer status 
<BufferedData_TID>
 is reported
<BufferedData_AC>
Maximum AC-specific queue size of all AC control reports
Range: 
0 bits  to  4.145152E+6 bits
<ACx>
ACBE |
 
 ACBK |
 
 ACVI |
 
 ACVO
Indication of access category (ACI bitmap subfield) for which the buffer status 
<BufferedData_AC>
 is reported
ACBE
: AC_BE (best effort)
ACBK
: AC_BK (background)
ACVI
: AC_VI (video)
ACVO
: AC_VO (voice)
Example: 
See 
"Querying UE Information"
.
Usage: 
Query only
Firmware/Software: 
V3.7.30
Options: 
R&S CMW-KS657
Manual operation: 
See 
"Buffered Data"
Top