# CONFigureNIOTMEASiMEValuationLISTSEGMentnoACLR

Module: NBIoT Measurements
Source: 1fb3f387ef0140bf.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR
CONFigure:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR 
<ACLRstatistics>, <ACLRenable>, <UTRAenable>, <GSMenable>
Defines settings for ACLR measurements in list mode for segment <no>.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<ACLRstatistics>
Statistical length in slots
Range: 
1  to  1000
*RST:
20
<ACLRenable>
OFF |
 
 ON
Enables or disables the measurement of ACLR results
ON
ACLR results are measured according to the other enable flags in this command. ACLR results for which there is no explicit enable flag are also measured (e.g. power in the NB-IoT channel).
OFF
No ACLR results at all are measured. The other enable flags in this command are ignored.
*RST:
OFF
<UTRAenable>
OFF |
 
 ON
Enables or disables the evaluation of adjacent UTRA channels
*RST:
OFF
<GSMenable>
OFF |
 
 ON
Enables or disables the evaluation of adjacent GSM channels
*RST:
OFF
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KM012
Top