# FETChGSMSIGNiTHRoughput

Module: GSM Signaling
Source: 23788697347a4643.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Results
 > 
FETCh:GSM:SIGN<i>:THRoughput?
FETCh:GSM:SIGN<i>:THRoughput? 
READ:GSM:SIGN<i>:THRoughput? 
Returns all single value throughput results.
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_CurrDlPDU> <3_AvgDlPDU> <4_MaxDlPDU> <5_MinDlPDU>
Current, average, maximum and minimum DL PDU results
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<6_CurrDlSDU> <7_AvgDlSDU> <8_MaxDlSDU> <9_MinDlSDU>
Current, average, maximum and minimum DL SDU results
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<10_BlocksDlPDU>
Number of transmitted RLC PDUs
Range: 
0  to  1E+6
<11_CurrUlPDU> <12_AvgUlPDU> <13_MaxUlPDU> <14_MinUlPDU>
Current, average, maximum and minimum UL PDU results
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<15_CurrUlSDU> <16_AvgUlSDU> <17_MaxUlSDU> <18_MinUlSDU>
Current, average, maximum and minimum UL SDU results
Range: 
0 bit/s  to  100E+6 bit/s
Default unit: 
bit/s
<19_BlocksUlPDU>
Number of received RLC PDUs
Range: 
0  to  1E+6
Example: 
See 
"Performing an RLC Throughput Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top