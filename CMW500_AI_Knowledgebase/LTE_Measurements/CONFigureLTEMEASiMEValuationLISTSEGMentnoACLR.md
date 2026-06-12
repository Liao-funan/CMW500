# CONFigureLTEMEASiMEValuationLISTSEGMentnoACLR

Module: LTE Measurements
Source: 7ba740227aea479d.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:ACLR 
<ACLRstatistics>, <ACLRenable>, <UTRA1enable>, <UTRA2enable>, <EUTRAenable>
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
Enable or disable the measurement of ACLR results
ON
: ACLR results are measured according to the other enable flags in this command. ACLR results for which there is no explicit enable flag are also measured (e.g. power in assigned E-UTRA channel).
OFF
: No ACLR results at all are measured. The other enable flags in this command are ignored.
*RST:
OFF
<UTRA1enable>
OFF |
 
 ON
Enable or disable evaluation of first adjacent UTRA channels
*RST:
OFF
<UTRA2enable>
OFF |
 
 ON
Enable or disable evaluation of second adjacent UTRA channels
*RST:
OFF
<EUTRAenable>
OFF |
 
 ON
Enable or disable evaluation of first adjacent E-UTRA channels
*RST:
OFF
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V2.0.10
Options: 
R&S CMW-KM012
Top